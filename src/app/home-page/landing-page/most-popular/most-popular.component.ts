import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { PlantsService } from '../../../services/plants.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-most-popular',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './most-popular.component.html',
  styleUrl: './most-popular.component.css',
})
export class MostPopularComponent implements OnInit, OnDestroy {
  plants = signal<any[]>([]);
  limited = signal<any[]>([]);
  private destroy$ = new Subject<void>();

  constructor(private plantsService: PlantsService) {}

  ngOnInit(): void {
    this.plantsService
      .all()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.plants.set(response.data);
          this.limited.set(this.plants().slice(5, 13));
        },
        error: (err) => {
          console.error('Error fetching plants:', err);
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
