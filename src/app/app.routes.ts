import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { ArtisanPage } from './Pages/artisan-page/artisan-page';
import { ContactPage } from './Pages/contact-page/contact-page';
import { FichePage } from './Pages/fiche-page/fiche-page';
import { HomePage } from './Pages/home-page/home-page';
import { LegalsPage } from './Pages/legals-page/legals-page';
import { NotFoundPage } from './Pages/not-found-page/not-found-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'fiche', component: FichePage },
  { path: 'artisan/:id', component: ArtisanPage },
  { path: 'contact', component: ContactPage },
  { path: 'mentions', component: LegalsPage },
  // Page NotFound en last //
  { path: '**', component: NotFoundPage, data: { hideFooter: true } },
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollOffset: [0, 30],
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutesModules {}
