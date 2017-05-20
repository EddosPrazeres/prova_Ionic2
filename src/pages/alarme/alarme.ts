import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProviderTarefaProvider } from "../../providers/provider-tarefa/provider-tarefa";

import { NativeStorage } from '@ionic-native/native-storage';

import { PGtarefaCadastro} from '../alarme-cadastro/alarme-cadastro'


@IonicPage()
@Component({
  selector: 'page-alarme',
  templateUrl: 'alarme.html',
})

export class PGalarme{
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public providertarefa: ProviderTarefaProvider,
              private nativeStorage: NativeStorage) {
  }
  public chaves;
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
  FiltroItens(_alarmes) {
    _alarmes.forEach(item => {
      this.nativeStorage.getItem(item)
        .then(
        data => {
          if (data.hora != null)  { 
            this.listaFiltrada.push(data);
            this.listaAlarmes(this.listaFiltrada);
          }
        },
        error => console.error(error)
      );
    });
  }

  public Alarmes;
  listaAlarmes(v){
    this.Alarmes = v;  
  }

  cadastrarTarefa(){
    this.navCtrl.push(PGtarefaCadastro);
  }
}
