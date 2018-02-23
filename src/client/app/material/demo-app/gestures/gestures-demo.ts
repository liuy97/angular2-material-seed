import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'gestures-demo',
  templateUrl: 'gestures-demo.html',
  styleUrls: ['gestures-demo.css'],
})
export class GesturesDemoComponent {
  dragCount = 0;
  panCount = 0;
  pressCount = 0;
  longpressCount = 0;
  swipeCount = 0;
  slideCount = 0;
}
