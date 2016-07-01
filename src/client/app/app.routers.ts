import { provideRouter, RouterConfig }  from '@angular/router';
import { HomeRoutes } from './+home/home.router';
import { AboutRoutes } from './+about/about.router';

export const routes: RouterConfig = [
  ...AboutRoutes,
  ...HomeRoutes,
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
