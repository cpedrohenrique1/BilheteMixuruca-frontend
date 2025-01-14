import { Component } from '@angular/core';
import { DiaDaSemana } from '../../interfaces/diadasemana.interface';
import { ItemComponent } from '../../_components/item/item.component';
import { SessionService } from '../../services/session.service';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { SessionsPayload } from '../../interfaces/sessionsPayload.interface';

@Component({
  selector: 'app-sessions',
  imports: [ItemComponent],
  templateUrl: './sessions.component.html',
  styleUrl: './sessions.component.css'
})
export class SessionsComponent {
  constructor (private session_service: SessionService, private route:ActivatedRoute){}
  idCity!: string | null;
  idMovie!: string | null;
  nome_filme!: string | null;
  dia_da_semana: DiaDaSemana[] = [];
  todas_sessoes: SessionsPayload[] = [];
  show_sessions: SessionsPayload[] = [];
  onClickData(item: DiaDaSemana | null) {
    this.show_sessions = [];
    if (item == null) {
      for (let i = 0; i < this.todas_sessoes.length; i++) {
        this.show_sessions.push(this.todas_sessoes[i]);
      }
      return;
    }
    for (let i = 0; i < this.todas_sessoes.length; i++) {
      this.show_sessions.push(this.todas_sessoes[i]);
    }
    this.show_sessions = this.show_sessions.filter(session => session.dia_da_semana === item.dayOfWeek);
  }
  async ngOnInit() {
    this.nome_filme = this.route.snapshot.paramMap.get('urlMovie');
    this.idCity = this.route.snapshot.paramMap.get('idCity');
    this.idMovie = this.route.snapshot.paramMap.get('idMovie');
    // get dias da semana
    try{
      await firstValueFrom(this.session_service.getAllSessions(this.idCity, this.idMovie)).then(response => {
        this.dia_da_semana = response;
      });
      for (let i = 0; i < this.dia_da_semana.length; i++) {
        for (let j = 0; j < this.dia_da_semana[i].theaters.length; j++) {
          for (let k = 0; k < this.dia_da_semana[i].theaters[j].rooms.length; k++) {
            for (let l = 0; l < this.dia_da_semana[i].theaters[j].rooms[k].sessions.length; l++) {
              if (this.dia_da_semana[i].theaters[j].rooms[k].sessions[l].enabled){
                let session_payload: SessionsPayload = {
                  data: '',
                  dia_da_semana: '',
                  horario: '',
                  nome_cinema: '',
                  precoInteira: 0,
                  precoMeia: 0,
                  urlBuy: ''
                };
                await firstValueFrom(this.session_service.getPrice(this.dia_da_semana[i].theaters[j].rooms[k].sessions[l].id, this.dia_da_semana[i].theaters[j].rooms[k].sessions[l].defaultSector)).then(response => {
                  for (let iterator = 0; iterator < response.default.length; iterator++) {
                    if (response.default[iterator].groupName === "Inteira") {
                      session_payload.precoInteira = response.default[iterator].price;
                    }
                    if (response.default[iterator].groupName === "Meia") {
                      session_payload.precoMeia = response.default[iterator].price;
                    }
                    if (response.default[iterator].id === "2258") {
                      session_payload.precoInteira = response.default[iterator].price;
                    }
                    if (response.default[iterator].id === "2259") {
                      session_payload.precoMeia = response.default[iterator].price;
                    }
                    if (response.default[iterator].id === "3356") {
                      session_payload.precoInteira = response.default[iterator].price;
                    }
                    if (response.default[iterator].id === "3355") {
                      session_payload.precoMeia = response.default[iterator].price;
                    }
                  }
                });
                session_payload.nome_cinema = this.dia_da_semana[i].theaters[j].name;
                session_payload.horario = this.dia_da_semana[i].theaters[j].rooms[k].sessions[l].date.hour;
                session_payload.dia_da_semana = this.dia_da_semana[i].theaters[j].rooms[k].sessions[l].date.dayOfWeek;
                session_payload.data = this.dia_da_semana[i].theaters[j].rooms[k].sessions[l].date.dayAndMonth;
                session_payload.urlBuy = this.dia_da_semana[i].theaters[j].rooms[k].sessions[l].siteURL;
                console.log(session_payload);
                this.todas_sessoes.push(session_payload);
              }
            }
          }
        }
      }
      this.todas_sessoes.sort((n1, n2) => n1.precoInteira - n2.precoInteira);
      for (let i = 0; i < this.todas_sessoes.length; i++) {
        this.show_sessions.push(this.todas_sessoes[i]);
      }
      console.log(this.show_sessions);
    }catch(error: any) {
      console.log(error.message);
    }
  }
}
