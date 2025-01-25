import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { TakeCareComponent } from './take-care/take-care.component';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { TrendigCategoriesComponent } from './trendig-categories/trendig-categories.component';
import { SummerPlanetComponent } from './summer-planet/summer-planet.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeroSectionComponent, TakeCareComponent, MostPopularComponent, NewsLetterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
