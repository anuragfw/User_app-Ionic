import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { Intro } from '../pages/intro/intro';
import { SignupPage } from '../pages/signup/signup';
import { VsignupPage } from '../pages/vsignup/vsignup';
import { ForgotPage } from '../pages/forgot/forgot';
import { FilterPage } from '../pages/filter/filter';
import { FilterbPage } from '../pages/filterb/filterb';
import { ProcessPage } from '../pages/process/process';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Intro;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

