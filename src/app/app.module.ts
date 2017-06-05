import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { AppComponent } from './app.component';
import { ClueComponent } from './clue/clue.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ClueComponent,
    //BrowserAnimationsModule,

  ],
  imports: [
    BrowserModule,
     BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [ClueComponent]
})
export class AppModule { }
