import { Component } from '@angular/core';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  directives: [MD_LIST_DIRECTIVES, MD_CARD_DIRECTIVES],
  styleUrls: ['about.component.css']
})
export class AboutComponent {}
