import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/models/Player';
import { Game } from '../../../models/Game';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.page.html',
  styleUrls: ['./counter.page.scss'],
})
export class CounterPage implements OnInit, OnDestroy {

  public name: string;
  public game: Game;
  public winner: Player;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getNameGame();
  }

  getNameGame() {
    this.name = this.route.snapshot.paramMap.get('game').toLowerCase();
    this.name = this.name.toLowerCase();
    this.name = this.name.replace(/ /g, "");
  }

  getResult($event) {
    this.game = $event;
  }

  getWinner($event) {    
    this.winner = $event;
  }

  clickExit() {
    this.router.navigate(['']);
    this.clickRetry();
  }

  clickRetry() {
    this.ngOnDestroy();
  }

  ngOnDestroy() {
    this.game = null;
    this.winner = null;
  }
}
