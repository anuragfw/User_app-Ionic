import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { AppsettingProvider } from '../../providers/appsetting/appsetting';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';
import {AlertController} from 'ionic-angular';
import { LoginPage } from '../login/login';
@IonicPage()
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {
data:any='';
  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  private http: Http,
  public alertCtrl:AlertController,
  public loadingCtrl: LoadingController,
  public appsetting: AppsettingProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPage');
  }
 public serializeObj(obj) {
                    var result = [];
                    for (var property in obj)
                    result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
                    return result.join("&");
                    }
                    onSubmit(data){
                      var loading = this.loadingCtrl.create({
                        spinner: 'bubbles',
                        showBackdrop: false,
                        cssClass: 'loader'
                    });

                      console.log(data);
                        loading.present()
                       var postdata={
                                    email:data.value.email,
                                    }
                                   console.log(postdata);
                        var serialized_all = this.serializeObj(postdata);
                        var url:string = this.appsetting.myGlobalVar+'users/forgetpass';
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
                          }else{
                                      
                            }})

  
    }
}
