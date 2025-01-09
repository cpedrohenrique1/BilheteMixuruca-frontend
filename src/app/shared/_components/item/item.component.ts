import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() name: string = 'Nome';
  @Input() urlImage: string = 'https://picsum.photos/275/255';
  @Input() alt: string = 'imagem';
  
  @Input() image: boolean = true;
  @Input() horario: string = '00:00';
  @Input() data: string = 'dd-mm-yyyy';
  @Input() dia_semana: string = 'n-feira';
  @Input() full_price: string = 'R$ 0,00';
  @Input() half_price: string = 'R$ 0,00';

  @Output() click = new EventEmitter();
  onClick() {
    this.click.emit();
  }
}
