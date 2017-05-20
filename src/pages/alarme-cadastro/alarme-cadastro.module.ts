import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PGalarmeCadastro } from './alarme-cadastro';

@NgModule({
  declarations: [
    PGalarmeCadastro,
  ],
  imports: [
    IonicPageModule.forChild(PGalarmeCadastro),
  ],
  exports: [
    PGalarmeCadastro
  ]
})
export class PGalarmeCadastroModule {}
