import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-color-mode',
  templateUrl: './color-mode.component.html',
  styleUrls: ['./color-mode.component.scss'],
})
export class ColorModeComponent implements OnInit {

  public flag: boolean = true;
  public nameIcon: string = 'sunny-sharp';

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('colorMode') == 'moon') {
      this.flag = false;
      this.nameIcon = 'moon';
    }
  }

  toSun() {
    document.documentElement.style.setProperty('--global-background', 'var(--white-background)');
    document.documentElement.style.setProperty('--global-text', 'var(--black-background)');
    this.nameIcon = 'sunny-sharp';
  }

  toMoon() {
    document.documentElement.style.setProperty('--global-background', 'var(--black-background)');
    document.documentElement.style.setProperty('--global-text', 'var(--white-background)');
    this.nameIcon = 'moon';
  }

  onChange(event) {
    if (event.target.checked) {
      this.toSun();
      localStorage.setItem('colorMode', 'sun');
    }
    else {
      this.toMoon();
      localStorage.setItem('colorMode', 'moon');
    }
  }
}
