import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public animals:string[] = [
    "Birds",
    "Reptiles",
    "Big Cats"
  ];

  constructor(public navCtrl: NavController) {

  }

}
