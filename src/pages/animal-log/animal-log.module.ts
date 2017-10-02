import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimalLogPage } from './animal-log';

@NgModule({
  declarations: [
    AnimalLogPage,
  ],
  imports: [
    IonicPageModule.forChild(AnimalLogPage),
  ],
})
export class AnimalLogPageModule {}
