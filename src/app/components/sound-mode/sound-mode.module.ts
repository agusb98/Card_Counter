import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoundModeComponent } from './sound-mode.component';



@NgModule({
  declarations: [SoundModeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SoundModeComponent
  ]
})
export class SoundModeModule { }
