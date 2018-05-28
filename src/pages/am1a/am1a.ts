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
  public userinfo = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public gradesProvider: GradesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Am1aPage');
    this.gradesProvider.getGrades().subscribe((data: any[]) => {
      console.log(data);
      this.userinfo = data;
    });
  }

}
