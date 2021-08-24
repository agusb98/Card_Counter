import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash.component';
import { TranslateModule } from '@ngx-translate/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';


@NgModule({
  declarations: [SplashComponent],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    SplashComponent
  ],
  providers: [
    SplashScreen,
    StatusBar,
    AndroidFullScreen
  ]
})
export class SplashModule { }
