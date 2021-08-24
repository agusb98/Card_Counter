import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.page.html',
  styleUrls: ['./game-list.page.scss'],
})
export class GameListPage implements OnInit {


  public links = [
    { link: 'https://forum.ionicframework.com/t/how-to-create-a-hyperlink-that-can-be-opened-in-both-ios-and-android/105808', img: './assets/img/popeye/1.png' },
    { link: 'https://forum.ionicframework.com/t/how-to-create-a-hyperlink-that-can-be-opened-in-both-ios-and-android/105808', img: './assets/img/popeye/2.png' },
    { link: 'https://forum.ionicframework.com/t/how-to-create-a-hyperlink-that-can-be-opened-in-both-ios-and-android/105808', img: './assets/img/popeye/3.png' },
  ]

  public games = [
    { name: 'Truco' },
    { name: 'Chin Chon' },
  ]

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onClick(game: string) {
    game = game.replace(/\s+/g, '');
    game = game.toLowerCase();
    
    this.router.navigate(['counter/' + game]);
  }

  clickImg($event) {
    window.open($event.link);
  }
}
