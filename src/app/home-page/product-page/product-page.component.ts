import { Component } from '@angular/core';
import { PlantComponent } from "./plant/plant.component";

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [PlantComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent {}
