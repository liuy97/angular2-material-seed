import { Component } from '@angular/core';
import {
  async,
  inject,
  TestBed
} from '@angular/core/testing';

import { AboutModule } from './about.module';
import { MatListModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
export function main() {
  describe('About component', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [MatListModule, AboutModule, FormsModule]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            const aboutDOMEl = fixture.debugElement.children[0].nativeElement;

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
