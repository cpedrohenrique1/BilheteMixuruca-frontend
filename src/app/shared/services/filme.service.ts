import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Filme } from '../interfaces/filme.interface';
import { Promocoes } from '../interfaces/promocoes.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  URL: string = environment.BACKEND_URL;
  constructor(private http: HttpClient) { }

  getCartaz(id: string | null) {
    try {
      if (id === null) {
        throw new Error();
      }
      return this.http.get<Filme[]>(`${this.URL}/api0/v0/carousel/${id}/partnership/home?carousels=em-cartaz`);
    }catch(error:any) {
      throw new Error("Não foi possível");
    }
  }

  getPromocoes(idCity: string | null) {
    try {
      if (idCity === null) {
        throw new Error();
      }
      return this.http.get<Promocoes[]>(`${this.URL}/api0/v0/carousel/${idCity}/partnership/home?carousels=promocoes`);
    }catch(error: any) {
      throw new Error("Não foi possível requerer promocoes");
    }
  }
}
