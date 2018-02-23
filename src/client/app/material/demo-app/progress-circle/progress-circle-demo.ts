import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'progress-circle-demo',
  templateUrl: 'progress-circle-demo.html',
  styleUrls: ['progress-circle-demo.css'],
})
export class ProgressCircleDemoComponent {
  progressValue = 60;
  color = 'primary';
  modeToggle = false;

  step(val: number) {
    this.progressValue = Math.max(0, Math.min(100, val + this.progressValue));
  }

}
