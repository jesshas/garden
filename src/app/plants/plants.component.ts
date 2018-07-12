import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';

import { PlantService } from '../shared/services/plant/plant.service';


@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {

  plants: Plant[];

  selectedPlant: Plant;

  constructor(private plantService: PlantService) { 
    
  }

  ngOnInit() {
    this.getPlants();
  }

  onSelect(plant: Plant): void {
    this.selectedPlant = plant;
  }

  getPlants(): void {
    this.plantService.getPlants()
    .subscribe(plants => this.plants = plants);
  }

}
