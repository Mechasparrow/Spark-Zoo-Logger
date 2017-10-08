import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewLogPage } from './view-log';

@NgModule({
  declarations: [
    ViewLogPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewLogPage),
  ],
})
export class ViewLogPageModule {}
