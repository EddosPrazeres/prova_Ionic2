import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PGalarme } from './alarme';

@NgModule({
  declarations: [
    PGalarme,
  ],
  imports: [
    IonicPageModule.forChild(PGalarme),
  ],
  exports: [
    PGalarme
  ]
})
export class PGalarmeModule {}
