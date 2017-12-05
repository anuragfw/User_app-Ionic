import { Component,ViewChild, ElementRef, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,Platform} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AppsettingProvider } from '../../providers/appsetting/appsetting';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import {googlemaps} from 'googlemaps';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ActionSheetController } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ProcessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google; 
@IonicPage()
@Component({
  selector: 'page-process',
  templateUrl: 'process.html',
})
export class ProcessPage {
private el: HTMLElement;
make:any='';
makes:any= [];
wearss:any=[];
wear:any=[];
vv:any='';
gooms:any=[];
vv1:any='';
ata:any='';
gom:any='';
ll:any='';
services:any='';
additionalservices:any='';
design_status8:any='';
design8:boolean;
democheck8:boolean;
deliverycheck8:boolean;
delivery_to_home:boolean;
devilerystatus:any='';
bulk_discount:boolean;
travel_to_city:boolean;
delivery_status:any='';
travles:any='';
price_per_plate:any='';
demo_status8:any='';
morediscount:any;
  addvar:any='';
  venu:any='';
  /*DETAILS*/
  goomitem:any=[];
public items=[];
item:any= [];
venuitems1:any=[];
makeitem:any=[];
checkitem:any= [];
itemqs:any=[];
ditems:any=[];
public additmes=[];
public wae1=[];
/*Price per day*/
public items1=[];
public items111=[];
  public cours:any=[];
  cour:any='';
  myDiv: string;
  data: any = '';
  id:any='';
  gall:any='';
  //dis = 2;
  discount:any='';
  lat;long;
  window:any;
  customer_id:any='';
  txn_id:any='';   
  delivery_status8:any='';
  public currentLatitude : any;
  public currentLongitude : any;
  addddon:any='';
  photovedio:any='';
  autocompleteItems: any;
  autocomplete: any= ''; 
  acService:any;
  placesService: any;
  highlights:any='';
  srcImage:any='';
  imgTosend:any='';
  @ViewChild('map') mapElement: ElementRef;
 map: any;
  geocoder: any;
  testCheckboxOpen: boolean;
  testCheckboxResult;
  cb_value: boolean;
  status:any='';
  cb_value1: boolean;
  status1:any='';
  cb_value3: boolean;
  status3:any='';
  cb_value2: boolean;
  status2:any='';
  cb_value4: boolean;
  status4:any='';
  cand:boolean;
  cand1:boolean;
  cand2:boolean;
  cand3:boolean;
  cand4:boolean;
  statuss:any='';
  status4s:any='';
  status3s:any='';
  status2s:any='';
  status1s:any='';
  userdata:any='';
  dis:any=2;
  vendor_check:any='';
    morestatus:any='';
 morestatus1:any='';
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
   public platform: Platform
) {
    this.platform.registerBackButtonAction(() => {
      navigator['app'].exitApp();                
            });
  this.ata=2;
 if(JSON.parse(localStorage.getItem("udata"))!= null ||  JSON.parse(localStorage.getItem("udata"))!= undefined){
     this.userdata=JSON.parse(localStorage.getItem("udata"));

 if(this.userdata.vendor_type=='Photographer'){
      this.vendor_check=1;
 }else if (this.userdata.vendor_type=='Bridal Wear'){
      this.vendor_check=2;
 }else if (this.userdata.vendor_type=='Wedding venue'){
      this.vendor_check=3;
 }else if(this.userdata.vendor_type=='Wedding Decorator'){
     this.vendor_check=4;
 }else if (this.userdata.vendor_type=='Wedding planners'){
  this.vendor_check=4;
 }else if (this.userdata.vendor_type=='Mehndi artist'){
  this.vendor_check=4;
 }else if (this.userdata.vendor_type=='Sangeet choreographers'){
  this.vendor_check=4;
 }else if (this.userdata.vendor_type=='Wedding cards'){
  this.vendor_check=4;
 }else if (this.userdata.vendor_type=='Wedding cakes'){
  this.vendor_check=4;
 }else if (this.userdata.vendor_type=='wedding favours'){
  this.vendor_check=4;
 }else if (this.userdata.vendor_type=='Make up'){
  this.vendor_check=5;
 }else if (this.userdata.vendor_type=='Groomwear' || this.userdata.vendor_type=='Bridal Wear'){
   this.vendor_check=6;
 }else if(this.userdata.vendor_type=='Wedding catering'){
   this.vendor_check=7;
 }else if (this.userdata.vendor_type=='Wedding jewellery'|| this.userdata.vendor_type=='wedding accessories'){
    this.vendor_check=8;
 }
  console.log(this.userdata);
  this.getdata();
  if(this.userdata.establishment_year=='null'){
      this.userdata.establishment_year='';
  }if(this.userdata.working_hours=='undefined'){
      this.userdata.working_hours='';
  }else if(this.userdata.fb=='undefined'){
      this.userdata.fb='';
  }else if(this.userdata.twitter=='undefined'){
    this.userdata.twitter='';
  }else if(this.userdata.insta=='undefined'){
    this.userdata.insta='';
  }else if(this.userdata.awards=='undefined'){
   this.userdata.awards='';
  }else if(this.userdata.discount_amount=='undefined'){
     this.userdata.discount_amount='';
  }else if(this.userdata.effective_date=="undefined"){
  this.userdata.effective_date='';
  }else if(this.userdata.product_detail=="undefined"){
  this.userdata.product_detail='';
  }else if(this.userdata.discount){
    if(this.userdata.discount.title==undefined){
  this.userdata.discount.title='';
  }else if(this.userdata.discount.amount==undefined){
   this.userdata.discount.amount='';
  }
  }else{
      this.userdata.discount={
        title:'',
        amount:''
      }
     
  }
  
                      //  photo_book:data.value.adddon_photo,
                      //  portrait_framing:data.value.adddon_portrait   
if(this.userdata.addon){
    if(this.userdata.addon.candid==undefined){
    console.log("++++++++++++++++++++");
    this.userdata.addon.candid='';
    this.cb_value==false
  }else{
    console.log("--------------------");
      this.cb_value=true;
      this.updateCbValue();
  }
    if(this.userdata.addon.video_editing==undefined){
    console.log("++++++++++++++++++++");
    this.userdata.addon.video_editing='';
    this.cb_value1==false
  }else{
    console.log("--------------------");
      this.cb_value1=true;
      this.nextvalue();
  }
   if(this.userdata.addon.photo_book==undefined){
    console.log("++++++++++++++++++++");
    this.userdata.addon.photo_book='';
    this.cb_value2==false
  }else{
    console.log("--------------------");
      this.cb_value2=true;
      this.nextvalue1();
  }
   if(this.userdata.addon.portrait_framing==undefined){
    console.log("++++++++++++++++++++");
    this.userdata.addon.portrait_framing='';
    this.cb_value3==false
  }else{
    console.log("--------------------");
      this.cb_value3=true;
      this.nextvalue2();
  }
}else{
  this.userdata.addon={
    portrait_framing:'',
    photo_book:'',
    video_editing:'',
    candid:''
  }

}
if(this.userdata.highlights){
 if(this.userdata.highlights.portrait_framing==undefined){
    console.log("++++++++++++++++++++");
    this.userdata.highlights.portrait_framing='';
    this.cand3==false
  }else{
    console.log("--------------------");
      this.cand3=true;
      this.addon3();
  }
   if(this.userdata.highlights.candid==undefined){
    console.log("++++++++++++++++++++");
    this.userdata.highlights.candid='';
    this.cand==false
  }else{
    console.log("--------------------");
      this.cand=true;
      this.addon();
  }
  if(this.userdata.highlights.video_editing==undefined){
    console.log("++++++++++++++++++++");
    this.userdata.highlights.video_editing='';
    this.cand1==false
  }else{
    console.log("--------------------");
      this.cand1=true;
      this.addon1();
  }
  if(this.userdata.highlights.photo_book==undefined){
    console.log("++++++++++++++++++++");
    this.userdata.highlights.photo_book='';
    this.cand2==false
  }else{
    console.log("--------------------");
      this.cand2=true;
      this.addon2();
  }
}else{
    this.userdata.highlights={
    portrait_framing:'',
    photo_book:'',
    video_editing:'',
    candid:''
  }
}
if(this.userdata.discount){
   if(this.userdata.discount.day==undefined || this.userdata.discount.day==""){
    console.log("++++++++++++++++++++-----------------");
    this.userdata.discount.day='';
    this.dis='';
    }else{
    console.log("--------------------");
      this.dis= JSON.parse(this.userdata.discount.day);
      console.log(this.dis);
       if(this.dis=='more'){
            this.ata==1;
        }else{
            this.ata==0;
        }
     
    }
}else{
  this.userdata.discount={
    amount:'',
    title:''
  }
}
 
  
  
  this.data={
    year:this.userdata.establishment_year,
    hours:this.userdata.working_hours,
    fb:this.userdata.fb,
    twitter:this.userdata.twitter,
    insta:this.userdata.insta,
    awards:this.userdata.awards,
    adddon_candid:this.userdata.addon.candid,
    adddon_vedio:  this.userdata.addon.video_editing,
    adddon_photo:this.userdata.addon.photo_book,
    adddon_portrait:this.userdata.addon.portrait_framing,
    h_portrait:this.userdata.highlights.portrait_framing,
    hight__candid:this.userdata.highlights.candid,
    hight_vedio:this.userdata.highlights.video_editing,
    h_photo:this.userdata.highlights.photo_book,
    product_detail: this.userdata.product_detail,
    discount_amount:this.userdata.discount_amount,
    effective_date:this.userdata.effective_date,
    title:this.userdata.discount.title,
    amount:this.userdata.discount.amount,
  }
  console.log(this.userdata);
  this.id=JSON.parse(localStorage.getItem("udata"))._id;
  alert(this.id);
 }
  
    // if(JSON.parse(localStorage.getItem("user_data")){}

    this. getlocation()
   // this.data.time="hour"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProcessPage');
  }
   ngOnInit() {
    this.acService = new google.maps.places.AutocompleteService();    
	this.geocoder= new google.maps.Geocoder();
    this.autocompleteItems = [];
    this.autocomplete = {
    query: ''
    };        
  }
  image(){console.log(JSON.parse(localStorage.getItem("udata")));
  //alert(JSON.parse(localStorage.getItem("udata")));
    // alert(JSON.parse(localStorage.getItem("user_data")));
    //     alert(this.userdata);
      this.id=JSON.parse(localStorage.getItem("udata"))._id;
    //   alert(this.id);
    // alert("api");
             var postdata={
                 user_id: this.id,
                 profile_picture:this.imgTosend,
                                   }
                                   console.log(postdata);
                                  //  alert(JSON.stringify(postdata));
                                  //  alert("test");
                        var serialized_all = this.serializeObj(postdata);
                        var url:string = this.appsetting.myGlobalVar+'users/post_user_image_app';
                        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                        let options = new RequestOptions({ headers: headers });
                        this.http.post(url, serialized_all, options)
                        .map(res=>res.json())
                        .subscribe((response)=>{
                        console.log(response);
                            // alert("bbi");
                            // alert(response);
                            // alert(JSON.stringify(response));
                       if(response.status==true){
                    var dataaa=this.appsetting.imagevar+response.data;
                          this.gall=response.user.gallery_image;
         console.log("bb");
         if(this.gall){
         if(this.gall.length>0){
           console.log("if");
        for(let i in this.gall){
         this.gall[i] = this.appsetting.imagevar+this.gall[i]
              }
          }else{
            console.log("else")
          this.gall=this.appsetting.imagevar+this.gall;
          }
        }
                          // localStorage.setItem("user_data",JSON.stringify(response.data)); 
                          // this.userdata=JSON.parse (localStorage.getItem("user_data"));
                        
                        }else{
                                      
                            }})


  }
  getdata() {
    var postdata = {
      id: this.userdata._id,
    }
    console.log(postdata);
    var serialized_all = this.serializeObj(postdata);
    var url: string = this.appsetting.myGlobalVar + 'users/singleuser';
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(url, serialized_all, options)
      .map(res => res.json())
      .subscribe((response) => {
        console.log(response);
        //  alert(response.message);
        if (response.status == true) {
          console.log(response);
          localStorage.setItem("udata", JSON.stringify(response.data));
          this.userdata = JSON.parse(localStorage.getItem("udata"));
          this.gall = this.userdata.gallery_image;
          console.log(this.gall)
          if(this.gall){
                                   if(this.gall.length){
                              for(let i in this.gall){
                                    this.gall[i].img = this.appsetting.imagevar+this.gall[i].image
                              }
                              console.log(this.gall)
                            }
                            }
          if (this.userdata.additional_addon) {
            this.items = this.userdata.additional_addon;
            console.log(this.items);
            this.morestatus = true;
            for (let i = 0; i < this.items.length; i++) {
              if (this.items[i].amount != '') {
                this.check1.checked[i] = true;
              }
            }
            // this.check1={
            //   checked:true
            // }
            console.log(this.check1);
            console.log("tets");
          }
          if (this.userdata.photo_vedio) {
            console.log(this.userdata.photo_vedio);
            this.data.photos = this.userdata.photo_vedio.photo
            console.log(this.data.photos)
            this.data.videos = this.userdata.photo_vedio.vedio
            console.log(this.data.videos)
          }
          if (this.userdata.additional_photo_vedio) {
            this.items1 = this.userdata.additional_photo_vedio
          }


          if (this.userdata.additional_highlights) {
            this.additmes = this.userdata.additional_highlights;
            for (let i = 0; i < this.additmes.length; i++) {
              if (this.additmes[i].amount != '') {
                this.check12.checked[i] = true;
              }
            }
            this.morestatus1 = true;
            // this.check12={
            //   checked:[]
            // }
          }
        } else {

        }
      })


  }
    updateSearch() {
      console.log('modal > updateSearch');
      if (this.autocomplete.query == '') {
      this.autocompleteItems = [];
      return;
      }
      //let self = this; 
      let config = { 
      //types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
      input: this.autocomplete.query, 
      componentRestrictions: {  } 
      }
      this.acService.getPlacePredictions(config, ((predictions, status)=> {
      console.log('modal > getPlacePredictions > status > ', status);
      this.autocompleteItems = [];   
      console.log(predictions)         
      predictions.forEach(((prediction)=> {   
        console.log("rufh")           
      this.autocompleteItems.push(prediction);
      })
    );
      })
    );
      }
    check1={
     checked:[],
    };
    check12={
      checked:[],
    }; 
    addNew(title, amount, value) {
      console.log(amount);
      //console.log(value);
      this.items.push({
        title: title,
        amount: amount
      })
      console.log('edit clicked 2:', this.items);
      this.item.title = '';
      this.item.amount = '';
      this.cb_value4 = false;
      value = true;

      //  this.check1={
      //  checked:true,
      // }
      this.morestatus = true;
      console.log(this.check1.checked);
      console.log(this.items.length);
      var index = this.items.length-1;
      this.checkBox1(true,index);
      
      console.log("hey4");
    } 
        adddiscount(dday,dtitle,damount) {
      console.log(dday,dtitle,damount);
      //console.log(value);
      this.ditems.push({
        day:dday,
        title: dtitle,
        amount: damount
      })
       this.data.mtitle='';
      this.data.mday='';
      this.data.mamount='';
      this.ata=2;
    console.log(this.ditems);
    console.log("tetstettstetst");
    }                                        
  Paytm(){
  //alert("kkk")
  
           this.window.plugins.paytm.startPayment(this.txn_id, this.customer_id, "anirudh@avainfotech.com" ,"8968989319", "10", "staging", successCallback, failureCallback);
          function successCallback(response) {
            // alert("gfgf");
            // alert(JSON.stringify(response));
          //staging (or) product 
            var transactionBankTxnId = response.MID;
            var transactionMId = response.ORDERID;
            var transactionOrderId = response.TXNID;
            var transactionTxnDate = response.TXNDATE;
            var transactionTxnId = response.BANKTXNID;

            console.log("Payed Successfully");
        }

        function failureCallback(message) {
            alert('Failed because: ' + message);
            console.log('Failed because: ' + message);
        }
      }
