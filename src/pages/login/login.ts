import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
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
  PerfilUsuario: any = null;

  constructor(public navCtrl: NavController,
              public loginProvider: ProviderLoginC) {}

  ngOnInit(){
    this._credencial = new CredencialC();

    this.loginControleEstado();
  }

  loginControleEstado(){

    this.loginProvider.LoginSucessoEE.subscribe(
      user => {
        this.PerfilUsuario = user;
        this.navCtrl.setRoot(PGTarefaLista, {PerfilUsuario: user});
      });

    this.loginProvider.LoginFalhaEE.subscribe(
      error => console.log(error)
    )

    this.loginProvider.DeslogarEE.subscribe(
      user => this.PerfilUsuario = null
    )
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
