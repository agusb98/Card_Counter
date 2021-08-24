import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public games = { name: 'Juegos', link: '/games', img: 'https://www.esperanzadiaxdia.com.ar/wp-content/uploads/2020/07/Truco-Cartas.jpg' };
  public config = { name: 'Configuración', link: '/config' };
  public info = { name: 'Acerca de', link: '/info' };

  constructor(
    private router: Router
  ) { }

  redirectTo(link) {
    this.router.navigate([link]);
  }
}
