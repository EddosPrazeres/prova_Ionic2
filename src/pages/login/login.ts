import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { PGCadastroC } from "../cadastro/cadastro";
import { PGTarefaLista } from "../tarefa-lista/tarefa-lista";
import { ProviderLoginC } from "../../providers/login/login";
import { CredencialC } from "../../models/credencial";



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class PGLoginC implements OnInit {
  private _credencial: CredencialC;

  constructor(public navCtrl: NavController,
              public loginProvider: ProviderLoginC,
              public menuCtrl: MenuController) {}

 

   ionViewDidLoad() {
    this.loginProvider.LoginSucessoEE.subscribe(
      user => {
        this.menuCtrl.enable(true);
        this.menuCtrl.swipeEnable(true);
        console.log("Entrou!");
        this.navCtrl.setRoot(PGTarefaLista);
      }
    );
    this.loginProvider.LoginFalhaEE.subscribe(
      error => console.log(error)
    )
  }

  ngOnInit(){
    this._credencial = new CredencialC();
  }

  LoginCredencial(){
    this.loginProvider.LoginCredencial(this._credencial);
  }

  LoginGoogle(){
    this.loginProvider.LoginGoogle();
  }

  LoginFacebook(){
    this.loginProvider.LoginFacebook();
  }

  Sair() {
    this.loginProvider.Sair();
  }
  Cadastrar(){
 		this.navCtrl.push(PGCadastroC);
  }
}
