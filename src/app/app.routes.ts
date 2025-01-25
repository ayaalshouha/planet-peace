import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingPageComponent } from './home-page/landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent,
      },
      {
        path: 'product-page',
        component: LandingPageComponent,
      },
    ],
  },
];
