import { Component } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingPageComponent } from "./home-page/landing-page/landing-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomePageComponent, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'planet-peace';
}
