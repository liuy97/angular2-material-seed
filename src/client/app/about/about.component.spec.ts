import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { AboutModule } from './about.module';
import { MaterialModule } from '../all/all';

export function main() {
   describe('About component', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [MaterialModule.forRoot(), AboutModule]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let aboutDOMEl = fixture.debugElement.children[0].nativeElement;

	          expect(aboutDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Features');
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-about></sd-about>'
})
class TestComponent {}
