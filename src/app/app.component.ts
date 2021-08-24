import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public splash = true;

  constructor(private translateService: TranslateService) {
    this.ColorMode();
    this.SoundMode();
    this.LangMode();
  }

  StatusSplash($event) {
    this.splash = $event
  }

  ColorMode() {
    switch (this.getColorMode()) {
      case 'moon':
        document.documentElement.style.setProperty('--global-background', 'var(--black-background)');
        document.documentElement.style.setProperty('--global-text', 'var(--white-background)');
        break;

      default:
        this.setColorMode('sun');
        document.documentElement.style.setProperty('--global-background', 'var(--white-background)');
        document.documentElement.style.setProperty('--global-text', 'var(--black-background)');
        break;
    }
  }

  setColorMode(str: string) {
    localStorage.setItem('colorMode', str);
  }

  getColorMode() {
    return localStorage.getItem('colorMode');
  }

  SoundMode() {
    if (this.getSoundMode() == 'sound') { /* console.log("song"); */ }
    else { this.setSoundMode('mute'); }
  }

  getSoundMode() {
    return localStorage.getItem('soundMode');
  }

  setSoundMode(str: string) {
    localStorage.setItem('soundMode', str);
  }

  LangMode() {
    if (!localStorage.getItem('langMode')) {
      localStorage.setItem('langMode', 'es');
    }

    this.translateService.setDefaultLang(localStorage.getItem('langMode'));
    this.translateService.addLangs(['en', 'es']);
  }
}
