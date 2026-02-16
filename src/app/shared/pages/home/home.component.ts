import { Component, inject, signal } from '@angular/core';
import { EstadoService } from '../../services/estado.service';
import { State } from '../../interfaces/state.interface';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  providers: [EstadoService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  estados = signal<State[]>([]);
  estado: string = '';
  cidade: string = '';
  estadoService: EstadoService = inject(EstadoService);
  router: Router = inject(Router);
  
  ngOnInit() {
    try {
      this.estadoService.getEstados().then((states) => {
        this.estados.set(states);
      });
    }catch(error: any) {
      console.log(error.message);
    }
  }
  onSubmit() {
    try {
      if (this.cidade === '') {
        throw new Error('Não foi selecionado nenhuma cidade');
      }
      this.router.navigate(['/filmes/', this.cidade]);
    } catch(error:any) {
      console.log(error.message);
    }
  }
}
