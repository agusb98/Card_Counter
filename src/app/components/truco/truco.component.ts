import { TranslateService } from '@ngx-translate/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Player } from 'src/app/models/Player';
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'app-truco',
  templateUrl: './truco.component.html',
  styleUrls: ['./truco.component.scss'],
})
export class TrucoComponent implements OnInit {

  public data: Game;
  @Output() game = new EventEmitter<Game>();
  @Output() winner = new EventEmitter<Player>();

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    let players = [
      { id: 0, name: this.translateService.instant('Equipo') + ' 1', count: 0 },
      { id: 1, name: this.translateService.instant('Equipo') + ' 2', count: 0 }
    ]
    this.data = new Game(0, 'truco', players, null);
  }

  getMaxScores() {
    return [{ num: 15 }, { num: 30 }];
  }

  getFosforoScore(player: Player) {
    let imgs: { img: string }[] = [];
    let score: number = player.count;

    while (score > 0) {
      if (score >= 4) {
        score = score - 4;
        imgs.push({ img: './assets/img/fosforos/fosforo4.png' });
      }
      else if (score % 3 == 0) {
        imgs.push({ img: './assets/img/fosforos/fosforo3.png' });
        score = score - 3;
      }
      else if (score % 2 == 0) {
        imgs.push({ img: './assets/img/fosforos/fosforo2.png' });
        score = score - 2;
      }
      else if (score % 1 == 0) {
        imgs.push({ img: './assets/img/fosforos/fosforo1.png' });
        score = score - 1;
      }
    }
    return imgs;
  }

  getTopScore(player: Player) {
    let count = player.count;

    if (count == 0) { return; }
    let flag = true;

    this.data.players.forEach(p => {
      if (p.id != player.id && p.count >= player.count) {
        flag = false;
      }
      else if (p.id != player.id) { count = count - p.count }
    });

    if (flag) { return '+ ' + count; }
    else { return; }
  }

  setCount(p: Player, str: string): void {    
    if (str == '+') { p.count++; }
    else if (p.count > 0) { p.count--; }

    if (this.getWinner()) {
      this.emitGame(this.data);
      this.emitWinner(this.getWinner());     
    }
  }

  setName(player: Player, event) {
    let newName: string = event.target.value;
    if (newName.length > 1) { player.name = newName; }
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
    let p = null;

    if (this.data.max > 0) {
      this.data.players.forEach(player => {
        if (player.count == this.data.max) {
          p = player;
        }
      });
    }        
    return p;
  }
}
