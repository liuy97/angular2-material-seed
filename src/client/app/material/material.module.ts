import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { MdToolbarModule}    from '@angular2-material/toolbar';
import {MdButtonModule} from '@angular2-material/button';
import {MdButtonToggleModule} from '@angular2-material/button-toggle';
import {MdCheckboxModule} from '@angular2-material/checkbox';
import {MdRadioModule} from '@angular2-material/radio';
import {MdProgressCircleModule} from '@angular2-material/progress-circle';
import {MdProgressBarModule} from '@angular2-material/progress-bar';
import {MdCardModule} from '@angular2-material/card';
import {MdInputModule} from '@angular2-material/input';
import {MdIconModule, MdIconRegistry} from '@angular2-material/icon';
import {MdGridListModule} from '@angular2-material/grid-list';
import {MdTabsModule} from '@angular2-material/tabs';
import {MdListModule} from '@angular2-material/list';
import { MaterialComponent } from './material.component';
import { materialRouting } from './material.router';
import { NameListService } from '../names/index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdToolbarModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCheckboxModule,
    MdRadioModule,
    MdProgressCircleModule,
    MdProgressBarModule,
    MdCardModule,
    MdInputModule,
    MdIconModule,
    MdGridListModule,
    MdTabsModule,
    MdListModule,
    materialRouting
  ],
  declarations: [
    MaterialComponent,
  ],
  providers: [ NameListService, MdIconRegistry ]
})

export class MaterialModule {}
