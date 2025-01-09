import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Filme } from '../interfaces/filme.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor(private http: HttpClient) { }

  getCartaz(id: string | null) {
    try {
      if (id === null) {
        throw Error();
      }
      return this.http.get<Filme[]>(`${environment.BACKEND_URL}/api0/v0/carousel/${id}/partnership/home?carousels=em-cartaz`);
    }catch(error:any) {
      throw new Error("Não foi possível");
    }
  }
}
