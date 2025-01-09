import { Component } from '@angular/core';
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
  estados: State[] = [];
  estado: string = '';
  cidade: string = '';
  constructor(private estadoService: EstadoService, private router: Router) {
  }
  ngOnInit() {
    try {
      this.estadoService.getEstados().then((states) => {
        this.estados = states;
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
