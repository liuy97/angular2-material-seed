import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'snack-bar-demo',
  templateUrl: 'snack-bar-demo.html',
})
export class SnackBarDemoComponent {
  message = 'Snack Bar opened.';
  actionButtonLabel = 'Retry';
  action = false;
  setAutoHide = true;
  autoHide = 0;

  constructor(
      public snackBar: MatSnackBar) { }

  open() {
    const config = new MatSnackBarConfig();
    config.duration = this.autoHide;
    this.snackBar.open(this.message, this.action && this.actionButtonLabel, config);
  }
}
