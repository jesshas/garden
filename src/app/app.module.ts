import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartistModule } from 'ng-chartist';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlantsComponent } from './plants/plants.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForecastComponent } from './forecast/forecast.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    PlantsComponent,
    PlantDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ForecastComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    ChartistModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
