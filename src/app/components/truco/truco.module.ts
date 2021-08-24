import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrucoComponent } from './truco.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [TrucoComponent],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    TrucoComponent
  ]
})
export class TrucoModule { }
