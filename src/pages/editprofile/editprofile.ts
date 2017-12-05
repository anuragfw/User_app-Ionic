import { Component,ViewChild, ElementRef, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ActionSheetController, AlertController,Events } from 'ionic-angular';
import { AppsettingProvider } from '../../providers/appsetting/appsetting';
import { SocialregisterPage } from '../socialregister/socialregister';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import {googlemaps} from 'googlemaps';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { MenuPage } from '../menu/menu';
import { VerifycodePage } from '../verifycode/verifycode';
declare var google;
/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {
// private el: HTMLElement;
userdata: any = '';
data: any = '';
id: any = '';
imgTosend: any = '';
//gall:any='';
// img:any='';
srcImage: any = '';

  @ViewChild('map') mapElement: ElementRef;


  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  private http: Http,
  public alertCtrl:AlertController,
  public loadingCtrl: LoadingController,
  public appsetting: AppsettingProvider,
  private socialSharing: SocialSharing,
  public places: ElementRef,
  private geolocation: Geolocation,
  private camera: Camera,
  public actionSheetCtrl: ActionSheetController,
  public events: Events
) {
   // this.ata = 2;
   this.userdata = JSON.parse(localStorage.getItem("user_data"));
   // this.autocomplete.query=this.userdata.location;
   console.log(this.userdata);
   this.getdata();
   if (this.userdata.name == 'undefined') {
     this.userdata.name = '';
   } else if (this.userdata.phone == 'undefined') {
     this.userdata.phone = '';
   } else if (this.userdata.address == 'undefined') {
     this.userdata.address = '';
   } else if (this.userdata.zipcode == 'undefined') {
     this.userdata.zipcode = '';
   } else if (this.userdata.email == 'undefined') {
     this.userdata.email = '';
   } else if (this.userdata.gender == 'undefined') {
     this.userdata.gender = '';
   } else {

   }

   this.data = {
     name: this.userdata.name,
     email: this.userdata.email,
     phone: this.userdata.phone,
     address: this.userdata.address,
     zip: this.userdata.zipcode,
     gender: this.userdata.gender
   }
   console.log(this.userdata);
   this.id = JSON.parse(localStorage.getItem("user_data"))._id;
   // this.getlocation()
  }

  ionViewDidLoad() {
    //alert('kk')
    console.log('ionViewDidLoad EditprofilePage');
         
  }
  ngOnInit() {
    /* 
     */
  }

  /* Fetch Image */
  images() {
    this.id = JSON.parse(localStorage.getItem("user_data"))._id;
    var postdata = {
      user_id: this.id,
      profile_picture: this.imgTosend,
    }
    console.log(postdata);
    var serialized_all = this.serializeObj(postdata);
    var url: string = this.appsetting.myGlobalVar + 'users/guest/editimage';
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(url, serialized_all, options)
      .map(res => res.json())
      .subscribe((response) => {
        console.log(response);
        if (response.status == true) {
          console.log(response);
          this.getdata()
        } else {

        }
      })
  }
  /* End */

  /* Get Data from database */
  getdata() {
    var postdata = {
      id: this.userdata._id,
    }
    console.log(postdata);
    var serialized_all = this.serializeObj(postdata);
    var url: string = this.appsetting.myGlobalVar + 'users/guest/singleuser';
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(url, serialized_all, options)
      .map(res => res.json())
      .subscribe((response) => {
        console.log(response);
        //  alert(response.message);
        if (response.status == true) {
          console.log(response);
          localStorage.setItem("user_data", JSON.stringify(response.data));

          this.userdata = JSON.parse(localStorage.getItem("user_data"));

          // this.gall = this.userdata.gallery_image;
          // console.log(this.gall)
          // if (this.gall) {
          //   for (let i in this.gall) {
          //     this.gall[i].img = this.api.imagevar + this.gall[i].image
          //   }
          //   console.log(this.gall)
          // }
          // if (this.userdata.image) {
          //   this.img = this.userdata.image.split(':')[0];
          //   console.log(this.img);
          //   // alert(this.img)
          //   if (this.img == 'https') {
          //     this.userdata.image = this.userdata.image;
          //   } else {
          //     this.userdata.image = this.api.imagevars + this.userdata.image;
          //   }

          //   console.log('menucheck');
          // }
          // this.events.publish('msg_added', this.userdata.image);
          // this.events.publish('msg_added1', this.userdata);
          // console.log(this.userdata.image)
        }
      })
  }
  /* End */

  // check1 = {
  //   checked: [],
  // };
  // check12 = {
  //   checked: [],
  // };




  CameraAction1() {
    var Loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });
    console.log('opening');

    let actionsheet = this.actionSheetCtrl.create({
      title: "Choose Album",
      buttons: [{
        text: 'Camera',
        handler: () => {
          Loader.present();
          const options: CameraOptions = {
            quality: 8,
            sourceType: 1,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          }
          this.camera.getPicture(options).then((imageUri) => {
            this.srcImage = 'data:image/jpeg;base64,' + imageUri;
            this.imgTosend = imageUri;
            Loader.dismiss();
            this.images()

          }, (err) => {
            alert(JSON.stringify(err));
            Loader.dismiss();
            console.log(err);
          });
        }
      },
      {
        text: 'Gallery',
        handler: () => {
          console.log("Gallery Clicked");
          //	alert("get Picture")
          Loader.present();
          const options: CameraOptions = {
            quality: 20,
            sourceType: 0,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          }
          this.camera.getPicture(options).then((imageData) => {
            this.srcImage = 'data:image/jpeg;base64,' + imageData;
            this.imgTosend = imageData;
            Loader.dismiss();
            this.images();
          }, (err) => {
            Loader.dismiss();
            alert(JSON.stringify(err));
            // Handle error
          });
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
          //  actionsheet.dismiss();
        }
      }]
    });

    actionsheet.present();
  }

 
  /* Function */
  onSubmit(data) {
    // var loading = 
    this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });
    console.log(data.value);
    //loading.present()
    var postdata = {
      id: this.id,
      name: data.value.name,
      email: data.value.email,
      phone: data.value.phone,
      address: data.value.address,
      zipcode: data.value.zip,
      gender: data.value.gender
    }
    console.log(postdata);
    var serialized_all = this.serializeObj(postdata);
    var url: string = this.appsetting.myGlobalVar + 'users/guest/editprofile';
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(url, serialized_all, options)
      .map(res => res.json())
      .subscribe((response) => {
        console.log(response);
        //  loading.dismissAll();
        alert(response.message);
        if (response.status == true) {
          //   localStorage.setItem("user_data",JSON.stringify(response.data)); 
          this.getdata();
          this.navCtrl.setRoot(MenuPage);
          console.log(response);
        } else {

        }
      })
  }

  /* Serialize */
  public serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
    return result.join("&");
  }
  /* End */

}