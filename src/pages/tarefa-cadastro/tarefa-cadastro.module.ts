import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PGTarefaCadastro } from './tarefa-cadastro';

@NgModule({
  declarations: [
    PGTarefaCadastro,
  ],
  imports: [
    IonicPageModule.forChild(PGTarefaCadastro),
  ],
  exports: [
    PGTarefaCadastro
  ]
})
export class PGTarefaCadastroModule {}
