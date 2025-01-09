import { Component } from '@angular/core';
import { Data } from '../../interfaces/data.interface';
import { ItemComponent } from '../../_components/item/item.component';

@Component({
  selector: 'app-sessions',
  imports: [ItemComponent],
  templateUrl: './sessions.component.html',
  styleUrl: './sessions.component.css'
})
export class SessionsComponent {
  datas: Data[] = [];
sessions: any;
  onClickData(_t6: any) {
  throw new Error('Method not implemented.');
  }
  nome_filme: string = 'nome filme';

}
