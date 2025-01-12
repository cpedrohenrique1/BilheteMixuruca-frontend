import { Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { FilmesComponent } from './shared/pages/filmes/filmes.component';
import { SessionsComponent } from './shared/pages/sessions/sessions.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'filmes/:idCity',
        component: FilmesComponent
    },
    {
        path: 'filmes/:idCity/sessions/:idMovie/:urlMovie',
        component: SessionsComponent
    }
];