chooseItem(item){
        console.log(item)
        this.autocomplete.query=item.description;
        this.autocompleteItems = [];
      }
CameraAction() {
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
     // alert("test");
      this.image()
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
   this.image();
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
 public serializeObj(obj) {
                    var result = [];
                    for (var property in obj)
                    result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
                    return result.join("&");
                  }

  updateCbValue() {
    console.log('Something new state:' + this.cb_value);
    if(this.cb_value==true){
        this.status = this.cb_value
        console.log("true");
    }else{
      this.status = this.cb_value ;
    console.log("false");
    }
  }
  sound_system:boolean;
  soundstatus:any='';
  sound(){
    if(this.sound_system==true){
        this.soundstatus = this.sound_system
        console.log("true");
    }else{
      this.soundstatus = this.sound_system ;
    console.log("false");
    }
  }
  lighting:boolean;
  lightstatus:any='';
    light(){
    if(this.lighting==true){
        this.lightstatus = this.lighting
        console.log("true");
    }else{
      this.lightstatus = this.lighting ;
    console.log("false");
    }
  }
  securitystatus:any='';
  securitys:boolean;
  security(){
     if(this.securitys==true){
        this.securitystatus = this.securitys
        console.log("true");
    }else{
      this.securitystatus = this.securitys ;
    console.log("false");
    }
  }
  cocktail_service:boolean;
   cocktailstatus:any='';
  cocktail(){
     if(this.cocktail_service==true){
        this.cocktailstatus = this.cocktail_service
        console.log("true");
    }else{
      this.cocktailstatus = this.cocktail_service ;
    console.log("false");
    }
  }
  design:boolean;
  designstatus:any='';
  designValue(){
        if(this.design==true){
        this.designstatus = this.design
        console.log("true");
    }else{
      this.designstatus = this.design ;
    console.log("false");
    }
  }
  match:boolean;
  matchstatus:any='';
  matchValue(){
            if(this.match==true){
        this.matchstatus = this.match
        console.log("true");
    }else{
      this.matchstatus = this.match ;
    console.log("false");
    }
  }
  tailor:boolean;
  tailorstatus:any='';
  trailorValue(){
    if(this.tailor==true){
        this.tailorstatus = this.tailor
        console.log("true");
    }else{
      this.tailorstatus = this.tailor ;
    console.log("false");
    }
  }
  pool_side:boolean;
  poolstatus:any='';
  pool(){
        if(this.pool_side==true){
        this.poolstatus = this.pool_side
        console.log("true");
    }else{
      this.poolstatus = this.pool_side ;
    console.log("false");
    }
  }
  parking_space:boolean;
  parkingstatus:any='';
  parking(){
          if(this.parking_space==true){
        this.parkingstatus = this.parking_space
        console.log("true");
    }else{
      this.parkingstatus = this.parking_space ;
    console.log("false");
    }
  }
  alocohalstatus:any='';
  alocohal:boolean;
  alocohals(){
        if(this.alocohal==true){
        this.alocohalstatus = this.alocohal
        console.log("true");
    }else{
      this.alocohalstatus = this.alocohal ;
    console.log("false");
    }
  }
  decoration:boolean;
dfmstatus:any='';
  decorations(){
           if(this.decoration==true){
        this.dfmstatus = this.decoration
        console.log("true");
    }else{
      this.dfmstatus = this.decoration ;
    console.log("false");
    }
  }
    deliveryvalue() {
    console.log('Something new state:' + this.deliverycheck8);
    if(this.deliverycheck8==true){
        this.delivery_status8= this.deliverycheck8
        console.log("true");
    }else{
      this.delivery_status8 = this.deliverycheck8 ;
    console.log("false");
    }
  }
  dj_musc:boolean;
  djstatus:any='';
  music(){
      if(this.dj_musc==true){
        this.djstatus= this.dj_musc
        console.log("true");
    }else{
      this.djstatus = this.dj_musc ;
    console.log("false");
    } 
  }
      demovalue() {
    console.log('Something new state:' + this.democheck8);
    if(this.democheck8==true){
        this.demo_status8= this.democheck8
        console.log("true");
    }else{
      this.demo_status8 = this.democheck8 ;
    console.log("false");
    }
  }
  airstatus:any='';
  air_brush:boolean;
  airValue(){
    if(this.air_brush==true){
        this.airstatus= this.air_brush
        console.log("true");
    }else{
      this.airstatus = this.air_brush ;
    console.log("false");
    }
  }
  travels:boolean;
  travelstatus:any='';
  travelValue(){
     if(this.travels==true){
        this.travelstatus= this.travels
        console.log("true");
    }else{
      this.travelstatus = this.travels ;
    console.log("false");
    }
  }
  design8value() {
    console.log('Something new state:' + this.democheck8);
    if(this.design8==true){
        this.design_status8= this.design8
        console.log("true");
    }else{
      this.design_status8 = this.design8 ;
    console.log("false");
    }
  }
   nextvalue() {
    console.log('Something new state:' + this.cb_value1);
    if(this.cb_value1==true){
        this.status1 = this.cb_value1
        console.log("true");
    }else{
       this.status1 = this.cb_value1  
       console.log("false");
    }
  }
     nextvalue1() {
    console.log('Something new state:' + this.cb_value2);
    if(this.cb_value2==true){
        this.status2 = this.cb_value2
        console.log("true");
    }else{
       this.status2 = this.cb_value2 
       console.log("false");
    }
  }
     nextvalue2() {
    console.log('Something new state:' + this.cb_value3);
    if(this.cb_value3==true){
        this.status3 = this.cb_value3
        console.log("true");
    }else{
       this.status3 = this.cb_value3  
       console.log("false");
    }
  }
     nextvalue3() {
    console.log('Something new state:' + this.cb_value4);
    if(this.cb_value4==true){
        this.status4 = this.cb_value4
        console.log("true");
    }else{
       this.status4 = this.cb_value4  
       console.log("false");
    }
  }
     addon() {
    console.log('Something new state:' + this.cand);
    if(this.cand==true){
        this.statuss = this.cand
        console.log("true");
    }else{
       this.statuss = this.cand  
       console.log("false");
    }
  }
  theme_wedding:boolean;
   weddingstatus:any='';
  theme() {
    console.log('Something new state:' + this.cand);
    if(this.theme_wedding==true){
        this.weddingstatus = this.theme_wedding
        console.log("true");
    }else{
       this.weddingstatus = this.theme_wedding  
       console.log("false");
    }
  }
      addon1() {
    console.log('Something new state:' + this.cand1);
    if(this.cand1==true){
        this.status1s = this.cand1
        console.log("true");
    }else{
       this.status1s = this.cand1  
       console.log("false");
    }
  }
  outdoor:boolean;
outdoorstatus:any='';
  outdoors(){
     if(this.outdoor==true){
        this.outdoorstatus = this.outdoor
        console.log("true");
    }else{
       this.outdoorstatus = this.outdoor  
       console.log("false");
    }
  }
      addon2() {
    console.log('Something new state:' + this.cand2);
    if(this.cand2==true){
        this.status2s = this.cand2
        console.log("true");
    }else{
       this.status2s = this.cand2  
       console.log("false");
    }
  }
      addon3() {
    console.log('Something new state:' + this.cand3);
    if(this.cand3==true){
        this.status3s = this.cand3
        console.log("true");
    }else{
       this.status3s = this.cand3 
       console.log("false");
    }
  }

     addon4() {
   console.log('Something new state:' + this.cand4);
    if(this.cand4==true){
        this.status4s = this.cand4
        console.log("true");
    }else{
       this.status4s = this.cand4 
       console.log("false");
    }
  }
     travel() {
    console.log('Something new state:' + this.cand);
    if(this.travel_to_city==true){
        this.travles = this.travel_to_city
        console.log("true");
    }else{
       this.travles = this.travel_to_city  
       console.log("false");
    }
  }
      bulk() {
    console.log('Something new state:' + this.delivery_to_home);
    if(this.bulk_discount==true){
        this.devilerystatus = this.bulk_discount
        console.log("true");
    }else{
       this.devilerystatus = this.bulk_discount  
       console.log("false");
    }
  }
      delivery() {
    console.log('Something new state:' + this.cand);
    if(this.delivery_to_home==true){
        this.delivery_status = this.delivery_to_home
        console.log("true");
    }else{
       this.delivery_status = this.delivery_to_home  
       console.log("false");
    }
  }
  // view:any='';
  // status3r:any='';
  //  nextvalueppp2() {
  //   console.log('Something new state:' + this.view);
  //   if(this.view==true){
  //       this.status3r = this.view
  //       console.log("true");
  //   }else{
  //      this.status3r = this.view  
  //      console.log("false");
  //   }
  // }
  
      addNewadd(titles, amounts) {
        console.log(this.cand4);
        console.log(titles);
        console.log(amounts);
        this.additmes.push({
          title: titles,
          amount: amounts
        })
        this.itemqs = {
          title: '',
          amount: ''
        }

        this.morestatus1 = true;
        this.cand4 = false;
        console.log(this.cand4);
        //this.addon4()
        //    this.check12={
        //  checked:true,
        // }

      }   

   checkBox1(checked,index): void {
     console.log(this.check1)
      console.log(checked)
      this.check1.checked[index] =checked;
        if(checked==true){
        this.morestatus = checked
        console.log("true");
    }else{
         this.items.splice(
          this.items.indexOf(index), 1)
       this.morestatus = checked
       console.log("false");
    } 

 }
    checkBox12(checked,index): void {
       this.check12.checked[index] =checked;
     console.log(checked)
     console.log(index)
        if(checked==true){
        this.morestatus1 = checked
        console.log("true");
    }else{
       this.additmes.splice(
          this.additmes.indexOf(index), 1)
       this.morestatus1 = checked
       console.log("false");
    } 

 }
 
makeup(){
  this.make=1;
}
  mcqAnswer(dis,ttt){

  console.log(dis);
    console.log('pppppp');
      console.log(ttt);
  if(dis=='more'){
    console.log("moreee")
       this.ata=1;
  }else{
    console.log("more else");
       this.ata=0;
  }
  if(ttt!=undefined){
    console.log("sdfs");
    this.data.title=ttt.title,
    this.data.amount=ttt.amount
       this.morediscount={
               day:ttt.day,
              title:ttt.title,
              amount:ttt.amount
            }
  }
}
     
  onSubmit(data, auto, dis) {
    console.log("babiya");
    console.log(data.value.effective_date);
    console.log(dis);
    console.log(auto.query);
    console.log(data.value.title);
    console.log(data.value.amount);
    this.discount = {
      day: dis,
      title: data.value.title,
      amount: data.value.amount
    }
    this.price_per_plate = {
      vegiterian: data.value.veg,
      non_veg: data.value.nonveg
    }
    console.log(this.discount);
    console.log("================");
    console.log(this.cour);
    console.log("////////");
    console.log(data);
    console.log(this.items)

    this.items.forEach(((value, key) => {
      console.log("rufh");
      console.log(value.amount);
      console.log(value.title);
      console.log(key);

    }))
    if (this.userdata.vendor_type == 'wedding accessories') {
      this.addddon = {
        delivery: data.value.adddon_delivery8,
        house_demo: data.value.adddon_demo8,
        design: data.value.adddon_design8
      }
      this.highlights = {
        travel_to_city: data.value.add_travel,
        bulk_discount: data.value.add_bulk,
        delivery_to_home: data.value.add_delivery
      }
      this.additionalservices = this.items111;
    } else if (this.userdata.vendor_type == 'Photographer') {
      this.addddon = {
        candid: data.value.adddon_candid,
        video_editing: data.value.adddon_vedio,
        photo_book: data.value.adddon_photo,
        portrait_framing: data.value.adddon_portrait,
      }
      // this.highlights = {
      //   candid: data.value.hight__candid,
      //   video_editing: data.value.hight_vedio,
      //   photo_book: data.value.h_photo,
      //   portrait_framing: data.value.h_portrait
      // }
    } else if (this.userdata.vendor_type == 'Make up') {
      this.addddon = {
        travel: data.value.adddon_travel,
        air_brush: data.value.adddon_air,

      }
      this.additionalservices = this.makeitem

    } else if (this.userdata.vendor_type == 'Groomwear') {
      this.addddon = {
        trailoring: data.value.adddon_tailor,
        designing: data.value.adddon_design,
        matching: data.value.adddon_match
      }
      this.services = {
        title: data.value.goomout,
        amount: data.value.goomamout
      }
      this.additionalservices = this.goomitem

    } else if (this.userdata.vendor_type == 'Wedding venue') {
      this.addddon = {
        sound: data.value.addon_sound,
        lighting: data.value.addon_light,
        security: data.value.addon_security,
        cocktail_services: data.value.addon_cocktail
      }
      this.highlights = {
        pool_side: data.value.adddon_pool,
        Outdoor: data.value.addon_outdoorstatus,
        Alocohal: data.value.addon_alocohal,
        Decoration: data.value.addon_dfmstatus,
        DJ_Music: data.value.djstatus,
        Parking_Space: data.value.addon_parking,
      }
      this.additionalservices = this.venuitems1;
      this.services = {
        day: 'Day',
        amount: data.value.venurent
      }
    } else if (this.userdata.vendor_type == 'Wedding Decorator') {
      this.services = {
        starting_price: data.value.wedding_decorator
      }
      this.highlights = {
        theme_wedding: data.value.adddon_theme
      }

    } else if (this.userdata.vendor_type == 'Wedding planners') {
      this.services = {
        starting_price: data.value.wedding_decorator
      }
      this.highlights = {
        theme_wedding: data.value.adddon_theme
      }
    } else if (this.userdata.vendor_type == 'Wedding cards') {
      this.services = {
        starting_price: data.value.wedding_decorator
      }
      this.highlights = {
        travel_to_city: data.value.add_travel,
        bulk_discount: data.value.add_bulk,
        delivery_to_home: data.value.add_delivery
      }
    } else if (this.userdata.vendor_type == 'Mehndi artist') {
      this.highlights = {
        travel_to_city: data.value.add_travel,
        bulk_discount: data.value.add_bulk,
        delivery_to_home: data.value.add_delivery
      }
    } else if (this.userdata.vendor_type == 'Wedding cakes') {
      this.services = {
        starting_price: data.value.wedding_decorator
      }
      this.highlights = {
        travel_to_city: data.value.add_travel,
        bulk_discount: data.value.add_bulk,
        delivery_to_home: data.value.add_delivery
      }
    } else if (this.userdata.vendor_type == 'Wedding jewellery') {
      this.addddon = {
        delivery: data.value.adddon_delivery8,
        house_demo: data.value.adddon_demo8,
        design: data.value.adddon_design8
      }
      this.highlights = {
        travel_to_city: data.value.add_travel,
        bulk_discount: data.value.add_bulk,
        delivery_to_home: data.value.add_delivery
      }
      this.additionalservices = this.items111;
    } else if (this.userdata.vendor_type == 'Wedding catering') {
      this.additionalservices = this.wae1
      this.services = {
        type: data.value.ptypefg,
        amount: data.value.dfds
      }
    } else if (this.userdata.vendor_type == 'Sangeet choreographers') {
      this.services = {
        starting_price: data.value.wedding_decorator
      }
      this.highlights = {
        travel_to_city: data.value.add_travel,
        bulk_discount: data.value.add_bulk,
        delivery_to_home: data.value.add_delivery
      }
    } else if (this.userdata.vendor_type == 'wedding favours') {
      this.services = {
        starting_price: data.value.wedding_decorator
      }
      this.highlights = {
        travel_to_city: data.value.add_travel,
        bulk_discount: data.value.add_bulk,
        delivery_to_home: data.value.add_delivery
      }
    } else if (this.userdata.vendor_type == 'Bridal Wear') {
      this.services = {
        title: data.value.goomout,
        amount: data.value.goomamout
      }
      this.additionalservices = this.goomitem
   this.highlights = {
        travel_to_city: data.value.add_travel,
        bulk_discount: data.value.add_bulk,
        delivery_to_home: data.value.add_delivery
      }
    }

    console.log(this.addddon);
    console.log("+++++++++ss" + this.userdata.vendor_type)

    this.photovedio = {
      time: this.data.times,
      photo: this.data.photos,
      vedio: this.data.videos
    }
    console.log(this.photovedio);
    console.log("----------");
    console.log(this.addddon);

    console.log(this.addddon);
    var loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });
    console.log(data);
    console.log(this.items);
    console.log("hey")
    console.log(this.items1);
    //loading.present()
    if (data.value.year == undefined) {
      data.value.year = null;
    }

    var postdata = {
      id: this.id,
      email: data.value.email,
      establishment_year: data.value.year,
      sworking_hours: data.value.starthours,
      eworking_hours: data.value.endhours,
      facebook_username: data.value.fb,
      twitter_username: data.value.twitter,
      instagram_username: data.value.insta,
      location: auto.query,
      awards: data.value.awards,
      discount_amount: data.value.discount_amount,
      effective_date: data.value.effective_date,
      product_detail: data.value.product_detail,
      maximum_guest: data.value.maxguest,
      minimum_guest: data.value.minguest,
      additional_addon: JSON.stringify(this.items),
      addon: JSON.stringify(this.addddon),
      highlights: JSON.stringify(this.highlights),
      discount: JSON.stringify(this.discount),
      gallery: JSON.stringify(this.gall),
      additional_highlights: JSON.stringify(this.additmes),
      photo_vedio: JSON.stringify(this.photovedio),
      additional_photo_vedio: JSON.stringify(this.items1),
      additional_discounts: JSON.stringify(this.morediscount),
      price_per_plate: JSON.stringify(this.price_per_plate),
      additionalservices: JSON.stringify(this.additionalservices),
      services: JSON.stringify(this.services)
    }
    console.log(postdata);
    var serialized_all = this.serializeObj(postdata);
    var url: string = this.appsetting.myGlobalVar + 'users/savebasicinfo';
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(url, serialized_all, options)
      .map(res => res.json())
      .subscribe((response) => {
        console.log(response);
        //  loading.dismissAll();
        // alert('response')
        // alert(JSON.stringify(response.message));
        alert(response.message);
        if (response.status == true) {
          localStorage.setItem("user_data", JSON.stringify(response.data));
          this.getdata();
          this.navCtrl.push(LoginPage);
          console.log(response);
        } else {
          // alert(JSON.stringify(response));
        }
      })



  }
  menu(){
    this.navCtrl.setRoot('MenuPage');
  }


