import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'tab-group-demo',
  templateUrl: 'tab-group-demo.html',
  styleUrls: ['tab-group-demo.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TabsDemoComponent {
  tabs = [
    { label: 'Tab One', content: 'This is the body of the first tab' },
    { label: 'Tab Two', content: 'This is the body of the second tab' },
    { label: 'Tab Three', content: 'This is the body of the third tab' },
  ];
  asyncTabs: Observable<any>;
  constructor() {
    this.asyncTabs = Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next(this.tabs);
      }, 1000);
    });
  }
}
