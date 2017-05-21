import {Injectable, EventEmitter, NgZone} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CredencialC } from "../../models/credencial";
import { Facebook } from '@ionic-native/facebook';

import firebase from "firebase";
import { NativeStorage } from '@ionic-native/native-storage';
@Injectable()
export class ProviderLoginC
{

	UsuarioAtual:any;
	loginSucessoEventEmitter:EventEmitter<any>;
	constructor(
		public http: Http, 
		public ngZone: NgZone, 
		private facebook: Facebook,
		private nativeStorage: NativeStorage) {

		this.loginSucessoEventEmitter = new EventEmitter();


		firebase.initializeApp({
			apiKey: "AIzaSyCUl6NyrCF3_Uz38eEqt1mZh67MUJBBWlw",
			authDomain: "listatarefasionic2.firebaseapp.com",
			databaseURL: "https://listatarefasionic2.firebaseio.com",
			projectId: "listatarefasionic2",
			storageBucket: "listatarefasionic2.appspot.com",
			messagingSenderId: "424572934421"
		});
	}

	private callbackSucessoLogin(response){
		this.loginSucessoEventEmitter.emit(response);
	}

	PerfilUsuario: any = null;

	LoginFacebook(): void {
		this.facebook.login(['email']).then( (response) => {
		const facebookCredential = firebase.auth.FacebookAuthProvider
			.credential(response.authResponse.accessToken);

		firebase.auth().signInWithCredential(facebookCredential)
			.then((success) => {
				console.log("Firebase success: " + success.displayName);
				this.UsuarioAtual = success;
				this.callbackSucessoLogin(success);
			})
			.catch((error) => {
				console.log("Firebase failure: " + JSON.stringify(error));
		});

		firebase.auth().signInWithCredential(facebookCredential)
			.then((success) => {
				console.log("Firebase success: " + success.displayName);
				this.UsuarioAtual = success;
				this.callbackSucessoLogin(success);
			})
			.catch((error) => {
				console.log("Firebase failure: " + JSON.stringify(error));
		});

		}).catch((error) => { console.log(error) });
	}

	DeslogarFB(){
		this.facebook.logout()
			.then(function(response) {
			console.log("Deslogou");
		}, function(error){
			console.log(error);
		});
	}

}