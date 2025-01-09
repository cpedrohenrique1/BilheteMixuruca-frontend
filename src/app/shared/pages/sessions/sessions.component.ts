import { Component } from '@angular/core';
import { DiaDaSemana } from '../../interfaces/diadasemana.interface';
import { ItemComponent } from '../../_components/item/item.component';
import { SessionService } from '../../services/session.service';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Theater } from '../../interfaces/theater.interface';

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
  dia_da_semana: DiaDaSemana[] = [];
  cinema: Theater[] = [];

  sessions: any;
  onClickData(_t6: any) {
  throw new Error('Method not implemented.');
  }
  nome_filme: string = 'nome filme';
  async ngOnInit() {
    this.idCity = this.route.snapshot.paramMap.get('idCity');
    this.idMovie = this.route.snapshot.paramMap.get('idMovie');
    try{
      await firstValueFrom(this.session_service.getAllSessions(this.idCity, this.idMovie)).then(response => {
        this.dia_da_semana = response;
      });
    }catch(error: any) {
      console.log(error.message);
    }
    for (let index = 0; index < this.dia_da_semana.length; index++) {
      for (let i = 0; i < this.dia_da_semana[index].theaters.length; i++) {
        this.cinema.push(this.dia_da_semana[index].theaters[i]);
      }
    }
    console.log(this.cinema);
  }
}
