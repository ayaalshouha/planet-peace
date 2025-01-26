import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingPageComponent } from './home-page/landing-page/landing-page.component';
import { ProductPageComponent } from './home-page/product-page/product-page.component';
import { resolvePlants } from './home-page/landing-page/most-popular/most-popular.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,

    children: [
      {
        path: '',
        component: LandingPageComponent,
        resolve: {
          plants: resolvePlants,
        },
      },
      {
        path: 'product-page',
        component: ProductPageComponent,
      },
    ],
  },
];
