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

//Import the email sending library
import {EmailApi} from '../../api/EmailApi';
import {HttpClient} from '@angular/common/http';

import {AlertController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view-log',
  templateUrl: 'view-log.html',
})
export class ViewLogPage {

  public logs:Log[] = [];
  public animal_name:string = "";
  private database:AnimalLogDatabase = null;
  private emailAPI:EmailApi;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private http_client: HttpClient, private storage:Storage) {

    this.emailAPI = new EmailApi(http_client);

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

  sendLogs() {

    let that = this;

    that.emailAPI.sendLogs(<Log[]> this.logs, this.animal_name, "navazhylaum4714@parkwayschools.net").then (function (result) {

      if ((<any>result).message == "Queued. Thank you."){
        const alert = that.alertCtrl.create({
          title: "Animal logs sent!",
          buttons: ['Dismiss']
        });

        alert.present();

        console.log("message sen't");
      }else {

        const alert = that.alertCtrl.create({
          title: "Unable to send Animal Logs",
          buttons: ['Dismiss']
        });

        alert.present();



      }

    })

  }

  deleteLog(idx){

    //Get the reverse representation of the logs
    var reverse_logs = this.logs.slice(0);
    reverse_logs = reverse_logs.reverse();

    //Delete the log in the reverse log array
    reverse_logs.splice(idx, 1);
    console.log(reverse_logs);

    //Save the reverse back into regular logs;
    this.logs = reverse_logs.reverse();

    let that = this;

    //Save to the database
    this.database.setAnimalLog(this.animal_name, this.logs).then (function (logs) {
      that.logs = <Log[]>logs;
    }).catch (function (error) {
      console.log(error);
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
