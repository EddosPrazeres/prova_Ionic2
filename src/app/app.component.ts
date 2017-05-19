import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PGLoginC } from '../pages/login/login';
import { PGCadastroC } from '../pages/cadastro/cadastro';
import { PGTarefaLista } from '../pages/tarefa-lista/tarefa-lista';
import { PGTarefaCadastro } from '../pages/tarefa-cadastro/tarefa-cadastro';
import { ProviderLoginC} from '../providers/login/login'

@Component({
  templateUrl: 'app.html'
})

export class MyApp implements OnInit{
  @ViewChild(Nav) nav: Nav;

  rootPage: any = PGLoginC;
  PerfilUsuario: any = null;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar,
              public splashScreen: SplashScreen, 
              public loginProvider: ProviderLoginC) { }

  ngOnInit(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

  // used for an example of ngFor and navigation
  this.pages = [
    { title: 'Lista de Tarefas', component: PGTarefaLista },
    // { title: 'Lista de Alertas', component: PGLoginC },
    // { title: '"Notícias?" - Requisição da API', component: PGLoginC }
    ];
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  Sair() {
    this.loginProvider.Sair();
    this.nav.setRoot(PGLoginC);
  }
}