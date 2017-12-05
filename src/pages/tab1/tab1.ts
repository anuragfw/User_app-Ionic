import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Events } from 'ionic-angular';
import { ConnectionrankPage } from "../connectionrank/connectionrank";
import { RewardPage } from '../reward/reward';
import { ConectlistPage } from "../conectlist/conectlist";
import { ModalController } from 'ionic-angular';
import { FilterPage } from '../filter/filter';
import { ReviewPage } from "../review/review";
import { BidPage } from "../bid/bid";
import { AppsettingProvider } from '../../providers/appsetting/appsetting';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { SinglepostPage } from '../singlepost/singlepost';
import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {
  pet = 'profile';
  invitemail: any = '';
  show: any = '';
  userdata: any = '';
  colorb: any = '';
  showreviews: any = '';
  invitephone: any = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
    private http: Http,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public appsetting: AppsettingProvider,
    private socialSharing: SocialSharing,
    public events: Events) {
    if (JSON.parse(localStorage.getItem("user_data"))) {
      this.userdata = JSON.parse(localStorage.getItem("user_data"));
    }
    this.getsdata();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
  }

  rankPage() {
    this.navCtrl.push(ConnectionrankPage);
  }
  invite_phone() {
    var postdata1 = {
      senderid: this.userdata._id,
      phone: this.invitephone
    }
    console.log(postdata1);
    var serialized_all1 = this.serializeObj(postdata1);
    var url: string = this.appsetting.myGlobalVar + 'invitefriends/invite';
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(url, serialized_all1, options)
      .map(res => res.json())
      .subscribe((response) => {
        console.log(response);
        alert(response.message);
        if (response.status == true) {
        } else {

        }
      })
  }
  invite_email() {
    var postdata1 = {
      senderid: this.userdata._id,
      email: this.invitemail
    }
    console.log(postdata1);
    var serialized_all1 = this.serializeObj(postdata1);
    var url: string = this.appsetting.myGlobalVar + 'invitefriends/invite';
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(url, serialized_all1, options)
      .map(res => res.json())
      .subscribe((response) => {
        console.log(response);
        alert(response.message);
        if (response.status == true) {
        } else {

        }
      })
  }
  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Invite Via Email',
      inputs: [
        {
          name: 'username',
          placeholder: 'Enter Email Address'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {
            console.log(data.username);
            if (data.username) {
              this.invitemail = data.username;
            }
            this.invite_email();
          }
        }
      ]
    });
    alert.present();
  }
  presentPromptphone() {
    let alert = this.alertCtrl.create({
      title: 'Invite Via Phone Number',
      inputs: [
        {
          name: 'username',
          placeholder: 'Enter Phone Number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {
            console.log(data.username);
            if (data.username) {
              this.invitephone = data.username;
            }
            this.invite_phone();
          }
        }
      ]
    });
    alert.present();
  }
  bid(postid) {
    var url: string = this.appsetting.myGlobalVar + 'posts/' + postid;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.get(url, options)
      .map(res => res.json())
      .subscribe((response) => {
        localStorage.setItem('job', JSON.stringify(response));
        console.log(response);
        this.navCtrl.push(BidPage);
      })

  }
  bids(postid) {
    if (JSON.parse(localStorage.getItem("user_data"))) {
      this.userdata = JSON.parse(localStorage.getItem("user_data"));
    }

    var postdata1 = {
      userid: this.userdata._id,
      postid: postid
    }
    console.log(postdata1);
    var serialized_all1 = this.serializeObj(postdata1);
    var url: string = this.appsetting.myGlobalVar + 'myjobs/singljobbid';
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(url, serialized_all1, options)
      .map(res => res.json())
      .subscribe((response) => {
        console.log(response);
        if (response.status == true) {
          localStorage.setItem('job', JSON.stringify(response.data));
          this.navCtrl.push(BidPage);
          console.log(response);
        } else {
          this.bid(postid);
        }
      })

  }
  rewardPage() {
    this.navCtrl.push(RewardPage);
  }

  conectPage() {
    this.navCtrl.push(ConectlistPage);
  }

  presentModal() {
    let modal = this.modalCtrl.create(FilterPage);
    modal.present();
  }

  twitter() {
    //alert("t")
    this.socialSharing.shareViaTwitter("message", "image", "url").then(() => {
      //  alert("Success")
      // Success!
    }).catch(() => {
      // Error!
      alert("Error")
    });
  }
  //  whatsappShare(){
  //   this.socialSharing.shareViaWhatsApp("Message via WhatsApp", null /*Image*/,  "http://pointdeveloper.com/" /* url */)
  //     .then(()=>{
  //      // alert("Success");
  //     },
  //     ()=>{
  //        alert("failed")
  //     })
  // }
  email() {
    this.socialSharing.canShareViaEmail().then(() => {
      alert("Sharing via email is possible")
      // Sharing via email is possible
    }).catch(() => {
      alert("Sharing via email is not possible")
      // Sharing via email is not possible
    });

    // Share via email
    this.socialSharing.shareViaEmail('Body', 'Subject', ['babita@avainfotech.com']).then(() => {
      // alert("Success")
      // Success!
    }).catch(() => {
      // Error!
      //    alert("Error")
    });
  }
  fbsss() {
    //alert("fb")
    this.socialSharing.shareViaFacebook("Message via Twitter", null /*Image*/, "http://pointdeveloper.com")
      .then(() => {
        //  alert("Success");
      },
      () => {
        alert("failed")
      })

  }
  reviewPage() {
    //let modal = this.modalCtrl.create(ReviewPage);
    this.reviewdata();
    //modal.present();
  }
  public serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
    return result.join("&");
  }
  reviewdata() {
    var loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });
    loading.present()
    if (JSON.parse(localStorage.getItem("user_data"))) {
      this.userdata = JSON.parse(localStorage.getItem("user_data"));
    }

    var postdata1 = {
      vendorid: this.userdata._id,
    }
    console.log(postdata1);
    var serialized_all1 = this.serializeObj(postdata1);
    var url: string = this.appsetting.myGlobalVar + 'review/view_reviews';
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(url, serialized_all1, options)
      .map(res => res.json())
      .subscribe((response) => {
        console.log(response);
        if (response.status = true) {
          this.showreviews = response.data;
          localStorage.setItem('reviews', JSON.stringify(response.data));
          let modal = this.modalCtrl.create(ReviewPage);
          loading.dismissAll();
          modal.present();
        } else {
          alert("No reviews");
        }
      })
  }
  getsdata() {
    console.log("=======");
    if (JSON.parse(localStorage.getItem("user_data"))) {
      this.userdata = JSON.parse(localStorage.getItem("user_data"));
    }

    var postdata1 = {
      userid: this.userdata._id,
    }
    console.log(postdata1);
    var serialized_all1 = this.serializeObj(postdata1);
    var url: string = this.appsetting.myGlobalVar + 'allposts';
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(url, serialized_all1, options)
      .map(res => res.json())
      .subscribe((response) => {
        console.log(response);
        if (response.status = true) {
          this.show = response.data;
          //  for(let i in this.show){
          //         this.show[i].colorb = '';
          //  }
          console.log(response);
        } else {

        }
      })
  }
  //    getsdata(){
  //                     if(JSON.parse (localStorage.getItem("user_data"))){
  //                       this.userdata=JSON.parse (localStorage.getItem("user_data"));
  //                     }
  //                     var url: string = this.appsetting.myGlobalVar + 'posts';
  //                       let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
  //                       let options = new RequestOptions({ headers: headers });
  //                       this.http.get(url, options)
  //                         .map(res => res.json())
  //                         .subscribe((response) => {
  //                         console.log(response);
  //                         if(response.length>0){
  //                          this.show=response;
  //                          for(let i in this.show){
  //                                 this.show[i].colorb = '';
  //                          }
  //                         console.log(response);
  //                        }else{

  //                           }})
  //  }
  accept(postid) {
    alert(postid);
    if (JSON.parse(localStorage.getItem("user_data"))) {
      this.userdata = JSON.parse(localStorage.getItem("user_data"));
    }

    var postdata1 = {
      userid: this.userdata._id,
      postid: postid
    }
    console.log(postdata1);
    var serialized_all1 = this.serializeObj(postdata1);
    var url: string = this.appsetting.myGlobalVar + 'myjobs/myjob';
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(url, serialized_all1, options)
      .map(res => res.json())
      .subscribe((response) => {
        console.log(response);
        alert(response.message);
        if (response.status == true) {

        } else {

        }
      })
  }
  readmore(id) {
    console.log(id);
    var url: string = this.appsetting.myGlobalVar + 'posts/' + id;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.get(url, options)
      .map(res => res.json())
      .subscribe((response) => {
        localStorage.setItem('postdata', JSON.stringify(response));
        console.log(response);
        this.navCtrl.push(SinglepostPage);
      })


  }

  like(post_id, index) {

    console.log(index)
    //  this.show[index].colorb = '1';


    //  return false;
    if (JSON.parse(localStorage.getItem("user_data"))) {
      this.userdata = JSON.parse(localStorage.getItem("user_data"));
    }
    var postdata = {
      userid: this.userdata._id,
      postid: post_id
    }
    console.log(postdata);
    var serialized_all = this.serializeObj(postdata);
    var url: string = this.appsetting.myGlobalVar + 'likes/like_post';
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(url, serialized_all, options)
      .map(res => res.json())
      .subscribe((response) => {
        console.log(response);
        if (response.status == true) {
          // this.show[index].colorb='1';
          this.getsdata();
        } else {
          this.getsdata();
          //    this.show[index].colorb='0';
          // if(response.message=="Already liked"){
          //    this.show[index].colorb='1';
          // }else{
          //   this.show[index].colorb='0';
          // }

          //  localStorage.setItem('colorbit',JSON.stringify(0));
        }
      })

  }
}
