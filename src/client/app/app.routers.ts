import { Routes, RouterModule }   from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'demo', loadChildren: 'app/material/demo-app/demo-app-module' },
  { path: 'about', loadChildren: 'app/about/about.module' }
];

export const routing = RouterModule.forRoot(routes);
