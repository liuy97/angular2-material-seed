import { Routes, RouterModule }   from '@angular/router';
import { aboutRoutes } from './about/about.router';
import { demoRoutes } from './material/demo-app/demo-app/routes';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  ...aboutRoutes,
  ...demoRoutes,
];

export const routing = RouterModule.forRoot(routes);
