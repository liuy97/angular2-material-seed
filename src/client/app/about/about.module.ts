import { NgModule }           from '@angular/core';
import { aboutRouting }            from './about.router';
import { MaterialModule } from '@angular/material';
import { AboutComponent } from './about.component';

@NgModule({
  imports:      [ aboutRouting, MaterialModule.forRoot() ],
  exports: [AboutComponent],
  declarations: [AboutComponent],
})

export class AboutModule { }
