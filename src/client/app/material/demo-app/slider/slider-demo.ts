import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'slider-demo',
  templateUrl: 'slider-demo.html',
})
export class SliderDemoComponent {
  demo: number;
  val = 50;
  min = 0;
  max = 100;
}
