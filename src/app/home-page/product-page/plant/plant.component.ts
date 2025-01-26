import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plant',
  standalone: true,
  imports: [],
  templateUrl: './plant.component.html',
  styleUrl: './plant.component.css',
})
export class PlantComponent {
  @Input() plant: any;
  constructor() {
    console.log(this.plant);
  }
}
