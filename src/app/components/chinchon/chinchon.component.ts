import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Game } from 'src/app/models/Game';
import { Player } from 'src/app/models/Player';

@Component({
  selector: 'app-chinchon',
  templateUrl: './chinchon.component.html',
  styleUrls: ['./chinchon.component.scss'],
})
export class ChinchonComponent implements OnInit {

  public data: Game;
  public start: boolean = false;

  @Output() game = new EventEmitter<Game>();
  @Output() winner = new EventEmitter<Player>();

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.data = new Game(0, 'truco', [], 0);
  }

  getMaxScores() {
    return [{ num: 30 }, { num: 50 }, { num: 75 }, { num: 100 }];
  }

  setName(player: Player, event) {
    let newName: string = event.target.value;
    if (newName.length > 1) { player.name = newName; }
  }

  setQuantityPlayers(str: '+' | '-') {
    let id = 0;

    // Remove latest player of array
    if (str == '-') { this.data.players.pop(); }

    // Add a new player into array
    else {
      if (this.data.players) {
        id = this.data.players.length + 1;
      }
      let p: Player = {
        id: id,
        name: this.translateService.instant('Jugador') + ' ' + id,
        count: 0
      }
      this.data.players.push(p);
    }
  }

  confirmQuantity() {
    this.start = true;
  }

  isWinning(player: Player) {
    let flag = true;

    this.data.players.forEach(p => {
      if (p.id != player.id && p.count <= player.count) {
        flag = false;
      }
    });

    return flag;
  }

  setCount(p: Player, str: string): void {
    if (str == '+') { p.count = p.count + 2; }
    else { p.count--; }

    if (this.getWinner()) {
      this.emitGame(this.data);
      this.emitWinner(this.getWinner());
    }
  }

  setMax(num: number) {
    this.data.max = num;
  }

  emitGame(g: Game) {
    this.game.emit(g);
  }

  emitWinner(w: Player) {
    this.winner.emit(w);
  }

  getWinner() {
    let p: Player[] = [];
    let winner: Player = null;

    if (this.data.max > 0) {
      this.data.players.forEach(player => {
        if (player.count <= this.data.max) {
          p.push(player);
        }
      });
    }

    if (p.length == 1) { winner = p[0]; }
    return winner;
  }

}
