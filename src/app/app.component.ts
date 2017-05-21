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
  dados = {nome: "Sem nome", foto: ""}
  constructor(
    public platform: Platform, 
    public statusBar: StatusBar,
    public splashScreen: SplashScreen, 
    public loginProvider: ProviderLoginC,
    private nativeStorage: NativeStorage) {
      platform.ready().then(() => {
      let env = this;
      nativeStorage.getItem('Perfil')
      .then( function (data) {
        env.nav.setRoot(PGTarefaLista);
        splashScreen.hide();
      }, function (error) {
        env.nav.push(PGLoginC);
        splashScreen.hide();
      });
      statusBar.styleDefault();
    });
  }

  ngOnInit(){
    

    this.MenuPaginas = [
      { Titulo: 'Lista de tarefas', PG: PGTarefaLista },
      { Titulo: 'ABC News', PG: PGrequisicaoAPI },
      { Titulo: 'Alarme', PG: PGalarme }
    ];
  }

  AbrirPagina(_pagina) {
    this.nav.setRoot(_pagina.PG);
  }

  Deslogar() {
    this.loginProvider.DeslogarFB();
    this.nativeStorage.remove('Perfil');
    this.nav.setRoot(PGLoginC);
  }
  
  Recarregar() {
    this.nativeStorage.getItem("Perfil")
        .then(
        data => {
          this.dados.nome = data.nome;
          this.dados.foto = data.foto;
        },
        error => console.error(error)
      );
  }
}