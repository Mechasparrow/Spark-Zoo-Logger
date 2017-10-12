import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

import { Animal } from '../../model/Animal';

import { Http } from '@angular/http';

import {HttpClient} from '@angular/common/http';

import { Zoo } from '../../api/Zoo';

import {EmailApi} from '../../api/EmailApi';

//Storage

import {Storage} from '@ionic/storage';
import {AnimalLogDatabase} from '../../db/AnimalLogDatabase';

//Modals

import {FeedingComponent} from '../../components/feeding/feeding';
import {AnimalStatusComponent} from '../../components/animal-status/animal-status';
import {AnimalBehaviorComponent} from '../../components/animal-behavior/animal-behavior';

//Pages

import { ViewLogPage } from '../view-log/view-log';

//Models

import {Log} from '../../model/Log';

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

  public animal_name:string;
  public animal_branch:string;

  private emailAPI:EmailApi;
  private database:AnimalLogDatabase;


  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, public http:Http, public http_client:HttpClient, public storage: Storage) {

    //Initialize the email proxy;
    this.emailAPI = new EmailApi(http_client);

    //Initialize the connection to the local database
    this.database = new AnimalLogDatabase(storage);

    //Retrieve the animal information

    this.animal_name = navParams.get("animal");
    this.animal_branch = navParams.get("branch");

    var animal_promise = Zoo.getAnimalFromBranch(http, this.animal_name, this.animal_branch);

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

  logAnimalBehavior() {
    const behaviorModal = this.modalCtrl.create(AnimalBehaviorComponent, {
      animal: this.animal_name,
      branch: this.animal_branch
    });

    let that = this;

    behaviorModal.onDidDismiss(function (log) {

      if (log == null) {
        return;
      }

      var add_log = that.addLog(<Log> log);

      add_log.then(function (logs) {
        console.log(logs)
      }).catch (function (error) {
        console.log(error);
      })

    })

    behaviorModal.present();

  }

  logAnimalStatus() {
    const statusModal = this.modalCtrl.create(AnimalStatusComponent, {
      animal: this.animal_name,
      branch: this.animal_branch
    });

    let that = this;

    statusModal.onDidDismiss(function (log) {

      if (log == null) {
        return;
      }

      var add_log = that.addLog(<Log> log);

      add_log.then(function (logs) {
        console.log(logs)
      }).catch (function (error) {
        console.log(error);
      })

    })

    statusModal.present();

  }

  logFeeding() {
    const feedingModal = this.modalCtrl.create(FeedingComponent, {
      animal: this.animal_name,
      branch: this.animal_branch
    });

    let that = this;

    feedingModal.onDidDismiss(function (log) {

      if (log == null) {
        return;
      }

      var add_log = that.addLog(<Log> log);

      add_log.then(function (logs) {
        console.log(logs)
      }).catch (function (error) {
        console.log(error);
      })

    });

    feedingModal.present();

  }

  addLog(log:Log) {

    let that = this;

    var add_promise = new Promise(function (resolve, reject) {

      that.database.getAnimalLogs(that.animal_name).then (function (logs) {

        var logs_array:Log[] = <Log[]> logs;
        logs_array.push(log);

        return logs_array;

      }).then (function (logs:Log[]) {

        that.database.setAnimalLog(that.animal_name, logs).then (function (logs) {
          resolve(logs);
        }).catch (function (error) {
          console.log(error);
          reject(error)
        })

      }).catch (function (error) {
        console.log(error);
        reject(error);
      })
    })

    return add_promise;

  }

  sendLogs() {

    this.emailAPI.sendHTMLEmail("navazhylaum4714@parkwayschools.net", "Zoo Log", "<h1>Howdy</h1>") 

  }

}
