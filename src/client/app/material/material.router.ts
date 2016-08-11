import { Routes, RouterModule }         from '@angular/router';
import { MaterialComponent } from './material.component';

export const MaterialRoutes: Routes = [
  {
    path: '',
    component: MaterialComponent,
  },
];

export const materialRouting = RouterModule.forChild(MaterialRoutes);
