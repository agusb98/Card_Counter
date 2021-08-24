import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sound-mode',
  templateUrl: './sound-mode.component.html',
  styleUrls: ['./sound-mode.component.scss'],
})
export class SoundModeComponent implements OnInit {

  public flag: boolean = true;
  public nameIcon: string = 'musical-notes';

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('soundMode') == 'mute') {
      this.toMute();
    }
  }

  toSound() {
    this.flag = true;
    this.nameIcon = 'musical-notes';
  }

  toMute() {
    this.flag = false;
    this.nameIcon = 'volume-mute';
  }

  onChange(event) {
    if (event.target.checked) {
      this.toSound();
      localStorage.setItem('soundMode', 'sound');
    }
    else {
      this.toMute();
      localStorage.setItem('soundMode', 'mute');
    }
  }
}
