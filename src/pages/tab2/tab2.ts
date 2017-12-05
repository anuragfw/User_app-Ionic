import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { FiltercPage } from '../filterc/filterc';
import { AppsettingProvider } from '../../providers/appsetting/appsetting';
import { Http, Headers, RequestOptions } from '@angular/http';

import { FilterPage } from '../filter/filter';

import { AddtodoPage } from '../addtodo/addtodo';
/**
 * Generated class for the Tab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {
  pet = 'Profile';
  invitemail: any = '';
  show: any = '';
  userdata: any = '';
  colorb: any = '';
  showreviews: any = '';
  invitephone: any = '';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public appsetting: AppsettingProvider,
    private http: Http,

    public modalCtrl: ModalController,
    public viewCtrl: ViewController) {
    console.log('updated')
    if (JSON.parse(localStorage.getItem("user_data"))) {
      this.userdata = JSON.parse(localStorage.getItem("user_data"));
    }
    this.getsdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
  }


  presentModal() {
    let modal = this.modalCtrl.create(FiltercPage);
    modal.present();
  }

  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

  addtodoPage() {
    this.navCtrl.push(AddtodoPage);
  }

  getsdata() {
    console.log("=======");
    if (JSON.parse(localStorage.getItem("user_data"))) {
      this.userdata = JSON.parse(localStorage.getItem("user_data"));
    }

    var postdata1 = {
      userid: this.userdata._id,
      role:'Vendor'
    }
    console.log(postdata1);
    var serialized_all1 = this.serializeObj(postdata1);
    var url: string = this.appsetting.myGlobalVar + 'users/vendor';
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(url, serialized_all1, options)
      .map(res => res.json())
      .subscribe((response) => {
        console.log(response);
        if (response.status = true) {

          console.log("isha")
          console.log(response.data);
          this.show = response.data;
          console.log(this.show)
          console.log(this.show[3].name)
          
          //  for(let i in this.show){
          //         this.show[i].colorb = '';
          //  }
        } else {

        }
      })
  }
  public serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
    return result.join("&");
  }

}
