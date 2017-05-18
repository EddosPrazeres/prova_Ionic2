import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PGCadastroC } from './cadastro';

@NgModule({
  declarations: [
    PGCadastroC,
  ],
  imports: [
    IonicPageModule.forChild(PGCadastroC),
  ],
  exports: [
    PGCadastroC
  ]
})
export class PGCadastroCModule {}
