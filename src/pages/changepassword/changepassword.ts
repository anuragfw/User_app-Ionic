import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { AppsettingProvider } from '../../providers/appsetting/appsetting';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';
import {AlertController} from 'ionic-angular';
import { LoginPage } from '../login/login';
/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
})
export class ChangepasswordPage {
data:any='';
userdata:any='';
  constructor(
  public navCtrl: NavController,
  public navParams: NavParams,
  private http: Http,
  public alertCtrl:AlertController,
  public loadingCtrl: LoadingController,
  public appsetting: AppsettingProvider) {
  this.userdata=JSON.parse(localStorage.getItem("user_data"))
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepasswordPage');
  }
 public serializeObj(obj) {
                    var result = [];
                    for (var property in obj)
                    result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
                    return result.join("&");
                    }
 onSubmit(data){
   if(data.value.newpassword==data.value.cpassword){
                  var loading = this.loadingCtrl.create({
                        spinner: 'bubbles',
                        showBackdrop: false,
                        cssClass: 'loader'
                    });

                      console.log(data);
                        loading.present()
                       var postdata={
                                    id:this.userdata._id,
                                    password:data.value.newpassword,
                                    }
                                   console.log(postdata);
                        var serialized_all = this.serializeObj(postdata);
                        var url:string = this.appsetting.myGlobalVar+'users/changepass';
                        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                        let options = new RequestOptions({ headers: headers });
                        this.http.post(url, serialized_all, options)
                        .map(res=>res.json())
                        .subscribe((response)=>{
                        console.log(response);
                           loading.dismissAll();
                           alert(response.message);
                       if(response.status==true){
                      this.navCtrl.push(LoginPage);
                      localStorage.clear();
                          }else{
                             }})
 }else{
    alert('new password mismatch'); 
   }
       } 
}
