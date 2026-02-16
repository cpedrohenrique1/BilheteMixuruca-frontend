import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-poster',
  imports: [RouterLink],
  templateUrl: './movie-poster.component.html',
  styleUrl: './movie-poster.component.css',
})
export class MoviePosterComponent {
  @Input() name: string = 'Titulo do filme';
  @Input() urlImage: string = 'https://picsum.photos/275/255';
  @Input() link: string | null = null;
  @Output() click = new EventEmitter;
  
  onClick() {
    this.click.emit();
  }
}
