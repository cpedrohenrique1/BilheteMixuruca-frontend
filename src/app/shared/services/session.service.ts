import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DiaDaSemana } from '../interfaces/diadasemana.interface';
import { Price } from '../interfaces/price.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }
  URL: string = environment.BACKEND_URL;

  getAllSessions(idCity: string | null, idMovie: string | null) {
    try{
      if (idCity === null || idMovie === null){
        throw new Error();
      }
      return this.http.get<DiaDaSemana[]>(`${this.URL}/api0/v0/sessions/city/${idCity}/event/${idMovie}/partnership/home`);
    }catch(error:any){
      throw new Error('Não foi possível requerer as sessões');
    }
  }

  getPrice(idSession: string, idSection: string) {
    try {
      return this.http.get<Price>(`${this.URL}/api1/v1/sessions/${idSession}/sections/${idSection}/tickets`);
    }catch(error: any) {
      throw new Error("Não foi possível requerer os valores");
    }
  }
}
