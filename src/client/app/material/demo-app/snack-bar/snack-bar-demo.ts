import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'snack-bar-demo',
  templateUrl: 'snack-bar-demo.html',
})
export class SnackBarDemoComponent {
  message: string = 'Snack Bar opened.';
  actionButtonLabel: string = 'Retry';
  action: boolean = false;
  setAutoHide: boolean = true;
  autoHide: number = 0;

  constructor(
      public snackBar: MatSnackBar) { }

  open() {
    const config = new MatSnackBarConfig();
    config.duration = this.autoHide;
    this.snackBar.open(this.message, this.action && this.actionButtonLabel, config);
  }
}
