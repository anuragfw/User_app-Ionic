import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ProcessPage } from '../process/process';
import { AppsettingProvider } from '../../providers/appsetting/appsetting';
import 'rxjs/add/operator/map';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';

import { Http, Headers, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { VerifycodePage } from '../verifycode/verifycode';
import { SocialregisterPage } from '../socialregister/socialregister';
/**
 * Generated class for the VsignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  data: any = '';
  userdata: any = '';
  gall:any='';
  userfbdata:any='';
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    private fb: Facebook,
    private googlePlus: GooglePlus,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public appsetting: AppsettingProvider) {
    // this.data = {
    //   name: 'Vendor Type',
    //   nameb: 'How did you find out about us?'
    // }
    this.userdata = JSON.parse(localStorage.getItem("user_data"))
  }
  loginsss() {
    console.log(this.userdata);
    if (this.userdata == null) {
      this.navCtrl.push(LoginPage);
    } else {
      this.navCtrl.setRoot(MenuPage);
    }
  }
  process() {
    this.navCtrl.push(ProcessPage);
  }
  login() {
    this.navCtrl.push(LoginPage);
  }
  login1() {
    this.navCtrl.push(ProcessPage);
  }
  


  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
    // this.data.name="Photographer";
    // this.data.nameb = 'How did you find out about us?';
    // this.data.name = 'Vendor Type';
  }
  public serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
    return result.join("&");
  }
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
        name: data.value.name,
        email: data.value.email,
        find_us: data.value.nameb,
        phone: data.value.number,
        password: data.value.password,
        status: 1,
        role: "user",
        friend_invitcode: data.value.invite
      }
      console.log(postdata);
      var serialized_all = this.serializeObj(postdata);
      var url: string = this.appsetting.myGlobalVar + 'users/guest/signup';
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
            //localStorage.setItem("user_data",JSON.stringify(response.data));
            console.log(response);
            localStorage.setItem("uid", JSON.stringify(response.data._id));
            console.log(JSON.parse(localStorage.getItem("uid")));
            // this.navCtrl.push(ProcessPage);
            this.navCtrl.push(VerifycodePage);
          } else {
            alert("Please try again")
          }
        })

    }

  }

  googlepppppp() {
    this.googlePlus.login({})
      .then((res => {
        if (res.imageUrl == undefined) {
          res.imageUrl = '';
        }
        //alert(JSON.stringify(res))
        var postdata = {
          phone: res.email,
          name: res.name,
          googleId: res.userId,
          image: res.imageUrl,
          role: 'user',
          status: 1

        }
        //alert(JSON.stringify(postdata));
        console.log(postdata);
        // alert("kkk");
        var serialized_all = this.serializeObj(postdata);
        var url: string = this.appsetting.myGlobalVar + 'users/guest/register_googleplus_app';
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        let options = new RequestOptions({ headers: headers });
        this.http.post(url, serialized_all, options)
          .map(res => res.json())
          .subscribe((response) => {
            console.log(response);

            if (response.status == true) {
              console.log(response);
              localStorage.setItem('bit', JSON.stringify(2));
              localStorage.setItem("user_data", JSON.stringify(response.data));
              //  localStorage.setItem("udata", JSON.stringify(response.data));
              console.log(JSON.parse(localStorage.getItem("user_data")));
              this.userdata = JSON.parse(localStorage.getItem("user_data"));

              console.log(this.gall)
              if (this.userdata.gallery_image) {
                this.gall = this.userdata.gallery_image;
              }
              if (response.verify_status == 1) {
                this.navCtrl.setRoot(MenuPage);
              } else {
                this.navCtrl.push(SocialregisterPage);
              }
              // alert(response.exists)
              if (response.exists == 0) {
                this.navCtrl.push(SocialregisterPage);
              } else {
                this.navCtrl.setRoot(MenuPage);
              }


            } else {
              alert(response.message);
              //  alert("Please Try Again!")
            }
          }, err => {
            //. alert("bb");
            alert(err);
          })


      }))
      .catch(err => alert(err));
  }

  fblogin() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => {
        //alert(JSON.stringify(res));
        console.log(JSON.stringify(res));
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        let options = new RequestOptions({ headers: headers });
        this.http.post(' https://graph.facebook.com/v2.9/' + res.authResponse.userID + '?fields=id,picture,email,name,birthday,locale,age_range,gender,first_name,last_name&access_token=' + res.authResponse.accessToken, options).map(res => res.json()).subscribe(data => {
          this.userfbdata = data;
          console.log(this.userfbdata);
          ///alert(JSON.stringify(this.userfbdata));
          var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
          });
          //alert("bbi")
          if (this.userfbdata.email == 'undefned') {
            alert("Your FB account not verified");
          } else {
            console.log(data);
            //   loading.present()
            var postdata = {
              email: this.userfbdata.email,
              name: this.userfbdata.name,
              fbId: this.userfbdata.id,
              image: this.userfbdata.picture.data.url,
              phone: this.userfbdata.email,
              role: 'user',
            }
            //alert(JSON.stringify(postdata));
            console.log(postdata);
            //alert("kkk");
            var serialized_all = this.serializeObj(postdata);
            var url: string = this.appsetting.myGlobalVar + 'users/guest/register_fb_app';
            let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
            let options = new RequestOptions({ headers: headers });
            this.http.post(url, serialized_all, options)
              .map(res => res.json())
              .subscribe((response) => {
                console.log(response);
                if (response.status == true) {
                  //  alert(response.message);
                  console.log(response);
                  localStorage.setItem('bit', JSON.stringify(1));
                  localStorage.setItem("user_data", JSON.stringify(response.data));
                  localStorage.setItem("udata", JSON.stringify(response.data));

                  console.log(JSON.parse(localStorage.getItem("user_data")));
                  this.userdata = JSON.parse(localStorage.getItem("user_data"));
                  if (this.userdata.gallery_image) {
                    this.gall = this.userdata.gallery_image;
                  }
                  if (response.verify_status == 1) {
                    this.navCtrl.setRoot(MenuPage);
                  } else {
                    this.navCtrl.push(SocialregisterPage);
                  }
                  if (response.exists == 0) {
                    this.navCtrl.push(SocialregisterPage);
                  } else {
                    this.navCtrl.setRoot(MenuPage);
                  }
                  //  this.navCtrl.push(SocialregisterPage);
                  //  this.navCtrl.setRoot(MenuPage);
                } else {
                  alert(response.message);
                  //  alert("Please Try Again!")
                }
              }, err => {
                //   alert("bb");
                //  alert(err);
              })
          }

        })
      }
      )
      .catch(e => console.log('Error logging into Facebook', e));
    // this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
  }
}
