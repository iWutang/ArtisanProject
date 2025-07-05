import { Component } from '@angular/core';
import {
  ActivatedRoute,
  Data,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { filter } from 'rxjs';
import { Footer } from './components/footer/footer';
import { ModalRecherche } from './components/modal-recherche/modal-recherche';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, ModalRecherche],
  templateUrl: './app.html',
  styleUrls: ['./app.scss', '../styles.scss'],
})
export class App {
  hideFooter = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        const childRoute = this.getDeepestRoute(this.activatedRoute);
        const data: Data = childRoute.snapshot.data;
        this.hideFooter = data['hideFooter'] === true;
      });
  }

  private getDeepestRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
