import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { StarRatingPipe } from '../../pipes/star-rating-pipe';
import { ListArtisan } from '../../services/artisan.service';
import { RechercheService } from '../../services/recherche.service';
import { Artisan } from '../../services/ressource/artisan.model';

@Component({
  selector: 'app-modal-recherche',
  imports: [StarRatingPipe],
  templateUrl: './modal-recherche.html',
  styleUrl: './modal-recherche.scss',
})
export class ModalRecherche implements OnInit, OnChanges {
  ArtisanFiltres: Artisan[] = [];
  displayModal: boolean = false;
  motSearch: string = '';

  constructor(
    private ArtisanService: ListArtisan,
    private rechercheService: RechercheService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.rechercheService.recherche$.subscribe((cle) => {
      if (!cle) return;

      const [type, terme] = cle.split(':');

      const normalize = (str: string) =>
        str
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
          .trim();

      this.ArtisanService.getAllArtisans().subscribe((artisans) => {
        const resultats = artisans.filter((arts) => {
          const cible = type === 'ville' ? arts.location : arts.category;
          return normalize(cible).includes(normalize(terme));
        });

        this.ArtisanFiltres = resultats;

        const premier = resultats[0];

        if (premier) {
          this.motSearch =
            type === 'ville'
              ? `Artisans dans la ville de "${premier.location}"`
              : `Artisans dans la catégorie "${premier.category}"`;
          this.displayModal = true;
          document.body.classList.add('modal-open');
        } else {
          this.motSearch = `Aucun Artisan trouvé`;
          this.displayModal = false;
        }
      });
    });
  }

  NoDisplayModal() {
    this.displayModal = false;
    document.body.classList.remove('modal-open');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['displayModal']) {
      if (this.displayModal) {
        document.body.classList.add('modal-open');
      } else {
        document.body.classList.remove('modal-open');
      }
    }
  }

  goToArtisanPage(artisanId: number) {
    this.displayModal = false;

    setTimeout(() => {
      this.router.navigate(['/artisan', artisanId]);
    }, 0);
  }
}
