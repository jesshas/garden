import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DashboardComponent }   from './dashboard/dashboard.component';
import { PlantsComponent }      from './plants/plants.component';
import { PlantDetailComponent }  from './plant-detail/plant-detail.component';
import { ForecastComponent } from './forecast/forecast.component';
import { LineChartComponent } from './line-chart/line-chart.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forecast', component: ForecastComponent },
  { path: 'detail/:id', component: PlantDetailComponent },
  { path: 'plants', component: PlantsComponent },
  { path: 'linechart', component: LineChartComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
