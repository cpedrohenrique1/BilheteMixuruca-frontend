import { Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { FilmesComponent } from './shared/pages/filmes/filmes.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'filmes',
        component: FilmesComponent
    }
];
