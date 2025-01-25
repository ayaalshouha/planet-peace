import { Component } from '@angular/core';
import { PlantsService } from '../../../services/plants.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-plant',
  standalone: true,
  imports: [],
  templateUrl: './plant.component.html',
  styleUrl: './plant.component.css',
})
export class PlantComponent {
  plant: any;
  constructor(private plantService: PlantsService) {
    this.plantService.getPlant().subscribe((plant) => {
      this.plant = plant;
    });
  }
}
