import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {AnimalLogPage} from '../animal-log/animal-log';

/**
 * Generated class for the Branch page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-branch',
  templateUrl: 'branch.html',
})
export class BranchPage {

  public branch:string = "";

  public animals:string[] = [];

  public mammals:string[] = [
    "Black and White Colobus Monkey",
    "Francois Langur",
    "Chimpanzee"
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.branch = this.navParams.data.branch;

    if (this.branch == "Mammals") {
      this.animals = this.mammals;
    }

  }

  ionViewDidLoad() {

  }

  viewLog(animal:string) {

    this.navCtrl.push(AnimalLogPage, {
      animal: animal
    })

  }

}
