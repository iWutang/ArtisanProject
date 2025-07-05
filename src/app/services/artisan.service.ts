import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { ARTISANS, Artisan } from './ressource/artisan.model';

@Injectable({
  providedIn: 'root',
})
export class ListArtisan {
  constructor() {}

  getAllArtisans(): Observable<Artisan[]> {
    return of(ARTISANS);
  }

  getArtisanParId(id: number): Observable<Artisan | undefined> {
    const artisan = ARTISANS.find((a) => a.id === id);
    return of(artisan).pipe(delay(1000));
  }

  getTopArtisans(top: boolean): Observable<Artisan[]> {
    const topArtisans = ARTISANS.filter((a) => a.top === top);
    return of(topArtisans);
  }

  getArtisansByCategory(category: string): Observable<Artisan[]> {
    const CategoryArtisans = ARTISANS.filter((a) => a.category === category);
    return of(CategoryArtisans);
  }
}
