import { NgModule }           from '@angular/core';
import { AboutRoutes }            from './about.router';
import {MaterialModule} from '../all/all';

@NgModule({
  imports:      [ AboutRoutes ],
  declarations: [MaterialModule],
  providers:    [ ]
})
export class AboutModule { }
