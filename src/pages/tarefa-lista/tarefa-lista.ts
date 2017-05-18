import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProviderTarefaProvider } from "../../providers/provider-tarefa/provider-tarefa";

import { PGTarefaCadastro } from "../tarefa-cadastro/tarefa-cadastro";
@IonicPage()
@Component({
  selector: 'page-tarefa-lista',
  templateUrl: 'tarefa-lista.html',
})
export class PGTarefaLista {
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public providertarefa: ProviderTarefaProvider ) {
  }

  ionViewDidLoad() {
  }

  cadastrarTarefa(){
    this.navCtrl.push(PGTarefaCadastro);
  }
}
