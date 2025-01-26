import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';
import { environment } from '../enviroments/enviroment';
@Injectable({ providedIn: 'root' })
export class PlantsService {
  private plantsCache: any[] = [];
  private plantsCache$ = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) {}

  fetchPlants(): Observable<any[]> {
    if (this.plantsCache.length > 0) {
      return this.plantsCache$.asObservable();
    }
    return this.http
      .get<{ data: any[] }>(
        `${environment.apiBaseUrl}?token=${environment.trefleToken}`
      )
      .pipe(
        map((response) => response.data),
        tap((data) => {
          this.plantsCache = data;
          this.plantsCache$.next(this.plantsCache);
        })
      );
  }

  getCachedPlants(): any[] {
    return this.plantsCache;
  }
}
