import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { AppsettingProvider } from '../../providers/appsetting/appsetting';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';
import {AlertController} from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
userdata:any='';
gall:any='';
img:any='';
  constructor( 
  public navCtrl: NavController,
  public navParams: NavParams,
  private http: Http,
  public alertCtrl:AlertController,
  public loadingCtrl: LoadingController,
  public appsetting: AppsettingProvider ){
 this.userdata=JSON.parse(localStorage.getItem("user_data"))
 this.getdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  public serializeObj(obj) {
                    var result = [];
                    for (var property in obj)
                    result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
                    return result.join("&");
                    }
   getdata(){
                      var loading = this.loadingCtrl.create({
                        spinner: 'bubbles',
                        showBackdrop: false,
                        cssClass: 'loader'
                    });
                        loading.present()
                       var postdata={
                                    id:this.userdata._id,
                                   }
                                   console.log(postdata);
                        var serialized_all = this.serializeObj(postdata);
                        var url:string = this.appsetting.myGlobalVar+'users/singleuser';
                        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                        let options = new RequestOptions({ headers: headers });
                        this.http.post(url, serialized_all, options)
                        .map(res=>res.json())
                        .subscribe((response)=>{
                        console.log(response);
                           loading.dismissAll();
                         //  alert(response.message);
                       if(response.status==true){
                          console.log(response);
                          localStorage.setItem("user_data",JSON.stringify(response.data)); 
                          this.userdata=JSON.parse (localStorage.getItem("user_data"));
                          this.gall=this.userdata.gallery_image;
                            console.log(this.gall)
                            if(this.gall){
                              for(let i in this.gall){
                                    this.gall[i].img = this.appsetting.imagevar+this.gall[i].image
                              }
                              console.log(this.gall)
                            }
                                if (this.userdata.image) {
                              this.img= this.userdata.image.split(':')[0];
                                console.log(this.img); 
                             //   alert(this.img)
                                if(this.img=='https'){
                                    this.userdata.image =this.userdata.image;
                                }else{
                                  this.userdata.image = this.appsetting.imagevars + this.userdata.image;
                                }
                          
        console.log(this.userdata.image)
        console.log('menucheck');
      }
                          // console.log(JSON.parse (localStorage.getItem("user_data"))) ;
                          // this.navCtrl.setRoot('MenuPage');
                          }else{
                                      
                            }})

  
    }
    
}
