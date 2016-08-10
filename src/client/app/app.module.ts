import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routers';
import { AppComponent }  from './app.component';
import { FormsModule }    from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    //service
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
