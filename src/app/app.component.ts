import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PGLoginC } from '../pages/login/login';
import { PGTarefaLista } from '../pages/tarefa-lista/tarefa-lista';
import { PGrequisicaoAPI } from '../pages/requisicao-api/requisicao-api';
import { PGalarme } from '../pages/alarme/alarme';

import { ProviderLoginC} from '../providers/login/login';

import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  templateUrl: 'app.html'
})

export class MyApp implements OnInit{
  @ViewChild(Nav) nav: Nav;

  rootPage: any = PGLoginC;
  PerfilUsuario: any = null;

  MenuPaginas: Array<{Titulo: string, PG: any}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar,
              public splashScreen: SplashScreen, 
              public loginProvider: ProviderLoginC,
              private nativeStorage: NativeStorage) { }

  ngOnInit(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      console.log(this.loginProvider.UsuarioAtual);
    });

  // used for an example of ngFor and navigation
  this.MenuPaginas = [
    { Titulo: 'Lista de tarefas', PG: PGTarefaLista },
    { Titulo: 'ABC News', PG: PGrequisicaoAPI },
    { Titulo: 'Alarme', PG: PGalarme }
    ];
  }

  AbrirPagina(_pagina) {
    this.nav.setRoot(_pagina.PG);
  }

  Recarregar() {
    this.gets();
  }
  dados = {nome: "", foto: ""}
  gets()
  {
    this.nativeStorage.getItem("Perfil")
        .then(
        data => {
          this.dados.nome = data.nome;
          this.dados.foto = data.foto;
        },
        error => console.error(error)
      );

      console.log(this.dados.foto);
  }


}