import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CounterPageRoutingModule } from './counter-routing.module';

import { CounterPage } from './counter.page';
import { TranslateModule } from '@ngx-translate/core';
import { TrucoModule } from 'src/app/components/truco/truco.module';
import { ChinchonModule } from 'src/app/components/chinchon/chinchon.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CounterPageRoutingModule,
    TranslateModule,
    TrucoModule,
    ChinchonModule
  ],
  declarations: [CounterPage]
})
export class CounterPageModule {}
