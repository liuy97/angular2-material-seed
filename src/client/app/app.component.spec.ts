/// <reference path="../../../typings/globals/jasmine/index.d.ts" />
import { AppComponent } from './app.component';

import { TestBed } from '@angular/core/testing';

//import { By }             from '@angular/platform-browser';

////////  SPECS  /////////////

describe('Test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

describe('AppComponent with TCB', function () {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [AppComponent]});
  });

  it('should instantiate component', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });

});
