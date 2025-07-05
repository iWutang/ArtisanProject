import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RechercheService {
  private rechercheSujet = new BehaviorSubject<string>('');
  recherche$ = this.rechercheSujet.asObservable();

  setRecherche(motCle: string) {
    this.rechercheSujet.next(motCle.trim().toLowerCase());
  }
}
