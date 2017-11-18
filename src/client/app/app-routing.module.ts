import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { aboutRoutes } from './about/about.router';
import { demoRoutes } from './material/demo-app/demo-app/routes';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'about', pathMatch: 'full'},
      ...aboutRoutes,
      ...demoRoutes,
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
