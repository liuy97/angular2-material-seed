import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sidenav-demo',
  templateUrl: 'sidenav-demo.html',
  styleUrls: ['sidenav-demo.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SidenavDemoComponent {
  isLaunched = false;
  fillerContent = Array(30);
  fixed = false;
  invert: any;
  coverHeader = false;
  showHeader = false;
  showFooter = false;
  modeIndex = 0;
  hasBackdrop: boolean;
  get mode() { return ['side', 'over', 'push'][this.modeIndex]; }
  get fixedTop() { return this.fixed && this.showHeader && !this.coverHeader ? 64 : 0; }
  get fixedBottom() { return this.fixed && this.showFooter && !this.coverHeader ? 64 : 0; }
}
