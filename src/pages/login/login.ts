import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PGTarefaLista } from "../tarefa-lista/tarefa-lista";
import { ProviderLoginC } from "../../providers/login/login";
import { CredencialC } from "../../models/credencial";
import { Facebook } from '@ionic-native/facebook';

import firebase from "firebase";
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class PGLoginC implements OnInit {
  private _credencial: CredencialC;
  PerfilUsuario: any = null;
  UsuarioAtual:any;

  constructor(
    public navCtrl: NavController,
    public loginProvider: ProviderLoginC,
    private facebook: Facebook,
    private nativeStorage: NativeStorage) { }

  ngOnInit(){
    //this.loginControleEstado();
  }

    LoginFacebook(){
     this.loginProvider.LoginFacebook();
  }

  ionViewDidLoad() {
    this.loginProvider.loginSucessoEventEmitter.subscribe(
      user => {
        this.navCtrl.setRoot(PGTarefaLista);
          this.nativeStorage.setItem("Perfil", {nome: user.displayName, foto: user.photoURL})
              .then(() => console.log('Perfil salvo'),
                error => console.error('Erro no perfil'+ error)
              );
      }
    );
  }
}
