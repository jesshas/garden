import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartistModule } from 'ng-chartist';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlantsComponent } from './plants/plants.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantsComponent,
    PlantDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    ChartistModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
