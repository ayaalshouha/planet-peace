import { Component, Input, OnInit } from '@angular/core';
import { PlantComponent } from './plant/plant.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [PlantComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent implements OnInit {
  @Input() plant: any;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.route.queryParams.subscribe((params) => {
      this.plant = params['plant'];
    });
    console.log(this.plant);
  }
}
