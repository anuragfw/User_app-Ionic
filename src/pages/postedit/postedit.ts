import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AppsettingProvider } from '../../providers/appsetting/appsetting';
import { JobdetailPage } from '../jobdetail/jobdetail';
import { RequestOptions, Http, Headers } from '@angular/http';

/**
 * Generated class for the PosteditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-postedit',
  templateUrl: 'postedit.html',
})
export class PosteditPage {
  data: any = '';
  userdata: any = '';
  pet ='current';
  constructor(
    public navCtrl: NavController,
    private http: Http,
    public loadingCtrl: LoadingController,
    public appsetting: AppsettingProvider,    
    public alertCtrl: AlertController,    
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PosteditPage');
  }
  jobdetailPage(){
    this.navCtrl.push(JobdetailPage);
  }

  /* Function */
  onSubmit(data) {
    console.log(data);
    console.log("babiuta");
    console.log(data.name);
    console.log(data.nameb);

    var loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });
    console.log(data.value)
    if (data.value.password != data.value.cpassword) {
      let alert1 = this.alertCtrl.create({
        title: 'Error ',
        subTitle: 'Passwords must match.',
        buttons: ['Try Again']
      });
      alert1.present();
    } else {
      console.log(data);
      loading.present()
      var postdata = {
        title: data.value.title,
        cost: data.value.cost,
        time: data.value.time,
        special_needs: data.value.special_needs,
        description: data.value.description,
        post_type: "user"
      }
      console.log(postdata);
      var serialized_all = this.serializeObj(postdata);
      var url: string = this.appsetting.myGlobalVar + '/posts';
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
      let options = new RequestOptions({ headers: headers });
      this.http.post(url, serialized_all, options)
        .map(res => res.json())
        .subscribe((response) => {
          console.log(response);
          loading.dismissAll();
          alert(response.message);
          if (response.status == true) {
            localStorage.setItem("udata", JSON.stringify(response.data));
            console.log(response);
            localStorage.setItem("uid", JSON.stringify(response.data._id));
            console.log(JSON.parse(localStorage.getItem("uid")));
            this.navCtrl.push(JobdetailPage);
          } else {
            alert("Please try again")
          }
        })
    }
  }
  /* End */

  /* Serialize */
  public serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
    return result.join("&");
  }
  /* End */



}
