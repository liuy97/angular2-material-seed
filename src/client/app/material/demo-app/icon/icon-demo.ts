import { Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'md-icon-demo',
  templateUrl: 'icon-demo.html',
  styleUrls: ['icon-demo.css'],
  viewProviders: [MdIconRegistry],
  encapsulation: ViewEncapsulation.None,
})
export class IconDemoComponent {
  constructor(mdIconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    mdIconRegistry
        .addSvgIcon('thumb-up',
          sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/thumbup-icon.svg'))
        .addSvgIconSetInNamespace('core',
          sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/core-icon-set.svg'))
        .registerFontClassAlias('fontawesome', 'fa');
  }
}
