import { Injectable } from '@angular/core';
 
import { Observable, of } from 'rxjs';
 
import { Plant } from 'src/app/plant';
import { PLANTS } from 'src/app/mock-plants';
import { MessageService } from 'src/app/shared/services/messages/message.service';
 
@Injectable({
  providedIn: 'root',
})
export class PlantService {
 
  constructor(private messageService: MessageService) { }
 
  getPlants(): Observable<Plant[]> {
    // TODO: send the message _after_ fetching the plants
    this.messageService.add('PlantService: fetched plants');
    return of(PLANTS);
  }
}
