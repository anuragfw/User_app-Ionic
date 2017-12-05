import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import {AlertController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root="Tab1Page";
  tab2Root="Tab2Page";
  tab3Root="Tab3Page";
  myIndex="number";

  constructor(public navCtrl: NavController, public navParams: NavParams,  public platform: Platform,public alertCtrl:AlertController) {
        this.platform.ready().then(() => {
            this.platform.registerBackButtonAction(() => {
                this.showConfirm();
              //  navigator['app'].exitApp();                
            });
        });
  }
  showConfirm() {
    let confirm = this.alertCtrl.create({
       title: 'Exit?',
       message: 'Do you want to exit the app?',
       buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Exit',
          handler: () => {
            console.log('Agree clicked');
             navigator['app'].exitApp(); 
          }
        }
      ]
    });
    confirm.present();
  }

}
