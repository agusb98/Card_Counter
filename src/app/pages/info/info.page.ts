import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  public data = [
    { logo: 'logo-github', link: 'https://github.com/agusb98' },
    { logo: 'logo-instagram', link: 'https://www.instagram.com/whereisagus/' },
    { logo: 'mail', link: 'mailto:agusszurdob@gmail.com?subject=Información&body=Hola! te contacto desde tu app' }
  ]

  constructor() { }

  ngOnInit() {
  }

  redirectTo(link: string) {
    window.open(link);
  }

}
