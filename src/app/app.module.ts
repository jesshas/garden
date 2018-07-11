import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
