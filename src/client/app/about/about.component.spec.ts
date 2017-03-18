import { Component } from '@angular/core';
import {
  async,
  inject,
  TestBed
} from '@angular/core/testing';

import { AboutModule } from './about.module';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
export function main() {
  describe('About component', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [MaterialModule.forRoot(), AboutModule, FormsModule]
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
class TestComponent { }
