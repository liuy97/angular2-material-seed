import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
//import { DomProjectionHost, DomProjection } from '@angular/material';

@Component({
  selector: 'projection-app',
  template: `
    <div projection-test class="demo-inner">
      <div class="content">Content: {{ binding }}</div>
    </div>
    <br/>
    <input projection-test [(ngModel)]="binding" [class]="binding" [ngClass]="{'blue': true}">
    <input [(ngModel)]="binding" class="my-class" [ngClass]="{'blue': true}">
  `,
  styles: [`
    .demo-inner {
      background-color: #DAA520;
    }
  `]
})
export class ProjectionDemoComponent {
  binding = 'abc';
}
