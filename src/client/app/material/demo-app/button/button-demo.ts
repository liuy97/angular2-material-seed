import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'button-demo',
  templateUrl: 'button-demo.html',
  styleUrls: ['button-demo.css'],
})
export class ButtonDemoComponent {
  isDisabled = false;
  clickCounter = 0;
}
