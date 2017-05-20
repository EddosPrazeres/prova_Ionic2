import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { PGalarme } from '../alarme/alarme'


@IonicPage()
@Component({
  selector: 'page-alarme-cadastro',
  templateUrl: 'alarme-cadastro.html',
})
export class PGalarmeCadastro implements OnInit{
  public alarme: any;
  public titulo: string;
  public dados = {nome:"", descricao:"", hora: new Date().toISOString() };
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private nativeStorage: NativeStorage,
    public alertaCtrl: AlertController) { } 

  ionViewDidLoad() { console.log(this.dados.hora ) }
 
  Validacao() {
      if(this.dados.nome != "" && this.dados.descricao != "" && this.dados.hora) {
      this.ExibirAlerta("Alarme cadastrada com Sucesso!", "Seu alarme foi cadastrado com sucesso.", true);
    } 

    if (this.dados.nome == "" && this.dados.descricao == ""){
      this.ExibirAlerta("Alarme não cadastrado!", "Preencha o campo de nome e descrição.", false) 
    } else {
      if(this.dados.nome == "") this.ExibirAlerta("Alarme não cadastrado!", "Preencha o campo de nome.", false) ;
      if(this.dados.descricao == "") this.ExibirAlerta("Alarme não cadastrado!", "Preencha o campo de descrição.", false);
    }
  }

  ExibirAlerta(_titulo, _subtitulo, _status) {
    let alerta = this.alertaCtrl.create({
      title: _titulo,
      subTitle: _subtitulo,
      buttons: [{
        text: 'Ok',
        handler: () => {
          if (_status) this.cadastrarAlarme();
      }},
      ] 
    });
    alerta.present();
  }

  ExibirConfirmacao() {
  let alerta = this.alertaCtrl.create({
    title: 'Deletar alarme!',
    message: 'Deseja deletar este alarme?',
    buttons: [
      {
        text: 'Não!',
        role: 'cancel',
        handler: () => {
          console.log('Cancel Não');
        }
      },
      {
        text: 'Sim',
        handler: () => {
          this.deletarAlarme();
        }
      }
    ]
  });
  alerta.present();
}
  
  ngOnInit(){
    this.alarme = this.navParams.get("alarmeSelecionado");
      if(this.alarme != null){
        this.dados.nome =  this.alarme.nome;
        this.dados.descricao = this.alarme.descricao;
        this.dados.hora = this.alarme.hora;
        this.titulo = "Alteração de alarme";
      } else this.titulo = "Cadastro de alarme";
  }



  deletarAlarme(){
    this.nativeStorage.remove(this.alarme.nome);
    this.navCtrl.setRoot(PGalarme);
  }

  cadastrarAlarme(){
    if(this.alarme != null) this.nativeStorage.remove(this.alarme.nome);
    
    this.nativeStorage.setItem(this.dados.nome, {nome: this.dados.nome, descricao: this.dados.descricao, hora: this.dados.hora})
    .then(() => console.log('Alarme salvo'),
      error => console.error('Erro no alarme'+ error)
    );
    this.navCtrl.setRoot(PGalarme);
  }
}
