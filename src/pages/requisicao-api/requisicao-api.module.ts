import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PGrequisicaoAPI } from './requisicao-api';

@NgModule({
  declarations: [
    PGrequisicaoAPI,
  ],
  imports: [
    IonicPageModule.forChild(PGrequisicaoAPI),
  ],
  exports: [
    PGrequisicaoAPI
  ]
})
export class PGrequisicaoAPIModule {}
