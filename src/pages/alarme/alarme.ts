import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProviderTarefaProvider } from "../../providers/provider-tarefa/provider-tarefa";

import { NativeStorage } from '@ionic-native/native-storage';

import { PGalarmeCadastro } from '../alarme-cadastro/alarme-cadastro';

import { LocalNotifications } from '@ionic-native/local-notifications';


@IonicPage()
@Component({
  selector: 'page-alarme',
  templateUrl: 'alarme.html',
})

export class PGalarme{
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public providertarefa: ProviderTarefaProvider,
              private nativeStorage: NativeStorage,
              private localNotifications: LocalNotifications) {

                // Schedule a single notification


      
  }


Notificacao(d){
  // Schedule delayed notification
      this.localNotifications.schedule({
        id: 1,
        text: d.nome,
        at: new Date(d.hora),
        led: 'FF0000',
        sound: null
      });
}

Notificacao2(d){
  // Schedule delayed notification
      this.localNotifications.schedule({
        id: 1,
        text: d.nome,
        at: new Date(d.hora),
        led: 'FF0000',
        sound: null,
        icon: 'http://www.freeiconspng.com/uploads/courses-icon-10.png'
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

  public listaFiltrada: Array<any> = [];
  FiltroItens(_alarmes) {
    _alarmes.forEach(item => {
      this.nativeStorage.getItem(item)
        .then(
        data => {
          if (data.hora != null)  { 
            this.listaFiltrada.push(data);
            this.listaAlarmes(this.listaFiltrada);
            this.Notificacao2(data)
            console.log(data.hora);
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
