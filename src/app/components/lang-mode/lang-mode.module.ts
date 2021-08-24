import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangModeComponent } from './lang-mode.component';



@NgModule({
  declarations: [LangModeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LangModeComponent
  ]
})
export class LangModeModule { }
