import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GradesProvider } from '../../providers/grades/grades';
import { AlertController } from 'ionic-angular';
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
              public gradesProvider: GradesProvider,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Am1aPage');
    this.gradesProvider.getGrades().subscribe((data: any[]) => {
      console.log(data);
      this.userinfo = data;
    });
  }

  public changeResidence(id, residence) {
    console.log("Mijn woonplaats is: " + residence);

    let changeResidenceInDb = 
           this.alertCtrl.create({title : "Huidige Woonplaats: " + residence,
                                  message: "Voer een nieuwe woonplaats in:" ,
                                  inputs: [{type: "text", name: "newResidence"}],
                                  buttons: [{text: "Annuleren"},
                                            {text: "Voeg toe",
                                            handler: (alertData) => {  // Dit is een Arrow-Functie
                                              console.log("Er is op mij geklikt");
                                              console.log("De volgende stad in ingevoerd: " + alertData.newResidence);                                                                  
                                              this.gradesProvider.updateResidence(id, alertData.newResidence);
                                              this.navCtrl.push(Am1aPage);
                                            }}]
                                  
                                  });

    changeResidenceInDb.present();
  }

}
