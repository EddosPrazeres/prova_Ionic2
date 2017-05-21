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
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public providertarefa: ProviderTarefaProvider,
    private nativeStorage: NativeStorage) {
  }
  public chaves;
   public item;
  ionViewDidLoad(){
    this.ChavesItens();

     
  }
  
  ChavesItens(){
    this.nativeStorage.keys().then(
      data => {
        this.chaves = data;
        this.FiltroItens(this.chaves)
      },
      error => console.error(error)
    );
  }

  public listaFiltrada: Array<any> = [];
  FiltroItens(_tarefas) {
    _tarefas.forEach(item => {
      this.nativeStorage.getItem(item)
        .then(
        data => {
          if (data.hora == null && data.foto == null)  { 
            this.listaFiltrada.push(data);
            this.listaTarefas(this.listaFiltrada);
          }
        },
        error => console.error(error)
      );
    });
  }

  public Tarefas;
  listaTarefas(v){
    this.Tarefas = v;  
  }

  cadastrarTarefa(){
    this.navCtrl.push(PGTarefaCadastro);
  }

  selecionarTarefa(_tarefa){
    this.navCtrl.push(PGTarefaCadastro, {tarefaSelecionada: _tarefa});
  }
}
