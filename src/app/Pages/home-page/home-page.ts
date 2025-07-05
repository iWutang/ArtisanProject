import { Component, OnInit } from '@angular/core';
import { StarRatingPipe } from '../../pipes/star-rating-pipe';
import { ListArtisan } from '../../services/artisan.service';
import { Artisan } from '../../services/ressource/artisan.model';

@Component({
  selector: 'app-home-page',
  imports: [StarRatingPipe],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage implements OnInit {
  topArtisans: Artisan[] = [];

  constructor(private listArtisan: ListArtisan) {}

  ngOnInit(): void {
    this.listArtisan.getTopArtisans(true).subscribe((data) => {
      this.topArtisans = data;
    });
  }
}
