import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { PGTarefaLista } from '../tarefa-lista/tarefa-lista'

@IonicPage()
@Component({
  selector: 'page-tarefa-cadastro',
  templateUrl: 'tarefa-cadastro.html',
})
export class PGTarefaCadastro implements OnInit{
  public tarefa: any;
  public titulo: string;
  public dados = {nome:"", descricao:""};
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private nativeStorage: NativeStorage,
    public alertaCtrl: AlertController) { } 

  ionViewDidLoad() { }
 
  Validacao() {
    if(this.dados.nome != "" && this.dados.descricao != "") {
      this.ExibirAlerta("Parabéns!", "Sua tarefa foi cadastrada com sucesso.", true);
      this.cadastrarTarefas();
    } 

    if (this.dados.nome == "" && this.dados.descricao == ""){
      this.ExibirAlerta("Tarefa não cadastrada!", "Preencha o campo de nome e descrição.", false) 
    } else {
      if(this.dados.nome == "") this.ExibirAlerta("Tarefa não cadastrada!", "Preencha o campo de nome.", false) ;
      if(this.dados.descricao == "") this.ExibirAlerta("Tarefa não cadastrada!", "Preencha o campo de descrição.", false);
    }
  }

  ExibirAlerta(_titulo, _subtitulo, _status) {
    let alerta = this.alertaCtrl.create({
      title: _titulo,
      subTitle: _subtitulo,
      buttons: [{
        text: 'Ok'
      }] 
    });
    alerta.present();
  }

  ExibirConfirmacao() {
  let alerta = this.alertaCtrl.create({
    title: 'Deletar tarefa!',
    message: 'Deseja deletar esta tarefa?',
    buttons: [
      {
        text: 'Não',
        role: 'cancel',
        handler: () => {
          console.log('Cancel Não');
        }
      },
      {
        text: 'Sim',
        handler: () => {
          this.deletarTarefa();
        }
      }
    ]
  });
  alerta.present();
}
  
  ngOnInit(){
    this.tarefa = this.navParams.get("tarefaSelecionada");
      if(this.tarefa != null){
        this.dados.nome =  this.tarefa.nome;
        this.dados.descricao = this.tarefa.descricao;
        this.titulo = "Alteração de tarefa";
      } else this.titulo = "Cadastro de tarefa";
  }



  deletarTarefa(){
    this.nativeStorage.remove(this.tarefa.nome);
    this.navCtrl.setRoot(PGTarefaLista);
  }

  cadastrarTarefas(){
    if(this.tarefa != null) this.nativeStorage.remove(this.tarefa.nome);
    
    this.nativeStorage.setItem(this.dados.nome, {nome: this.dados.nome, descricao: this.dados.descricao})
    .then(() => console.log('Tarefa salva'),
      error => console.error('Erro na terafa'+ error)
    );
    this.navCtrl.setRoot(PGTarefaLista);
  }
}
