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
   // this.nativeStorage.clear();
  }

  public nome;
  public descricao;
  public hora;

  cadastrarAlarme(){
    console.log(this.nome);
    console.log(this.descricao);
    this.nativeStorage.setItem(this.nome, {nome: this.nome, descricao: this.descricao, hora: this.hora})
    .then(
      () => console.log('Stored item!'),
      error => console.error('Error storing item', error)
    );
    this.navCtrl.setRoot(PGalarme);
  }

}
