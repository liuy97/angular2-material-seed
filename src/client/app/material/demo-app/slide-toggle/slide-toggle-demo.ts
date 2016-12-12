import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'switch-demo',
  templateUrl: 'slide-toggle-demo.html',
  styleUrls: ['slide-toggle-demo.css'],
})
export class SlideToggleDemoComponent {
  firstToggle: boolean;

  onFormSubmit() {
    alert(`You submitted the form.`);
  }

}
