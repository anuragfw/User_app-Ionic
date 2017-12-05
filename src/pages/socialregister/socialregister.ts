import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AppsettingProvider } from '../../providers/appsetting/appsetting';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';
import { VerifycodePage } from '../verifycode/verifycode';
import { MenuPage } from '../menu/menu';
/**
 * Generated class for the SocialregisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-socialregister',
  templateUrl: 'socialregister.html',
})
export class SocialregisterPage {
  data: any = '';
  userdata: any = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private http: Http,
    public loadingCtrl: LoadingController,
    public appsetting: AppsettingProvider) {
    //  this.data.name='Vendor Type';
    if (JSON.parse(localStorage.getItem("user_data")) != null || JSON.parse(localStorage.getItem("user_data")) != undefined) {
      this.userdata = JSON.parse(localStorage.getItem("user_data"));
    }
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad SocialregisterPage');
  }
  public serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
    return result.join("&");
  }

  onSubmit(data) {
    var loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });
    console.log(data);
    loading.present()
    var postdata = {
      id: this.userdata._id,
      phone: data.value.number
    }
    console.log(postdata);
    var serialized_all = this.serializeObj(postdata);
    var url: string = this.appsetting.myGlobalVar + 'users/addpending';
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(url, serialized_all, options)
      .map(res => res.json())
      .subscribe((response) => {
        console.log(response);
        loading.dismissAll();
        if (response.status == true) {
          //  alert(response.data.message);
          // this.navCtrl.push(VerifycodePage);
          this.navCtrl.setRoot(MenuPage);          
        } else {
          alert("Please try again")
        }
      })
  }
}
