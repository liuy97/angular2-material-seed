import { Component, provide } from '@angular/core';
import { TestComponentBuilder } from '@angular/compiler/testing';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import {
  describe,
  expect,
  inject,
  it
} from '@angular/core/testing';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http,
  HTTP_PROVIDERS
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';

import { NameListService } from '../shared/index';
import { HomeComponent } from './home.component';

export function main() {
  describe('Home component', () => {
    let builder: TestComponentBuilder;

    beforeEach(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      builder = tcb;
    }));

    it('should work',
      (done: () => void) => {
        return builder
          .overrideProviders(TestComponent, [disableDeprecatedForms(), provideForms()])
          .createAsync(TestComponent)
          .then((rootTC: any) => {
            rootTC.detectChanges();

            let homeInstance = rootTC.debugElement.children[0].componentInstance;
            let homeDOMEl = rootTC.debugElement.children[0].nativeElement;

            expect(homeInstance.nameListService).toEqual(jasmine.any(NameListService));
            expect(getDOM().querySelectorAll(homeDOMEl, 'md-list-item').length).toEqual(0);

            homeInstance.newName = 'Minko';
            homeInstance.addName();
            rootTC.detectChanges();

            expect(getDOM().querySelectorAll(homeDOMEl, 'md-list-item').length).toEqual(1);

            expect(getDOM().querySelectorAll(homeDOMEl, 'md-list-item')[0].textContent).toEqual('Minko');
            done();
          })
          .catch(function (err) { console.log('err'); done();});
      });
  });
}

@Component({
  providers: [
    HTTP_PROVIDERS,
    BaseRequestOptions,
    MockBackend,
    provide(Http, {
      useFactory: function (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    }),
  ],
  selector: 'test-cmp',
  template: '<sd-home></sd-home>',
  directives: [HomeComponent]
})
class TestComponent { }
