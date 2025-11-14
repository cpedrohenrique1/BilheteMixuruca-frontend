import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'filmes/:idCity',
    renderMode: RenderMode.Client
  },
  {
    path: 'filmes/:idCity/sessions/:idMovie/:urlMovie',
    renderMode: RenderMode.Client
  }
];
