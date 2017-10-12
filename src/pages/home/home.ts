import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {BranchPage} from '../branch/branch';

import { Http } from '@angular/http';

import { Zoo } from '../../api/Zoo';

import {HttpClient} from '@angular/common/http';

import {EmailApi} from '../../api/EmailApi';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public branches:string[] = [];

  constructor(public navCtrl: NavController, public http:Http, public httpclient: HttpClient) {

    var data_promise = Zoo.getBranchs(this.http);

    let that = this;

    data_promise.then(function (data) {
        that.branches = <string[]>data;
    });

  }

  viewBranch(branch:string) {
      this.navCtrl.push(BranchPage, {
        branch: branch
      });
  }

}
