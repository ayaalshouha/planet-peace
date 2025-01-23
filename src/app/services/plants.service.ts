import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../enviroments/enviroment';

@Injectable({ providedIn: 'root' })
export class PlantsService {
  constructor(private http: HttpClient) {}

  all(): Observable<any> {
    return this.http.get(
      `${enviroment.apiBaseUrl}/plants?token=${enviroment.trefleToken}`
    );
  }
}
