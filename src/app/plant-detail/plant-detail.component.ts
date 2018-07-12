import { Component, OnInit, Input } from '@angular/core';
import { Plant } from '../plant';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.css']
})
export class PlantDetailComponent implements OnInit {

  @Input() plant: Plant;
  
  constructor() { }

  ngOnInit() {
  }

}
