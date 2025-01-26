import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  toggleMenu() {
    const burgerIcon = document.querySelector('.burger-icon');
    const menu = document.querySelector('.menu');

    burgerIcon?.classList.toggle('open');
    menu?.classList.toggle('open');
  }
}
