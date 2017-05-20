import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { PGalarme } from '../alarme/alarme'


@IonicPage()
@Component({
  selector: 'page-alarme-cadastro',
  templateUrl: 'alarme-cadastro.html',
})
export class PGtarefaCadastro {
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private nativeStorage: NativeStorage) {

    
  }

  ionViewDidLoad() {

  }

}
