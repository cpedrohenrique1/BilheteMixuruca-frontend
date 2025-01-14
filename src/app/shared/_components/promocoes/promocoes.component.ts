import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-promocoes',
  imports: [],
  templateUrl: './promocoes.component.html',
  styleUrl: './promocoes.component.css'
})
export class PromocoesComponent {
  @Input() alt: string = 'imagem promocao';
  @Input() urlImage: string = '/';
  @Input() name: string = 'titulo promocao';
  @Input() link: string = '/';
}
