import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  public animalName:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.animalName = this.navParams.data.animal;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimalLogPage');
  }

}
