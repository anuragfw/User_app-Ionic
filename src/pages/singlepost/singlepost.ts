import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import { AppsettingProvider } from '../../providers/appsetting/appsetting';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';
/**
 * Generated class for the SinglepostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-singlepost',
  templateUrl: 'singlepost.html',
})
export class SinglepostPage {
th:any='';
userdata:any=''
  constructor(public navCtrl: NavController, public navParams: NavParams,
   private http: Http,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public appsetting: AppsettingProvider,) {
    if(JSON.parse(localStorage.getItem('postdata'))!= null || JSON.parse(localStorage.getItem('postdata'))!= 'undefined'){
      this.th =JSON.parse(localStorage.getItem('postdata'));
    }
     
  }
  public serializeObj(obj) {
                    var result = [];
                    for (var property in obj)
                    result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
                    return result.join("&");
                    }
accept(postid){alert(postid);
         if(JSON.parse (localStorage.getItem("user_data"))){
                        this.userdata=JSON.parse (localStorage.getItem("user_data"));
                      }
                    
                        var postdata1 = {
                                        userid:this.userdata._id,
                                        postid:postid
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
                          if(response.status==true){
                          
                             }else{
                                      
                            }})
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SinglepostPage');
  }

}
