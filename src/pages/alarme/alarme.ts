import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProviderTarefaProvider } from "../../providers/provider-tarefa/provider-tarefa";

import { NativeStorage } from '@ionic-native/native-storage';

import { PGalarmeCadastro } from '../alarme-cadastro/alarme-cadastro';

import { LocalNotifications } from '@ionic-native/local-notifications';

import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-alarme',
  templateUrl: 'alarme.html',
})

export class PGalarme{
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public providertarefa: ProviderTarefaProvider,
    private nativeStorage: NativeStorage,
    private localNotifications: LocalNotifications) {  }

  public listaFiltrada: Array<any> = [];
  Count = 0; 

  Notificacao(d){
    this.localNotifications.schedule({
      id: d.id,
      text: d.nome,
      at: new Date(d.hora),
      led: 'FF0000',
      sound: null
    });
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
  
  FiltroItens(_alarmes) {
    _alarmes.forEach(item => {
      this.nativeStorage.getItem(item)
        .then(
        data => {
          if (data.hora != null && moment(new Date()).format() < data.hora)  { 
            this.Count = this.Count +1;
            data.id = this.Count;
            this.listaFiltrada.push(data);
            this.listaAlarmes(this.listaFiltrada);
            this.Notificacao(data)
            console.log(data.hora + " "+data.id);
          } else if (data.hora != null && moment(new Date()).format() > data.hora)
          {
            this.nativeStorage.remove(item);
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

  cadastrarAlarme(){
    this.navCtrl.push(PGalarmeCadastro);
  }

  selecionarAlarme(_alarme){
    this.navCtrl.push(PGalarmeCadastro, {alarmeSelecionado: _alarme});
  }
}
