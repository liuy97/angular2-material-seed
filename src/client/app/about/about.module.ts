import { NgModule }           from '@angular/core';
import { aboutRouting }            from './about.router';
import {MaterialModule} from '../all/all';
import {AboutComponent} from './about.component';

@NgModule({
  imports:      [ aboutRouting, MaterialModule.forRoot() ],
  exports: [AboutComponent],
  declarations: [AboutComponent],
})

export class AboutModule { }
