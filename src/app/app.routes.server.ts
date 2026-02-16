import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'filmes/:idCity',
    renderMode: RenderMode.Server
  },
  {
    path: 'filmes/:idCity/sessoes/:idMovie/:urlMovie',
    renderMode: RenderMode.Server
  }
];
