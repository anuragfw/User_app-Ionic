import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,LoadingController,ModalController } from 'ionic-angular';
import { AppsettingProvider } from '../../providers/appsetting/appsetting';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {
  data:any='';
  userdata:any='';
  show:any='';
  constructor( public viewCtrl: ViewController, 
  public navParams: NavParams,
  public navCtrl: NavController,
  public modalCtrl: ModalController,
    private http: Http,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public appsetting: AppsettingProvider,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPage');
  }

dismiss() {
   let data = { 'foo': 'bar' };
   this.viewCtrl.dismiss(data);
 }
 select(dataa){
   console.log(dataa);

 }
   public serializeObj(obj) {
                    var result = [];
                    for (var property in obj)
                    result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
                    return result.join("&");
                  }
    getsdata(){
     console.log("=======");
                      if(JSON.parse (localStorage.getItem("user_data"))){
                        this.userdata=JSON.parse (localStorage.getItem("user_data"));
                      }
                    
                        var postdata1 = {
                                        userid:this.userdata._id,
                                    }
                        console.log(postdata1);
                        var serialized_all1 = this.serializeObj(postdata1);
                        var url: string = this.appsetting.myGlobalVar + 'allposts';
                        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                        let options = new RequestOptions({ headers: headers });
                        this.http.post(url, serialized_all1, options)
                          .map(res => res.json())
                          .subscribe((response) => {
                          console.log(response);
                          if(response.status=true){
                           this.show=response.data;
                          for(let i of this.show){
                                 console.log(i.post_type);
                                 if(i.post_type=='BlogPost'){
                                   //this.show.push(i);
                                   console.log("]]]");
                                   console.log(i);
                                 }
                                 console.log("tets");
                           }
                          console.log(this.show);
                         }else{
                                      
                            }})
   }
onSubmit(data){
  console.log("filter");
  console.log(data);
  if(data.value.radio){
  console.log('found');
  if(data.value.radio=='blog'){
  this.getsdata();
  }


  }else{
  console.log("not founf");
  }

}
}
