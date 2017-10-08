import { Component } from '@angular/core';

/**
 * Generated class for the FeedingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'feeding',
  templateUrl: 'feeding.html'
})
export class FeedingComponent {

  text: string;

  constructor() {
    console.log('Hello FeedingComponent Component');
    this.text = 'Hello World';
  }

}
