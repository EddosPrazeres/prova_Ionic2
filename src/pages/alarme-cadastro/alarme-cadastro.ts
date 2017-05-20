import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { PGalarme } from '../alarme/alarme'


@IonicPage()
@Component({
  selector: 'page-alarme-cadastro',
  templateUrl: 'alarme-cadastro.html',
})
export class PGtarefaCadastro implements OnInit{
  public alarme: any;
  public titulo: string;
  public nome: string;
  public descricao: string;
  public hora: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private nativeStorage: NativeStorage) { } 

  ionViewDidLoad() {
      
  }

  ngOnInit(){
    this.alarme = this.navParams.get("alarmeSelecionado");
      if(this.alarme != null){
        this.nome =  this.alarme.nome;
        this.descricao = this.alarme.descricao;
        this.hora = this.alarme.hora;
        this.titulo = "Alteração de alarme";
      } else this.titulo = "Cadastro de alarme";
  }

  deletarAlarme(){
    this.nativeStorage.remove(this.alarme.nome);
    this.navCtrl.setRoot(PGalarme);
  }

  cadastrarAlarmes(){

    if(this.alarme != null) this.nativeStorage.remove(this.alarme.nome);
    
    this.nativeStorage.setItem(this.nome, {nome: this.nome, descricao: this.descricao, hora: this.hora})
    .then(() => console.log('Alarme salvo'),
      error => console.error('Erro no alarme'+ error)
    );
    this.navCtrl.setRoot(PGalarme);
  }
}
