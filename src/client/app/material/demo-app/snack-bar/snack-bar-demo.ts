import { Dir } from '@angular/cdk/bidi';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'snack-bar-demo',
  templateUrl: 'snack-bar-demo.html',
})
export class SnackBarDemoComponent {
  @ViewChild('template') template: TemplateRef<any>;
  message = 'Snack Bar opened.';
  actionButtonLabel = 'Retry';
  action = false;
  setAutoHide = true;
  autoHide = 10000;
  addExtraClass = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(public snackBar: MatSnackBar, private dir: Dir) {
  }

  open() {
    const config = this._createConfig();
    this.snackBar.open(this.message, this.action ? this.actionButtonLabel : undefined, config);
  }

  openTemplate() {
    const config = this._createConfig();
    this.snackBar.openFromTemplate(this.template, config);
  }

  private _createConfig() {
    const config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    config.panelClass = this.addExtraClass ? ['demo-party'] : undefined;
    config.direction = this.dir.value;
    return config;
  }
}
