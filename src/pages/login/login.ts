import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PGTarefaLista } from "../tarefa-lista/tarefa-lista";
import { ProviderLoginC } from "../../providers/login/login";
import { CredencialC } from "../../models/credencial";
import { Facebook } from '@ionic-native/facebook';

import firebase from "firebase";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class PGLoginC implements OnInit {
  private _credencial: CredencialC;
  PerfilUsuario: any = null;

  constructor(public navCtrl: NavController,
              public loginProvider: ProviderLoginC,
              private facebook: Facebook) {

                  firebase.initializeApp({
                    apiKey: "AIzaSyCUl6NyrCF3_Uz38eEqt1mZh67MUJBBWlw",
                    authDomain: "listatarefasionic2.firebaseapp.com",
                    databaseURL: "https://listatarefasionic2.firebaseio.com",
                    projectId: "listatarefasionic2",
                    storageBucket: "listatarefasionic2.appspot.com",
                    messagingSenderId: "424572934421"
                  });

              }

  ngOnInit(){
    //this.loginControleEstado();
  }

    deslogar(){
     //this.loginProvider.logout();
  }
  


	UsuarioAtual:any;

	LoginFacebook(): void {
		this.facebook.login(['email']).then( (response) => {
		const facebookCredential = firebase.auth.FacebookAuthProvider
			.credential(response.authResponse.accessToken);

		firebase.auth().signInWithCredential(facebookCredential)
			.then((success) => {
			console.log("Firebase success: " + JSON.stringify(success));
			this.UsuarioAtual = success;
      this.navCtrl.setRoot(PGTarefaLista,{Perfil: success})
			})
			.catch((error) => {
			console.log("Firebase failure: " + JSON.stringify(error));
		});

		}).catch((error) => { console.log(error) });

		console.log(this.UsuarioAtual);
	}



}
