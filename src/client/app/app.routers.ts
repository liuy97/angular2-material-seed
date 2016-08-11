import { Routes, RouterModule }   from '@angular/router';
import { MaterialRoutes } from './material/material.router';
import { AboutRoutes } from './+about/about.router';

export const routes: Routes = [
  ...AboutRoutes,
  ...MaterialRoutes,
];

export const routing = RouterModule.forRoot(routes);
