import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starRating',
  standalone: true,
})
export class StarRatingPipe implements PipeTransform {
  transform(note: number, maxStars: number = 5): string {
    const fullStars = Math.floor(note);
    const halfStar = note % 1 >= 0.5;
    const emptyStars = maxStars - fullStars - (halfStar ? 1 : 0);

    const full = '★'.repeat(fullStars);
    const half = halfStar ? '⯪' : '';
    const empty = '☆'.repeat(emptyStars);

    return full + half + empty;
  }
}
