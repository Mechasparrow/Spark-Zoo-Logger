import { BrowserModule } from '@angular/platform-browser';
import { IonicStorageModule} from '@ionic/storage';
import { FormsModule }   from '@angular/forms';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Pages
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { BranchPage} from '../pages/branch/branch';

//Modals
import {FeedingComponent} from '../components/feeding/feeding';
import {AnimalStatusComponent} from '../components/animal-status/animal-status';
import {AnimalBehaviorComponent} from '../components/animal-behavior/animal-behavior';

//Log Pages
import { AnimalLogPage } from '../pages/animal-log/animal-log';
import { ViewLogPage } from '../pages/view-log/view-log';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BranchPage,
    AnimalLogPage,
    ViewLogPage,
    FeedingComponent,
    AnimalStatusComponent,
    AnimalBehaviorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BranchPage,
    AnimalLogPage,
    ViewLogPage,
    FeedingComponent,
    AnimalStatusComponent,
    AnimalBehaviorComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
