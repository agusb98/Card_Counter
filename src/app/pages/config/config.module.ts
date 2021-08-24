import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigPageRoutingModule } from './config-routing.module';

import { ConfigPage } from './config.page';
import { ColorModeModule } from 'src/app/components/color-mode/color-mode.module';
import { SoundModeModule } from 'src/app/components/sound-mode/sound-mode.module';
import { LangModeModule } from 'src/app/components/lang-mode/lang-mode.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigPageRoutingModule,
    ColorModeModule,
    SoundModeModule,
    LangModeModule,
    TranslateModule
  ],
  declarations: [ConfigPage]
})
export class ConfigPageModule {}
