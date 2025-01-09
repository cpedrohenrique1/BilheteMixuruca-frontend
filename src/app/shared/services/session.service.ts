import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { DiaDaSemana } from '../interfaces/diadasemana.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  getAllSessions(idCity: string | null, idMovie: string | null) {
    try{
      if (idCity === null || idMovie === null){
        throw new Error();
      }
      return this.http.get<DiaDaSemana[]>(`${environment.BACKEND_URL}/api0/v0/sessions/city/${idCity}/event/${idMovie}/partnership/home`);
    }catch(error:any){
      throw new Error('Não foi possível requerer as sessões');
    }
  }
}
