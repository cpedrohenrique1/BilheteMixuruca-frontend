import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-item',
  imports: [CommonModule, RouterLink],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  constructor (private router: Router) {}
  @Input() name: string = 'Nome';
  @Input() urlImage: string = 'https://picsum.photos/275/255';
  @Input() alt: string = 'imagem';
  
  @Input() image: boolean = true;
  @Input() horario: string = '00:00';
  @Input() data: string = 'dd-mm-yyyy';
  @Input() dia_semana: string = 'n-feira';
  @Input() full_price: number = 0;
  @Input() half_price: number = 0;
  @Input() link: string | null = null;
}
