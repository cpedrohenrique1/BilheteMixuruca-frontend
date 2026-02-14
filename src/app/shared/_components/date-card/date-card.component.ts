import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-card',
  imports: [],
  templateUrl: './date-card.component.html',
  styleUrl: './date-card.component.css',
})
export class DateCardComponent {
  @Input() infos!: string[];

  @Input() onClick(){

  }
}
