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
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.plant = params['plant'];
    });

    console.log('selected plant id ' + this.plant);
  }
}
