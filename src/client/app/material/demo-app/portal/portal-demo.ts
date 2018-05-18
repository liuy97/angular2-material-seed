import { Component, ViewChildren, QueryList } from '@angular/core';
import { ComponentPortal, Portal, CdkPortal } from '@angular/cdk/portal';

@Component({
  moduleId: module.id,
  selector: 'portal-demo',
  templateUrl: 'portal-demo.html',
  styleUrls: ['portal-demo.css'],
})
export class PortalDemoComponent {
  @ViewChildren(CdkPortal) templatePortals: QueryList<Portal<any>>;

  selectedPortal: Portal<any>;

  get programmingJoke() {
    return this.templatePortals.first;
  }

  get mathJoke() {
    return this.templatePortals.last;
  }

  get scienceJoke() {
    return new ComponentPortal(ScienceJokeComponent);
  }
}


@Component({
  moduleId: module.id,
  selector: 'science-joke',
  template: `<p> 100 kilopascals go into a bar. </p>`
})
export class ScienceJokeComponent { }
