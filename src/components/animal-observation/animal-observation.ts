import { Component } from '@angular/core';

/**
 * Generated class for the AnimalObservationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'animal-observation',
  templateUrl: 'animal-observation.html'
})
export class AnimalObservationComponent {

  text: string;

  constructor() {
    console.log('Hello AnimalObservationComponent Component');
    this.text = 'Hello World';
  }

}
