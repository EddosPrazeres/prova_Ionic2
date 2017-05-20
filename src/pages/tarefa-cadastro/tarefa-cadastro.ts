import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { PGTarefaLista } from '../tarefa-lista/tarefa-lista'

@IonicPage()
@Component({
  selector: 'page-tarefa-cadastro',
  templateUrl: 'tarefa-cadastro.html',
})
export class PGTarefaCadastro {
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private nativeStorage: NativeStorage) {

    
  }

  ionViewDidLoad() {
   // this.nativeStorage.clear();
  }

  public TarefaNome;
  public TarefaDescricao;

  cadastrarTarefas(){
    console.log(this.TarefaNome);
    console.log(this.TarefaDescricao);
    this.nativeStorage.setItem(this.TarefaNome, {nome: this.TarefaNome, descricao: this.TarefaDescricao})
    .then(
      () => console.log('Stored item!'),
      error => console.error('Error storing item', error)
    );
    this.navCtrl.setRoot(PGTarefaLista);
  }
}
