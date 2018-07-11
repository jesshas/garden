import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantService } from './services/plant/plant.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [], 
  providers: [PlantService]
})
export class SharedModule { }
