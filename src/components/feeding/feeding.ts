import { Component } from '@angular/core';

import {ViewController, NavController, NavParams} from 'ionic-angular';

//Import the Log object
import {Log} from '../../model/Log';

/**
 * Generated class for the FeedingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'feeding',
  templateUrl: 'feeding.html'
})
export class FeedingComponent {

  public feeding_date:Date = new Date();

  public animal:string = "";
  public branch:string = "";

  public food_amnt:number = 0;

  public food_amnt_units:string[] = [
    "Cups",
    "Pounds",
    "Ounces",
    "Liters",
    "Milliliters",
    "Kilograms",
    "Grams",
    "Milligrams"
  ]

  public food_amnt_unit:string = this.food_amnt_units[0];

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {

    this.animal = navParams.get('animal');
    this.branch = navParams.get('branch');

  }

  renderDate() {
    return this.feeding_date.toLocaleString();
  }

  confirm() {

    console.log("confirm");

    let new_log:Log = <Log> {
      animal: this.animal,
      branch: this.branch,
      date: this.feeding_date,
      type: "feeding",
      description: this.animal + " was fed on " + this.feeding_date.toLocaleString()
    }

    this.viewCtrl.dismiss(new_log);

  }

  modalCancel() {
    this.viewCtrl.dismiss();
  }

}
