import { Component, inject, input } from '@angular/core';
import { PlantsService } from '../../../services/plants.service';
import { ResolveFn, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-most-popular',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './most-popular.component.html',
  styleUrl: './most-popular.component.css',
})
export class MostPopularComponent {
  plants = input.required<any[]>();
}

//resolver is a data provider and will be called whenver the rotue become active
// even if it was active
export const resolvePlants: ResolveFn<any> = () => {
  const plantService = inject(PlantsService);
  const plants = plantService.fetchPlants();
  return plants;
};
