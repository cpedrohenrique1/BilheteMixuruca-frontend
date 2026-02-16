import { Component, inject, signal } from '@angular/core';
import { DiaDaSemana } from '../../interfaces/diadasemana.interface';
import { SessionService } from '../../services/session.service';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { SessionsPayload } from '../../interfaces/sessionsPayload.interface';
import { MovieSessionsComponent } from "../../_components/movie-sessions/movie-sessions.component";
import { DateCardComponent } from "../../_components/date-card/date-card.component";

@Component({
  selector: 'app-sessions',
  imports: [MovieSessionsComponent, DateCardComponent],
  templateUrl: './sessions.component.html',
  styleUrl: './sessions.component.css'
})
export class SessionsComponent {
  session_service: SessionService = inject(SessionService);
  route: ActivatedRoute = inject(ActivatedRoute);

  idCity!: string | null;
  idMovie!: string | null;
  nome_filme!: string | null;
  dia_da_semana = signal<DiaDaSemana[]>([])
  todas_sessoes: SessionsPayload[] = [];
  show_sessions = signal<SessionsPayload[]>([]);
  loading = signal<boolean>(true);
  loadingComponent = signal<any[]>([]);

  onClickData(item: DiaDaSemana | null) {
    let tempArray: SessionsPayload[] = this.todas_sessoes.concat();
    if (item == null) {
      this.show_sessions.set(tempArray);
      return;
    }
    tempArray = tempArray.filter(
      session => session.dia_da_semana === item.dayOfWeek
    );
    this.show_sessions.set(tempArray);
  }

  getMinPriceDiaDaSemana (dia: DiaDaSemana): number {
    let minPrice = Infinity;
    dia.theaters.forEach(theater => {
      theater.rooms.forEach(room => {
        room.sessions.forEach(session => {
          if (session.price < minPrice) {
            minPrice = session.price;
          }
        });
      });
    });
    return minPrice;
  };

  sortResponse(response: DiaDaSemana[]): DiaDaSemana[] {
    return response.sort((a, b) => {
      const minPriceA = this.getMinPriceDiaDaSemana(a);
      const minPriceB = this.getMinPriceDiaDaSemana(b);
      return minPriceA - minPriceB;
    });
  }

  splitResponse(response: DiaDaSemana[]): DiaDaSemana[] {
    const half: number = Math.floor(response.length / 2);
    if (half === 0) {
      return response;
    }
    return response.splice(0, half);
  }

  formatarNomeFilme(nome_filme: string): string {
    let nome_filme_temp: string[] = nome_filme.split("");
    for (let i = 0; i < nome_filme.length; i++) {
      if (nome_filme[i] == "-") {
        nome_filme_temp[i] = " ";
      }
    }
    return nome_filme_temp.join("");
  }

  addLoadingComponent(){
    for (let i = 0; i < 10; i++){
      setTimeout(() => {
        this.loadingComponent.update(prev => [...prev, {id: i}]);
      }, i * 2000);
    }
  }

  async ngOnInit() {
    this.addLoadingComponent();
    this.nome_filme = this.route.snapshot.paramMap.get('urlMovie');
    if (this.nome_filme == null) {
      this.nome_filme = '';
    } else {
      this.nome_filme = this.formatarNomeFilme(this.nome_filme);
    }
    this.idCity = this.route.snapshot.paramMap.get('idCity');
    this.idMovie = this.route.snapshot.paramMap.get('idMovie');
    try {
      await firstValueFrom(this.session_service.getAllSessions(this.idCity, this.idMovie)).then(response => {
        this.dia_da_semana.set(this.splitResponse(this.sortResponse(response)));
      });
      for (const dia of this.dia_da_semana()) {
        for (const theater of dia.theaters) {
          for (const room of theater.rooms) {
            for (const session of room.sessions) {
              if (session.enabled) {
                const session_payload: SessionsPayload = {
                  data: session.date.dayAndMonth,
                  dia_da_semana: session.date.dayOfWeek,
                  horario: session.date.hour,
                  nome_cinema: theater.name,
                  precoInteira: 0,
                  precoMeia: 0,
                  urlBuy: session.siteURL
                };

                const response = await firstValueFrom(this.session_service.getPrice(session.id, session.defaultSector));
                for (const price of response.default) {
                  if ("Inteira" === price.groupName || ["1", "2258", "3356"].includes(price.id)) {
                    session_payload.precoInteira = price.price;
                  }
                  if ("Meia" === price.groupName || ["2", "2259", "3355"].includes(price.id)) {
                    session_payload.precoMeia = price.price;
                  }
                }

                if (session_payload.precoInteira !== 0) {
                  this.todas_sessoes.push(session_payload);
                }
              }
            }
          }
        }
      }
      this.todas_sessoes.sort((n1, n2) => n1.precoInteira - n2.precoInteira);
      this.loading.set(false);
      this.show_sessions.set(this.todas_sessoes);
    } catch (error: any) {
      console.log(error.message);
    }
  }
}
