import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Animal } from '../../model/Animal';

import { Http } from '@angular/http';

import { Zoo } from '../../api/Zoo';

//Pages

import { ViewLogPage } from '../view-log/view-log';

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

  public animal:Animal = new Animal();

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {

    var animal_name:string = navParams.data.animal;
    var animal_branch:string = navParams.data.branch;

    var animal_promise = Zoo.getAnimalFromBranch(http, animal_name, animal_branch);

    let that = this;

    animal_promise.then (function (animal) {

      that.animal = <Animal>animal;

    })


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimalLogPage');
  }

  viewLog() {
    this.navCtrl.push(ViewLogPage, {animal: this.animal.name});
  }

}
