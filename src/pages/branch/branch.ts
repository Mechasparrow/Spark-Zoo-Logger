import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {AnimalLogPage} from '../animal-log/animal-log';

import { Http } from '@angular/http';
import {Zoo} from '../../api/Zoo';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {

    this.branch = this.navParams.data.branch;

    var animals_promise = Zoo.getAnimalsByBranch(http, this.branch);

    let that = this;

    animals_promise.then (function (animals) {
      that.animals = <string[]>animals;
    })

  }

  ionViewDidLoad() {

  }

  viewLog(animal:string) {

    this.navCtrl.push(AnimalLogPage, {
      animal: animal,
      branch: this.branch,
    })

  }

}
