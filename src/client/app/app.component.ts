import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { HTTP_PROVIDERS} from '@angular/http';
import {MD_RIPPLE_DIRECTIVES, MdRipple} from '@angular2-material/core';
import {PORTAL_DIRECTIVES} from '@angular2-material/core';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton, MdAnchor} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_BUTTON_TOGGLE_DIRECTIVES} from '@angular2-material/button-toggle';
//import {MD_SLIDE_TOGGLE_DIRECTIVES} from '@angular2-material/slide-toggle';
/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  providers: [MdIconRegistry, HTTP_PROVIDERS],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MD_SIDENAV_DIRECTIVES,
    ROUTER_DIRECTIVES,
    MdToolbar,
    MdButton, MdAnchor,
    MD_BUTTON_TOGGLE_DIRECTIVES,
    MD_RIPPLE_DIRECTIVES, MdRipple,
    PORTAL_DIRECTIVES,
    MdIcon, //MD_SLIDE_TOGGLE_DIRECTIVES,
    ]
})

export class AppComponent {
  version: string = '2.0.0-alpha.7';
}
