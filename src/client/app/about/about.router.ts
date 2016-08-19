import { RouterModule }         from '@angular/router';
import { AboutComponent } from './about.component';

export const AboutRoutes = RouterModule.forChild([
  { path: 'about', component: AboutComponent}
]);
