import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-date-card',
  imports: [],
  templateUrl: './date-card.component.html',
  styleUrl: './date-card.component.css',
})
export class DateCardComponent {
  @Input() infos!: string[];

  @Output() click = new EventEmitter;

  onClick() {
    this.click.emit();
  }
}
