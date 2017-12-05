import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { AppsettingProvider } from '../../providers/appsetting/appsetting';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the BidPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bid',
  templateUrl: 'bid.html',
})
export class BidPage {
data:any='';
userdata:any='';
  constructor(public navCtrl: NavController, public navParams: NavParams,
   private http: Http,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public appsetting: AppsettingProvider) {
       if(JSON.parse(localStorage.getItem('job'))!= null || JSON.parse(localStorage.getItem('job'))!= 'undefined'){
      this.data =JSON.parse(localStorage.getItem('job'));
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BidPage');
  }
  public serializeObj(obj) {
                    var result = [];
                    for (var property in obj)
                    result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
                    return result.join("&");
                    }
  addbid(data,postid){
    alert(postid);
         if(JSON.parse (localStorage.getItem("user_data"))){
                        this.userdata=JSON.parse (localStorage.getItem("user_data"));
                      }
                    
                        var postdata1 = {
                                        userid:this.userdata._id,
                                        postid:postid,
                                        title:data.value.title,
                                        time:data.value.time,
                                        location:data.value.location,
                                        slug:data.value.slug,
                                        special_needs:data.value.special_needs,
                                        cost:data.value.cost
                                    }
                        console.log(postdata1);
                        var serialized_all1 = this.serializeObj(postdata1);
                        var url: string = this.appsetting.myGlobalVar + 'myjobs/addbid';
                        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                        let options = new RequestOptions({ headers: headers });
                        this.http.post(url, serialized_all1, options)
                          .map(res => res.json())
                          .subscribe((response) => {
                          console.log(response);
                          if(response.status==true){
                         (localStorage.setItem('job',JSON.stringify(response.data)));
                             }else{
                                      
                            }})
  }
}
