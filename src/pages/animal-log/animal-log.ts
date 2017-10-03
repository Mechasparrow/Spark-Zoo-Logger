import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Animal } from '../../model/Animal';

/**
 * Generated class for the AnimalLogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animal-log',
  templateUrl: 'animal-log.html',
})
export class AnimalLogPage {

  public animal:Animal = null;



  constructor(public navCtrl: NavController, public navParams: NavParams) {

    if (this.navParams.data.animal == "Chimpanzee") {
      this.animal = <Animal> {
        name: this.navParams.data.animal,
        description: "A Chimp"
      };
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimalLogPage');
  }

}
