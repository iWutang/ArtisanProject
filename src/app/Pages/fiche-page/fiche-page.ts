import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarRatingPipe } from '../../pipes/star-rating-pipe';
import { ListArtisan } from '../../services/artisan.service';
import { Artisan } from '../../services/ressource/artisan.model';

@Component({
  selector: 'app-fiche-page',
  standalone: true,
  imports: [StarRatingPipe],
  templateUrl: './fiche-page.html',
  styleUrls: ['./fiche-page.scss'],
})
export class FichePage implements OnInit {
  CategoryArtisans: { category: string; artisans: Artisan[] }[] = [];
  artisans: Artisan[] = [];

  constructor(
    private listArtisan: ListArtisan,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listArtisan.getAllArtisans().subscribe((artisans) => {
      const grouped: { [key: string]: Artisan[] } = {};

      artisans.forEach((artisan) => {
        const cat = artisan.category;
        if (!grouped[cat]) {
          grouped[cat] = [];
        }
        grouped[cat].push(artisan);
      });
      this.CategoryArtisans = Object.entries(grouped).map(
        ([category, artisans]) => ({
          category,
          artisans,
        })
      );

      setTimeout(() => {
        this.route.fragment.subscribe((fragment) => {
          if (fragment) {
            const el = document.getElementById(fragment);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }
        });
      }, 100);
    });
  }

  goToArtisanPage(artisanId: number) {
    this.router.navigate(['/artisan', artisanId]);
  }
}
