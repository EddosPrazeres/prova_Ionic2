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
	Autenticado:boolean;
	LoginSucessoEE:EventEmitter<any>;
	LoginFalhaEE:EventEmitter<any>;
	DeslogarEE:EventEmitter<any>;

	constructor(public http: Http, 
				public ngZone: NgZone, 
				private facebook: Facebook) {
					
		this.LoginSucessoEE = new EventEmitter();
		this.LoginFalhaEE = new EventEmitter();
		this.DeslogarEE = new EventEmitter();
		firebase.auth().onAuthStateChanged(usuario => {
		this.callbackStateChange(usuario);
		})
	}

	LoginFacebook(){
		let provider = new firebase.auth.FacebookAuthProvider();

		return firebase.auth().signInWithPopup(provider)
						.then(resultado => this.callbackSucessoLogin(resultado))
						.catch(error => this.callbackFalhaLogin(error))
	}

	LoginCredencial(credencial:CredencialC){
		firebase.auth().signInWithEmailAndPassword(credencial.email,credencial.senha)
				.then(resultado => this.callbackSucessoLogin(resultado))
				.catch(error => this.callbackFalhaLogin(error))
	}

	LoginGoogle(){
		let provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider)
				.then(resultado => this.callbackSucessoLogin(resultado))
				.catch(error => this.callbackFalhaLogin(error))
	}

	cadastrarUsuario(_credencial: CredencialC){
		firebase.auth().createUserWithEmailAndPassword(_credencial.email,_credencial.senha)
				.then(result => {
					console.log(result);
					firebase.database().ref('users/').child(result.uid).set(result.email)
				})
				.catch(error => console.log(error));
	}

	Sair(){
		firebase.auth().signOut()
				.then(() => this.DeslogarEE.emit(true))
				.catch(error => this.callbackFalhaLogin(error))
	}	

	private callbackStateChange(_usuario){
		this.ngZone.run( () => {
			if(_usuario == null){
				this.UsuarioAtual = null;
				this.Autenticado = false;
			} else {
				this.UsuarioAtual = _usuario;
				this.Autenticado = true;
			}
		})
	}

	private callbackSucessoLogin(_response){
		this.LoginSucessoEE.emit(_response.user);
	}

	private callbackFalhaLogin(_error){
		this.LoginFalhaEE.emit({code : _error.code, message : _error.message, email: _error.email, credencial: _error.credencial});
	}
}