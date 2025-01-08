import { Component } from '@angular/core';
import { EstadoService } from '../../services/estado.service';

@Component({
  selector: 'app-home',
  imports: [],
  providers: [EstadoService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  items: any = '';
  constructor(private estadoService: EstadoService) {
  }
  async ngOnInit() {
    await this.estadoService.getEstados();
  }
}
