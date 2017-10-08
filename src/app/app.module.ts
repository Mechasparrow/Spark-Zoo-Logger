import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Pages
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { BranchPage} from '../pages/branch/branch';

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
    ViewLogPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BranchPage,
    AnimalLogPage,
    ViewLogPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
