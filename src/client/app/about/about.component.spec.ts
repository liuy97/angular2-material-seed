/// <reference path="../../../typings/globals/jasmine/index.d.ts" />
import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';

import { AboutComponent } from './about.component';

export function main() {

  describe('App component', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({declarations: [TestComponent], imports: [CommonModule]});
    });

    it('should build without a problem', () => {
      let test: any = {id: 1, name: 'test'};
      expect(test.name).toEqual('test');
    });
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-about></sd-about>',
  directives: [AboutComponent]
})
class TestComponent { }
