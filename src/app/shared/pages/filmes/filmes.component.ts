import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmeService } from '../../services/filme.service';
import { Event } from '../../interfaces/event.interface';
import { Item } from '../../interfaces/item.interface';
import { MoviePosterComponent } from "../../_components/movie-poster/movie-poster.component";

@Component({
  selector: 'app-filmes',
  imports: [MoviePosterComponent],
  providers:[FilmeService],
  templateUrl: './filmes.component.html',
  styleUrl: './filmes.component.css'
})
export class FilmesComponent {
  id: string | null = null;
  filme!: Event[];
  promocoes!: Item[];
  constructor(private router: ActivatedRoute, private filmeService: FilmeService, private route: Router) {}

  async ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('idCity');
    try {
      this.filmeService.getCartaz(this.id).subscribe(response => {
        for (let i = 0; i < response.length; i++) {
          if (response[i].id === "2"){
            this.filme = response[i].events;
          }
        }
      });
    }catch(error:any) {
      console.log(error.message);
    }
  }

  onClick(item: Item) {
    window.open(item.url, '_blank');
  }
}
