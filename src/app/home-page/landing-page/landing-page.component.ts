import { Component, inject, OnInit } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { TakeCareComponent } from './take-care/take-care.component';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { map, Observable, of, tap } from 'rxjs';
import { ActivatedRoute, ResolveFn } from '@angular/router';
import { PlantsService } from '../../services/plants.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeroSectionComponent,
    TakeCareComponent,
    MostPopularComponent,
    NewsLetterComponent,
    AsyncPipe,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent implements OnInit {
  plants$: Observable<any[]> = of([]);
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.plants$ = this.route.data.pipe(map((data) => data['plants'] || []));
  }
}

//resolver is a data provider and will be called whenever the rotue become active
// even if it was active
export const resolvePlants: ResolveFn<any> = () => {
  console.log(':this is the resolver');

  const plantService = inject(PlantsService);
  const plants = plantService.fetchPlants();
  return plants;
};
