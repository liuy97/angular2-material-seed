import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';

export const aboutRoutes: Routes = [
  { path: 'about', component: AboutComponent}
];

export const aboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);
