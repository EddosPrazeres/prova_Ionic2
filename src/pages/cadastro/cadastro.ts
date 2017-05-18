import { Component, OnInit  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProviderLoginC } from "../../providers/login/login";
import { CredencialC } from "../../models/credencial";

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class PGCadastroC {
  credencial: CredencialC;
  constructor(public navCtrl: NavController,
  			      public loginProvider: ProviderLoginC) {}

   ngOnInit(){
    this.credencial = new CredencialC();
   }

  Cadastrar(){
  	this.loginProvider.cadastrarUsuario(this.credencial);
  }
}
