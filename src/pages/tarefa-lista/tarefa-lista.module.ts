import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PGTarefaLista } from './tarefa-lista';

@NgModule({
  declarations: [
    PGTarefaLista,
  ],
  imports: [
    IonicPageModule.forChild(PGTarefaLista),
  ],
  exports: [
    PGTarefaLista
  ]
})
export class PGTarefaListaModule {}
