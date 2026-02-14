import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-sessions',
  imports: [],
  templateUrl: './movie-sessions.component.html',
  styleUrl: './movie-sessions.component.css',
})
export class MovieSessionsComponent {
  @Input() cinemaName: string = 'Nome';
  @Input() horario: string = '00:00';
  @Input() data: string = 'dd-mm-yyyy';
  @Input() dia_semana: string = 'n-feira';
  @Input() full_price: number = 0;
  @Input() half_price: number = 0;
  @Input() link: string | null = null;
  @Output() click = new EventEmitter;

  onClick() {
    this.click.emit();
  }
}
