import { Routes, RouterModule }   from '@angular/router';
//import { MaterialRoutes } from './material/material.router';
//import { AboutRoutes } from './+about/about.router';

export const routes: Routes = [
  //...AboutRoutes,
  //...MaterialRoutes,
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'demo', loadChildren: 'app/material/demo-app/demo-app-module' },
  { path: 'about', loadChildren: 'app/about/about.module' }
];

export const routing = RouterModule.forRoot(routes);
