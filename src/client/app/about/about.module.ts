import { NgModule } from '@angular/core';
import { aboutRouting } from './about.router';
import { MatListModule } from '@angular/material';
import { AboutComponent } from './about.component';

@NgModule({
  imports:      [ aboutRouting, MatListModule ],
  exports: [AboutComponent],
  declarations: [AboutComponent],
})

export class AboutModule { }
