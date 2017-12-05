import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JobdetailPage } from "../jobdetail/jobdetail";
import { PosteditPage } from '../postedit/postedit';

/**
 * Generated class for the Tab4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab3',
  templateUrl: 'tab3.html',
})
export class Tab3Page {
  pet ='current';
  constructor(public navCtrl: NavController,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab3Page');
  }

  jobdetailPage(){
    this.navCtrl.push(JobdetailPage);
  }

  postedit(){
    this.navCtrl.push(PosteditPage);
  }

}
