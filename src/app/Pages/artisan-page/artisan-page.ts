import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StarRatingPipe } from '../../pipes/star-rating-pipe';
import { ListArtisan } from '../../services/artisan.service';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-artisan-page',
  imports: [StarRatingPipe, FormsModule],
  templateUrl: './artisan-page.html',
  styleUrl: './artisan-page.scss',
  standalone: true,
})
export class ArtisanPage implements OnInit {
  artisan: any;
  showModal = false;

  name = '';
  email = '';
  message = '';

  constructor(
    private route: ActivatedRoute,
    private listArtisan: ListArtisan,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listArtisan.getAllArtisans().subscribe((artisans) => {
      this.artisan = artisans.find((a) => a.id === id);
    });
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  sendContact() {
    const subject = `Message pour ${this.artisan.name}`;
    const content = `Nom: ${this.name}<br />Email: ${this.email}<br/><br/>${this.message}`;
    this.emailService
      .sendEmail(this.artisan.email, subject, content)
      .subscribe({
        next: () => {
          alert('Message envoyé !');
          this.closeModal();
        },
        error: () => alert("Erreur lors de l'envoi"),
      });
  }
}
