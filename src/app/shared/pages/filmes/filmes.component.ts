import { Component, inject, signal } from '@angular/core';
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
  filme = signal<Event[]>([]);
  router: ActivatedRoute = inject(ActivatedRoute);
  filmeService: FilmeService = inject(FilmeService);
  route: Router = inject(Router);
  loading = signal<boolean>(true);
  loadingComponent = signal<any[]>([]);

  addLoadingComponent(){
    for (let i = 0; i < 10; i++){
      setTimeout(() => {
        this.loadingComponent.update(prev => [...prev, {id: i}]);
      }, i * 1000);
    }
  }

  async ngOnInit() {
    this.addLoadingComponent();
    this.id = this.router.snapshot.paramMap.get('idCity');
    try {
      this.filmeService.getCartaz(this.id).subscribe(response => {
        for (let i = 0; i < response.length; i++) {
          if (response[i].id === "2"){
            this.filme.set(response[i].events);
            this.loading.set(false);
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
