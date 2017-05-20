import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProviderTarefaProvider } from "../../providers/provider-tarefa/provider-tarefa";

import { PGTarefaCadastro } from "../tarefa-cadastro/tarefa-cadastro";

import { NativeStorage } from '@ionic-native/native-storage';


@IonicPage()
@Component({
  selector: 'page-tarefa-lista',
  templateUrl: 'tarefa-lista.html',
})
export class PGTarefaLista {
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public providertarefa: ProviderTarefaProvider,
              private nativeStorage: NativeStorage) {
  }

  ionViewDidLoad() {
    let chaves;
      this.nativeStorage.keys().then(
      data => {
        chaves = data;
        this.ListaTarefas(chaves)
      },
      error => console.error(error)
    );
  }
  public Tarefas;

  ListaTarefas(_tarefas)
  {
    this.Tarefas = _tarefas;  
  }

  cadastrarTarefa(){
    this.navCtrl.push(PGTarefaCadastro);
  }
}
