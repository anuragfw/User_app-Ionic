import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ProcessPage } from '../process/process';
import { AppsettingProvider } from '../../providers/appsetting/appsetting';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';
import {AlertController} from 'ionic-angular';
import { MenuPage } from '../menu/menu';
 import { VerifycodePage } from '../verifycode/verifycode';
/**
 * Generated class for the VsignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vsignup',
  templateUrl: 'vsignup.html',
})
export class VsignupPage {
  data:any='';
  userdata:any='';
  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  private http: Http,
  public alertCtrl:AlertController,
  public loadingCtrl: LoadingController,
  public appsetting: AppsettingProvider) {
      this.data={
        name:'Vendor Type',
        nameb:'How did you find out about us?'
      }
          this.userdata=JSON.parse(localStorage.getItem("user_data"))
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad VsignupPage');
  // this.data.name="Photographer";
    this.data.nameb='How did you find out about us?';
    this.data.name='Vendor Type';
  }
  public serializeObj(obj) {
                    var result = [];
                    for (var property in obj)
                    result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
                    return result.join("&");
                    }
  onSubmit(data){
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
   if(data.value.password != data.value.cpassword){
    let alert1 = this.alertCtrl.create({
      title: 'Error ',
      subTitle: 'Passwords must match.',
      buttons:['Try Again']
    });
    alert1.present();
  }else{ 
      console.log(data);
                      loading.present()
                       var postdata={
                                    vendor_type:data.value.name,
                                    find_us:data.value.nameb,
                                    company_name:data.value.company,
                                    phone:data.value.number,
                                    password:data.value.password,
                                    role:'Vendor',
                                    status:1,
                                    friend_invitcode:data.value.invite
                                   }
                                   console.log(postdata);
                        var serialized_all = this.serializeObj(postdata);
                        var url:string = this.appsetting.myGlobalVar+'users/home';
                        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                        let options = new RequestOptions({ headers: headers });
                        this.http.post(url, serialized_all, options)
                        .map(res=>res.json())
                        .subscribe((response)=>{
                        console.log(response);
                           loading.dismissAll();
                          alert(response.message);
                       if(response.status==true){
                        localStorage.setItem("udata",JSON.stringify(response.data)); 
                        //localStorage.setItem("user_data",JSON.stringify(response.data));
                          console.log(response);
                          localStorage.setItem("uid",JSON.stringify(response.data._id)); 
                          console.log(JSON.parse (localStorage.getItem("uid"))) ;
                         // this.navCtrl.push(ProcessPage);
                         this.navCtrl.push(VerifycodePage);
                          }else{
                        alert("Please try again")
                        }})

    }

    }

  login(){
    this.navCtrl.push(LoginPage);
  }
   login1(){
   this.navCtrl.push(ProcessPage);
  }
   




loginsss(){
 console.log(this.userdata);
  if(this.userdata == null){
     this.navCtrl.push(LoginPage);
    }else{
    this.navCtrl.setRoot(MenuPage);
  }
}
    process(){
    this.navCtrl.push(ProcessPage);
  }


}
