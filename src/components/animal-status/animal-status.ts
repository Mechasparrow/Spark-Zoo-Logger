import { Component } from '@angular/core';

import {ViewController, NavController, NavParams} from 'ionic-angular';

//Import the EmailApi
import {EmailApi} from '../../api/EmailApi';

//Import the Log object
import {Log} from '../../model/Log';

import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

/**
 * Generated class for the AnimalStatusComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'animal-status',
  templateUrl: 'animal-status.html'
})
export class AnimalStatusComponent {

  public animal:string = "";
  public branch:string = "";

  public status_date:Date = new Date();

  public statuses:string[] = [
    "sleeping",
    "awake",
    "walking",
    "eating",
    "sick",
    "not breathing"
  ]

  public status:string = this.statuses[0];

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {

    this.animal = navParams.get('animal');
    this.branch = navParams.get('branch');

  }

  submitStatus() {

    let new_log:Log = <Log> {
      animal: this.animal,
      branch: this.branch,
      date: this.status_date,
      type: "animal-status",
      description: this.animal + " has the status of " + this.status
    }

    this.viewCtrl.dismiss(new_log);

  }

  modalCancel() {
    this.viewCtrl.dismiss();
  }

}
