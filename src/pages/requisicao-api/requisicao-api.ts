import { Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-requisicao-api',
  templateUrl: 'requisicao-api.html',
})
export class PGrequisicaoAPI implements OnInit{

  Publicacoes: any;
 
  constructor(
    public navCtrl: NavController, 
    public http: Http) { }


  ngOnInit(){
    this.http.get('https://newsapi.org/v1/articles?source=abc-news-au&sortBy=top&apiKey=efbd44d58add44fbb27f598e7d1be60a').map(res => res.json()).subscribe(
      data => {
          this.Publicacoes = data.articles;
          console.log(data.articles);
      },
      err => {
          console.log("Falhou!");
      }
    );
  }
}
