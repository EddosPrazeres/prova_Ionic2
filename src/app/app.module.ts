import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PGLoginC } from '../pages/login/login';
import { PGCadastroC } from '../pages/cadastro/cadastro';

import { HttpModule } from '@angular/http';

import firebase from 'firebase';

import { ProviderLoginC } from '../providers/login/login';

const firebaseCfg = {
    apiKey: "AIzaSyCUl6NyrCF3_Uz38eEqt1mZh67MUJBBWlw",
    authDomain: "listatarefasionic2.firebaseapp.com",
    databaseURL: "https://listatarefasionic2.firebaseio.com",
    projectId: "listatarefasionic2",
    storageBucket: "listatarefasionic2.appspot.com",
    messagingSenderId: "424572934421"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PGLoginC,
    PGCadastroC
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PGLoginC,
    PGCadastroC
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProviderLoginC
  ]
})
export class AppModule {
  constructor(){
    firebase.initializeApp(firebaseCfg);
  }
}
