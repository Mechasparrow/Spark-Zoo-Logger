import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Import the log model
import { Log } from '../../model/Log';

/**
 * Generated class for the ViewLogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//Importing the local storage database
import {Storage} from '@ionic/storage';
import {AnimalLogDatabase} from '../../db/AnimalLogDatabase';

@IonicPage()
@Component({
  selector: 'page-view-log',
  templateUrl: 'view-log.html',
})
export class ViewLogPage {

  public logs:Log[] = [];
  public animal_name:string = "";
  private database:AnimalLogDatabase = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage) {

    this.database = new AnimalLogDatabase(storage);
    this.animal_name = this.navParams.data.animal;

    this.loadLogs();

  }

  loadLogs() {
    let that = this;

    this.database.getAnimalLogs(this.animal_name).then (function (logs) {
      that.logs = <Log[]>logs;
      console.log(that.logs);
    }).catch (function (error) {
      console.log("unable to get animal logs");
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewLogPage');
  }

  renderDate(date:string) {

    const log_date:Date = new Date(date);
    return log_date.toLocaleString();
  }

  clearLogs() {

    let that = this;

    this.database.emptyAnimalLog(this.animal_name).then (function (logs) {
      that.logs = <Log[]> logs;
    })

  }

  renderIcon(type:string) {

    var icons:any = {
      "feeding": "leaf",
      "animal-status": "pulse",
      "animal-behavior": "search"
    }

    return icons[type];

  }

}
