import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.branch = this.navParams.data.branch;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Branch');
  }

}
