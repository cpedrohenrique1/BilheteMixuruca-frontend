import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { State } from '../interfaces/state.interface';
@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  constructor(private http:HttpClient) { }

  async getEstados() {
     return await lastValueFrom(this.http.get<State[]>(`${environment.BACKEND_URL}/api0/v0/states`));
  }
}
