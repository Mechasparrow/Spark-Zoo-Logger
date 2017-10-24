import { Component } from '@angular/core';

import {ViewController, NavController, NavParams} from 'ionic-angular';

//Import the Log object
import {Log} from '../../model/Log';

/**
 * Generated class for the AnimalBehaviorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'animal-behavior',
  templateUrl: 'animal-behavior.html'
})
export class AnimalBehaviorComponent {

  public animal:string = "";
  public branch:string = "";

  public behavior_date:Date = new Date();

  public behavior:string = "";

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {

    this.animal = navParams.get('animal');
    this.branch = navParams.get('branch');

  }

  renderDate() {
    return this.behavior_date.toLocaleString();
  }

  behaviorSubmit() {

    let new_log:Log = <Log> {
      animal: this.animal,
      branch: this.branch,
      date: this.behavior_date,
      type: "animal-behavior",
      description: this.animal + " has the behavor of " + "\"" + this.behavior + "\""
    }

    this.viewCtrl.dismiss(new_log);

  }

  modalCancel() {
    this.viewCtrl.dismiss();
  }

}
