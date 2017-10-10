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

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {

    this.animal = navParams.get('animal');
    this.branch = navParams.get('branch');

  }

  behaviorSubmit() {

  }

  modalCancel() {
    this.viewCtrl.dismiss();
  }

}
