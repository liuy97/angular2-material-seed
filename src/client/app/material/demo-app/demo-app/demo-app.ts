import {Component, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'home-app',
  template: `
    <router-outlet></router-outlet>
    <p>Welcome to the development demos for Angular Material 2!</p>
    <p>Open the sidenav to select a demo. </p>
  `
})
export class HomeComponent {}

@Component({
  moduleId: module.id,
  selector: 'demo-app',
  providers: [],
  templateUrl: 'demo-app.html',
  styleUrls: ['demo-app.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DemoAppComponent { }
