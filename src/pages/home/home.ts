import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {BranchPage} from '../branch/branch';

import { Http } from '@angular/http';

import { Zoo } from '../../api/Zoo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public animals:string[] = [];

  constructor(public navCtrl: NavController, public http:Http) {

    var data_promise = Zoo.getBranchs(this.http);

    let that = this;

    data_promise.then(function (data) {
        that.animals = <string[]>data;
    });

  }

  viewBranch(branch:string) {
      this.navCtrl.push(BranchPage, {
        branch: branch
      });
  }

}
