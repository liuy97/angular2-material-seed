import { Component } from '@angular/core';
import { TooltipPosition } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'tooltip-demo',
  templateUrl: 'tooltip-demo.html',
  styleUrls: ['tooltip-demo.css'],
})
export class TooltipDemoComponent {
  position: TooltipPosition = 'below';
  message: string = 'Here is the tooltip';
  showDelay = 0;
  hideDelay = 0;
  tooltip: any;
}
