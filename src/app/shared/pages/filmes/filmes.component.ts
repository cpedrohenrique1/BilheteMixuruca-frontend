import { Component } from '@angular/core';
import { ItemComponent } from '../../_components/item/item.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmeService } from '../../services/filme.service';
import { firstValueFrom } from 'rxjs';
import { Event } from '../../interfaces/event.interface';

@Component({
  selector: 'app-filmes',
  imports: [ItemComponent],
  providers:[FilmeService],
  templateUrl: './filmes.component.html',
  styleUrl: './filmes.component.css'
})
export class FilmesComponent {
  id: string | null = null;
  filme!: Event[];
  constructor(private router: ActivatedRoute, private filmeService: FilmeService, private route: Router) {}

  async ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('idCity');
    try {
      await firstValueFrom(this.filmeService.getCartaz(this.id)).then(response => {
        this.filme = response[0].events;
      });
    }catch(error:any) {
      console.log(error.message);
    }
    console.log(this.filme);
  }
  onClick(item: Event){
    this.route.navigate([`/filmes/${this.id}/sessions/${item.id}`]);
  }
}
