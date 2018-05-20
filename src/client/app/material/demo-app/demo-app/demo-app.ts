import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'home-app',
  template: `
  <div fxLayout="row">
    <nav fxLayout='row' fxLayoutAlign="center center">
      <a [routerLink]="['autocomplete']">Autocomplete</a>
      <a [routerLink]="['button']">Button</a>
      <a [routerLink]="['button-toggle']">Button Toggle</a>
      <a [routerLink]="['card']">Card</a>
      <a [routerLink]="['checkbox']">Checkbox</a>
      <a [routerLink]="['dialog']">Dialog</a>
      <a [routerLink]="['gestures']">Gestures</a>
      <a [routerLink]="['grid-list']">Grid List</a>
      <a [routerLink]="['icon']">Icon</a>
      <a [routerLink]="['input']">Input</a>
      <a [routerLink]="['list']">List</a>
      <a [routerLink]="['menu']">Menu</a>
      <a [routerLink]="['live-announcer']">Live Announcer</a>
      <a [routerLink]="['overlay']">Overlay</a>
      <a [routerLink]="['portal']">Portal</a>
      <a [routerLink]="['progress-bar']">Progress Bar</a>
      <a [routerLink]="['progress-circle']">Progress Circle</a>
      <a [routerLink]="['radio']">Radio</a>
      <a [routerLink]="['ripple']">Ripple</a>
      <a [routerLink]="['sidenav']">Sidenav</a>
      <a [routerLink]="['slider']">Slider</a>
      <a [routerLink]="['slide-toggle']">Slide Toggle</a>
      <a [routerLink]="['tabs']">Tabs</a>
      <a [routerLink]="['toolbar']">Toolbar</a>
      <a [routerLink]="['tooltip']">Tooltip</a>
      <a [routerLink]="['tree']">Tree</a>
      <a [routerLink]="['baseline']">Baseline</a>
      <a [routerLink]="['table']">Table</a>
    </nav>
  </div>
  <router-outlet></router-outlet>
  `
})
export class HomeComponent {}
