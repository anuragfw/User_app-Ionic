import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
// import { VsignupPage } from '../vsignup/vsignup';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { AppsettingProvider } from '../../providers/appsetting/appsetting';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { MenuPage } from '../menu/menu';
import { SocialregisterPage } from '../socialregister/socialregister';
/**
 * Generated class for the Intro page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class Intro {
  userdata: any = '';
  userfbdata: any = '';
  gall: any = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fb: Facebook,
    private http: Http,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public appsetting: AppsettingProvider,
    private googlePlus: GooglePlus) {
    console.log(JSON.parse(localStorage.getItem("user_data")));
    this.userdata = JSON.parse(localStorage.getItem("user_data"))

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Intro');
  }

  login() {
    console.log(this.userdata);
    if (this.userdata == null) {
      this.navCtrl.push(LoginPage);
    } else {
      //  this.navCtrl.push(MenuPage);
      this.navCtrl.setRoot(MenuPage);
    }

  }
  googlepppppp() {
    this.googlePlus.login({})
      .then((res => {
        alert("tr");
        alert(JSON.stringify(res))
        var postdata = {
          email: res.email,
          name: res.name,
          googleId: res.userId,
          image: res.imageUrl
        }
        alert(JSON.stringify(postdata));
        console.log(postdata);
        // alert("kkk");
        var serialized_all = this.serializeObj(postdata);
        var url: string = this.appsetting.myGlobalVar + 'users/user_register_googleplus_app';
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        let options = new RequestOptions({ headers: headers });
        this.http.post(url, serialized_all, options)
          .map(res => res.json())
          .subscribe((response) => {
            console.log(response);
            alert("Api hit");

            if (response.status == true) {
              alert(JSON.stringify(response));
              console.log(response);
              localStorage.setItem("user_data", JSON.stringify(response.data));
              localStorage.setItem("udata", JSON.stringify(response.data));
              console.log(JSON.parse(localStorage.getItem("user_data")));
              this.userdata = JSON.parse(localStorage.getItem("user_data"));
              this.gall = this.userdata.gallery_image;
              console.log(this.gall)
              if (this.gall) {
                for (let i in this.gall) {
                  this.gall[i].img = this.appsetting.imagevar + this.gall[i].image
                }
                console.log(this.gall)
              }

              if (response.exists == 0) {
                this.navCtrl.push(SocialregisterPage);
              } else {
                this.navCtrl.setRoot(MenuPage);
              }
            } else {
              alert(response.message);
              alert("Please Try Again!")
            }
          }, err => {
            //. alert("bb");
            alert(err);
          })


      }))
      .catch(err => {
        alert(err)
        //alert("ii");
      });
  }
  signup() {
    this.navCtrl.push(SignupPage);
  }
  public serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
    return result.join("&");
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
          //   alert(JSON.stringify(this.userfbdata));
          var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
          });
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
              role: 'Vendor',
            }
            //alert(JSON.stringify(postdata));
            console.log(postdata);
            //alert("kkk");
            var serialized_all = this.serializeObj(postdata);
            var url: string = this.appsetting.myGlobalVar + 'users/user_register_fb_app';
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
                  this.gall = this.userdata.gallery_image;
                  console.log(this.gall)
                  if (this.gall) {
                    if (this.gall.length > 0) {
                      for (let i in this.gall) {
                        this.gall[i].img = this.appsetting.imagevar + this.gall[i].image
                      }
                      console.log(this.gall)
                    }
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


    this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);

  }
  test() {
    this.navCtrl.push(SocialregisterPage);
  }
}
