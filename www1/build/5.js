webpackJsonp([5],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofilePageModule", function() { return EditprofilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editprofile__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditprofilePageModule = (function () {
    function EditprofilePageModule() {
    }
    return EditprofilePageModule;
}());
EditprofilePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__editprofile__["a" /* EditprofilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__editprofile__["a" /* EditprofilePage */]),
        ],
    })
], EditprofilePageModule);

//# sourceMappingURL=editprofile.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting_appsetting__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menu_menu__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditprofilePage = (function () {
    function EditprofilePage(navCtrl, navParams, http, alertCtrl, loadingCtrl, appsetting, socialSharing, places, geolocation, camera, actionSheetCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.appsetting = appsetting;
        this.socialSharing = socialSharing;
        this.places = places;
        this.geolocation = geolocation;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.events = events;
        // private el: HTMLElement;
        this.userdata = '';
        this.data = '';
        this.id = '';
        this.imgTosend = '';
        //gall:any='';
        // img:any='';
        this.srcImage = '';
        // this.ata = 2;
        this.userdata = JSON.parse(localStorage.getItem("user_data"));
        // this.autocomplete.query=this.userdata.location;
        console.log(this.userdata);
        this.getdata();
        if (this.userdata.name == 'undefined') {
            this.userdata.name = '';
        }
        else if (this.userdata.phone == 'undefined') {
            this.userdata.phone = '';
        }
        else if (this.userdata.address == 'undefined') {
            this.userdata.address = '';
        }
        else if (this.userdata.zipcode == 'undefined') {
            this.userdata.zipcode = '';
        }
        else if (this.userdata.email == 'undefined') {
            this.userdata.email = '';
        }
        else if (this.userdata.gender == 'undefined') {
            this.userdata.gender = '';
        }
        else {
        }
        this.data = {
            name: this.userdata.name,
            email: this.userdata.email,
            phone: this.userdata.phone,
            address: this.userdata.address,
            zip: this.userdata.zipcode,
            gender: this.userdata.gender
        };
        console.log(this.userdata);
        this.id = JSON.parse(localStorage.getItem("user_data"))._id;
        // this.getlocation()
    }
    EditprofilePage.prototype.ionViewDidLoad = function () {
        //alert('kk')
        console.log('ionViewDidLoad EditprofilePage');
    };
    EditprofilePage.prototype.ngOnInit = function () {
        /*
         */
    };
    /* Fetch Image */
    EditprofilePage.prototype.images = function () {
        var _this = this;
        this.id = JSON.parse(localStorage.getItem("user_data"))._id;
        var postdata = {
            user_id: this.id,
            profile_picture: this.imgTosend,
        };
        console.log(postdata);
        var serialized_all = this.serializeObj(postdata);
        var url = this.appsetting.myGlobalVar + 'users/guest/editimage';
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(url, serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            if (response.status == true) {
                console.log(response);
                _this.getdata();
            }
            else {
            }
        });
    };
    /* End */
    /* Get Data from database */
    EditprofilePage.prototype.getdata = function () {
        var _this = this;
        var postdata = {
            id: this.userdata._id,
        };
        console.log(postdata);
        var serialized_all = this.serializeObj(postdata);
        var url = this.appsetting.myGlobalVar + 'users/guest/singleuser';
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(url, serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            //  alert(response.message);
            if (response.status == true) {
                console.log(response);
                localStorage.setItem("user_data", JSON.stringify(response.data));
                _this.userdata = JSON.parse(localStorage.getItem("user_data"));
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
        });
    };
    /* End */
    // check1 = {
    //   checked: [],
    // };
    // check12 = {
    //   checked: [],
    // };
    EditprofilePage.prototype.CameraAction1 = function () {
        var _this = this;
        var Loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        console.log('opening');
        var actionsheet = this.actionSheetCtrl.create({
            title: "Choose Album",
            buttons: [{
                    text: 'Camera',
                    handler: function () {
                        Loader.present();
                        var options = {
                            quality: 8,
                            sourceType: 1,
                            correctOrientation: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageUri) {
                            _this.srcImage = 'data:image/jpeg;base64,' + imageUri;
                            _this.imgTosend = imageUri;
                            Loader.dismiss();
                            _this.images();
                        }, function (err) {
                            alert(JSON.stringify(err));
                            Loader.dismiss();
                            console.log(err);
                        });
                    }
                },
                {
                    text: 'Gallery',
                    handler: function () {
                        console.log("Gallery Clicked");
                        //	alert("get Picture")
                        Loader.present();
                        var options = {
                            quality: 20,
                            sourceType: 0,
                            correctOrientation: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            _this.srcImage = 'data:image/jpeg;base64,' + imageData;
                            _this.imgTosend = imageData;
                            Loader.dismiss();
                            _this.images();
                        }, function (err) {
                            Loader.dismiss();
                            alert(JSON.stringify(err));
                            // Handle error
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        //  actionsheet.dismiss();
                    }
                }]
        });
        actionsheet.present();
    };
    /* Function */
    EditprofilePage.prototype.onSubmit = function (data) {
        var _this = this;
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
        };
        console.log(postdata);
        var serialized_all = this.serializeObj(postdata);
        var url = this.appsetting.myGlobalVar + 'users/guest/editprofile';
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(url, serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            //  loading.dismissAll();
            alert(response.message);
            if (response.status == true) {
                //   localStorage.setItem("user_data",JSON.stringify(response.data)); 
                _this.getdata();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__menu_menu__["a" /* MenuPage */]);
                console.log(response);
            }
            else {
            }
        });
    };
    /* Serialize */
    EditprofilePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    return EditprofilePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], EditprofilePage.prototype, "mapElement", void 0);
EditprofilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editprofile',template:/*ion-inline-start:"E:\Project\Dost user app new\src\pages\editprofile\editprofile.html"*/'<ion-header>\n  \n    <ion-navbar>\n      <ion-buttons start>\n            <button ion-button menuToggle>\n              <ion-icon name="menu"></ion-icon>\n            </button>\n          </ion-buttons>\n      <ion-title>Edit Profile</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n  \n  \n       <form #heroForm="ngForm"  novalidate>\n  <div class="pick_upload">\n  \n    <div class="pick" *ngIf=\'userdata.image\'>\n      <img [src]="userdata.image">\n    </div>\n    <a type="file" (click)="CameraAction1()" class="edit"><ion-icon ios="ios-create" md="md-create"></ion-icon></a>\n  \n  </div>\n  \n  \n  <ion-item-divider color="light">Basic Info</ion-item-divider>\n  \n    <ion-list class="base" padding="true">\n      <ion-item-group>\n        <ion-item>\n          <ion-input type="text" [(ngModel)]="data.name" name=\'name\' #name="ngModel" placeholder="Name"></ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-input type="text" [(ngModel)]="data.email" name="email" #email="ngModel" placeholder="Email"></ion-input>\n        </ion-item>\n        <div *ngIf="email.errors && (email.dirty || email.touched)" class="alert alert-danger">\n             <div [hidden]="!email.errors.pattern" class="alert alert-danger">\n            Enter a valid Email Address\n            </div>\n          </div>\n  \n        <ion-item>\n          <ion-input type="number" [(ngModel)]="data.phone" name="phone" #phone="ngModel"  pattern=\'[0-9]+\' placeholder="Phone Number"></ion-input>\n        </ion-item>\n        <div *ngIf="phone.errors && (phone.dirty || phone.touched)" class="alert alert-danger">\n        <div [hidden]="!phone.errors.pattern" class="alert alert-danger">\n         Enter a valid Phone Number\n         </div>\n       </div> \n  \n        <ion-item class="textarea1">\n          <textarea type="text" name="address" [(ngModel)]="data.address" #address="ngModel" cols="1" rows="5" placeholder="Address"></textarea>\n        </ion-item>\n\n        <ion-item>\n          <ion-input type="number" [(ngModel)]="data.zip" name="zip" #zip="ngModel"  pattern=\'[0-5]+\' placeholder="Zip Code"></ion-input>\n        </ion-item>\n        <div *ngIf="zip.errors && (zip.dirty || zip.touched)" class="alert alert-danger">\n          <div [hidden]="!zip.errors.pattern" class="alert alert-danger">\n           Enter a valid Zip Code\n           </div>\n         </div> \n  \n        <ion-list radio-group [(ngModel)]="data.gender" name="gender" #gender="ngModel" class="gender">\n          <ion-label>Gender</ion-label>\n          <ion-item>\n            <ion-label class="gender_type">Male</ion-label>\n            <ion-radio checked="true" value="male"></ion-radio>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label class="gender_type">Female</ion-label>\n            <ion-radio value="female"></ion-radio>\n          </ion-item>\n        \n        </ion-list>\n  \n      </ion-item-group>\n    </ion-list>\n  \n    <button ion-button type="submit" (click)="onSubmit(heroForm)" [disabled]="!heroForm.valid" class="publish">Save</button>\n  \n  </form>\n\n  </ion-content>\n'/*ion-inline-end:"E:\Project\Dost user app new\src\pages\editprofile\editprofile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_appsetting_appsetting__["a" /* AppsettingProvider */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
], EditprofilePage);

//# sourceMappingURL=editprofile.js.map

/***/ })

});
//# sourceMappingURL=5.js.map