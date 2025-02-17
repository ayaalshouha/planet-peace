import { Component, OnInit } from '@angular/core';
import { PlantComponent } from './plant/plant.component';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [PlantComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent implements OnInit {
  plant: any;
  constructor(private route: ActivatedRoute) {
    window.scrollTo(0, 0);
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.plant = params['plant'];
    });
  }
}
