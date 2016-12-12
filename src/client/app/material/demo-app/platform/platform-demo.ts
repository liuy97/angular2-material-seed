import { Component } from '@angular/core';
import { MdPlatform } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'platform-demo',
  templateUrl: 'platform-demo.html',
})
export class PlatformDemoComponent {
  supportedInputTypes = [];

  constructor(public platform: MdPlatform) {}
}
