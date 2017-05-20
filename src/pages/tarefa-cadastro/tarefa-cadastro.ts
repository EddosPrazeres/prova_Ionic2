import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  public nome: string;
  public descricao: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private nativeStorage: NativeStorage) { } 

  ionViewDidLoad() {
      
  }

  ngOnInit(){
    this.tarefa = this.navParams.get("tarefaSelecionada");
      if(this.tarefa != null){
        this.nome =  this.tarefa.nome;
        this.descricao = this.tarefa.descricao;
        this.titulo = "Alteração de tarefa";
      } else this.titulo = "Cadastro de tarefa";
  }

  deletarTarefa(){
    this.nativeStorage.remove(this.tarefa.nome);
    this.navCtrl.setRoot(PGTarefaLista);
  }

  cadastrarTarefas(){

    if(this.tarefa != null) this.nativeStorage.remove(this.tarefa.nome);
    
    this.nativeStorage.setItem(this.nome, {nome: this.nome, descricao: this.descricao})
    .then(() => console.log('Tarefa salva'),
      error => console.error('Erro na terafa'+ error)
    );
    this.navCtrl.setRoot(PGTarefaLista);
  }
}
