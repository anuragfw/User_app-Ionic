import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginPage } from '../pages/login/login';
import { Intro } from '../pages/intro/intro';
import { MyApp } from './app.component';
import { SignupPage } from '../pages/signup/signup';
import { VsignupPage } from '../pages/vsignup/vsignup';
import { MenuPage } from '../pages/menu/menu';
import { ForgotPage } from '../pages/forgot/forgot';
import { FilterPage } from '../pages/filter/filter';
import { FilterbPage } from '../pages/filterb/filterb';
import { ProcessPage } from '../pages/process/process';
import { ConnectionrankPage } from '../pages/connectionrank/connectionrank';
import { RewardPage } from '../pages/reward/reward';
import { ConectlistPage } from '../pages/conectlist/conectlist';
import { JobPage } from '../pages/job/job';
import { FiltercPage } from '../pages/filterc/filterc';
import { AddtodoPage } from '../pages/addtodo/addtodo';
import { BidPage } from '../pages/bid/bid';
import { ReviewPage } from '../pages/review/review';
import { ProfilePage } from '../pages/profile/profile';
import { JobdetailPage } from '../pages/jobdetail/jobdetail';
import { AppsettingProvider } from '../providers/appsetting/appsetting';
import { HttpModule } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { SinglepostPage } from '../pages/singlepost/singlepost';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { Ionic2RatingModule } from 'ionic2-rating';
import { VerifycodePage } from '../pages/verifycode/verifycode';
import { PosteditPage } from '../pages/postedit/postedit';
import { SocialregisterPage } from '../pages/socialregister/socialregister';
import { Tab1Page } from '../pages/tab1/tab1';


@NgModule({
  declarations: [
    MyApp,
    MenuPage,
    LoginPage,
    Intro,
    SignupPage,
    ForgotPage,
    FilterPage,
    FilterbPage,
    VsignupPage,
    ProcessPage,
    ConnectionrankPage,
    RewardPage,
    ConectlistPage,
    JobPage,
    FiltercPage,
    AddtodoPage,
    ReviewPage,
    ProfilePage,
    JobdetailPage,
    SinglepostPage,
    BidPage,
    VerifycodePage,
    SocialregisterPage,
    PosteditPage,
    Tab1Page

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPage,
    LoginPage,
    Intro,
    SignupPage,
    ForgotPage,
    FilterPage,
    FilterbPage,
    VsignupPage,
    ProcessPage,
    ConnectionrankPage,
    RewardPage,
    ConectlistPage,
    JobPage,
    FiltercPage,
    AddtodoPage,
    ReviewPage,
    ProfilePage,
    JobdetailPage,
    SinglepostPage,
    BidPage,
    VerifycodePage,
    SocialregisterPage,
    PosteditPage,
    Tab1Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppsettingProvider,
    SocialSharing,
    Geolocation,
    Camera,
    Facebook,
    GooglePlus
  ]
})
export class AppModule {}
