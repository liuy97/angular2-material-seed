/// <reference path="../../../../typings/globals/jasmine/index.d.ts" />
import { AboutComponent } from './about.component';

import { TestBed } from '@angular/core/testing';

//import { By }             from '@angular/platform-browser';

////////  SPECS  /////////////

describe('Test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

describe('AboutComponent with TCB', function () {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [AboutComponent]});
  });

  it('should instantiate component', () => {
    let fixture = TestBed.createComponent(AboutComponent);
    expect(fixture.componentInstance instanceof AboutComponent).toBe(true, 'should create AppComponent');
  });

});
