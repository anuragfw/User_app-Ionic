import { Tab2Page } from './../tab2/tab2';
import { Tab1Page } from './../tab1/tab1';
import { TabsPage } from './../tabs/tabs';
import { SpecialPage } from "../special/special";
import { EditprofilePage } from "../editprofile/editprofile";
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav, Events } from 'ionic-angular';
import { ProfilePage } from "../profile/profile";
import { ChangepasswordPage } from '../changepassword/changepassword';
import { Intro } from '../intro/intro';
import { AppsettingProvider } from '../../providers/appsetting/appsetting';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  img:any='';
  setbit:any='';
  // Basic root for our content view
  rootPage = 'TabsPage';
  userdata: any = '';
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'Home', pageName: 'TabsPage', tabComponent: 'Tab1Page', index: 0, icon: 'home' },
    { title: 'Edit Profile', pageName: 'EditprofilePage', icon: 'contact' },
    { title: 'Change Password', pageName: 'ChangepasswordPage', icon: 'contact' },
    { title: 'Logout', pageName: '', icon: 'log-out' },

    // { title: 'Special', pageName: 'SpecialPage', icon: 'shuffle' },
  ];

  constructor(public navCtrl: NavController, public appsetting: AppsettingProvider, public events: Events, private fb: Facebook, private googlePlus: GooglePlus) {
    events.subscribe('msg_added', (res) => {
     // alert(res)
      if (JSON.parse(localStorage.getItem("user_data")) != null) {
          this.userdata.image = res;
      }
    });
        events.subscribe('msg_added1', (res) => {
    console.log(res);
      if (JSON.parse(localStorage.getItem("user_data")) != null) {
         this.userdata = res
      }
    });
   this.setbit=JSON.parse(localStorage.getItem('bit')) ;
    console.log(JSON.parse(localStorage.getItem("user_data")));
    if (JSON.parse(localStorage.getItem("user_data")) != null) {
      this.userdata = JSON.parse(localStorage.getItem("user_data"))
      console.log(this.userdata);
      if (this.userdata.image) {
           this.img= this.userdata.image.split(':')[0];
            console.log(this.img); 
         //   alert(this.img)
            if(this.img=='https'){
                this.userdata.image =this.userdata.image;
            }else{
              this.userdata.image = this.appsetting.imagevars + this.userdata.image;
            }
      
        console.log(this.userdata.image)
        console.log('menucheck');
      }
    }

    console.log(this.userdata);
    console.log("====");
  }

  openPage(page: PageInterface) {
    let params = {};

    // The index is equal to the order of our tabs inside tabs.ts
    if (page.title == 'Logout') {
    //  alert(this.setbit);
if(this.setbit==1){
    localStorage.clear();
 this.fb.logout() .then((res: FacebookLoginResponse) =>{
 //  alert(JSON.stringify(res)) 
  })
 this.navCtrl.push(Intro);
}else if(this.setbit==2){
this.googlePlus.logout()
 localStorage.clear();
      this.navCtrl.push(Intro);
}else if(this.setbit==0){
  localStorage.clear();
  this.navCtrl.push(Intro);
}
     } else {
      if (page.index) {
        params = { tabIndex: page.index };
      }

      // The active child nav is our Tabs Navigation
      if (this.nav.getActiveChildNav() && page.index != undefined) {
        this.nav.getActiveChildNav().select(page.index);
      } else {
        // Tabs are not active, so reset the root page 
        // In this case: moving to or from SpecialPage
        this.nav.setRoot(page.pageName, params);
      }
    }
  }
  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }

  profilePage() {
    this.navCtrl.push(ProfilePage);
  }

}