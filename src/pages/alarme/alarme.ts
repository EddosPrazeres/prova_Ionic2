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

export class PGalarme {
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public providertarefa: ProviderTarefaProvider,
              private nativeStorage: NativeStorage) 
              {
  }

  cadastrarAlarme(){
    this.navCtrl.push(PGtarefaCadastro);
  }
 }
