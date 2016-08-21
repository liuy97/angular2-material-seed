import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routers';
import { AppComponent }  from './app.component';
import { FormsModule }    from '@angular/forms';
import { HttpModule} from '@angular/http';
import {MaterialModule} from './all/all';
import {AboutModule} from './about/about.module';
//import {DemoAppModule} from './material/demo-app/demo-app-module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AboutModule,
    //DemoAppModule,
    routing
  ],
  declarations: [
    AppComponent
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})

export class AppModule { }
