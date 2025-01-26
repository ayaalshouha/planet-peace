import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-plant',
  standalone: true,
  imports: [],
  templateUrl: './plant.component.html',
  styleUrl: './plant.component.css',
})
export class PlantComponent implements OnChanges {
  @Input() plant: any = null;

  // This hook runs every time the input changes
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['plant'] && changes['plant'].currentValue) {
      this.plant = this.plant ? JSON.parse(this.plant) : null;
    }
  }
}
