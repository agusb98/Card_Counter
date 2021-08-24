import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang-mode',
  templateUrl: './lang-mode.component.html',
  styleUrls: ['./lang-mode.component.scss'],
})
export class LangModeComponent implements OnInit {

  public list = [
    { name: 'es', img: './assets/img/flagarg.png' },
    //{ name: 'po', img: './assets/img/flagpor.png' },
    { name: 'en', img: './assets/img/flageng.png' }
  ]

  constructor(private translateService: TranslateService) { }

  ngOnInit() { }

  onClick(lang) {
    localStorage.setItem('langMode', lang);
    this.translateService.use(lang);
  }
}
