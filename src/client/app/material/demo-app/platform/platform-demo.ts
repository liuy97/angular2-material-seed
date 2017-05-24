import { Component } from '@angular/core';
import { Platform, getSupportedInputTypes } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'platform-demo',
  templateUrl: 'platform-demo.html',
})
export class PlatformDemoComponent {
  supportedInputTypes = getSupportedInputTypes();

  constructor(public platform: Platform) {}
}
