import {Injectable, EventEmitter, NgZone} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CredencialC } from "../../models/credencial";
import { Facebook } from '@ionic-native/facebook';

import firebase from "firebase";

@Injectable()
export class ProviderLoginC
{

	UsuarioAtual:any;
	constructor(
		public http: Http, 
		public ngZone: NgZone, 
		private facebook: Facebook) {
/*
		firebase.initializeApp({
			apiKey: "AIzaSyCUl6NyrCF3_Uz38eEqt1mZh67MUJBBWlw",
			authDomain: "listatarefasionic2.firebaseapp.com",
			databaseURL: "https://listatarefasionic2.firebaseio.com",
			projectId: "listatarefasionic2",
			storageBucket: "listatarefasionic2.appspot.com",
			messagingSenderId: "424572934421"
		});*/
	}

	facebookLogin(): void {/*
		this.facebook.login(['email']).then( (response) => {
		const facebookCredential = firebase.auth.FacebookAuthProvider
			.credential(response.authResponse.accessToken);

		firebase.auth().signInWithCredential(facebookCredential)
			.then((success) => {
			console.log("Firebase success: " + JSON.stringify(success));
			this.UsuarioAtual = success;
			})
			.catch((error) => {
			console.log("Firebase failure: " + JSON.stringify(error));
		});

		}).catch((error) => { console.log(error) });

		console.log(this.UsuarioAtual);*/
	}

}