twitter(){
  //alert("t")
    this.socialSharing. shareViaTwitter("message", "image", "url").then(() => {
  //  alert("Success")
  // Success!
}).catch(() => {
  // Error!
      alert("Error")
});
  }

emails(){
   var link="https://play.google.com/store/apps/details?id=com.dost.wedding&hl=en";
  this.socialSharing.canShareViaEmail().then(() => {
 //   alert("Sharing via email is possible")
  // Sharing via email is possible
}).catch(() => {
  alert("Sharing via email is not possible")
  // Sharing via email is not possible
});

// Share via email
this.socialSharing.shareViaEmail('Hi there! I&#39;m inviting you to join the DOST network, an app for all things wedding! Sign up as a vendor and have access to all the business opportunities around you and connect with your users directly. Use the code"'+ this.userdata.invitecode+'" while signing up so you and I can enjoy early bird offers. Cheers!. Enjoy! App Link '+ link , 'Invite Friend', []).then(() => {
   // alert("Success")
  // Success!
}).catch(() => {
  // Error!
  //    alert("Error")
});
}

 whatsappShare(){
   var icon=this.appsetting.imagevars+'icon.png'
     var link="https://play.google.com/store/apps/details?id=com.dost.wedding&hl=en";
    this.socialSharing.shareViaWhatsApp('<b>Hi</b> there! I&#39;m inviting you to join the DOST network, an app for all things wedding! Sign up as a vendor and have access to all the business opportunities around you and connect with your users directly. Use the code"'+ this.userdata.invitecode+'" while signing up so you and I can enjoy early bird offers. Cheers!. Enjoy! App Link ', icon /*Image*/, link /* url */)
      .then(()=>{
       // alert("Success");
      },
      ()=>{
         alert("failed")
      })
  }

   fbsss(){
      //var icon=this.appsetting.imagevars+'icon.png'
     //alert("fb")
     var link = "http://wedding-dost.us-east-1.elasticbeanstalk.com/invitationcode?code=" + this.userdata._id;
    this.socialSharing.shareViaFacebook('Hi there! I&#39;m inviting you to join the DOST network, an app for all things wedding! Sign up as a vendor and have access to all the business opportunities around you and connect with your users directly. Use the code"'+ this.userdata.invitecode+'" while signing up so you and I can enjoy early bird offers. Cheers!. Enjoy! App Link '+ link,null /*Image*/,link)
    .then(()=>{
       // alert("Success");
      },
      ()=>{
         alert("failed")
      })

  }
  getlocation(){
 //   alert("getlocation");
    let headers = new Headers();
   var aa = this;
	 headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    this.geolocation.getCurrentPosition().then((resp) => {
     // alert(resp.coords.latitude)
    this.currentLatitude =  resp.coords.latitude
    this.currentLongitude = resp.coords.longitude
    // alert(this.currentLatitude)
    // alert( this.currentLongitude)
     let latLng = new google.maps.LatLng(this.currentLatitude,this.currentLongitude); 
    this.geocoder.geocode({'latLng': latLng}, ((results, status)=>{
		if (status == google.maps.GeocoderStatus.OK) {
    if (results[1]) {
    this.autocomplete.query= results[1].formatted_address;
                    }
                }
		   
	   })
	   )
	     let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        }; 
        this.map = new google.maps.Map(aa.mapElement.nativeElement, mapOptions);
         var marker = new google.maps.Marker({
         position: latLng,
         draggable: true,
         map: this.map,
       });
      
     google.maps.event.addListener(marker, 'dragend', ((marker)=>{
      var latLng = marker.latLng; 
      this.currentLatitude = latLng.lat();
      this.currentLongitude = latLng.lng();
     console.log(this.currentLatitude)
     console.log(this.currentLongitude)
     let latLong = new google.maps.LatLng(this.currentLatitude,this.currentLongitude); 
	  this.geocoder.geocode({'latLng': latLong}, ((results, status)=>{
		  console.log(results);
		   if (status == google.maps.GeocoderStatus.OK) {
          if (results[1]) {
              this.autocomplete.query= results[1].formatted_address;
              console.log("srishti")
              console.log( this.autocomplete.query)
                    }
                }
		   
	   })
	   ) }));
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
   }
    addMore(photo,video,value) {
        this.vv=0;
   console.log(photo, video,value);
    this.items1.push({
      photo:photo,
      video:video,
      day:value
     })
  
     console.log('edit clicked 1:', this.items1);
     this.item.photow = '';
     this.item.videow = '';
      this.item.pricew = '';
    }
    addMorewear(type,amount){
      this.ll=0;
   console.log(type,amount);
    this.wae1.push({
      photypeto:type,
      amount:amount,
     
     })
  
     console.log('edit clicked 1:', this.items1);
     this.wear.ptype = '';
     this.wear.amount = '';
      }
     addMoregoom(ut,am){
        this.gom=0;
      this.goomitem.push({
      out:ut,
     amounts:am
     })
  
     console.log('edit clicked 1:', this.goomitem);
     this.gooms.event = '';
    this.gooms.amount='';
    }
   
    addMoresss(day,price){
              this.venu=0;
        this.venuitems1.push({
      video:price,
      day:day
     })
   
     console.log('edit clicked 1:', this.venuitems1);
    
     this.item.videow = '';
      this.item.pricew = '';
    }
    addMoremakeup(event,amount){
      this.make=0;
    this.makeitem.push({
      events:event,
      amounts:amount,
     })
     console.log(this.make);
     this.makes.event='';
     this.makes.amount='';
    }
       addMore1(title,amount) {
         console.log(title,amount)
        this.vv1=0;
   console.log(title, amount);
    this.items111.push({
      title:title,
      amount:amount,
      })
     console.log('edit clicked 1:', this.items111);
     this.checkitem.check8_title = '';
     this.checkitem.check8_amount = '';
    }
    
    baic(){
      this.vv=1;
    }
     baic1(){
      this.vv1=1;
    }
    addvenvue(){
       this.venu=1;
    }
    goom(){
      this.gom=1;
    }
    tty(){
      this.ll=1;
    }
}