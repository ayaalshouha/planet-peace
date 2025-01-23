import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { PlantsService } from '../../../services/plants.service';
@Component({
  selector: 'app-most-popular',
  standalone: true,
  imports: [],
  templateUrl: './most-popular.component.html',
  styleUrl: './most-popular.component.css',
})
export class MostPopularComponent implements OnInit, OnDestroy {
  plants: any[] = [];
  private destroy$ = new Subject<void>();

  constructor(private plantsService: PlantsService) {}

  ngOnInit(): void {
    this.plantsService
      .all()
      .pipe(takeUntil(this.destroy$)) // Unsubscribe on destroy
      .subscribe({
        next: (response) => {
          this.plants = response;
          console.log(response[0]); // Logging the first plant as an example
        },
        error: (err) => {
          console.error('Error fetching plants:', err); // Handle errors
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
