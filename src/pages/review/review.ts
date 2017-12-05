import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ionic2RatingModule } from 'ionic2-rating';
/**
 * Generated class for the ReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-review',
  templateUrl: 'review.html',
})
export class ReviewPage {
  reviews:any='';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.reviews=JSON.parse(localStorage.getItem('reviews'));
     console.log(this.reviews);
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewPage');
  }

}
