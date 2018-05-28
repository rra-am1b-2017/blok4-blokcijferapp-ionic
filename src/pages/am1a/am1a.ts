import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GradesProvider } from '../../providers/grades/grades';

/**
 * Generated class for the Am1aPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-am1a',
  templateUrl: 'am1a.html',
})
export class Am1aPage {
  public userinfo = [{"firstname": "Dagobert",
                     "infix": "",
                     "lastname": "Duck",
                     "residence": "Duckstad",
                     "absence": "634/123",
                     "age": 86,
                     "photo": "./assets/imgs/dagobert.png"},  
                      {"firstname": "Zwarte",
                      "infix": "",
                      "lastname": "Magica",
                      "residence": "Duckstad",
                      "absence": "666/13",
                      "age": 150,
                      "photo": "./assets/imgs/magica.png"},
                      {"firstname": "Zwarte",
                      "infix": "",
                      "lastname": "Magica",
                      "residence": "Duckstad",
                      "absence": "666/13",
                      "age": 150,
                      "photo": "./assets/imgs/magica.png"}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Am1aPage');
  }

}
