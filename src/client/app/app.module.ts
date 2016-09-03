import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routers';
import { AppComponent }  from './app.component';
import { FormsModule }    from '@angular/forms';
import { HttpModule} from '@angular/http';
import {MaterialModule} from './all/all';
import {AboutModule} from './about/about.module';
//import { MdIconRegistry } from '@angular2-material/icon/icon';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AboutModule,
    routing
  ],
  declarations: [
    AppComponent
  ],
  providers: [ //MdIconRegistry 
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
