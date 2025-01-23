import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from "./landing-page/landing-page.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, LandingPageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
