import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello AnimalStatusComponent Component');
    this.text = 'Hello World';
  }

}
