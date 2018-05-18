import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'radio-demo',
  templateUrl: 'radio-demo.html',
  styleUrls: ['radio-demo.css'],
})
export class RadioDemoComponent {
  isAlignEnd = false;
  isDisabled = false;
  isRequired = false;
  favoriteSeason = 'Autumn';
  seasonOptions = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];
}
