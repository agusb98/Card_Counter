import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorModeComponent } from './color-mode.component';



@NgModule({
  declarations: [ColorModeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ColorModeComponent
  ]
})
export class ColorModeModule { }
