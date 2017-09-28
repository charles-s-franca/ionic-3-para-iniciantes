import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NFC, Ndef } from '@ionic-native/nfc';
import { HttpModule } from "@angular/http"
import { IntroPageModule } from "../pages/intro/intro.module";
import { DrinkPageModule } from "../pages/drink/drink.module";
import { NfcPageModule } from "../pages/nfc/nfc.module";
import { SuccessPageModule } from "../pages/success/success.module";



import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
// import { environment } from '../environments/environment';
//import firebase from 'firebase';

const firebaseConfig = {
  // apiKey: "AIzaSyAGv0Wy_3_ua5Z3osmZd10QAprSMGz0GHQ",
  // authDomain: "barionic-d2888.firebaseapp.com",
  // databaseURL: "https://barionic-d2888.firebaseio.com",
  // projectId: "barionic-d2888",
  // storageBucket: "barionic-d2888.appspot.com",
  // messagingSenderId: "115223558925"
  apiKey: "AIzaSyAGv0Wy_3_ua5Z3osmZd10QAprSMGz0GHQ",
  authDomain: "barionic-d2888.firebaseapp.com",
  databaseURL: "https://barionic-d2888.firebaseio.com",
  projectId: "barionic-d2888",
  storageBucket: "barionic-d2888.appspot.com",
  messagingSenderId: "115223558925"
};


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IntroPageModule,
    DrinkPageModule,
    NfcPageModule,
    SuccessPageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NFC,
    Ndef
  ]
})
export class AppModule {}
