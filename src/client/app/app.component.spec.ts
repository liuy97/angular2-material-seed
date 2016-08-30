import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';
//import {expect} from '@angular/platform-browser/testing/matchers';

import { AppComponent } from './app.component';

export function main() {

  describe('App component', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({declarations: [TestComponent], imports: [CommonModule]});
    });

    it('should build without a problem', () => {
      //let test: any = {id: 1, name: 'test'};
      //expect(test.name).toEqual('test');
    });
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-app></sd-app>',
  directives: [AppComponent]
})
class TestComponent {
}
