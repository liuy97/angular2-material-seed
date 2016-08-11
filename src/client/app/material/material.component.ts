import { Component } from '@angular/core';
import { NameListService } from '../names/index';

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'material.component.html',
  styleUrls: ['material.component.css'],
  providers: [ NameListService ],
  directives: []
})
export class MaterialComponent {

  newName: string = 'John';

  constructor(public nameListService: NameListService) { }

  addName(): boolean {
    this.nameListService.addName(this.newName);
    this.newName = '';
    return false;
  }

}
