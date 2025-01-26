import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-most-popular',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './most-popular.component.html',
  styleUrl: './most-popular.component.css',
})
export class MostPopularComponent implements OnChanges {
  @Input() plants: any[] | null = [];
  displayedPlants: any[] = [];

  constructor() {}

  // This lifecycle hook is called whenever any @Input() properties change.
  // So when the plants array is updated (after the async data is resolved and passed down),
  // ngOnChanges() will trigger.
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['plants'] && this.plants) {
      this.displayedPlants = this.plants.slice(8, 16);
    }
  }
}
