import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
// import { ProcessPage } from '../process/process';
import { TabsPage } from '../tabs/tabs';
import { AppsettingProvider } from '../../providers/appsetting/appsetting';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';
import { MenuPage } from "../menu/menu";
/**
 * Generated class for the VerifycodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verifycode',
  templateUrl: 'verifycode.html',
})
export class VerifycodePage {
data:any='';
setbit:any='';
userdata:any='';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    public loadingCtrl: LoadingController,
    public appsetting: AppsettingProvider) {
       this.setbit=JSON.parse(localStorage.getItem('bit')) ; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifycodePage');
  }
  public serializeObj(obj) {
                    var result = [];
                    for (var property in obj)
                    result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
                    return result.join("&");
                    }

                      onSubmit(data){
                        alert(data);
                        alert(this.userdata);
                        alert(this.userdata._id);
                        console.log(this.userdata)
                         var loading = this.loadingCtrl.create({
                              spinner: 'bubbles',
                              showBackdrop: false,
                              cssClass: 'loader'
                          });
                        console.log(data);
                           loading.present()
                       var postdata={
                                id:this.userdata._id ,
                                code:data.value.code
                                   }
                                   console.log(postdata);
                        var serialized_all = this.serializeObj(postdata);
                        var url:string = this.appsetting.myGlobalVar+'users/checkcode';
                        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                        let options = new RequestOptions({ headers: headers });
                        this.http.post(url, serialized_all, options)
                        .map(res=>res.json())
                        .subscribe((response)=>{
                        console.log(response);
                        loading.dismissAll();
                       if(response.status==true){
                         alert(response.data.message);
                            alert(this.setbit);
                           if(this.setbit){
                            this.navCtrl.setRoot(MenuPage);                           
                      }
                      else{
                        alert("Please try again")
                        }
                      }
                    }) 
 //this.navCtrl.push(ProcessPage);
}
}
