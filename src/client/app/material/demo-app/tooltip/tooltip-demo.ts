import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { TooltipPosition } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'tooltip-demo',
  templateUrl: 'tooltip-demo.html',
  styleUrls: ['tooltip-demo.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class TooltipDemoComponent {
  position: TooltipPosition = 'below';
  message = 'Here is the tooltip';
  tooltips: string[] = [];
  disabled = false;
  showDelay = 0;
  hideDelay = 1000;
  showExtraClass = false;
}
