import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ForgotPage } from '../forgot/forgot';
// import { VsignupPage } from "../vsignup/vsignup";
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { AppsettingProvider } from '../../providers/appsetting/appsetting';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { MenuPage } from "../menu/menu";
import { SocialregisterPage } from '../socialregister/socialregister';
import { VerifycodePage } from '../verifycode/verifycode';
import { SignupPage } from '../signup/signup';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  data: any = '';
  userdata: any = '';
  gall: any = '';
  userfbdata: any = '';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: Facebook,
    private http: Http,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public appsetting: AppsettingProvider,
    private googlePlus: GooglePlus
  ) {
    // alert('here1');
  }
  signup() {
    this.navCtrl.push(SignupPage);
  }
  // vsignup() {
  //   this.navCtrl.push(VsignupPage);
  // }
  forgot() {
    this.navCtrl.push(ForgotPage);
  }

  menu() {
    this.navCtrl.setRoot(MenuPage);
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
    //  alert("bbi")
    console.log(data);
    loading.present()
    var postdata = {
      phone: data.value.phone,
      password: data.value.password
    }
    // alert(JSON.stringify(postdata));
    console.log(postdata);
    // alert("kkk");
    var serialized_all = this.serializeObj(postdata);
    var url: string = this.appsetting.myGlobalVar + 'users/guest/login';
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(url, serialized_all, options)
      .map(res => res.json())
      .subscribe((response) => {
        console.log(response);
        loading.dismissAll();
        if (response.status == true) {
          alert('You Have Successfully LoggedIn');
          localStorage.setItem('bit', JSON.stringify(0));
          console.log(response);
          localStorage.setItem("user_data", JSON.stringify(response.data));
          console.log(JSON.parse(localStorage.getItem("user_data")));
          this.userdata = JSON.parse(localStorage.getItem("user_data"));

          //    console.log(this.gall)
          console.log("bb");
          if (this.userdata.gallery_image) {
            this.gall = this.userdata.gallery_image;
          }
          if (this.userdata.image) {

            this.userdata.image = this.appsetting.imagevars + this.userdata.image
          }
          //  if(response.verify_status == 1){
          //   this.navCtrl.setRoot(MenuPage);
          // }else{
          //     this.navCtrl.push(VerifycodePage);
          // }
          this.navCtrl.setRoot(MenuPage);
        } else {
          alert(response.message);
          // alert("Please Try Again!")
        }
      }, err => {
        // alert("bb");
        //  alert(err);
      })


  }
  googlepppppp() {

    this.googlePlus.login({}).then(res => {
        if (res.imageUrl == undefined) {
          alert("gallery_image undefined")                         
          res.imageUrl = '';
        }
        alert(JSON.stringify(res))
        var postdata = {
          phone: res.email,
          name: res.displayName,
          googleId: res.userId,
          image: res.imageUrl,
          role: 'user',
          status: 1

        }
        alert(JSON.stringify(postdata));
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
            alert("response comes"+JSON.stringify(response))
            if (response.status == true) {
              console.log(response);
              localStorage.setItem('bit', JSON.stringify(2));
              localStorage.setItem("user_data", JSON.stringify(response.data));
              //  localStorage.setItem("udata", JSON.stringify(response.data));
              // console.log(JSON.parse(localStorage.getItem("user_data")));
              // this.userdata = JSON.parse(localStorage.getItem("user_data"));
              this.userdata = response.data;
              console.log(this.gall)
              if (this.userdata.gallery_image) {
                alert("gallery_image")                
                this.gall = this.userdata.gallery_image;
              }
              if (response.data.status == 0) {
                alert("MenuPage")
                
                this.navCtrl.setRoot(MenuPage);
              } else {
                alert("socialregister page")
                this.navCtrl.push(SocialregisterPage);
              }
              // alert(response.exists)
              // if (response.exists == 0) {
              //   alert("SocialregisterPage with exists 0")                
              //   this.navCtrl.push(SocialregisterPage);
              // } else {
              //   alert("MenuPage")
                
              //   this.navCtrl.setRoot(MenuPage);
              // }
            } else {
              alert(response.message);
               alert("Please Try Again!")
            }
          }, err => {
            // alert("bb");
            alert(err);
          })
      })
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
