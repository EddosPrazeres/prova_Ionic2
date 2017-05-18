import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PGLoginC } from './login';

@NgModule({
  declarations: [
    PGLoginC,
  ],
  imports: [
    IonicPageModule.forChild(PGLoginC),
  ],
  exports: [
    PGLoginC
  ]
})
export class PGLoginCModule {}
