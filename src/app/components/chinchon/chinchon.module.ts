import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChinchonComponent } from './chinchon.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [ChinchonComponent],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    ChinchonComponent
  ]
})
export class ChinchonModule { }
