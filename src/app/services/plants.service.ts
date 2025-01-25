import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../enviroments/enviroment';
@Injectable({ providedIn: 'root' })
export class PlantsService {
  private plantSubject = new BehaviorSubject<any>(null);
  public plant$: Observable<any> = this.plantSubject.asObservable();

  setPlant(plant: any): void {
    this.plantSubject.next(plant);
  }

  getPlant(): Observable<any> {
    return this.plant$;
  }
  constructor(private http: HttpClient) {}

  all(): Observable<any> {
    return this.http.get(
      `${environment.apiBaseUrl}?token=${environment.trefleToken}`
    );
  }
}
