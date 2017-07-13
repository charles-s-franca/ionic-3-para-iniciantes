import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from "../pages/intro/intro";

import { ConfigProvider } from "../providers/config/config";

@Component({
  templateUrl: 'app.html',
  providers: [
    ConfigProvider
  ]
})
export class MyApp {
  rootPage:any;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    configProvider: ConfigProvider
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      let config = configProvider.getConfigData();
      if(config == null){
          this.rootPage = IntroPage;
          configProvider.setConfigData(false);
      }else{
          this.rootPage = TabsPage;
      }
      
      console.log(config);

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
