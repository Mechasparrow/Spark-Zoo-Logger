import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {BranchPage} from '../branch/branch';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public animals:string[] = [
    "Fish",
    "Amphibians",
    "Reptiles",
    "Birds",
    "Mammals"
  ];

  constructor(public navCtrl: NavController) {

  }

  viewBranch(branch:string) {
      this.navCtrl.push(BranchPage, {
        branch: branch
      });
  }

}
