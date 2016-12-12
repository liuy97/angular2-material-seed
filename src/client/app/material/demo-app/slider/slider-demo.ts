import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'slider-demo',
  templateUrl: 'slider-demo.html',
})
export class SliderDemoComponent {
  demo: number;
  val: number = 50;
  min: number = 0;
  max: number = 100;
}
