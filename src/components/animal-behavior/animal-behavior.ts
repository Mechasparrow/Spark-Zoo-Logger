import { Component } from '@angular/core';

/**
 * Generated class for the AnimalBehaviorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'animal-behavior',
  templateUrl: 'animal-behavior.html'
})
export class AnimalBehaviorComponent {

  text: string;

  constructor() {
    console.log('Hello AnimalBehaviorComponent Component');
    this.text = 'Hello World';
  }

}
