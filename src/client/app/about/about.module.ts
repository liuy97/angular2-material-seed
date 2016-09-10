import { NgModule }           from '@angular/core';
import { AboutRoutes }            from './about.router';
import {MaterialModule} from '../all/all';
import {AboutComponent} from './about.component';

@NgModule({
  imports:      [ AboutRoutes, MaterialModule.forRoot() ],
  exports: [AboutComponent],
  declarations: [AboutComponent],
})

export class AboutModule { }
