import {Component, ViewContainerRef} from '@angular/core';
//import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular2-material/dialog/dialog';
import {OVERLAY_PROVIDERS} from '@angular2-material/core/overlay/overlay';

@Component({
  moduleId: module.id,
  selector: 'dialog-demo',
  templateUrl: 'dialog-demo.html',
  styleUrls: ['dialog-demo.css'],
  //providers: [MdDialog, OVERLAY_PROVIDERS]
})
export class DialogDemoComponent {
  //dialogRef: MdDialogRef<JazzDialog>;
  lastCloseResult: string;

  constructor(
      //public dialog: MdDialog,
      public viewContainerRef: ViewContainerRef) { }

  open() {
    /*let config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;

    this.dialog.open(JazzDialog, config).then(ref => {
      this.dialogRef = ref;

      this.dialogRef.afterClosed().subscribe(result => {
        this.lastCloseResult = result;
        this.dialogRef = null;
      });
    });*/
  }
}


@Component({
  selector: 'demo-jazz-dialog',
  template: `
  <p>It's Jazz!</p>
  <p><label>How much? <input #howMuch></label></p>
  <button type="button" (click)="dialogRef.close(howMuch.value)">Close dialog</button>`
})
export class JazzDialogComponent {
  //constructor(public dialogRef: MdDialogRef<JazzDialog>) { }
}
