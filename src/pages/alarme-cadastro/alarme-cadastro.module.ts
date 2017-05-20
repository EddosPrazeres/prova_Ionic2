import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PGtarefaCadastro } from './alarme-cadastro';

@NgModule({
  declarations: [
    PGtarefaCadastro,
  ],
  imports: [
    IonicPageModule.forChild(PGtarefaCadastro),
  ],
  exports: [
    PGtarefaCadastro
  ]
})
export class PGtarefaCadastroeModule {}
