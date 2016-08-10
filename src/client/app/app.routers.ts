import { Routes, RouterModule }   from '@angular/router';
import { HomeRoutes } from './+home/home.router';
import { AboutRoutes } from './+about/about.router';

export const routes: Routes = [
  ...AboutRoutes,
  ...HomeRoutes,
];

export const routing = RouterModule.forRoot(routes);
