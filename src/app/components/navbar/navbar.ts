import { Component, ElementRef, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListArtisan } from '../../services/artisan.service';
import { RechercheService } from '../../services/recherche.service';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
  isMenuOpen = false;
  searchTerm = '';
  categoriesAccepted: string[] = [];
  locationAccepted: string[] = [];

  constructor(
    private elRef: ElementRef,
    private rechercheService: RechercheService,
    private ArtisanService: ListArtisan
  ) {}

  ngOnInit(): void {
    this.ArtisanService.getAllArtisans().subscribe((artisan) => {
      this.categoriesAccepted = [
        ...new Set(artisan.map((a) => a.category.trim())),
      ];
      this.locationAccepted = [
        ...new Set(artisan.map((a) => a.location.trim())),
      ];
    });
  }

  normalize(str: string): string {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }

  onSearchInput() {
    const terme = this.searchTerm.trim().toLowerCase();
    const termeNormalise = this.normalize(terme);

    const categoryFound = this.categoriesAccepted.find(
      (cat) => this.normalize(cat) === termeNormalise
    );
    const locationFound = this.locationAccepted.find(
      (loc) => this.normalize(loc) === termeNormalise
    );

    if (categoryFound) {
      this.rechercheService.setRecherche(`catégorie:${categoryFound}`);
    } else if (locationFound) {
      this.rechercheService.setRecherche(`ville:${locationFound}`);
    }

    //DEBUG//
    console.log('🔍 Recherche envoyée:', {
      categorie: categoryFound,
      ville: locationFound,
    });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  onClickOutside(event: Event): void {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.isMenuOpen = false;
    }
  }
}
