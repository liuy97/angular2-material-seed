import { Component } from '@angular/core';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import { NameListService } from '../shared/index';
import { NgForm }    from '@angular/common';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton, MdAnchor} from '@angular2-material/button';
import {MD_BUTTON_TOGGLE_DIRECTIVES} from '@angular2-material/button-toggle';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdRadioButton} from '@angular2-material/radio';
import {MdSpinner} from '@angular2-material/progress-circle';
import {MdProgressBar} from '@angular2-material/progress-bar';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_GRID_LIST_DIRECTIVES} from '@angular2-material/grid-list';
//import {MdRadioDispatcher} from '@angular2-material/radio/radio_dispatcher';
import {MdTabGroup, MdTab} from '@angular2-material/tabs';
//import {MD_SLIDE_TOGGLE_DIRECTIVES} from '@angular2-material/slide-toggle';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  providers: [NameListService, MdIconRegistry],
  directives: [MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_GRID_LIST_DIRECTIVES,
    MdTabGroup, MdTab,
    MdToolbar,
    MdButton, MdAnchor,
    MD_BUTTON_TOGGLE_DIRECTIVES,
    MdCheckbox,
    MdRadioButton,
    MdSpinner,
    MD_INPUT_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdProgressBar,
    MdIcon,// MD_SLIDE_TOGGLE_DIRECTIVES,
    ]
})
export class HomeComponent {

  newName: string = 'test';

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService) { }

  /**
   * Calls the add method of the NameListService with the current newName value of the form.
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.nameListService.add(this.newName);
    this.newName = '';
    return false;
  }

}
