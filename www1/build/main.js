webpackJsonp([31],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppsettingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AppsettingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AppsettingProvider = (function () {
    //  myGlobalVar: string ='http://localhost:8080/api/';
    function AppsettingProvider(http) {
        this.http = http;
        // myGlobalVar: string = 'http://wedding-dost.us-east-1.elasticbeanstalk.com/api/';
        //  demonew.us-east-1.elasticbeanstalk.com
        this.myGlobalVar = 'http://demonew.us-east-1.elasticbeanstalk.com/api/';
        this.imagevar = 'http://demonew.us-east-1.elasticbeanstalk.com/admin/uploads/players/';
        this.imagevars = 'http://demonew.us-east-1.elasticbeanstalk.com/admin/uploads/';
        console.log('Hello AppsettingProvider Provider');
    }
    return AppsettingProvider;
}());
AppsettingProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AppsettingProvider);

//# sourceMappingURL=appsetting.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the JobdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JobdetailPage = (function () {
    function JobdetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    JobdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JobdetailPage');
    };
    return JobdetailPage;
}());
JobdetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-jobdetail',template:/*ion-inline-start:"E:\Project\Dost user app new\src\pages\jobdetail\jobdetail.html"*/'<!--\n  Generated template for the JobdetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>job Detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n<ion-card>\n      <ion-card-content class="cnt">\n        <ion-card-title>\n         #Id\n          </ion-card-title>\n        <h3>Title(Location)</h3>\n        <div class="date">\n          <h4>Start Date: <span>26 oct,2014</span></h4>\n          <h4>End Date: <span>30 oct,2014</span></h4>\n        </div>\n        <h4>Cost: <span style="color:#e5053a;">2,00,000</span></h4>\n        <h3>Partnership</h3>\n        <ul class="part">\n            <li>\n              <span>Sunny(Photographer)</span>\n              <span>Amount</span>\n            </li>\n            <li>\n              <span>Babita(Choreographer)</span>\n               <span>Amount</span>\n            </li>\n            <li>\n              <span>Honey(Dj)</span>\n               <span>Amount</span>\n            </li>\n        </ul>\n        <p>\n          The most popular industrial group ever, and largely\n          responsible for bringing the music to a mass audience.\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"E:\Project\Dost user app new\src\pages\jobdetail\jobdetail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], JobdetailPage);

//# sourceMappingURL=jobdetail.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting_appsetting__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ForgotPage = (function () {
    function ForgotPage(navCtrl, navParams, http, alertCtrl, loadingCtrl, appsetting) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.appsetting = appsetting;
        this.data = '';
    }
    ForgotPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPage');
    };
    ForgotPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ForgotPage.prototype.onSubmit = function (data) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        console.log(data);
        loading.present();
        var postdata = {
            email: data.value.email,
        };
        console.log(postdata);
        var serialized_all = this.serializeObj(postdata);
        var url = this.appsetting.myGlobalVar + 'users/forgetpass';
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(url, serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            loading.dismissAll();
            alert(response.message);
            if (response.status == true) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
            else {
            }
        });
    };
    return ForgotPage;
}());
ForgotPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forgot',template:/*ion-inline-start:"E:\Project\Dost user app new\src\pages\forgot\forgot.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Forgot Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n  <div style="height:10vh;float:left;width:100%;"></div>\n  \n  <div class="logo">\n      <img src="assets/image/logo.png">\n     </div>\n  \n     <div style="height:5vh;float:left;width:100%;"></div>\n  \n     <div class="signin_field">\n     <form #heroForm="ngForm"  novalidate>\n  \n     <ion-list>\n            <ion-item>\n            <ion-input type="email" placeholder="Enter Your Email" [(ngModel)]="data.email" name="email" #email="ngModel"  required></ion-input>\n          </ion-item>\n            <div *ngIf="email.errors && (email.dirty || email.touched)" class="alert alert-danger">\n          <div [hidden]="!email.errors.required" class="alert alert-danger">\n            Email is required\n            </div>\n             <div [hidden]="!email.errors.pattern" class="alert alert-danger">\n            Enter a valid Email Address\n            </div>\n          </div>  \n        \n        </ion-list>\n  \n        <button ion-button type="submit"  (click)="onSubmit(heroForm)">Send</button>\n  \n        </form>\n\n\n        </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\Project\Dost user app new\src\pages\forgot\forgot.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_appsetting_appsetting__["a" /* AppsettingProvider */]])
], ForgotPage);

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting_appsetting__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(12);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, http, alertCtrl, loadingCtrl, appsetting) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.appsetting = appsetting;
        this.userdata = '';
        this.gall = '';
        this.img = '';
        this.userdata = JSON.parse(localStorage.getItem("user_data"));
        this.getdata();
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ProfilePage.prototype.getdata = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        loading.present();
        var postdata = {
            id: this.userdata._id,
        };
        console.log(postdata);
        var serialized_all = this.serializeObj(postdata);
        var url = this.appsetting.myGlobalVar + 'users/singleuser';
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(url, serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            loading.dismissAll();
            //  alert(response.message);
            if (response.status == true) {
                console.log(response);
                localStorage.setItem("user_data", JSON.stringify(response.data));
                _this.userdata = JSON.parse(localStorage.getItem("user_data"));
                _this.gall = _this.userdata.gallery_image;
                console.log(_this.gall);
                if (_this.gall) {
                    for (var i in _this.gall) {
                        _this.gall[i].img = _this.appsetting.imagevar + _this.gall[i].image;
                    }
                    console.log(_this.gall);
                }
                if (_this.userdata.image) {
                    _this.img = _this.userdata.image.split(':')[0];
                    console.log(_this.img);
                    //   alert(this.img)
                    if (_this.img == 'https') {
                        _this.userdata.image = _this.userdata.image;
                    }
                    else {
                        _this.userdata.image = _this.appsetting.imagevars + _this.userdata.image;
                    }
                    console.log(_this.userdata.image);
                    console.log('menucheck');
                }
                // console.log(JSON.parse (localStorage.getItem("user_data"))) ;
                // this.navCtrl.setRoot('MenuPage');
            }
            else {
            }
        });
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"E:\Project\Dost user app new\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <form>\n\n<div class="profileouter">  \n    <div class="profileimg" *ngIf=\'userdata.image\'> \n    <img [src]="userdata.image">\n</div>\n   <div class="profileimg" *ngIf=\'!userdata.image\'> \n    <img src="assets/image/index.jpg">\n\n    </div>\n</div>\n\n   <div class="signin_field">\n        <div class="date" *ngIf="userdata.vendor_type!=undefined">\n          <h4>Vendor Type</h4>\n          <h4>{{userdata.vendor_type}}</h4>\n        </div>\n\n        <div class="date" *ngIf="userdata.company_name!=undefined">\n          <h4>Comapny Name</h4>\n          <h4 *ngIf="userdata.company_name">{{userdata.company_name}}</h4>\n        </div>\n\n         <div class="date" *ngIf="userdata.email!=\'undefined\' ">\n          <h4 *ngIf="userdata.email!=\'undefined\' || userdata.email!=\'\'|| userdata.email!=null ">Email</h4>\n          <h4>{{userdata.email}}</h4>\n        </div>\n\n        <div class="date" *ngIf="userdata.phone!=undefined">\n          <h4>Phone Number</h4>\n          <h4>{{userdata.phone}}</h4>\n        </div>\n</div>\n\n\n<!--process start-->\n  \n\n  <ion-list class="base">\n    <ion-item-group *ngIf="userdata.establishment_year!=\'null\' && userdata.working_hours != \'undefined\' && userdata.facebook_username!= \'undefined\' && userdata.twitter_username!=\'undefined\' && userdata.instagram_username && userdata.awards">\n        <ion-item-divider color="light">Basic Info</ion-item-divider>\n        <div *ngIf="userdata.establishment_year!=\'null\'">\n      <div class="date" *ngIf="userdata.establishment_year !=null">\n          <h4 >Establishment Year</h4>\n          <h4>{{userdata.establishment_year}}</h4>\n        </div>\n        </div>\n          <div *ngIf="userdata.sworking_hours != \'undefined\' || userdata.eworking_hours != \'undefined\'">\n        <div class="date" >\n          <h4  *ngIf="userdata.sworking_hours"> Start Time</h4>\n          <h4>{{userdata.sworking_hours}} hrs</h4>\n         </div>\n         <div  class="date">\n            <h4  *ngIf="userdata.eworking_hours"> End Time</h4>\n          <h4>{{userdata.eworking_hours}} hrs</h4>\n         </div>\n        </div>\n         <div *ngIf="userdata.facebook_username">\n        <div class="date" *ngIf="userdata.facebook_username!= \'undefined\'">\n          <h4 *ngIf="userdata.facebook_username">Facebook</h4>\n          <h4>{{userdata.facebook_username}}</h4>\n        </div>\n        </div>\n        <div  *ngIf="userdata.twitter_username">\n        <div class="date" *ngIf="userdata.twitter_username!=\'undefined\'">\n          <h4>Twitter</h4>\n          <h4>{{userdata.twitter_username}}</h4>\n        </div>\n        </div>\n          <div *ngIf="userdata.instagram_username">\n        <div class="date" *ngIf="userdata.instagram_username!=\'undefined\'">\n          <h4 *ngIf="userdata.instagram_username">Instagram</h4>\n          <h4 >{{userdata.instagram_username}}</h4>\n        </div>\n        </div>\n      <div *ngIf="userdata.awards">\n        <div class="date" *ngIf="userdata.awards!=\'undefined\'  ">\n          <h4>Award & Recognition</h4>\n          <h4>{{userdata.awards}}</h4>\n        </div>\n      </div>\n    </ion-item-group>\n  </ion-list>\n\n<ion-list class="base inpt">\n    <ion-item-group>\n        <ion-item-divider color="light">Service & Cost Details</ion-item-divider>\n     <h3>{{userdata.vendor_type}}</h3>\n\n     <div style="width:100%;float:left;height:1vh;"></div>\n<div *ngIf="userdata.photo_vedio">\n     <span class="per" *ngIf="userdata.photo_vedio.photo!=\'\' || userdata.photo_vedio.vedio!=\'\'">Price Per month</span>\n   <div class="date" *ngIf="userdata.photo_vedio.photo!=\'\' || userdata.photo_vedio.photo">\n          <h4>Photo</h4>\n          <h4>rs {{userdata.photo_vedio.photo}}</h4>\n        </div>\n        \n   <div class="date" *ngIf="userdata.photo_vedio.vedio">\n          <h4>Video</h4>\n          <h4> rs {{userdata.photo_vedio.vedio}}</h4>\n        </div>\n      </div>\n     <div style="width:100%;float:left;height:1vh;"></div>\n   \n  <div *ngFor="let hh of userdata.additional_photo_vedio">\n     <span class="per" *ngIf="hh.day!=\'\' || hh.vedio!=\'\'" >Price Per {{hh.day}}</span>\n   <div class="date" *ngIf="hh.photo" >\n          <h4>Photo</h4>\n          <h4>rs {{hh.photo}}</h4>\n        </div>\n        \n   <div class="date" *ngIf="hh.vedio" >\n          <h4>Video</h4>\n          <h4> rs {{hh.vedio}}</h4>\n        </div>\n        </div>\n\n<div style="width:100%;float:left;height:1vh;"></div>\n\n    <div class="on">\n\n    <ion-label class="label ad" style="margin: 0px;" *ngIf="userdata.addon!=\'\' && userdata.addon">Addon:</ion-label>\n\n    <ul class="addn" *ngIf="userdata.addon!=undefined">\n      <li *ngIf="userdata.addon.candid!=undefined">\n        <div class="date">\n          <h4>Candid</h4>\n          <h4>rs {{userdata.addon.candid}}</h4>\n        </div>\n      </li>\n      <li *ngIf="userdata.addon.video_editing!=undefined">\n       <div class="date">\n          <h4>Video Editing</h4>\n          <h4>rs {{userdata.addon.video_editing}}</h4>\n        </div>\n      </li>\n      <li *ngIf="userdata.addon.photo_book!=undefined">\n        <div class="date">\n          <h4>Photo Book</h4>\n          <h4>rs {{userdata.addon.photo_book}}</h4>\n        </div>\n      </li>\n      <li *ngIf="userdata.addon.portrait_framing!=undefined">\n        <div class="date">\n          <h4>Portrait & Framing</h4>\n          <h4>rs {{userdata.addon.portrait_framing}}</h4>\n        </div>\n      </li>\n       <li *ngIf="userdata.additional_addon" >\n        <div class="date" *ngFor="let kk of userdata.additional_addon">\n          <h4>{{kk.title}}</h4>\n          <h4>rs {{kk.amount}}</h4>\n        </div>\n      </li>\n    </ul>\n    <ul class="addn" *ngIf="userdata.additional_addon" >\n       <span *ngIf="userdata.additional_addon.length>0">\n      <li  *ngFor="let chegdfcl of userdata.additional_addon ">\n        <div class="date">\n            <h4> {{chegdfcl.title}} </h4>\n          <h4>rs {{chegdfcl.amount}}</h4>\n          </div>\n        </li>\n      </span>\n    </ul>\n\n<ion-label class="label ad" style="margin: 15px 0 0;" *ngIf="userdata.discount.day!=\'\' && userdata.discount.title!=undefined && userdata.discount.amount!=undefined">Discount:</ion-label>\n   <div class="date" *ngIf="userdata.discount.day!=\'\' && userdata.discount.title!=undefined && userdata.discount.amount!=undefined">\n          <h4  *ngIf="userdata.discount.day!=undefined">{{userdata.discount.day}} Day</h4>\n           <h4 *ngIf="userdata.discount.title!=undefined">{{userdata.discount.title}} </h4>\n          <h4 *ngIf="userdata.discount.amount!=undefined">rs {{userdata.discount.amount}}</h4>\n        </div>\n\n      </div><!--on_end-->\n\n    </ion-item-group>\n  </ion-list>\n\n<ion-list class="base inpt">\n    <ion-item-group>\n        <ion-item-divider color="light" *ngIf="userdata.highlights!=\'\'">Highlights</ion-item-divider>\n\n    <div class="on">\n\n    <ul class="addn" *ngIf="userdata.highlights!=undefined">\n      <li  *ngIf="userdata.highlights.candid!=undefined">\n        <div class="date">\n          <h4>Candid</h4>\n          <h4>rs {{userdata.highlights.candid}} </h4>\n        </div>\n      </li>\n      <li>\n       <div class="date"  *ngIf="userdata.highlights.video_editing!=undefined">\n          <h4>Video Editing</h4>\n          <h4>rs {{userdata.highlights.video_editing}}</h4>\n        </div>\n      </li>\n      <li *ngIf="userdata.highlights.photo_book!=undefined">\n        <div class="date"  >\n          <h4>Photo Book</h4>\n          <h4>rs {{userdata.highlights.photo_book}}</h4>\n        </div>\n      </li>\n      <li>\n        <div class="date"  *ngIf="userdata.highlights.portrait_framing!=undefined">\n          <h4>Portrait & Framing</h4>\n          <h4>rs {{userdata.highlights.portrait_framing}}</h4>\n        </div>\n      </li>\n       <li  *ngIf="userdata.highlights.theme_wedding!=undefined">\n        <div class="date">\n          <h4>theme_wedding</h4>\n          <h4>rs {{userdata.highlights.theme_wedding}} </h4>\n        </div>\n      </li>\n    </ul>\n     <ul class="addn" *ngIf="userdata.additional_highlights" >\n       <span *ngIf="userdata.additional_highlights.length>0">\n      <li  *ngFor="let checl of userdata.additional_highlights ">\n        <div class="date">\n            <h4> {{checl.title}} </h4>\n          <h4>rs {{checl.amount}}</h4>\n          </div>\n        </li>\n      </span>\n    </ul>\n\n\n<ion-label class="label ad" style="margin-bottom:0px;"  *ngIf="gall">Gallery:</ion-label>\n\n\n<ion-grid style="padding: 0;">\n  <ion-row>\n <ion-col col-3 >\n   <div class="upld" *ngFor="let gallss of gall"  >\n        <img [src]="gallss.img" />\n      </div>\n    </ion-col>\n\n\n    <!--<ion-col col-3>\n      <div class="upld">\n        <img src="assets/image/1.jpg" />\n      </div>\n    </ion-col>\n\n    <ion-col col-3>\n      <div class="upld">\n        <img src="assets/image/1.jpg" />\n      </div>\n    </ion-col>\n\n    <ion-col col-3>\n      <div class="upld">\n        <img src="assets/image/1.jpg" />\n      </div>\n    </ion-col>-->\n\n  </ion-row>\n</ion-grid>\n\n\n\n<button ion-button block outline color="blue" class="pay">Link With Paytm</button>\n\n</div><!--on_end-->\n\n</ion-item-group>\n</ion-list>\n<div *ngIf="userdata.location">\n                                  \n    <ion-list class="base" *ngIf="userdata.location !=\'\' ">\n    <ion-item-group>\n        <ion-item-divider color="light">Location</ion-item-divider>\n <ion-item *ngIf="userdata.location !=\'undefined\'">\n        <h3 style="padding-left: 8px; font-family: Lora-Regular">{{userdata.location}}</h3>\n</ion-item>\n<!--\n<div class="map">\n  <img src="assets/image/map.jpg" />\n</div>-->\n\n</ion-item-group>\n</ion-list>\n</div>\n<div *ngIf="userdata.product_detail!=\'undefined\' && userdata.effective_date!=\'undefined\' && userdata.discount_amount!=\'undefined\'">\n  <ion-list class="base" *ngIf="userdata.product_detail !=\'\' || userdata.effective_date !=\'\' || userdata.discount_amount !=\'\' ">\n    <ion-item-group>\n        <ion-item-divider color="light"  *ngIf="userdata.product_detail!=\'undefined\' && userdata.effective_date!=\'undefined\' && userdata.discount_amount!=\'undefined\'">Deals</ion-item-divider>\n      <ion-item class="area" *ngIf="userdata.product_detail !=\'undefined\'">\n         <h3 style="padding-left: 8px; font-family: Lora-Regular">{{userdata.product_detail}}</h3>\n        <!--<textarea type="text" placeholder="Product Detail" class="txt_area"></textarea>-->\n      </ion-item>\n\n      <ion-item *ngIf="userdata.effective_date !=\'undefined\'">\n         <h3 style="padding-left: 8px; font-family: Lora-Regular">{{userdata.effective_date}}</h3>\n        <!--<ion-input type="text" placeholder="Effective Date"></ion-input>-->\n      </ion-item>\n\n       <ion-item *ngIf="userdata.discount_amount !=\'undefined\'">\n          <h3 style="padding-left: 8px; font-family: Lora-Regular">{{userdata.discount_amount}}</h3>\n    <!--<ion-input type="text" placeholder="Discount Amount"></ion-input>-->\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n  </div>\n</form>\n\n</ion-content>\n'/*ion-inline-end:"E:\Project\Dost user app new\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_appsetting_appsetting__["a" /* AppsettingProvider */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting_appsetting__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FilterPage = (function () {
    function FilterPage(viewCtrl, navParams, navCtrl, modalCtrl, http, alertCtrl, loadingCtrl, appsetting) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.appsetting = appsetting;
        this.data = '';
        this.userdata = '';
        this.show = '';
    }
    FilterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilterPage');
    };
    FilterPage.prototype.dismiss = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    FilterPage.prototype.select = function (dataa) {
        console.log(dataa);
    };
    FilterPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    FilterPage.prototype.getsdata = function () {
        var _this = this;
        console.log("=======");
        if (JSON.parse(localStorage.getItem("user_data"))) {
            this.userdata = JSON.parse(localStorage.getItem("user_data"));
        }
        var postdata1 = {
            userid: this.userdata._id,
        };
        console.log(postdata1);
        var serialized_all1 = this.serializeObj(postdata1);
        var url = this.appsetting.myGlobalVar + 'allposts';
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(url, serialized_all1, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            if (response.status = true) {
                _this.show = response.data;
                for (var _i = 0, _a = _this.show; _i < _a.length; _i++) {
                    var i = _a[_i];
                    console.log(i.post_type);
                    if (i.post_type == 'BlogPost') {
                        //this.show.push(i);
                        console.log("]]]");
                        console.log(i);
                    }
                    console.log("tets");
                }
                console.log(_this.show);
            }
            else {
            }
        });
    };
    FilterPage.prototype.onSubmit = function (data) {
        console.log("filter");
        console.log(data);
        if (data.value.radio) {
            console.log('found');
            if (data.value.radio == 'blog') {
                this.getsdata();
            }
        }
        else {
            console.log("not founf");
        }
    };
    return FilterPage;
}());
FilterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-filter',template:/*ion-inline-start:"E:\Project\Dost user app new\src\pages\filter\filter.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>filter</ion-title>\n     <ion-buttons end>\n       <button ion-button (click)="dismiss();">\n         <ion-icon name="close"></ion-icon>\n       </button>\n     </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<form #heroForm="ngForm"  novalidat>\n<div class="selct">\n\n  <ion-label class="by">Sort By:</ion-label>\n      <ion-list class="vendor">\n        <ion-item>\n          <ion-select [(ngModel)]="data.view"  name="view" #view="ngModel" >\n            <ion-option value="fri" selected="true">Friends</ion-option>\n            <ion-option value="me">Only Me</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n</div>\n\n<ion-list radio-group class="post" name="radio" [(ngModel)]="data.itemChecked" #itemChecked="ngModel"  >\n  <ion-list-header>\n    Post:\n  </ion-list-header>\n\n  <ion-item>\n    <ion-label>Job Post</ion-label>\n    <ion-radio value="job"></ion-radio>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Blog Post</ion-label>\n    <ion-radio value="blog"></ion-radio>\n  </ion-item>\n\n</ion-list>\n\n<ion-list radio-group class="post">\n  <ion-list-header>\n    Location:\n  </ion-list-header>\n\n  <ion-item>\n    <ion-label> <50Km </ion-label>\n    <ion-radio  value="go"></ion-radio>\n  </ion-item>\n\n  <ion-item>\n    <ion-label> <100Km </ion-label>\n    <ion-radio value="rust"></ion-radio>\n  </ion-item>\n\n  <ion-item>\n    <ion-label> <150Km </ion-label>\n    <ion-radio value="python"></ion-radio>\n  </ion-item>\n</ion-list>\n\n<ion-grid style="padding: 0px;">\n  <ion-row>\n\n    <ion-col col-12>\n      <ion-label class="by">Vendor Type:</ion-label>\n      <ion-list class="vendor">\n        <ion-item>\n          <ion-select [(ngModel)]="data.vendors" name="vendors" #vendors="ngModel">\n            <ion-option value="photo" selected="true">Photographer</ion-option>\n            <ion-option value="venu">Wedding Venue</ion-option>\n            <ion-option value="bri">Bridal Wear</ion-option>\n            <ion-option value="dec">Wedding Decorators</ion-option>\n            <ion-option value="mak">Make Up</ion-option>\n            <ion-option value="plan">Wedding Planners</ion-option>\n            <ion-option value="groom">Groom Wear</ion-option>\n            <ion-option value="card">Wedding Cards</ion-option>\n            <ion-option value="mehn">Mehndi Artist</ion-option>\n            <ion-option value="ent">Wedding Entertainment</ion-option>\n            <ion-option value="cak">Wedding Cake</ion-option>\n            <ion-option value="jew">Wedding Jewellery</ion-option>\n            <ion-option value="cat">Wedding Catering</ion-option>\n            <ion-option value="acc">Wedding Accessories</ion-option>\n            <ion-option value="cho">Sangeet Choreographers</ion-option>\n            <ion-option value="dj">DJ</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </ion-col><!--Vendor-->\n\n    <ion-col col-12>\n      <ion-label class="by">Sort By:</ion-label>\n      <ion-list class="vendor">\n        <ion-item>\n          <ion-select [(ngModel)]="data.sorting" name="sorting" #sorting="ngModel">\n            <ion-option value="rat" selected="true">Rating</ion-option>\n            <ion-option value="pop">Popularity</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </ion-col><!--sort-->\n\n  </ion-row>\n</ion-grid>\n    <button class="add button button-md button-outline button-outline-md button-small button-small-md button-outline-md-dark" (click)="onSubmit(heroForm)">Filter</button>\n</form>\n</ion-content>\n'/*ion-inline-end:"E:\Project\Dost user app new\src\pages\filter\filter.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_appsetting_appsetting__["a" /* AppsettingProvider */]])
], FilterPage);

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionrankPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the ConnectionlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConnectionrankPage = (function () {
    function ConnectionrankPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConnectionrankPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConnectionrankPage');
    };
    return ConnectionrankPage;
}());
ConnectionrankPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-connectionrank',template:/*ion-inline-start:"E:\Project\Dost user app new\src\pages\connectionrank\connectionrank.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>connection ranking</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n <span class="snd">Select Distance:</span>\n\n  <ion-item class="range">\n    <ion-range min="1" max="20" [(ngModel)]="saturation" color="danger" pin="true">\n      <ion-label range-left>1km</ion-label>\n      <ion-label range-right>20km</ion-label>\n    </ion-range>\n  </ion-item>\n\n<ion-list class="follow">\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/image/1.jpg">\n    </ion-avatar>\n    <h2>Followers:2k</h2>\n    <h3>Friend</h3>\n    <span>Vendor</span>\n  </ion-item>\n\n   <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/image/1.jpg">\n    </ion-avatar>\n    <h2>Followers:2k</h2>\n    <span>Client</span>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/image/1.jpg">\n    </ion-avatar>\n    <h2>Followers:2k</h2>\n    <h3>Friend</h3>\n    <span>Vendor</span>\n  </ion-item>\n\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"E:\Project\Dost user app new\src\pages\connectionrank\connectionrank.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], ConnectionrankPage);

//# sourceMappingURL=connectionrank.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RewardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the RewardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RewardPage = (function () {
    function RewardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RewardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RewardPage');
    };
    return RewardPage;
}());
RewardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-reward',template:/*ion-inline-start:"E:\Project\Dost user app new\src\pages\reward\reward.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>reward</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card class="pending">\n  <ion-card-content class="mail">\n    <h3 style="color: #fff;"><ion-icon name="mail-open"></ion-icon>Invitation Pending (60)</h3>\n  </ion-card-content>\n</ion-card>\n  <ion-card class="pendingb">\n  <ion-card-content class="mail">\n    <h3><ion-icon name="send"></ion-icon>Invites Sent:<span>(50)</span></h3>\n  </ion-card-content>\n</ion-card>\n<ion-card class="pendingb">\n  <ion-card-content class="mail">\n    <h3><ion-icon name="checkmark"></ion-icon>Invites Accepted:<span>(40)</span></h3>\n  </ion-card-content>\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"E:\Project\Dost user app new\src\pages\reward\reward.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], RewardPage);

//# sourceMappingURL=reward.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the JobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JobPage = (function () {
    function JobPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    JobPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JobPage');
    };
    return JobPage;
}());
JobPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-job',template:/*ion-inline-start:"E:\Project\Dost user app new\src\pages\job\job.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>job</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n      <ion-card-content class="cnt">\n       <ion-card-title>\n         #Id\n        </ion-card-title>\n        <h3>Title(Location)</h3>\n\n          <ul class="stars">\n            <li><ion-icon name="star" class="active"></ion-icon></li>\n            <li><ion-icon name="star"></ion-icon></li>\n            <li><ion-icon name="star"></ion-icon></li>\n            <li><ion-icon name="star"></ion-icon></li>\n            <li><ion-icon name="star"></ion-icon></li>\n          </ul>\n\n\n        <h4>Cost: <span style="color:#e5053a;">1,00,000</span></h4>\n        <dl class="price">\n                            <dt>Paid: <span style="color:#e5053a;">Rs 20,000</span></dt>\n                            <dd>Discount: 10%</dd>\n                        </dl>\n        <p>\n          The most popular industrial group ever, and largely\n          responsible for bringing the music to a mass audience.\n        </p>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"E:\Project\Dost user app new\src\pages\job\job.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], JobPage);

//# sourceMappingURL=job.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConectlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_job__ = __webpack_require__(120);
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
 * Generated class for the ConectlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConectlistPage = (function () {
    function ConectlistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConectlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConectlistPage');
    };
    ConectlistPage.prototype.jobPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__job_job__["a" /* JobPage */]);
    };
    return ConectlistPage;
}());
ConectlistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-conectlist',template:/*ion-inline-start:"E:\Project\Dost user app new\src\pages\conectlist\conectlist.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>connection list</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list class="follow">\n  <ion-item (click)="jobPage();">\n    <ion-avatar item-start>\n      <img src="assets/image/1.jpg">\n    </ion-avatar>\n    <h2>Title</h2>\n    <h3>Client</h3>\n    <span>Dummy text</span>\n  </ion-item>\n\n   <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/image/1.jpg">\n    </ion-avatar>\n    <h2>Title</h2>\n    <h3>Vendor</h3>\n    <span>Dummy text</span>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/image/1.jpg">\n    </ion-avatar>\n    <h2>Title</h2>\n    <h3>Vendor</h3>\n   <span>Dummy text</span>\n  </ion-item>\n\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\Project\Dost user app new\src\pages\conectlist\conectlist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], ConectlistPage);

//# sourceMappingURL=conectlist.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the ReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReviewPage = (function () {
    function ReviewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.reviews = '';
        this.reviews = JSON.parse(localStorage.getItem('reviews'));
        console.log(this.reviews);
    }
    ReviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReviewPage');
    };
    return ReviewPage;
}());
ReviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-review',template:/*ion-inline-start:"E:\Project\Dost user app new\src\pages\review\review.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>review</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n<ion-list>\n  <ion-item class="review" *ngFor="let rev of reviews">\n    <ion-avatar item-start>\n      <img src="assets/image/1.jpg">\n    </ion-avatar>\n    <h2>{{rev.user.name}}</h2>\n    <ul class="stars">\n    <li>  <rating [(ngModel)]="rev.review.rating" class="rte_on" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false" readOnly="true" ></rating></li>\n      <!--<li><ion-icon class="active icon icon-md ion-md-star" name="star" role="img" aria-label="star" ng-reflect-name="star"></ion-icon></li>\n      <li><ion-icon name="star" role="img" class="icon icon-md ion-md-star" aria-label="star" ng-reflect-name="star"></ion-icon></li>\n      <li><ion-icon name="star" role="img" class="icon icon-md ion-md-star" aria-label="star" ng-reflect-name="star"></ion-icon></li>\n      <li><ion-icon name="star" role="img" class="icon icon-md ion-md-star" aria-label="star" ng-reflect-name="star"></ion-icon></li>\n      <li><ion-icon name="star" role="img" class="icon icon-md ion-md-star" aria-label="star" ng-reflect-name="star"></ion-icon></li>-->\n    </ul>\n    <p>\n      {{rev.review.description}}\n    </p>\n  </ion-item>\n\n    <!--<ion-item class="review">\n    <ion-avatar item-start>\n      <img src="assets/image/4.jpg">\n    </ion-avatar>\n    <h2>User</h2>\n    <ul class="stars">\n      <li><ion-icon class="active icon icon-md ion-md-star" name="star" role="img" aria-label="star" ng-reflect-name="star"></ion-icon></li>\n      <li><ion-icon name="star" role="img" class="icon icon-md ion-md-star" aria-label="star" ng-reflect-name="star"></ion-icon></li>\n      <li><ion-icon name="star" role="img" class="icon icon-md ion-md-star" aria-label="star" ng-reflect-name="star"></ion-icon></li>\n      <li><ion-icon name="star" role="img" class="icon icon-md ion-md-star" aria-label="star" ng-reflect-name="star"></ion-icon></li>\n      <li><ion-icon name="star" role="img" class="icon icon-md ion-md-star" aria-label="star" ng-reflect-name="star"></ion-icon></li>\n    </ul>\n    <p>\n      Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n    </p>\n  </ion-item>-->\n\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"E:\Project\Dost user app new\src\pages\review\review.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], ReviewPage);

//# sourceMappingURL=review.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BidPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting_appsetting__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(12);
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
 * Generated class for the BidPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BidPage = (function () {
    function BidPage(navCtrl, navParams, http, alertCtrl, loadingCtrl, appsetting) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.appsetting = appsetting;
        this.data = '';
        this.userdata = '';
        if (JSON.parse(localStorage.getItem('job')) != null || JSON.parse(localStorage.getItem('job')) != 'undefined') {
            this.data = JSON.parse(localStorage.getItem('job'));
        }
    }
    BidPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BidPage');
    };
    BidPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    BidPage.prototype.addbid = function (data, postid) {
        alert(postid);
        if (JSON.parse(localStorage.getItem("user_data"))) {
            this.userdata = JSON.parse(localStorage.getItem("user_data"));
        }
        var postdata1 = {
            userid: this.userdata._id,
            postid: postid,
            title: data.value.title,
            time: data.value.time,
            location: data.value.location,
            slug: data.value.slug,
            special_needs: data.value.special_needs,
            cost: data.value.cost
        };
        console.log(postdata1);
        var serialized_all1 = this.serializeObj(postdata1);
        var url = this.appsetting.myGlobalVar + 'myjobs/addbid';
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(url, serialized_all1, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            if (response.status == true) {
                (localStorage.setItem('job', JSON.stringify(response.data)));
            }
            else {
            }
        });
    };
    return BidPage;
}());
BidPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bid',template:/*ion-inline-start:"E:\Project\Dost user app new\src\pages\bid\bid.html"*/'<!--\n  Generated template for the BidPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>bid</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<form #heroForm="ngForm"  novalidate>\n  <ion-list class="base">\n    <ion-item-group>\n         <ion-item>\n        <ion-input type="text" placeholder="Name" [(ngModel)]="data.title" name="title" #title="ngModel"  required></ion-input>\n      </ion-item>\n           <ion-item>\n        <ion-input type="text" placeholder="Cost" [(ngModel)]="data.cost" name="cost" #cost="ngModel"  required></ion-input>\n      </ion-item>\n         <ion-item>\n        <ion-input type="text" placeholder="Time" [(ngModel)]="data.time" name="time" #time="ngModel"  required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="Special Needs" [(ngModel)]="data.location" name="location" #location="ngModel"  required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="Special Needs" [(ngModel)]="data.slug" name="slug" #slug="ngModel"  required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="Special Needs" [(ngModel)]="data.special_needs" name="special_needs" #special_needs="ngModel"  required></ion-input>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n\n  <button ion-button class="publish" [disabled]="!heroForm.valid" (click)="addbid(heroForm,data._id)">Add</button>\n\n</form>\n\n</ion-content>\n'/*ion-inline-end:"E:\Project\Dost user app new\src\pages\bid\bid.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_appsetting_appsetting__["a" /* AppsettingProvider */]])
], BidPage);

//# sourceMappingURL=bid.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SinglepostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting_appsetting__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(12);
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
 * Generated class for the SinglepostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SinglepostPage = (function () {
    function SinglepostPage(navCtrl, navParams, http, alertCtrl, loadingCtrl, appsetting) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.appsetting = appsetting;
        this.th = '';
        this.userdata = '';
        if (JSON.parse(localStorage.getItem('postdata')) != null || JSON.parse(localStorage.getItem('postdata')) != 'undefined') {
            this.th = JSON.parse(localStorage.getItem('postdata'));
        }
    }
    SinglepostPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    SinglepostPage.prototype.accept = function (postid) {
        alert(postid);
        if (JSON.parse(localStorage.getItem("user_data"))) {
            this.userdata = JSON.parse(localStorage.getItem("user_data"));
        }
        var postdata1 = {
            userid: this.userdata._id,
            postid: postid
        };
        console.log(postdata1);
        var serialized_all1 = this.serializeObj(postdata1);
        var url = this.appsetting.myGlobalVar + 'myjobs/myjob';
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(url, serialized_all1, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            alert(response.message);
            if (response.status == true) {
            }
            else {
            }
        });
    };
    SinglepostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SinglepostPage');
    };
    return SinglepostPage;
}());
SinglepostPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-singlepost',template:/*ion-inline-start:"E:\Project\Dost user app new\src\pages\singlepost\singlepost.html"*/'<!--\n  Generated template for the JobdetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Post Detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-card *ngIf="th.post_type==\'JobPost\'">\n  <ion-item class="nme">\n\n        <h4>Name: {{th.title}}</h4>\n        <h4>Cost: <span style="color:#e5053a;">{{th.cost}}</span></h4>\n        <h4>Time: {{th.time}}</h4>\n        <h4>Special Needs:</h4>\n\n\n        <ion-avatar item-end>\n          <img src="assets/image/e.jpg">\n        </ion-avatar>\n      </ion-item>\n\n      <ion-card-content>\n        <p class="spec"> {{th.special_needs}}.</p>\n             <p>{{th.description}}  </p>\n      </ion-card-content>\n        <div class="actin">\n                  <button ion-button outline  small (click)="accept(th._id)">\n                    Accept\n                  </button>\n          \n                  <button ion-button outline  small>\n                    Bid\n                  </button>\n            \n                  <button ion-button outline small>\n                    Recommend\n                  </button>\n              \n                  <button ion-button outline small>\n                   Bid Together\n                  </button>\n        </div>\n\n    </ion-card>\n <ion-card *ngIf="th.post_type==\'BlogPost\'">\n      <div class="px"><img [src]="th.image"/>\n  \n      <div class="overlay"></div>\n      </div>\n       <ion-card-content class="real">\n         <h3>{{th.title}}<span> ({{th.location}})</span></h3>\n        <p>{{th.description}}  </p>\n      </ion-card-content>\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"E:\Project\Dost user app new\src\pages\singlepost\singlepost.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_appsetting_appsetting__["a" /* AppsettingProvider */]])
], SinglepostPage);

//# sourceMappingURL=singlepost.js.map

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 133;

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addtodo/addtodo.module": [
		298,
		30
	],
	"../pages/bid/bid.module": [
		305,
		29
	],
	"../pages/changepassword/changepassword.module": [
		314,
		6
	],
	"../pages/conectlist/conectlist.module": [
		303,
		28
	],
	"../pages/connectionrank/connectionrank.module": [
		300,
		27
	],
	"../pages/editprofile/editprofile.module": [
		312,
		5
	],
	"../pages/filter/filter.module": [
		297,
		26
	],
	"../pages/filterb/filterb.module": [
		321,
		25
	],
	"../pages/filterc/filterc.module": [
		296,
		24
	],
	"../pages/forgot/forgot.module": [
		295,
		23
	],
	"../pages/intro/intro.module": [
		317,
		22
	],
	"../pages/job/job.module": [
		302,
		21
	],
	"../pages/jobdetail/jobdetail.module": [
		322,
		20
	],
	"../pages/login/login.module": [
		319,
		19
	],
	"../pages/menu/menu.module": [
		318,
		18
	],
	"../pages/postedit/postedit.module": [
		323,
		17
	],
	"../pages/process/process.module": [
		315,
		16
	],
	"../pages/profile/profile.module": [
		313,
		15
	],
	"../pages/review/review.module": [
		304,
		14
	],
	"../pages/reward/reward.module": [
		301,
		13
	],
	"../pages/signup/signup.module": [
		316,
		12
	],
	"../pages/singlepost/singlepost.module": [
		306,
		11
	],
	"../pages/socialregister/socialregister.module": [
		311,
		10
	],
	"../pages/special/special.module": [
		309,
		4
	],
	"../pages/tab1/tab1.module": [
		307,
		9
	],
	"../pages/tab2/tab2.module": [
		299,
		3
	],
	"../pages/tab3/tab3.module": [
		324,
		2
	],
	"../pages/tab4/tab4.module": [
		325,
		1
	],
	"../pages/tabs/tabs.module": [
		308,
		0
	],
	"../pages/verifycode/verifycode.module": [
		310,
		8
	],
	"../pages/vsignup/vsignup.module": [
		320,
		7
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 175;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltercPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the FiltercPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FiltercPage = (function () {
    function FiltercPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    FiltercPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FiltercPage');
    };
    FiltercPage.prototype.dismiss = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    return FiltercPage;
}());
FiltercPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-filterc',template:/*ion-inline-start:"E:\Project\Dost user app new\src\pages\filterc\filterc.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edit</ion-title>\n    <ion-buttons end>\n       <button ion-button (click)="dismiss();">\n         <ion-icon name="close"></ion-icon>\n       </button>\n     </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n<form>\n  <ion-list class="base">\n    <ion-item-group>\n        \n      <ion-item class="area">\n        <textarea type="text" placeholder="Product Detail" class="txt_area"></textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="text" placeholder="Effective Date"></ion-input>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n\n  <button ion-button class="publish">Done</button>\n\n</form>\n\n</ion-content>\n'/*ion-inline-end:"E:\Project\Dost user app new\src\pages\filterc\filterc.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
], FiltercPage);

//# sourceMappingURL=filterc.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddtodoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the AddtodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddtodoPage = (function () {
    function AddtodoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddtodoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddtodoPage');
    };
    return AddtodoPage;
}());
AddtodoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-addtodo',template:/*ion-inline-start:"E:\Project\Dost user app new\src\pages\addtodo\addtodo.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>add list</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n<form>\n  <ion-list class="base">\n    <ion-item-group>\n        \n      <ion-item class="area">\n        <textarea type="text" placeholder="Product Detail" class="txt_area"></textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="text" placeholder="Effective Date"></ion-input>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n\n  <button ion-button class="publish" >Add</button>\n\n</form>\n\n</ion-content>\n'/*ion-inline-end:"E:\Project\Dost user app new\src\pages\addtodo\addtodo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], AddtodoPage);

//# sourceMappingURL=addtodo.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PosteditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting_appsetting__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jobdetail_jobdetail__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(12);
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
 * Generated class for the PosteditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PosteditPage = (function () {
    function PosteditPage(navCtrl, http, loadingCtrl, appsetting, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.appsetting = appsetting;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.data = '';
        this.userdata = '';
        this.pet = 'current';
    }
    PosteditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PosteditPage');
    };
    PosteditPage.prototype.jobdetailPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__jobdetail_jobdetail__["a" /* JobdetailPage */]);
    };
    /* Function */
    PosteditPage.prototype.onSubmit = function (data) {
        var _this = this;
        console.log(data);
        console.log("babiuta");
        console.log(data.name);
        console.log(data.nameb);
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        console.log(data.value);
        if (data.value.password != data.value.cpassword) {
            var alert1 = this.alertCtrl.create({
                title: 'Error ',
                subTitle: 'Passwords must match.',
                buttons: ['Try Again']
            });
            alert1.present();
        }
        else {
            console.log(data);
            loading.present();
            var postdata = {
                title: data.value.title,
                cost: data.value.cost,
                time: data.value.time,
                special_needs: data.value.special_needs,
                description: data.value.description,
                post_type: "user"
            };
            console.log(postdata);
            var serialized_all = this.serializeObj(postdata);
            var url = this.appsetting.myGlobalVar + '/posts';
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
            this.http.post(url, serialized_all, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                console.log(response);
                loading.dismissAll();
                alert(response.message);
                if (response.status == true) {
                    localStorage.setItem("udata", JSON.stringify(response.data));
                    console.log(response);
                    localStorage.setItem("uid", JSON.stringify(response.data._id));
                    console.log(JSON.parse(localStorage.getItem("uid")));
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__jobdetail_jobdetail__["a" /* JobdetailPage */]);
                }
                else {
                    alert("Please try again");
                }
            });
        }
    };
    /* End */
    /* Serialize */
    PosteditPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    return PosteditPage;
}());
PosteditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-postedit',template:/*ion-inline-start:"E:\Project\Dost user app new\src\pages\postedit\postedit.html"*/'<ion-header>\n    \n      <ion-navbar>\n        <ion-buttons start>\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n        <ion-title>Post Job</ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n    \n    <ion-content>\n      <form #heroForm="ngForm" novalidate>\n    \n        <ion-list class="base" padding="true">\n          <ion-item-group>\n            <ion-item>\n              <ion-input type="text" [(ngModel)]="data.title" name=\'title\' #title="ngModel" placeholder="Title" required></ion-input>\n            </ion-item>\n            <div *ngIf="title.errors && (title.dirty || title.touched)" class="alert alert-danger">\n              <div [hidden]="!title.errors.required" class="alert alert-danger">\n                Title is required\n              </div>\n            </div>\n    \n            <ion-item>\n              <ion-input type="number" [(ngModel)]="data.cost" name=\'cost\' #cost="ngModel" placeholder="Cost" required></ion-input>\n            </ion-item>\n            <div *ngIf="cost.errors && (cost.dirty || cost.touched)" class="alert alert-danger">\n              <div [hidden]="!cost.errors.required" class="alert alert-danger">\n                cost is required\n              </div>\n            </div>\n    \n            <ion-item>\n              <ion-input type="date" [(ngModel)]="data.time" name=\'time\' #time="ngModel" placeholder="Date" required></ion-input>\n            </ion-item>\n            <div *ngIf="time.errors && (time.dirty || time.touched)" class="alert alert-danger">\n              <div [hidden]="!time.errors.required" class="alert alert-danger">\n                Time is required\n              </div>\n            </div>\n    \n            <ion-item>\n              <ion-input type="text" [(ngModel)]="data.special_needs" name=\'special_needs\' #special_needs="ngModel" placeholder="Special Need" required></ion-input>\n            </ion-item>\n            <div *ngIf="special_needs.errors && (special_needs.dirty || special_needs.touched)" class="alert alert-danger">\n              <div [hidden]="!special_needs.errors.required" class="alert alert-danger">\n                Special need is required\n              </div>\n            </div>\n    \n    \n            <ion-item class="textarea1">\n              <textarea name="description" id="description" required [(ngModel)]="data.description" name=\'description\' #description="ngModel"\n                cols="1" rows="5" placeholder="Job Description"></textarea>\n            </ion-item>\n            <div *ngIf="description.errors && (description.dirty || description.touched)" class="alert alert-danger">\n              <div [hidden]="!description.errors.required" class="alert alert-danger">\n                Job Description is required\n              </div>\n            </div>\n    \n          </ion-item-group>\n        </ion-list>\n        <button ion-button type="submit" (click)="onSubmit(heroForm)" [disabled]="!heroForm.valid" class="publish">Submit</button>\n      </form>\n    \n    </ion-content>'/*ion-inline-end:"E:\Project\Dost user app new\src\pages\postedit\postedit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_appsetting_appsetting__["a" /* AppsettingProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], PosteditPage);

//# sourceMappingURL=postedit.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connectionrank_connectionrank__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reward_reward__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__conectlist_conectlist__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filter_filter__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__review_review__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bid_bid__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_appsetting_appsetting__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__singlepost_singlepost__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_social_sharing__ = __webpack_require__(62);
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
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Tab1Page = (function () {
    function Tab1Page(navCtrl, navParams, modalCtrl, http, alertCtrl, loadingCtrl, appsetting, socialSharing, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.appsetting = appsetting;
        this.socialSharing = socialSharing;
        this.events = events;
        this.pet = 'profile';
        this.invitemail = '';
        this.show = '';
        this.userdata = '';
        this.colorb = '';
        this.showreviews = '';
        this.invitephone = '';
        if (JSON.parse(localStorage.getItem("user_data"))) {
            this.userdata = JSON.parse(localStorage.getItem("user_data"));
        }
        this.getsdata();
    }
    Tab1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Tab1Page');
    };
    Tab1Page.prototype.rankPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__connectionrank_connectionrank__["a" /* ConnectionrankPage */]);
    };
    Tab1Page.prototype.invite_phone = function () {
        var postdata1 = {
            senderid: this.userdata._id,
            phone: this.invitephone
        };
        console.log(postdata1);
        var serialized_all1 = this.serializeObj(postdata1);
        var url = this.appsetting.myGlobalVar + 'invitefriends/invite';
        var headers = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(url, serialized_all1, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            alert(response.message);
            if (response.status == true) {
            }
            else {
            }
        });
    };
    Tab1Page.prototype.invite_email = function () {
        var postdata1 = {
            senderid: this.userdata._id,
            email: this.invitemail
        };
        console.log(postdata1);
        var serialized_all1 = this.serializeObj(postdata1);
        var url = this.appsetting.myGlobalVar + 'invitefriends/invite';
        var headers = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(url, serialized_all1, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            alert(response.message);
            if (response.status == true) {
            }
            else {
            }
        });
    };
    Tab1Page.prototype.presentPrompt = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Invite Via Email',
            inputs: [
                {
                    name: 'username',
                    placeholder: 'Enter Email Address'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        console.log(data.username);
                        if (data.username) {
                            _this.invitemail = data.username;
                        }
                        _this.invite_email();
                    }
                }
            ]
        });
        alert.present();
    };
    Tab1Page.prototype.presentPromptphone = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Invite Via Phone Number',
            inputs: [
                {
                    name: 'username',
                    placeholder: 'Enter Phone Number'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        console.log(data.username);
                        if (data.username) {
                            _this.invitephone = data.username;
                        }
                        _this.invite_phone();
                    }
                }
            ]
        });
        alert.present();
    };
    Tab1Page.prototype.bid = function (postid) {
        var _this = this;
        var url = this.appsetting.myGlobalVar + 'posts/' + postid;
        var headers = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.get(url, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            localStorage.setItem('job', JSON.stringify(response));
            console.log(response);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__bid_bid__["a" /* BidPage */]);
        });
    };
    Tab1Page.prototype.bids = function (postid) {
        var _this = this;
        if (JSON.parse(localStorage.getItem("user_data"))) {
            this.userdata = JSON.parse(localStorage.getItem("user_data"));
        }
        var postdata1 = {
            userid: this.userdata._id,
            postid: postid
        };
        console.log(postdata1);
        var serialized_all1 = this.serializeObj(postdata1);
        var url = this.appsetting.myGlobalVar + 'myjobs/singljobbid';
        var headers = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(url, serialized_all1, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            if (response.status == true) {
                localStorage.setItem('job', JSON.stringify(response.data));
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__bid_bid__["a" /* BidPage */]);
                console.log(response);
            }
            else {
                _this.bid(postid);
            }
        });
    };
    Tab1Page.prototype.rewardPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__reward_reward__["a" /* RewardPage */]);
    };
    Tab1Page.prototype.conectPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__conectlist_conectlist__["a" /* ConectlistPage */]);
    };
    Tab1Page.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__filter_filter__["a" /* FilterPage */]);
        modal.present();
    };
    Tab1Page.prototype.twitter = function () {
        //alert("t")
        this.socialSharing.shareViaTwitter("message", "image", "url").then(function () {
            //  alert("Success")
            // Success!
        }).catch(function () {
            // Error!
            alert("Error");
        });
    };
    //  whatsappShare(){
    //   this.socialSharing.shareViaWhatsApp("Message via WhatsApp", null /*Image*/,  "http://pointdeveloper.com/" /* url */)
    //     .then(()=>{
    //      // alert("Success");
    //     },
    //     ()=>{
    //        alert("failed")
    //     })
    // }
    Tab1Page.prototype.email = function () {
        this.socialSharing.canShareViaEmail().then(function () {
            alert("Sharing via email is possible");
            // Sharing via email is possible
        }).catch(function () {
            alert("Sharing via email is not possible");
            // Sharing via email is not possible
        });
        // Share via email
        this.socialSharing.shareViaEmail('Body', 'Subject', ['babita@avainfotech.com']).then(function () {
            // alert("Success")
            // Success!
        }).catch(function () {
            // Error!
            //    alert("Error")
        });
    };
    Tab1Page.prototype.fbsss = function () {
        //alert("fb")
        this.socialSharing.shareViaFacebook("Message via Twitter", null /*Image*/, "http://pointdeveloper.com")
            .then(function () {
            //  alert("Success");
        }, function () {
            alert("failed");
        });
    };
    Tab1Page.prototype.reviewPage = function () {
        //let modal = this.modalCtrl.create(ReviewPage);
        this.reviewdata();
        //modal.present();
    };
    Tab1Page.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    Tab1Page.prototype.reviewdata = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        loading.present();
        if (JSON.parse(localStorage.getItem("user_data"))) {
            this.userdata = JSON.parse(localStorage.getItem("user_data"));
        }
        var postdata1 = {
            vendorid: this.userdata._id,
        };
        console.log(postdata1);
        var serialized_all1 = this.serializeObj(postdata1);
        var url = this.appsetting.myGlobalVar + 'review/view_reviews';
        var headers = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(url, serialized_all1, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            if (response.status = true) {
                _this.showreviews = response.data;
                localStorage.setItem('reviews', JSON.stringify(response.data));
                var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__review_review__["a" /* ReviewPage */]);
                loading.dismissAll();
                modal.present();
            }
            else {
                alert("No reviews");
            }
        });
    };
    Tab1Page.prototype.getsdata = function () {
        var _this = this;
        console.log("=======");
        if (JSON.parse(localStorage.getItem("user_data"))) {
            this.userdata = JSON.parse(localStorage.getItem("user_data"));
        }
        var postdata1 = {
            userid: this.userdata._id,
        };
        console.log(postdata1);
        var serialized_all1 = this.serializeObj(postdata1);
        var url = this.appsetting.myGlobalVar + 'allposts';
        var headers = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(url, serialized_all1, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            if (response.status = true) {
                _this.show = response.data;
                //  for(let i in this.show){
                //         this.show[i].colorb = '';
                //  }
                console.log(response);
            }
            else {
            }
        });
    };
    //    getsdata(){
    //                     if(JSON.parse (localStorage.getItem("user_data"))){
    //                       this.userdata=JSON.parse (localStorage.getItem("user_data"));
    //                     }
    //                     var url: string = this.appsetting.myGlobalVar + 'posts';
    //                       let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    //                       let options = new RequestOptions({ headers: headers });
    //                       this.http.get(url, options)
    //                         .map(res => res.json())
    //                         .subscribe((response) => {
    //                         console.log(response);
    //                         if(response.length>0){
    //                          this.show=response;
    //                          for(let i in this.show){
    //                                 this.show[i].colorb = '';
    //                          }
    //                         console.log(response);
    //                        }else{
    //                           }})
    //  }
    Tab1Page.prototype.accept = function (postid) {
        alert(postid);
        if (JSON.parse(localStorage.getItem("user_data"))) {
            this.userdata = JSON.parse(localStorage.getItem("user_data"));
        }
        var postdata1 = {
            userid: this.userdata._id,
            postid: postid
        };
        console.log(postdata1);
        var serialized_all1 = this.serializeObj(postdata1);
        var url = this.appsetting.myGlobalVar + 'myjobs/myjob';
        var headers = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(url, serialized_all1, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            alert(response.message);
            if (response.status == true) {
            }
            else {
            }
        });
    };
    Tab1Page.prototype.readmore = function (id) {
        var _this = this;
        console.log(id);
        var url = this.appsetting.myGlobalVar + 'posts/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.get(url, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            localStorage.setItem('postdata', JSON.stringify(response));
            console.log(response);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__singlepost_singlepost__["a" /* SinglepostPage */]);
        });
    };
    Tab1Page.prototype.like = function (post_id, index) {
        var _this = this;
        console.log(index);
        //  this.show[index].colorb = '1';
        //  return false;
        if (JSON.parse(localStorage.getItem("user_data"))) {
            this.userdata = JSON.parse(localStorage.getItem("user_data"));
        }
        var postdata = {
            userid: this.userdata._id,
            postid: post_id
        };
        console.log(postdata);
        var serialized_all = this.serializeObj(postdata);
        var url = this.appsetting.myGlobalVar + 'likes/like_post';
        var headers = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(url, serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            if (response.status == true) {
                // this.show[index].colorb='1';
                _this.getsdata();
            }
            else {
                _this.getsdata();
                //    this.show[index].colorb='0';
                // if(response.message=="Already liked"){
                //    this.show[index].colorb='1';
                // }else{
                //   this.show[index].colorb='0';
                // }
                //  localStorage.setItem('colorbit',JSON.stringify(0));
            }
        });
    };
    return Tab1Page;
}());
Tab1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tab1',template:/*ion-inline-start:"E:\Project\Dost user app new\src\pages\tab1\tab1.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Home</ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="presentModal();">\n        <ion-icon name="options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <div class="seg">\n    <ion-segment [(ngModel)]="pet">\n      <ion-segment-button value="profile">\n        News Feed\n      </ion-segment-button>\n      <ion-segment-button value="manage">\n        Manage Connection\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="pet">\n\n    <ion-list *ngSwitchCase="\'profile\'" class="bg">\n      <div *ngFor="let th of show; let i = index" [attr.data-index]="i">\n\n        <ion-card *ngIf="th.post_type==\'BlogPost\'">\n          <div class="px">\n            <img [src]="th.image" />\n            <ion-fab top right>\n              <button ion-fab mini class="fb">\n                <ion-icon name="share"></ion-icon>\n              </button>\n              <ion-fab-list side="left">\n                <button ion-fab>\n                  <ion-icon name="logo-facebook" (click)="fbsss()"></ion-icon>\n                </button>\n                <button ion-fab>\n                  <ion-icon name="logo-twitter" (click)="twitter()"></ion-icon>\n                </button>\n                <button ion-fab>\n                  <ion-icon name="logo-vimeo" (click)="vimeo()"></ion-icon>\n                </button>\n                <button ion-fab>\n                  <ion-icon name="logo-googleplus" (click)="email()"></ion-icon>\n                </button>\n              </ion-fab-list>\n            </ion-fab>\n            <div class="overlay"></div>\n            <div class="accepts actin">\n              <button ion-button outline small>\n                Follow\n              </button>\n            </div>\n            <!--{{th.is_liked}}-->\n            <ion-icon name="md-thumbs-up" class="like" (click)="like(th._id, i)" *ngIf="th.is_liked==0"></ion-icon>\n            <ion-icon name="md-thumbs-up" class="like" (click)="like(th._id, i)" *ngIf="th.is_liked==1" style="color:red"></ion-icon>\n          </div>\n          <ion-card-content class="real">\n\n            <h3>{{th.title}}\n              <span> ({{th.location}})</span>\n            </h3>\n            <p>{{th.description.substring(0,58)}}...\n              <a (click)="readmore(th._id)">Read More</a>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </ion-list>\n    <!--profile-->\n\n    <ion-list *ngSwitchCase="\'manage\'" class="bg_b invite">\n      <ion-searchbar style="background: transparent;"></ion-searchbar>\n      <span class="snd">Send Invitation:</span>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <button ion-button small class="inv">Invite via Email</button>\n          </ion-col>\n          <ion-col col-6>\n            <button ion-button small class="inv">Invite via Contacts</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-item (click)="conectPage();">\n        Connection List\n        <ion-icon ios="ios-arrow-forward" md="ios-arrow-forward" item-end></ion-icon>\n      </ion-item>\n\n      <ion-item (click)="rankPage();">\n        Connection Ranking\n        <ion-icon ios="ios-arrow-forward" md="ios-arrow-forward" item-end></ion-icon>\n      </ion-item>\n\n      <ion-item (click)="rewardPage();">\n        Reward\n        <ion-icon ios="ios-arrow-forward" md="ios-arrow-forward" item-end></ion-icon>\n      </ion-item>\n\n    </ion-list>\n    <!--manage-->\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\Project\Dost user app new\src\pages\tab1\tab1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_8__providers_appsetting_appsetting__["a" /* AppsettingProvider */],
        __WEBPACK_IMPORTED_MODULE_12__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
], Tab1Page);

//# sourceMappingURL=tab1.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VsignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_process__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting_appsetting__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menu_menu__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__verifycode_verifycode__ = __webpack_require__(48);
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
 * Generated class for the VsignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VsignupPage = (function () {
    function VsignupPage(navCtrl, navParams, http, alertCtrl, loadingCtrl, appsetting) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.appsetting = appsetting;
        this.data = '';
        this.userdata = '';
        this.data = {
            name: 'Vendor Type',
            nameb: 'How did you find out about us?'
        };
        this.userdata = JSON.parse(localStorage.getItem("user_data"));
    }
    VsignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VsignupPage');
        // this.data.name="Photographer";
        this.data.nameb = 'How did you find out about us?';
        this.data.name = 'Vendor Type';
    };
    VsignupPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    VsignupPage.prototype.onSubmit = function (data) {
        var _this = this;
        console.log(data);
        console.log("babiuta");
        console.log(data.name);
        console.log(data.nameb);
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        console.log(data.value);
        if (data.value.password != data.value.cpassword) {
            var alert1 = this.alertCtrl.create({
                title: 'Error ',
                subTitle: 'Passwords must match.',
                buttons: ['Try Again']
            });
            alert1.present();
        }
        else {
            console.log(data);
            loading.present();
            var postdata = {
                vendor_type: data.value.name,
                find_us: data.value.nameb,
                company_name: data.value.company,
                phone: data.value.number,
                password: data.value.password,
                role: 'Vendor',
                status: 1,
                friend_invitcode: data.value.invite
            };
            console.log(postdata);
            var serialized_all = this.serializeObj(postdata);
            var url = this.appsetting.myGlobalVar + 'users/home';
            var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
            var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers });
            this.http.post(url, serialized_all, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                console.log(response);
                loading.dismissAll();
                alert(response.message);
                if (response.status == true) {
                    localStorage.setItem("udata", JSON.stringify(response.data));
                    //localStorage.setItem("user_data",JSON.stringify(response.data));
                    console.log(response);
                    localStorage.setItem("uid", JSON.stringify(response.data._id));
                    console.log(JSON.parse(localStorage.getItem("uid")));
                    // this.navCtrl.push(ProcessPage);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__verifycode_verifycode__["a" /* VerifycodePage */]);
                }
                else {
                    alert("Please try again");
                }
            });
        }
    };
    VsignupPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    VsignupPage.prototype.login1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__process_process__["a" /* ProcessPage */]);
    };
    VsignupPage.prototype.loginsss = function () {
        console.log(this.userdata);
        if (this.userdata == null) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__menu_menu__["a" /* MenuPage */]);
        }
    };
    VsignupPage.prototype.process = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__process_process__["a" /* ProcessPage */]);
    };
    return VsignupPage;
}());
VsignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-vsignup',template:/*ion-inline-start:"E:\Project\Dost user app new\src\pages\vsignup\vsignup.html"*/'<ion-header hidden>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <div style="height:10vh;float:left;width:100%;"></div>\n\n  <div class="logo">\n    <img src="assets/image/logo.png">\n  </div>\n\n  <div style="height:5vh;float:left;width:100%;"></div>\n\n  <div class="signin_field">\n    <form #heroForm="ngForm" novalidate>\n\n      <ion-list>\n\n        <ion-item>\n          <ion-label>Vendor Type</ion-label>\n          <ion-select [(ngModel)]="data.name" name=\'name\' #name="ngModel" placeholder=\'Vendor Type\'>\n            <!--remove  [ngModelOptions]="{standalone: true}"> if you don\'t need it in the form -->\n            <!--<ion-option value="Vendor Type" >Vendor Type</ion-option>-->\n            <ion-option value="Photographer">Photographer</ion-option>\n            <ion-option value="Bridal Wear">Bridal Wear</ion-option>\n            <ion-option value="Wedding Decorator">Wedding Decorator</ion-option>\n            <ion-option value="Make up">Make up</ion-option>\n            <ion-option value="Groomwear">Groomwear</ion-option>\n            <ion-option value="Wedding planners">Wedding Planners</ion-option>\n            <ion-option value="Wedding venue">Wedding Venue</ion-option>\n            <ion-option value="Wedding cards">Wedding Cards</ion-option>\n            <!--<ion-option value="Wedding videography">Wedding Videography</ion-option>-->\n            <ion-option value="Mehndi artist">Mehndi Artist</ion-option>\n            <ion-option value="Wedding cakes">Wedding Cakes</ion-option>\n            <ion-option value="Wedding jewellery">Wedding Jewellery</ion-option>\n            <ion-option value="Wedding catering">Wedding Catering</ion-option>\n            <ion-option value="Sangeet choreographers">Sangeet Choreographers</ion-option>\n            <ion-option value="wedding accessories">Wedding Accessories</ion-option>\n            <ion-option value="wedding favours">Wedding Favours</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-input type="text" placeholder="Company Name" [(ngModel)]="data.company" name="company" #company="ngModel" required></ion-input>\n        </ion-item>\n        <div *ngIf="company.errors && (company.dirty || company.touched)" class="alert alert-danger">\n          <div [hidden]="!company.errors.required" class="alert alert-danger">\n            Company Name is required\n          </div>\n        </div>\n        <ion-item>\n          <ion-input type="tel" placeholder="Phone Number(Only Indian Number)" [(ngModel)]="data.number" name="number" #number="ngModel"\n            required [maxlength]="10"></ion-input>\n        </ion-item>\n        <div *ngIf="number.errors && (number.dirty || number.touched)" class="alert alert-danger">\n          <div [hidden]="!number.errors.required" class="alert alert-danger">\n            Phone Number is required\n          </div>\n          <!--<div [hidden]="!number.errors.pattern" class="alert alert-danger">\n 			     	 Enter a valid Phone Number\n           </div>-->\n          <div [hidden]="!number.errors.maxlength" class="alert alert-danger">\n            Enter a valid length of Phone Number\n          </div>\n        </div>\n        <!--<ion-item>\n            <ion-input type="text" placeholder="User Name"></ion-input>\n          </ion-item>\n        -->\n        <!--<ion-item>\n            <ion-input type="text" placeholder="Email" [(ngModel)]="data.email" name="email" #email="ngModel"  required></ion-input>\n          </ion-item>\n            <div *ngIf="email.errors && (email.dirty || email.touched)" class="alert alert-danger">\n          <div [hidden]="!email.errors.required" class="alert alert-danger">\n            Email is required\n            </div>\n             <div [hidden]="!email.errors.pattern" class="alert alert-danger">\n            Enter a valid Email Address\n            </div>\n          </div>   -->\n        <ion-item>\n          <ion-input type="password" placeholder="Password" [(ngModel)]="data.password" name="password" #password="ngModel" required></ion-input>\n        </ion-item>\n        <div *ngIf="password.errors && (password.dirty || password.touched)" class="alert alert-danger">\n          <div [hidden]="!password.errors.required" class="alert alert-danger">\n            Password is required\n          </div>\n        </div>\n        <ion-item>\n          <ion-input type="password" placeholder="Confirm Password" [(ngModel)]="data.cpassword" name="cpassword" #cpassword="ngModel"\n            required></ion-input>\n        </ion-item>\n        <div *ngIf="cpassword.errors && (cpassword.dirty || cpassword.touched)" class="alert alert-danger">\n          <div [hidden]="!cpassword.errors.required" class="alert alert-danger">\n            Confirm Password is required\n          </div>\n        </div>\n\n        <!--\n          <ion-item>\n            <ion-input type="text" placeholder="Address"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="text" placeholder="Location"></ion-input>\n          </ion-item>-->\n\n        <ion-item>\n          <ion-label>How did you find out about us?</ion-label>\n          <ion-select [(ngModel)]="data.nameb" name=\'nameb\' #nameb="ngModel" placeholder=\'How did you find out about us?\'>\n            <!--remove  [ngModelOptions]="{standalone: true}"> if you don\'t need it in the form -->\n            <!--<ion-option value="How did you find out about us?" checked="true">How did you find out about us?</ion-option>-->\n            <ion-option value="Friends" checked="true">Friends</ion-option>\n            <ion-option value="Friends of Friends">Friends of Friends</ion-option>\n            <ion-option value="Social Media">Social Media</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text" placeholder="Invite Code" [(ngModel)]="data.invite" name="invite" #invite="ngModel"></ion-input>\n        </ion-item>\n      </ion-list>\n\n      <button ion-button type="submit" (click)="onSubmit(heroForm)" [disabled]="!heroForm.valid">sign up</button>\n      <!--<button ion-button (click)="process()">sign up</button>-->\n\n    </form>\n\n    <a (click)="loginsss()" class="signup_line"> Already have an account? Sign In</a>\n\n    <!--<a (click)="login1()" class="signup_line"> Already have an account? Sign In</a>-->\n\n  </div>\n\n\n  <div style="height:15vh;float:left;width:100%;"></div>\n\n\n</ion-content>'/*ion-inline-end:"E:\Project\Dost user app new\src\pages\vsignup\vsignup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting_appsetting__["a" /* AppsettingProvider */]])
], VsignupPage);

//# sourceMappingURL=vsignup.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterbPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the FilterbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FilterbPage = (function () {
    function FilterbPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    FilterbPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilterbPage');
    };
    FilterbPage.prototype.dismiss = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    return FilterbPage;
}());
FilterbPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-filterb',template:/*ion-inline-start:"E:\Project\Dost user app new\src\pages\filterb\filterb.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>filter</ion-title>\n     <ion-buttons end>\n       <button ion-button (click)="dismiss();">\n         <ion-icon name="close"></ion-icon>\n       </button>\n     </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n<ion-list radio-group class="post">\n  <ion-list-header>\n    Price/Day:\n  </ion-list-header>\n\n  <ion-item>\n    <ion-label> < 60k </ion-label>\n    <ion-radio  value="job"></ion-radio>\n  </ion-item>\n\n  <ion-item>\n    <ion-label> < 60k - 1Lac </ion-label>\n    <ion-radio value="blog"></ion-radio>\n  </ion-item>\n\n  <ion-item>\n    <ion-label> < 1Lac - 1.5Lacs </ion-label>\n    <ion-radio value="blo"></ion-radio>\n  </ion-item>\n\n  <ion-item>\n    <ion-label> > 1.5Lacs </ion-label>\n    <ion-radio value="blg"></ion-radio>\n  </ion-item>\n\n</ion-list>\n\n<ion-list radio-group class="post">\n  <ion-list-header>\n    Core Speciality:\n  </ion-list-header>\n\n  <ion-item>\n    <ion-label> Candid Specialist</ion-label>\n    <ion-radio  value="go"></ion-radio>\n  </ion-item>\n\n  <ion-item>\n    <ion-label> Traditional And Candid Specialist </ion-label>\n    <ion-radio value="rust"></ion-radio>\n  </ion-item>\n\n\n</ion-list>\n\n<ion-list radio-group class="post">\n  <ion-list-header>\n    Average Rating:\n  </ion-list-header>\n\n  <ion-item>\n    <ion-label> All Ratings </ion-label>\n    <ion-radio  value="go"></ion-radio>\n  </ion-item>\n\n  <ion-item>\n    <ion-label> Rated 3.0+ </ion-label>\n    <ion-radio value="rust"></ion-radio>\n  </ion-item>\n\n  <ion-item>\n    <ion-label> Rated 4.0+ </ion-label>\n    <ion-radio value="python"></ion-radio>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label> Rated 5.0 </ion-label>\n    <ion-radio value="pythn"></ion-radio>\n  </ion-item>\n  \n</ion-list>\n\n<div class="actin">\n      <button ion-button outline  small>\n          Apply\n      </button>\n          \n      <button ion-button outline  small>\n          Reset\n      </button>\n </div>\n\n\n</ion-content>\n'/*ion-inline-end:"E:\Project\Dost user app new\src\pages\filterb\filterb.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
], FilterbPage);

//# sourceMappingURL=filterb.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(244);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_intro_intro__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_vsignup_vsignup__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_menu_menu__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_forgot_forgot__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_filter_filter__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_filterb_filterb__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_process_process__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_connectionrank_connectionrank__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_reward_reward__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_conectlist_conectlist__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_job_job__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_filterc_filterc__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_addtodo_addtodo__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_bid_bid__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_review_review__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_jobdetail_jobdetail__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_appsetting_appsetting__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_social_sharing__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_geolocation__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_camera__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_singlepost_singlepost__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_facebook__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_google_plus__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ionic2_rating__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_verifycode_verifycode__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_postedit_postedit__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_socialregister_socialregister__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_tab1_tab1__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_intro_intro__["a" /* Intro */],
            __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_forgot_forgot__["a" /* ForgotPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_filter_filter__["a" /* FilterPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_filterb_filterb__["a" /* FilterbPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_vsignup_vsignup__["a" /* VsignupPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_process_process__["a" /* ProcessPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_connectionrank_connectionrank__["a" /* ConnectionrankPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_reward_reward__["a" /* RewardPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_conectlist_conectlist__["a" /* ConectlistPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_job_job__["a" /* JobPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_filterc_filterc__["a" /* FiltercPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_addtodo_addtodo__["a" /* AddtodoPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_review_review__["a" /* ReviewPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_jobdetail_jobdetail__["a" /* JobdetailPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_singlepost_singlepost__["a" /* SinglepostPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_bid_bid__["a" /* BidPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_verifycode_verifycode__["a" /* VerifycodePage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_socialregister_socialregister__["a" /* SocialregisterPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_postedit_postedit__["a" /* PosteditPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_tab1_tab1__["a" /* Tab1Page */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/forgot/forgot.module#ForgotPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/filterc/filterc.module#FiltercPageModule', name: 'FiltercPage', segment: 'filterc', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/filter/filter.module#FilterPageModule', name: 'FilterPage', segment: 'filter', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/addtodo/addtodo.module#AddtodoPageModule', name: 'AddtodoPage', segment: 'addtodo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tab2/tab2.module#Tab2PageModule', name: 'Tab2Page', segment: 'tab2', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/connectionrank/connectionrank.module#ConnectionrankPageModule', name: 'ConnectionrankPage', segment: 'connectionrank', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reward/reward.module#RewardPageModule', name: 'RewardPage', segment: 'reward', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/job/job.module#JobPageModule', name: 'JobPage', segment: 'job', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/conectlist/conectlist.module#ConectlistPageModule', name: 'ConectlistPage', segment: 'conectlist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/review/review.module#ReviewPageModule', name: 'ReviewPage', segment: 'review', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/bid/bid.module#BidPageModule', name: 'BidPage', segment: 'bid', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/singlepost/singlepost.module#SinglepostPageModule', name: 'SinglepostPage', segment: 'singlepost', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tab1/tab1.module#Tab1PageModule', name: 'Tab1Page', segment: 'tab1', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/special/special.module#SpecialPageModule', name: 'SpecialPage', segment: 'special', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/verifycode/verifycode.module#VerifycodePageModule', name: 'VerifycodePage', segment: 'verifycode', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/socialregister/socialregister.module#SocialregisterPageModule', name: 'SocialregisterPage', segment: 'socialregister', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/changepassword/changepassword.module#ChangepasswordPageModule', name: 'ChangepasswordPage', segment: 'changepassword', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/process/process.module#ProcessPageModule', name: 'ProcessPage', segment: 'process', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/intro/intro.module#IntroModule', name: 'Intro', segment: 'intro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/vsignup/vsignup.module#VsignupPageModule', name: 'VsignupPage', segment: 'vsignup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/filterb/filterb.module#FilterbPageModule', name: 'FilterbPage', segment: 'filterb', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/jobdetail/jobdetail.module#JobdetailPageModule', name: 'JobdetailPage', segment: 'jobdetail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/postedit/postedit.module#PosteditPageModule', name: 'PosteditPage', segment: 'postedit', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tab3/tab3.module#Tab4PageModule', name: 'Tab3Page', segment: 'tab3', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tab4/tab4.module#Tab4PageModule', name: 'Tab4Page', segment: 'tab4', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_26__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_33_ionic2_rating__["a" /* Ionic2RatingModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_intro_intro__["a" /* Intro */],
            __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_forgot_forgot__["a" /* ForgotPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_filter_filter__["a" /* FilterPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_filterb_filterb__["a" /* FilterbPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_vsignup_vsignup__["a" /* VsignupPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_process_process__["a" /* ProcessPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_connectionrank_connectionrank__["a" /* ConnectionrankPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_reward_reward__["a" /* RewardPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_conectlist_conectlist__["a" /* ConectlistPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_job_job__["a" /* JobPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_filterc_filterc__["a" /* FiltercPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_addtodo_addtodo__["a" /* AddtodoPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_review_review__["a" /* ReviewPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_jobdetail_jobdetail__["a" /* JobdetailPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_singlepost_singlepost__["a" /* SinglepostPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_bid_bid__["a" /* BidPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_verifycode_verifycode__["a" /* VerifycodePage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_socialregister_socialregister__["a" /* SocialregisterPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_postedit_postedit__["a" /* PosteditPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_tab1_tab1__["a" /* Tab1Page */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_25__providers_appsetting_appsetting__["a" /* AppsettingProvider */],
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_28__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_29__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_31__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_32__ionic_native_google_plus__["a" /* GooglePlus */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_intro_intro__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_intro_intro__["a" /* Intro */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\Project\Dost user app new\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\Project\Dost user app new\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_forgot__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting_appsetting__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menu_menu__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__socialregister_socialregister__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__signup_signup__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { VsignupPage } from "../vsignup/vsignup";









var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, fb, http, alertCtrl, loadingCtrl, appsetting, googlePlus) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.appsetting = appsetting;
        this.googlePlus = googlePlus;
        this.data = '';
        this.userdata = '';
        this.gall = '';
        this.userfbdata = '';
        // alert('here1');
    }
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__signup_signup__["a" /* SignupPage */]);
    };
    // vsignup() {
    //   this.navCtrl.push(VsignupPage);
    // }
    LoginPage.prototype.forgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__forgot_forgot__["a" /* ForgotPage */]);
    };
    LoginPage.prototype.menu = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__menu_menu__["a" /* MenuPage */]);
    };
    LoginPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    LoginPage.prototype.onSubmit = function (data) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        //  alert("bbi")
        console.log(data);
        loading.present();
        var postdata = {
            phone: data.value.phone,
            password: data.value.password
        };
        // alert(JSON.stringify(postdata));
        console.log(postdata);
        // alert("kkk");
        var serialized_all = this.serializeObj(postdata);
        var url = this.appsetting.myGlobalVar + 'users/guest/login';
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(url, serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            loading.dismissAll();
            if (response.status == true) {
                alert('You Have Successfully LoggedIn');
                localStorage.setItem('bit', JSON.stringify(0));
                console.log(response);
                localStorage.setItem("user_data", JSON.stringify(response.data));
                console.log(JSON.parse(localStorage.getItem("user_data")));
                _this.userdata = JSON.parse(localStorage.getItem("user_data"));
                //    console.log(this.gall)
                console.log("bb");
                if (_this.userdata.gallery_image) {
                    _this.gall = _this.userdata.gallery_image;
                }
                if (_this.userdata.image) {
                    _this.userdata.image = _this.appsetting.imagevars + _this.userdata.image;
                }
                //  if(response.verify_status == 1){
                //   this.navCtrl.setRoot(MenuPage);
                // }else{
                //     this.navCtrl.push(VerifycodePage);
                // }
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__menu_menu__["a" /* MenuPage */]);
            }
            else {
                alert(response.message);
                // alert("Please Try Again!")
            }
        }, function (err) {
            // alert("bb");
            //  alert(err);
        });
    };
    LoginPage.prototype.googlepppppp = function () {
        var _this = this;
        this.googlePlus.login({}).then(function (res) {
            if (res.imageUrl == undefined) {
                alert("gallery_image undefined");
                res.imageUrl = '';
            }
            alert(JSON.stringify(res));
            var postdata = {
                phone: res.email,
                name: res.displayName,
                googleId: res.userId,
                image: res.imageUrl,
                role: 'user',
                status: 1
            };
            alert(JSON.stringify(postdata));
            console.log(postdata);
            // alert("kkk");
            var serialized_all = _this.serializeObj(postdata);
            var url = _this.appsetting.myGlobalVar + 'users/guest/register_googleplus_app';
            var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
            var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers });
            _this.http.post(url, serialized_all, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                console.log(response);
                alert("response comes" + JSON.stringify(response));
                if (response.status == true) {
                    console.log(response);
                    localStorage.setItem('bit', JSON.stringify(2));
                    localStorage.setItem("user_data", JSON.stringify(response.data));
                    //  localStorage.setItem("udata", JSON.stringify(response.data));
                    // console.log(JSON.parse(localStorage.getItem("user_data")));
                    // this.userdata = JSON.parse(localStorage.getItem("user_data"));
                    _this.userdata = response.data;
                    console.log(_this.gall);
                    if (_this.userdata.gallery_image) {
                        alert("gallery_image");
                        _this.gall = _this.userdata.gallery_image;
                    }
                    if (response.data.status == 0) {
                        alert("MenuPage");
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__menu_menu__["a" /* MenuPage */]);
                    }
                    else {
                        alert("socialregister page");
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__socialregister_socialregister__["a" /* SocialregisterPage */]);
                    }
                    // alert(response.exists)
                    // if (response.exists == 0) {
                    //   alert("SocialregisterPage with exists 0")                
                    //   this.navCtrl.push(SocialregisterPage);
                    // } else {
                    //   alert("MenuPage")
                    //   this.navCtrl.setRoot(MenuPage);
                    // }
                }
                else {
                    alert(response.message);
                    alert("Please Try Again!");
                }
            }, function (err) {
                // alert("bb");
                alert(err);
            });
        })
            .catch(function (err) { return alert(err); });
    };
    LoginPage.prototype.fblogin = function () {
        var _this = this;
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            //alert(JSON.stringify(res));
            console.log(JSON.stringify(res));
            var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers });
            _this.http.post(' https://graph.facebook.com/v2.9/' + res.authResponse.userID + '?fields=id,picture,email,name,birthday,locale,age_range,gender,first_name,last_name&access_token=' + res.authResponse.accessToken, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.userfbdata = data;
                console.log(_this.userfbdata);
                ///alert(JSON.stringify(this.userfbdata));
                var loading = _this.loadingCtrl.create({
                    spinner: 'bubbles',
                    showBackdrop: false,
                    cssClass: 'loader'
                });
                //alert("bbi")
                if (_this.userfbdata.email == 'undefned') {
                    alert("Your FB account not verified");
                }
                else {
                    console.log(data);
                    //   loading.present()
                    var postdata = {
                        email: _this.userfbdata.email,
                        name: _this.userfbdata.name,
                        fbId: _this.userfbdata.id,
                        image: _this.userfbdata.picture.data.url,
                        phone: _this.userfbdata.email,
                        role: 'user',
                    };
                    //alert(JSON.stringify(postdata));
                    console.log(postdata);
                    //alert("kkk");
                    var serialized_all = _this.serializeObj(postdata);
                    var url = _this.appsetting.myGlobalVar + 'users/guest/register_fb_app';
                    var headers_1 = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                    var options_1 = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers_1 });
                    _this.http.post(url, serialized_all, options_1)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (response) {
                        console.log(response);
                        if (response.status == true) {
                            //  alert(response.message);
                            console.log(response);
                            localStorage.setItem('bit', JSON.stringify(1));
                            localStorage.setItem("user_data", JSON.stringify(response.data));
                            localStorage.setItem("udata", JSON.stringify(response.data));
                            console.log(JSON.parse(localStorage.getItem("user_data")));
                            _this.userdata = JSON.parse(localStorage.getItem("user_data"));
                            if (_this.userdata.gallery_image) {
                                _this.gall = _this.userdata.gallery_image;
                            }
                            if (response.verify_status == 1) {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__menu_menu__["a" /* MenuPage */]);
                            }
                            else {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__socialregister_socialregister__["a" /* SocialregisterPage */]);
                            }
                            if (response.exists == 0) {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__socialregister_socialregister__["a" /* SocialregisterPage */]);
                            }
                            else {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__menu_menu__["a" /* MenuPage */]);
                            }
                            //  this.navCtrl.push(SocialregisterPage);
                            //  this.navCtrl.setRoot(MenuPage);
                        }
                        else {
                            alert(response.message);
                            //  alert("Please Try Again!")
                        }
                    }, function (err) {
                        //   alert("bb");
                        //  alert(err);
                    });
                }
            });
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
        // this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"E:\Project\Dost user app new\src\pages\login\login.html"*/'\n<ion-header hidden>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<div style="height:10vh;float:left;width:100%;"></div>\n\n<div class="logo">\n    <img src="assets/image/logo.png">\n   </div>\n\n   <div style="height:5vh;float:left;width:100%;"></div>\n\n   <div class="signin_field">\n   <form #heroForm="ngForm"  novalidate>\n\n        <ion-list>\n         <ion-item>\n            <ion-input type="text" placeholder="Phone Number" [(ngModel)]="data.phone" name="phone" #phone="ngModel"  required  pattern=\'[0-9]+\'></ion-input>\n          </ion-item>\n            <div *ngIf="phone.errors && (phone.dirty || phone.touched)" class="alert alert-danger">\n          <div [hidden]="!phone.errors.required" class="alert alert-danger">\n            Phone Number is required\n            </div>\n             <div [hidden]="!phone.errors.pattern" class="alert alert-danger">\n            Enter a valid Phone Number\n            </div>\n          </div>  \n      \n           <ion-item>\n            <ion-input type="password" placeholder="Password" [(ngModel)]="data.password" name="password" #password="ngModel"  required></ion-input>\n          </ion-item>\n            <div *ngIf="password.errors && (password.dirty || password.touched)" class="alert alert-danger">\n          <div [hidden]="!password.errors.required" class="alert alert-danger">\n            Password is required\n            </div>\n          </div>   \n      \n      </ion-list>\n\n      <button ion-button type="submit" [disabled]="!heroForm.valid" (click)="onSubmit(heroForm)">sign in</button>\n\n      </form>\n\n      <a class="forgot" (click)="forgot()">forgot password?</a>\n\n<div style="height:6vh;float:left;width:100%;"></div>\n\n      <ion-grid style="padding:0px;">\n          <ion-row>\n            <ion-col col-6 style="padding:0px;"><button ion-button class="white" (click)="fblogin()">Login with Facebook</button></ion-col>\n              <ion-col col-6 style="padding:0px;"><button ion-button class="yellow" (click)="googlepppppp()">Login with Google</button></ion-col>\n          </ion-row>\n        </ion-grid>\n\n        <!-- <a (click)="vsignup()" class="signup_line">Don\'t have an account? Sign Up</a> -->\n        <a (click)="signup()" class="signup_line">Don\'t have an account? Sign Up</a>\n        \n      </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\Project\Dost user app new\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting_appsetting__["a" /* AppsettingProvider */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__["a" /* GooglePlus */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__intro_intro__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting_appsetting__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MenuPage = (function () {
    function MenuPage(navCtrl, appsetting, events, fb, googlePlus) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.appsetting = appsetting;
        this.events = events;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.img = '';
        this.setbit = '';
        // Basic root for our content view
        this.rootPage = 'TabsPage';
        this.userdata = '';
        this.pages = [
            { title: 'Home', pageName: 'TabsPage', tabComponent: 'Tab1Page', index: 0, icon: 'home' },
            { title: 'Edit Profile', pageName: 'EditprofilePage', icon: 'contact' },
            { title: 'Change Password', pageName: 'ChangepasswordPage', icon: 'contact' },
            { title: 'Logout', pageName: '', icon: 'log-out' },
        ];
        events.subscribe('msg_added', function (res) {
            // alert(res)
            if (JSON.parse(localStorage.getItem("user_data")) != null) {
                _this.userdata.image = res;
            }
        });
        events.subscribe('msg_added1', function (res) {
            console.log(res);
            if (JSON.parse(localStorage.getItem("user_data")) != null) {
                _this.userdata = res;
            }
        });
        this.setbit = JSON.parse(localStorage.getItem('bit'));
        console.log(JSON.parse(localStorage.getItem("user_data")));
        if (JSON.parse(localStorage.getItem("user_data")) != null) {
            this.userdata = JSON.parse(localStorage.getItem("user_data"));
            console.log(this.userdata);
            if (this.userdata.image) {
                this.img = this.userdata.image.split(':')[0];
                console.log(this.img);
                //   alert(this.img)
                if (this.img == 'https') {
                    this.userdata.image = this.userdata.image;
                }
                else {
                    this.userdata.image = this.appsetting.imagevars + this.userdata.image;
                }
                console.log(this.userdata.image);
                console.log('menucheck');
            }
        }
        console.log(this.userdata);
        console.log("====");
    }
    MenuPage.prototype.openPage = function (page) {
        var params = {};
        // The index is equal to the order of our tabs inside tabs.ts
        if (page.title == 'Logout') {
            //  alert(this.setbit);
            if (this.setbit == 1) {
                localStorage.clear();
                this.fb.logout().then(function (res) {
                    //  alert(JSON.stringify(res)) 
                });
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__intro_intro__["a" /* Intro */]);
            }
            else if (this.setbit == 2) {
                this.googlePlus.logout();
                localStorage.clear();
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__intro_intro__["a" /* Intro */]);
            }
            else if (this.setbit == 0) {
                localStorage.clear();
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__intro_intro__["a" /* Intro */]);
            }
        }
        else {
            if (page.index) {
                params = { tabIndex: page.index };
            }
            // The active child nav is our Tabs Navigation
            if (this.nav.getActiveChildNav() && page.index != undefined) {
                this.nav.getActiveChildNav().select(page.index);
            }
            else {
                // Tabs are not active, so reset the root page 
                // In this case: moving to or from SpecialPage
                this.nav.setRoot(page.pageName, params);
            }
        }
    };
    MenuPage.prototype.isActive = function (page) {
        // Again the Tabs Navigation
        var childNav = this.nav.getActiveChildNav();
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        // Fallback needed when there is no active childnav (tabs not active)
        if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
            return 'primary';
        }
        return;
    };
    MenuPage.prototype.profilePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    return MenuPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
], MenuPage.prototype, "nav", void 0);
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menu',template:/*ion-inline-start:"E:\Project\Dost user app new\src\pages\menu\menu.html"*/'<ion-menu [content]="content">\n\n  <ion-header hidden>\n    \n      <ion-navbar>\n        <ion-title>Menu</ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n    \n    <ion-content class="card-background-page back_img">\n\n  <ion-card>\n    <img src="assets/image/p2.jpg"/>\n    <div class="overlay"></div>\n    <div class="card-title">\n      <ion-list>\n        <ion-item (click)="profilePage();">\n          <ion-avatar item-start *ngIf=\'userdata.image\'>\n            <img [src]="userdata.image">\n          </ion-avatar>\n           <ion-avatar item-start *ngIf=\'!userdata.image\'>\n            <img src="assets/image/index.jpg">\n          </ion-avatar>\n          <!--<h2 *ngIf="userdata.phone!=\'undefined\'">{{userdata.phone}}</h2>-->\n          <h2 *ngIf="userdata.phone==\'undefined\'">{{userdata.company_name}}</h2>\n        </ion-item>\n      </ion-list>\n    </div>\n\n  </ion-card>\n\n      <ion-list>\n<button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n  <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n  {{p.title}}\n</button>\n      </ion-list>\n    \n    </ion-content>\n\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"E:\Project\Dost user app new\src\pages\menu\menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_appsetting_appsetting__["a" /* AppsettingProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__["a" /* GooglePlus */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifycodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting_appsetting__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu__ = __webpack_require__(33);
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
 * Generated class for the VerifycodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VerifycodePage = (function () {
    function VerifycodePage(navCtrl, navParams, http, loadingCtrl, appsetting) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.appsetting = appsetting;
        this.data = '';
        this.setbit = '';
        this.userdata = '';
        this.setbit = JSON.parse(localStorage.getItem('bit'));
    }
    VerifycodePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerifycodePage');
    };
    VerifycodePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    VerifycodePage.prototype.onSubmit = function (data) {
        var _this = this;
        alert(data);
        alert(this.userdata);
        alert(this.userdata._id);
        console.log(this.userdata);
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        console.log(data);
        loading.present();
        var postdata = {
            id: this.userdata._id,
            code: data.value.code
        };
        console.log(postdata);
        var serialized_all = this.serializeObj(postdata);
        var url = this.appsetting.myGlobalVar + 'users/checkcode';
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(url, serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            loading.dismissAll();
            if (response.status == true) {
                alert(response.data.message);
                alert(_this.setbit);
                if (_this.setbit) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__menu_menu__["a" /* MenuPage */]);
                }
                else {
                    alert("Please try again");
                }
            }
        });
        //this.navCtrl.push(ProcessPage);
    };
    return VerifycodePage;
}());
VerifycodePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-verifycode',template:/*ion-inline-start:"E:\Project\Dost user app new\src\pages\verifycode\verifycode.html"*/'<!--\n  Generated template for the VerifycodePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>One time Verification code</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  \n  <div style="height:10vh;float:left;width:100%;"></div>\n  \n  <div class="logo">\n      <img src="assets/image/logo.png">\n     </div>\n  \n     <div style="height:5vh;float:left;width:100%;"></div>\n  \n     <div class="signin_field">\n     <form #heroForm="ngForm"  novalidate>\n  \n     <ion-list>\n            <ion-item>\n            <ion-input type="text" placeholder="Enter One time Verification code" [(ngModel)]="data.code" name="code" #code="ngModel"  required></ion-input>\n          </ion-item>\n            <!--<div *ngIf="email.errors && (email.dirty || email.touched)" class="alert alert-danger">\n          <div [hidden]="!email.errors.required" class="alert alert-danger">\n            Email is required\n            </div>\n             <div [hidden]="!email.errors.pattern" class="alert alert-danger">\n            Enter a valid Email Address\n            </div>\n          </div>  -->\n        \n        </ion-list>\n  \n        <button ion-button type="submit"  [disabled]="!heroForm.valid" (click)="onSubmit(heroForm)">Send</button>\n  \n        </form>\n\n\n        </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\Project\Dost user app new\src\pages\verifycode\verifycode.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_appsetting_appsetting__["a" /* AppsettingProvider */]])
], VerifycodePage);

//# sourceMappingURL=verifycode.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialregisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting_appsetting__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__verifycode_verifycode__ = __webpack_require__(48);
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
 * Generated class for the SocialregisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SocialregisterPage = (function () {
    function SocialregisterPage(navCtrl, navParams, http, loadingCtrl, appsetting) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.appsetting = appsetting;
        this.data = '';
        this.userdata = '';
        //  this.data.name='Vendor Type';
        if (JSON.parse(localStorage.getItem("user_data")) != null || JSON.parse(localStorage.getItem("user_data")) != undefined) {
            this.userdata = JSON.parse(localStorage.getItem("user_data"));
        }
    }
    SocialregisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SocialregisterPage');
    };
    SocialregisterPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    SocialregisterPage.prototype.onSubmit = function (data) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        console.log(data);
        loading.present();
        var postdata = {
            id: this.userdata._id,
            phone: data.value.number
        };
        console.log(postdata);
        var serialized_all = this.serializeObj(postdata);
        var url = this.appsetting.myGlobalVar + 'users/addpending';
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(url, serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            loading.dismissAll();
            if (response.status == true) {
                //  alert(response.data.message);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__verifycode_verifycode__["a" /* VerifycodePage */]);
            }
            else {
                alert("Please try again");
            }
        });
    };
    return SocialregisterPage;
}());
SocialregisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-socialregister',template:/*ion-inline-start:"E:\Project\Dost user app new\src\pages\socialregister\socialregister.html"*/'<!--\n  Generated template for the SocialregisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ADD</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  \n  <div style="height:10vh;float:left;width:100%;"></div>\n  \n  <div class="logo">\n      <img src="assets/image/logo.png">\n     </div>\n  \n     <div style="height:5vh;float:left;width:100%;"></div>\n  \n     <div class="signin_field">\n     <form #heroForm="ngForm"  novalidate>\n  \n     <ion-list>               \n               <ion-item>\n       <ion-input type="tel" placeholder="Phone Number(Only Indian Number)" [(ngModel)]="data.number" name="number" #number="ngModel" required [maxlength]="10"></ion-input>\n          </ion-item>\n           <div *ngIf="number.errors && (number.dirty || number.touched)" class="alert alert-danger">\n          <div [hidden]="!number.errors.required" class="alert alert-danger">\n           Phone Number is required\n            </div>\n            <!--<div [hidden]="!number.errors.pattern" class="alert alert-danger">\n 			     	 Enter a valid Phone Number\n           </div>-->\n           <div [hidden]="!number.errors.maxlength" class="alert alert-danger">\n 			     	 Enter a valid length of Phone Number\n           </div>\n          </div>         \n     </ion-list>\n       <button ion-button type="submit" (click)="onSubmit(heroForm)" [disabled]="!heroForm.valid">Save</button>     \n     </form>\n     </div>\n    \n</ion-content>\n'/*ion-inline-end:"E:\Project\Dost user app new\src\pages\socialregister\socialregister.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_appsetting_appsetting__["a" /* AppsettingProvider */]])
], SocialregisterPage);

//# sourceMappingURL=socialregister.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Intro; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appsetting_appsetting__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_plus__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__menu_menu__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__socialregister_socialregister__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { VsignupPage } from '../vsignup/vsignup';








/**
 * Generated class for the Intro page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Intro = (function () {
    function Intro(navCtrl, navParams, fb, http, alertCtrl, loadingCtrl, appsetting, googlePlus) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.appsetting = appsetting;
        this.googlePlus = googlePlus;
        this.userdata = '';
        this.userfbdata = '';
        this.gall = '';
        console.log(JSON.parse(localStorage.getItem("user_data")));
        this.userdata = JSON.parse(localStorage.getItem("user_data"));
    }
    Intro.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Intro');
    };
    Intro.prototype.login = function () {
        console.log(this.userdata);
        if (this.userdata == null) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        }
        else {
            //  this.navCtrl.push(MenuPage);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__menu_menu__["a" /* MenuPage */]);
        }
    };
    Intro.prototype.googlepppppp = function () {
        var _this = this;
        this.googlePlus.login({})
            .then((function (res) {
            alert("tr");
            alert(JSON.stringify(res));
            var postdata = {
                email: res.email,
                name: res.name,
                googleId: res.userId,
                image: res.imageUrl
            };
            alert(JSON.stringify(postdata));
            console.log(postdata);
            // alert("kkk");
            var serialized_all = _this.serializeObj(postdata);
            var url = _this.appsetting.myGlobalVar + 'users/user_register_googleplus_app';
            var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
            var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* RequestOptions */]({ headers: headers });
            _this.http.post(url, serialized_all, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                console.log(response);
                alert("Api hit");
                if (response.status == true) {
                    alert(JSON.stringify(response));
                    console.log(response);
                    localStorage.setItem("user_data", JSON.stringify(response.data));
                    localStorage.setItem("udata", JSON.stringify(response.data));
                    console.log(JSON.parse(localStorage.getItem("user_data")));
                    _this.userdata = JSON.parse(localStorage.getItem("user_data"));
                    _this.gall = _this.userdata.gallery_image;
                    console.log(_this.gall);
                    if (_this.gall) {
                        for (var i in _this.gall) {
                            _this.gall[i].img = _this.appsetting.imagevar + _this.gall[i].image;
                        }
                        console.log(_this.gall);
                    }
                    if (response.exists == 0) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__socialregister_socialregister__["a" /* SocialregisterPage */]);
                    }
                    else {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__menu_menu__["a" /* MenuPage */]);
                    }
                }
                else {
                    alert(response.message);
                    alert("Please Try Again!");
                }
            }, function (err) {
                //. alert("bb");
                alert(err);
            });
        }))
            .catch(function (err) {
            alert(err);
            //alert("ii");
        });
    };
    Intro.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    Intro.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    Intro.prototype.fblogin = function () {
        var _this = this;
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            //alert(JSON.stringify(res));
            console.log(JSON.stringify(res));
            var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* RequestOptions */]({ headers: headers });
            _this.http.post(' https://graph.facebook.com/v2.9/' + res.authResponse.userID + '?fields=id,picture,email,name,birthday,locale,age_range,gender,first_name,last_name&access_token=' + res.authResponse.accessToken, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.userfbdata = data;
                console.log(_this.userfbdata);
                //   alert(JSON.stringify(this.userfbdata));
                var loading = _this.loadingCtrl.create({
                    spinner: 'bubbles',
                    showBackdrop: false,
                    cssClass: 'loader'
                });
                if (_this.userfbdata.email == 'undefned') {
                    alert("Your FB account not verified");
                }
                else {
                    console.log(data);
                    //   loading.present()
                    var postdata = {
                        email: _this.userfbdata.email,
                        name: _this.userfbdata.name,
                        fbId: _this.userfbdata.id,
                        image: _this.userfbdata.picture.data.url,
                        phone: _this.userfbdata.email,
                        role: 'Vendor',
                    };
                    //alert(JSON.stringify(postdata));
                    console.log(postdata);
                    //alert("kkk");
                    var serialized_all = _this.serializeObj(postdata);
                    var url = _this.appsetting.myGlobalVar + 'users/user_register_fb_app';
                    var headers_1 = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                    var options_1 = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* RequestOptions */]({ headers: headers_1 });
                    _this.http.post(url, serialized_all, options_1)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (response) {
                        console.log(response);
                        if (response.status == true) {
                            //  alert(response.message);
                            console.log(response);
                            localStorage.setItem('bit', JSON.stringify(1));
                            localStorage.setItem("user_data", JSON.stringify(response.data));
                            localStorage.setItem("udata", JSON.stringify(response.data));
                            console.log(JSON.parse(localStorage.getItem("user_data")));
                            _this.userdata = JSON.parse(localStorage.getItem("user_data"));
                            _this.gall = _this.userdata.gallery_image;
                            console.log(_this.gall);
                            if (_this.gall) {
                                if (_this.gall.length > 0) {
                                    for (var i in _this.gall) {
                                        _this.gall[i].img = _this.appsetting.imagevar + _this.gall[i].image;
                                    }
                                    console.log(_this.gall);
                                }
                            }
                            if (response.verify_status == 1) {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__menu_menu__["a" /* MenuPage */]);
                            }
                            else {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__socialregister_socialregister__["a" /* SocialregisterPage */]);
                            }
                            if (response.exists == 0) {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__socialregister_socialregister__["a" /* SocialregisterPage */]);
                            }
                            else {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__menu_menu__["a" /* MenuPage */]);
                            }
                            //  this.navCtrl.push(SocialregisterPage);
                            //  this.navCtrl.setRoot(MenuPage);
                        }
                        else {
                            alert(response.message);
                            //  alert("Please Try Again!")
                        }
                    }, function (err) {
                        //   alert("bb");
                        //  alert(err);
                    });
                }
            });
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
        this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
    };
    Intro.prototype.test = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__socialregister_socialregister__["a" /* SocialregisterPage */]);
    };
    return Intro;
}());
Intro = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-intro',template:/*ion-inline-start:"E:\Project\Dost user app new\src\pages\intro\intro.html"*/'\n<div class="logo">\n    <img src="assets/image/logo.png">\n   </div>\n\n<ion-slides pager>\n\n    \n\n  <ion-slide style="background-color: white">\n    <div class="main_box" style="background:url(assets/image/a.jpeg) no-repeat; background-size:cover;height:100vh;position:relative;">\n  \n  <div class="overlay1"></div>\n  <div class="slide_outer">\n        <div class="spacer" style="height:15vh;width:100%;float:left;"></div>\n  <!-- <div class="logo">\n   <img src="assets/image/logo.png">\n  </div> -->\n   <div class="spacer" style="height:63.5vh;width:100%;float:left;"></div>\n  <!--<p>\n  Get inspired from over<br />70,000 wedding photos\n  </p>-->\n\n </div><!--main_box-->\n    </div>\n\n   \n  </ion-slide>\n\n  <!--<ion-slide style="background-color: white">\n     <div class="main_box" style="background:url(assets/image/b.jpg) no-repeat; background-size:cover;height:100vh;position:relative;">\n  \n  <div class="overlay1"></div>\n  <div class="slide_outer">\n        <div class="spacer" style="height:15vh;width:100%;float:left;"></div>\n\n  <div class="spacer" style="height:63.5vh;width:100%;float:left;"></div>\n  <p>\n      Find the right wedding vendor for you.<br />Thousands of trusted reviews.\n  </p>\n\n </div>\n    </div>\n\n   \n  </ion-slide>-->\n\n\n  <!--<ion-slide style="background-color: white">\n      <div class="main_box" style="background:url(assets/image/c.jpg) no-repeat; background-size:cover;height:100vh;position:relative;">\n    \n    <div class="overlay1"></div>\n    <div class="slide_outer">\n          <div class="spacer" style="height:15vh;width:100%;float:left;"></div>\n\n    <div class="spacer" style="height:63.5vh;width:100%;float:left;"></div>\n    <p>\n    Team up with your loves ones<br />to plan your wedding.\n    </p>\n  \n  \n   </div>\n      </div>\n  \n     \n    </ion-slide>-->\n\n  <ion-slide style="background-color: white">\n    <div class="main_box" style="background:url(assets/image/d.jpg) no-repeat; background-size:cover;height:100vh;position:relative;">\n  \n  <div class="overlay1"></div>\n  <div class="slide_outer">\n        <div class="spacer" style="height:15vh;width:100%;float:left;"></div>\n  <!-- <div class="logo">\n   <img src="assets/image/logo.png">\n  </div> -->\n   <div class="spacer" style="height:33.5vh;width:100%;float:left;"></div>\n   <ion-grid>\n      <ion-row>\n        <ion-col col-12><button ion-button class="blue" (click)="fblogin()">Connect with Facebook</button></ion-col>\n           <!--<ion-col col-12><button ion-button class="blue" (click)="googlepppppp()">Connect with Google+</button></ion-col>-->\n        </ion-row>\n      </ion-grid>\n<span class="or">Or</span>\n<ion-grid>\n  <ion-row>\n    <ion-col col-6><button ion-button class="white" (click)="signup()">Sign Up</button></ion-col>\n      <ion-col col-6><button ion-button class="yellow" (click)="login()">Log In</button></ion-col>\n  </ion-row>\n</ion-grid>\n\n<p class="last_para">By continuing, you agree to our <a>Terms of service</a>,<br />and <a>Privacy Policy.</a></p>\n\n<!--<button (click)="test()">sfs</button>-->\n </div><!--main_box-->\n    </div>\n\n   \n  </ion-slide>\n\n</ion-slides>\n'/*ion-inline-end:"E:\Project\Dost user app new\src\pages\intro\intro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_appsetting_appsetting__["a" /* AppsettingProvider */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_plus__["a" /* GooglePlus */]])
], Intro);

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_process__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting_appsetting__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__menu_menu__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__verifycode_verifycode__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__socialregister_socialregister__ = __webpack_require__(49);
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
 * Generated class for the VsignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, http, fb, googlePlus, alertCtrl, loadingCtrl, appsetting) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.appsetting = appsetting;
        this.data = '';
        this.userdata = '';
        this.gall = '';
        this.userfbdata = '';
        // this.data = {
        //   name: 'Vendor Type',
        //   nameb: 'How did you find out about us?'
        // }
        this.userdata = JSON.parse(localStorage.getItem("user_data"));
    }
    SignupPage.prototype.loginsss = function () {
        console.log(this.userdata);
        if (this.userdata == null) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__menu_menu__["a" /* MenuPage */]);
        }
    };
    SignupPage.prototype.process = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__process_process__["a" /* ProcessPage */]);
    };
    SignupPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.login1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__process_process__["a" /* ProcessPage */]);
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
        // this.data.name="Photographer";
        // this.data.nameb = 'How did you find out about us?';
        // this.data.name = 'Vendor Type';
    };
    SignupPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    SignupPage.prototype.onSubmit = function (data) {
        var _this = this;
        console.log(data);
        console.log("babiuta");
        console.log(data.name);
        console.log(data.nameb);
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        console.log(data.value);
        if (data.value.password != data.value.cpassword) {
            var alert1 = this.alertCtrl.create({
                title: 'Error ',
                subTitle: 'Passwords must match.',
                buttons: ['Try Again']
            });
            alert1.present();
        }
        else {
            console.log(data);
            loading.present();
            var postdata = {
                name: data.value.name,
                email: data.value.email,
                find_us: data.value.nameb,
                phone: data.value.number,
                password: data.value.password,
                status: 1,
                role: "user",
                friend_invitcode: data.value.invite
            };
            console.log(postdata);
            var serialized_all = this.serializeObj(postdata);
            var url = this.appsetting.myGlobalVar + 'users/guest/signup';
            var headers = new __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
            var options = new __WEBPACK_IMPORTED_MODULE_8__angular_http__["d" /* RequestOptions */]({ headers: headers });
            this.http.post(url, serialized_all, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                console.log(response);
                loading.dismissAll();
                alert(response.message);
                if (response.status == true) {
                    localStorage.setItem("udata", JSON.stringify(response.data));
                    //localStorage.setItem("user_data",JSON.stringify(response.data));
                    console.log(response);
                    localStorage.setItem("uid", JSON.stringify(response.data._id));
                    console.log(JSON.parse(localStorage.getItem("uid")));
                    // this.navCtrl.push(ProcessPage);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__verifycode_verifycode__["a" /* VerifycodePage */]);
                }
                else {
                    alert("Please try again");
                }
            });
        }
    };
    SignupPage.prototype.googlepppppp = function () {
        var _this = this;
        this.googlePlus.login({})
            .then((function (res) {
            if (res.imageUrl == undefined) {
                res.imageUrl = '';
            }
            //alert(JSON.stringify(res))
            var postdata = {
                phone: res.email,
                name: res.name,
                googleId: res.userId,
                image: res.imageUrl,
                role: 'user',
                status: 1
            };
            //alert(JSON.stringify(postdata));
            console.log(postdata);
            // alert("kkk");
            var serialized_all = _this.serializeObj(postdata);
            var url = _this.appsetting.myGlobalVar + 'users/guest/register_googleplus_app';
            var headers = new __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
            var options = new __WEBPACK_IMPORTED_MODULE_8__angular_http__["d" /* RequestOptions */]({ headers: headers });
            _this.http.post(url, serialized_all, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                console.log(response);
                if (response.status == true) {
                    console.log(response);
                    localStorage.setItem('bit', JSON.stringify(2));
                    localStorage.setItem("user_data", JSON.stringify(response.data));
                    //  localStorage.setItem("udata", JSON.stringify(response.data));
                    console.log(JSON.parse(localStorage.getItem("user_data")));
                    _this.userdata = JSON.parse(localStorage.getItem("user_data"));
                    console.log(_this.gall);
                    if (_this.userdata.gallery_image) {
                        _this.gall = _this.userdata.gallery_image;
                    }
                    if (response.verify_status == 1) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__menu_menu__["a" /* MenuPage */]);
                    }
                    else {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__socialregister_socialregister__["a" /* SocialregisterPage */]);
                    }
                    // alert(response.exists)
                    if (response.exists == 0) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__socialregister_socialregister__["a" /* SocialregisterPage */]);
                    }
                    else {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__menu_menu__["a" /* MenuPage */]);
                    }
                }
                else {
                    alert(response.message);
                    //  alert("Please Try Again!")
                }
            }, function (err) {
                //. alert("bb");
                alert(err);
            });
        }))
            .catch(function (err) { return alert(err); });
    };
    SignupPage.prototype.fblogin = function () {
        var _this = this;
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            //alert(JSON.stringify(res));
            console.log(JSON.stringify(res));
            var headers = new __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            var options = new __WEBPACK_IMPORTED_MODULE_8__angular_http__["d" /* RequestOptions */]({ headers: headers });
            _this.http.post(' https://graph.facebook.com/v2.9/' + res.authResponse.userID + '?fields=id,picture,email,name,birthday,locale,age_range,gender,first_name,last_name&access_token=' + res.authResponse.accessToken, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.userfbdata = data;
                console.log(_this.userfbdata);
                ///alert(JSON.stringify(this.userfbdata));
                var loading = _this.loadingCtrl.create({
                    spinner: 'bubbles',
                    showBackdrop: false,
                    cssClass: 'loader'
                });
                //alert("bbi")
                if (_this.userfbdata.email == 'undefned') {
                    alert("Your FB account not verified");
                }
                else {
                    console.log(data);
                    //   loading.present()
                    var postdata = {
                        email: _this.userfbdata.email,
                        name: _this.userfbdata.name,
                        fbId: _this.userfbdata.id,
                        image: _this.userfbdata.picture.data.url,
                        phone: _this.userfbdata.email,
                        role: 'user',
                    };
                    //alert(JSON.stringify(postdata));
                    console.log(postdata);
                    //alert("kkk");
                    var serialized_all = _this.serializeObj(postdata);
                    var url = _this.appsetting.myGlobalVar + 'users/guest/register_fb_app';
                    var headers_1 = new __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                    var options_1 = new __WEBPACK_IMPORTED_MODULE_8__angular_http__["d" /* RequestOptions */]({ headers: headers_1 });
                    _this.http.post(url, serialized_all, options_1)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (response) {
                        console.log(response);
                        if (response.status == true) {
                            //  alert(response.message);
                            console.log(response);
                            localStorage.setItem('bit', JSON.stringify(1));
                            localStorage.setItem("user_data", JSON.stringify(response.data));
                            localStorage.setItem("udata", JSON.stringify(response.data));
                            console.log(JSON.parse(localStorage.getItem("user_data")));
                            _this.userdata = JSON.parse(localStorage.getItem("user_data"));
                            if (_this.userdata.gallery_image) {
                                _this.gall = _this.userdata.gallery_image;
                            }
                            if (response.verify_status == 1) {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__menu_menu__["a" /* MenuPage */]);
                            }
                            else {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__socialregister_socialregister__["a" /* SocialregisterPage */]);
                            }
                            if (response.exists == 0) {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__socialregister_socialregister__["a" /* SocialregisterPage */]);
                            }
                            else {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__menu_menu__["a" /* MenuPage */]);
                            }
                            //  this.navCtrl.push(SocialregisterPage);
                            //  this.navCtrl.setRoot(MenuPage);
                        }
                        else {
                            alert(response.message);
                            //  alert("Please Try Again!")
                        }
                    }, function (err) {
                        //   alert("bb");
                        //  alert(err);
                    });
                }
            });
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
        // this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"E:\Project\Dost user app new\src\pages\signup\signup.html"*/'<ion-header hidden>\n  \n    <ion-navbar>\n      <ion-title>Sign Up</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n  \n  \n    <div style="height:10vh;float:left;width:100%;"></div>\n  \n    <div class="logo">\n      <img src="assets/image/logo.png">\n    </div>\n  \n    <div style="height:5vh;float:left;width:100%;"></div>\n  \n    <div class="signin_field">\n      <form #heroForm="ngForm" novalidate>\n  \n        <ion-list>\n  \n          <ion-item>\n            <ion-input type="text" [(ngModel)]="data.name" name=\'name\' #name="ngModel" placeholder="Name" required></ion-input>\n          </ion-item>\n          <div *ngIf="name.errors && (name.dirty || name.touched)" class="alert alert-danger">\n            <div [hidden]="!name.errors.required" class="alert alert-danger">\n              Name is required\n            </div>\n          </div>\n  \n          <ion-item>\n            <ion-input type="email" placeholder="Email" [(ngModel)]="data.email" name="email" #email="ngModel" required></ion-input>\n          </ion-item>\n          <div *ngIf="email.errors && (email.dirty || email.touched)" class="alert alert-danger">\n            <div [hidden]="!email.errors.required" class="alert alert-danger">\n              Email is required\n            </div>\n            <div [hidden]="!email.errors.pattern" class="alert alert-danger">\n              Enter a valid Email Address\n            </div>\n          </div>\n  \n          <ion-item>\n            <ion-input type="password" placeholder="Password" [(ngModel)]="data.password" name="password" #password="ngModel" required></ion-input>\n          </ion-item>\n          <div *ngIf="password.errors && (password.dirty || password.touched)" class="alert alert-danger">\n            <div [hidden]="!password.errors.required" class="alert alert-danger">\n              Password is required\n            </div>\n          </div>\n  \n          <ion-item>\n            <ion-input type="password" placeholder="Confirm Password" [(ngModel)]="data.cpassword" name="cpassword" #cpassword="ngModel"\n              required></ion-input>\n          </ion-item>\n          <div *ngIf="cpassword.errors && (cpassword.dirty || cpassword.touched)" class="alert alert-danger">\n            <div [hidden]="!cpassword.errors.required" class="alert alert-danger">\n              Confirm Password is required\n            </div>\n          </div>\n  \n          <ion-item>\n            <ion-input type="text" placeholder="Phone Number" [(ngModel)]="data.number" name="number" #number="ngModel" maxlength="10"\n              required pattern=\'[0-9]+\'></ion-input>\n          </ion-item>\n          <div *ngIf="number.errors && (number.dirty || number.touched)" class="alert alert-danger">\n            <div [hidden]="!number.errors.required" class="alert alert-danger">\n              Phone Number is required\n            </div>\n            <div [hidden]="!number.errors.pattern" class="alert alert-danger">\n              Enter a valid Phone Number\n            </div>\n          </div>\n  \n          <ion-item>\n            <ion-select [(ngModel)]="data.nameb" name="nameb" #nameb="ngModel" placeholder="How did you find out about us?" required>\n              <!--remove  [ngModelOptions]="{standalone: true}"> if you don\'t need it in the form -->\n              <!-- <ion-option value="fr">How did you find out about us?</ion-option> -->\n              <ion-option value="Friends">Friends</ion-option>\n              <ion-option value="Friends of Friends">Friends of Friends</ion-option>\n              <ion-option value="SocialMedia">Social Media</ion-option>\n            </ion-select>\n          </ion-item>\n          <div *ngIf="bit == 1" class="alert alert-danger">\n              Find about us is required\n          </div>\n          <ion-item>\n            <ion-input type="text" placeholder="Invite Code" [(ngModel)]="data.invite" name="invite" #invite="ngModel"></ion-input>\n          </ion-item>\n        </ion-list>\n  \n        <button ion-button type="submit" (click)="onSubmit(heroForm)" [disabled]="!heroForm.valid">sign up</button>\n  \n      </form>\n      <div style="height:6vh;float:left;width:100%;"></div>\n  \n      <ion-grid style="padding:0px;">\n        <ion-row>\n          <ion-col col-6 style="padding:0px;">\n            <button ion-button class="white" (click)="fblogin()">Login with Facebook</button>\n          </ion-col>\n          <ion-col col-6 style="padding:0px;">\n            <button ion-button class="yellow" (click)="googlepppppp()">Login with Google+</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  \n      <p class="last_para">By continuing, you agree to our\n        <a>Terms of service</a>,and\n        <a>Privacy Policy.</a>\n      </p>\n  \n      <a (click)="loginsss()" class="signup_line"> Already have an account? Sign In</a>\n  \n    </div>\n  \n  \n    <div style="height:15vh;float:left;width:100%;"></div>\n  \n  \n  </ion-content>'/*ion-inline-end:"E:\Project\Dost user app new\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__["a" /* GooglePlus */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting_appsetting__["a" /* AppsettingProvider */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting_appsetting__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProcessPage = (function () {
    function ProcessPage(navCtrl, navParams, http, alertCtrl, loadingCtrl, appsetting, socialSharing, places, geolocation, camera, actionSheetCtrl, platform) {
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
        this.platform = platform;
        this.make = '';
        this.makes = [];
        this.wearss = [];
        this.wear = [];
        this.vv = '';
        this.gooms = [];
        this.vv1 = '';
        this.ata = '';
        this.gom = '';
        this.ll = '';
        this.services = '';
        this.additionalservices = '';
        this.design_status8 = '';
        this.devilerystatus = '';
        this.delivery_status = '';
        this.travles = '';
        this.price_per_plate = '';
        this.demo_status8 = '';
        this.addvar = '';
        this.venu = '';
        /*DETAILS*/
        this.goomitem = [];
        this.items = [];
        this.item = [];
        this.venuitems1 = [];
        this.makeitem = [];
        this.checkitem = [];
        this.itemqs = [];
        this.ditems = [];
        this.additmes = [];
        this.wae1 = [];
        /*Price per day*/
        this.items1 = [];
        this.items111 = [];
        this.cours = [];
        this.cour = '';
        this.data = '';
        this.id = '';
        this.gall = '';
        //dis = 2;
        this.discount = '';
        this.customer_id = '';
        this.txn_id = '';
        this.delivery_status8 = '';
        this.addddon = '';
        this.photovedio = '';
        this.autocomplete = '';
        this.highlights = '';
        this.srcImage = '';
        this.imgTosend = '';
        this.status = '';
        this.status1 = '';
        this.status3 = '';
        this.status2 = '';
        this.status4 = '';
        this.statuss = '';
        this.status4s = '';
        this.status3s = '';
        this.status2s = '';
        this.status1s = '';
        this.userdata = '';
        this.dis = 2;
        this.vendor_check = '';
        this.morestatus = '';
        this.morestatus1 = '';
        this.check1 = {
            checked: [],
        };
        this.check12 = {
            checked: [],
        };
        this.soundstatus = '';
        this.lightstatus = '';
        this.securitystatus = '';
        this.cocktailstatus = '';
        this.designstatus = '';
        this.matchstatus = '';
        this.tailorstatus = '';
        this.poolstatus = '';
        this.parkingstatus = '';
        this.alocohalstatus = '';
        this.dfmstatus = '';
        this.djstatus = '';
        this.airstatus = '';
        this.travelstatus = '';
        this.weddingstatus = '';
        this.outdoorstatus = '';
        this.platform.registerBackButtonAction(function () {
            navigator['app'].exitApp();
        });
        this.ata = 2;
        if (JSON.parse(localStorage.getItem("udata")) != null || JSON.parse(localStorage.getItem("udata")) != undefined) {
            this.userdata = JSON.parse(localStorage.getItem("udata"));
            if (this.userdata.vendor_type == 'Photographer') {
                this.vendor_check = 1;
            }
            else if (this.userdata.vendor_type == 'Bridal Wear') {
                this.vendor_check = 2;
            }
            else if (this.userdata.vendor_type == 'Wedding venue') {
                this.vendor_check = 3;
            }
            else if (this.userdata.vendor_type == 'Wedding Decorator') {
                this.vendor_check = 4;
            }
            else if (this.userdata.vendor_type == 'Wedding planners') {
                this.vendor_check = 4;
            }
            else if (this.userdata.vendor_type == 'Mehndi artist') {
                this.vendor_check = 4;
            }
            else if (this.userdata.vendor_type == 'Sangeet choreographers') {
                this.vendor_check = 4;
            }
            else if (this.userdata.vendor_type == 'Wedding cards') {
                this.vendor_check = 4;
            }
            else if (this.userdata.vendor_type == 'Wedding cakes') {
                this.vendor_check = 4;
            }
            else if (this.userdata.vendor_type == 'wedding favours') {
                this.vendor_check = 4;
            }
            else if (this.userdata.vendor_type == 'Make up') {
                this.vendor_check = 5;
            }
            else if (this.userdata.vendor_type == 'Groomwear' || this.userdata.vendor_type == 'Bridal Wear') {
                this.vendor_check = 6;
            }
            else if (this.userdata.vendor_type == 'Wedding catering') {
                this.vendor_check = 7;
            }
            else if (this.userdata.vendor_type == 'Wedding jewellery' || this.userdata.vendor_type == 'wedding accessories') {
                this.vendor_check = 8;
            }
            console.log(this.userdata);
            this.getdata();
            if (this.userdata.establishment_year == 'null') {
                this.userdata.establishment_year = '';
            }
            if (this.userdata.working_hours == 'undefined') {
                this.userdata.working_hours = '';
            }
            else if (this.userdata.fb == 'undefined') {
                this.userdata.fb = '';
            }
            else if (this.userdata.twitter == 'undefined') {
                this.userdata.twitter = '';
            }
            else if (this.userdata.insta == 'undefined') {
                this.userdata.insta = '';
            }
            else if (this.userdata.awards == 'undefined') {
                this.userdata.awards = '';
            }
            else if (this.userdata.discount_amount == 'undefined') {
                this.userdata.discount_amount = '';
            }
            else if (this.userdata.effective_date == "undefined") {
                this.userdata.effective_date = '';
            }
            else if (this.userdata.product_detail == "undefined") {
                this.userdata.product_detail = '';
            }
            else if (this.userdata.discount) {
                if (this.userdata.discount.title == undefined) {
                    this.userdata.discount.title = '';
                }
                else if (this.userdata.discount.amount == undefined) {
                    this.userdata.discount.amount = '';
                }
            }
            else {
                this.userdata.discount = {
                    title: '',
                    amount: ''
                };
            }
            //  photo_book:data.value.adddon_photo,
            //  portrait_framing:data.value.adddon_portrait   
            if (this.userdata.addon) {
                if (this.userdata.addon.candid == undefined) {
                    console.log("++++++++++++++++++++");
                    this.userdata.addon.candid = '';
                    this.cb_value == false;
                }
                else {
                    console.log("--------------------");
                    this.cb_value = true;
                    this.updateCbValue();
                }
                if (this.userdata.addon.video_editing == undefined) {
                    console.log("++++++++++++++++++++");
                    this.userdata.addon.video_editing = '';
                    this.cb_value1 == false;
                }
                else {
                    console.log("--------------------");
                    this.cb_value1 = true;
                    this.nextvalue();
                }
                if (this.userdata.addon.photo_book == undefined) {
                    console.log("++++++++++++++++++++");
                    this.userdata.addon.photo_book = '';
                    this.cb_value2 == false;
                }
                else {
                    console.log("--------------------");
                    this.cb_value2 = true;
                    this.nextvalue1();
                }
                if (this.userdata.addon.portrait_framing == undefined) {
                    console.log("++++++++++++++++++++");
                    this.userdata.addon.portrait_framing = '';
                    this.cb_value3 == false;
                }
                else {
                    console.log("--------------------");
                    this.cb_value3 = true;
                    this.nextvalue2();
                }
            }
            else {
                this.userdata.addon = {
                    portrait_framing: '',
                    photo_book: '',
                    video_editing: '',
                    candid: ''
                };
            }
            if (this.userdata.highlights) {
                if (this.userdata.highlights.portrait_framing == undefined) {
                    console.log("++++++++++++++++++++");
                    this.userdata.highlights.portrait_framing = '';
                    this.cand3 == false;
                }
                else {
                    console.log("--------------------");
                    this.cand3 = true;
                    this.addon3();
                }
                if (this.userdata.highlights.candid == undefined) {
                    console.log("++++++++++++++++++++");
                    this.userdata.highlights.candid = '';
                    this.cand == false;
                }
                else {
                    console.log("--------------------");
                    this.cand = true;
                    this.addon();
                }
                if (this.userdata.highlights.video_editing == undefined) {
                    console.log("++++++++++++++++++++");
                    this.userdata.highlights.video_editing = '';
                    this.cand1 == false;
                }
                else {
                    console.log("--------------------");
                    this.cand1 = true;
                    this.addon1();
                }
                if (this.userdata.highlights.photo_book == undefined) {
                    console.log("++++++++++++++++++++");
                    this.userdata.highlights.photo_book = '';
                    this.cand2 == false;
                }
                else {
                    console.log("--------------------");
                    this.cand2 = true;
                    this.addon2();
                }
            }
            else {
                this.userdata.highlights = {
                    portrait_framing: '',
                    photo_book: '',
                    video_editing: '',
                    candid: ''
                };
            }
            if (this.userdata.discount) {
                if (this.userdata.discount.day == undefined || this.userdata.discount.day == "") {
                    console.log("++++++++++++++++++++-----------------");
                    this.userdata.discount.day = '';
                    this.dis = '';
                }
                else {
                    console.log("--------------------");
                    this.dis = JSON.parse(this.userdata.discount.day);
                    console.log(this.dis);
                    if (this.dis == 'more') {
                        this.ata == 1;
                    }
                    else {
                        this.ata == 0;
                    }
                }
            }
            else {
                this.userdata.discount = {
                    amount: '',
                    title: ''
                };
            }
            this.data = {
                year: this.userdata.establishment_year,
                hours: this.userdata.working_hours,
                fb: this.userdata.fb,
                twitter: this.userdata.twitter,
                insta: this.userdata.insta,
                awards: this.userdata.awards,
                adddon_candid: this.userdata.addon.candid,
                adddon_vedio: this.userdata.addon.video_editing,
                adddon_photo: this.userdata.addon.photo_book,
                adddon_portrait: this.userdata.addon.portrait_framing,
                h_portrait: this.userdata.highlights.portrait_framing,
                hight__candid: this.userdata.highlights.candid,
                hight_vedio: this.userdata.highlights.video_editing,
                h_photo: this.userdata.highlights.photo_book,
                product_detail: this.userdata.product_detail,
                discount_amount: this.userdata.discount_amount,
                effective_date: this.userdata.effective_date,
                title: this.userdata.discount.title,
                amount: this.userdata.discount.amount,
            };
            console.log(this.userdata);
            this.id = JSON.parse(localStorage.getItem("udata"))._id;
            alert(this.id);
        }
        // if(JSON.parse(localStorage.getItem("user_data")){}
        this.getlocation();
        // this.data.time="hour"
    }
    ProcessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProcessPage');
    };
    ProcessPage.prototype.ngOnInit = function () {
        this.acService = new google.maps.places.AutocompleteService();
        this.geocoder = new google.maps.Geocoder();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    };
    ProcessPage.prototype.image = function () {
        var _this = this;
        console.log(JSON.parse(localStorage.getItem("udata")));
        //alert(JSON.parse(localStorage.getItem("udata")));
        // alert(JSON.parse(localStorage.getItem("user_data")));
        //     alert(this.userdata);
        this.id = JSON.parse(localStorage.getItem("udata"))._id;
        //   alert(this.id);
        // alert("api");
        var postdata = {
            user_id: this.id,
            profile_picture: this.imgTosend,
        };
        console.log(postdata);
        //  alert(JSON.stringify(postdata));
        //  alert("test");
        var serialized_all = this.serializeObj(postdata);
        var url = this.appsetting.myGlobalVar + 'users/post_user_image_app';
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(url, serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            // alert("bbi");
            // alert(response);
            // alert(JSON.stringify(response));
            if (response.status == true) {
                var dataaa = _this.appsetting.imagevar + response.data;
                _this.gall = response.user.gallery_image;
                console.log("bb");
                if (_this.gall) {
                    if (_this.gall.length > 0) {
                        console.log("if");
                        for (var i in _this.gall) {
                            _this.gall[i] = _this.appsetting.imagevar + _this.gall[i];
                        }
                    }
                    else {
                        console.log("else");
                        _this.gall = _this.appsetting.imagevar + _this.gall;
                    }
                }
                // localStorage.setItem("user_data",JSON.stringify(response.data)); 
                // this.userdata=JSON.parse (localStorage.getItem("user_data"));
            }
            else {
            }
        });
    };
    ProcessPage.prototype.getdata = function () {
        var _this = this;
        var postdata = {
            id: this.userdata._id,
        };
        console.log(postdata);
        var serialized_all = this.serializeObj(postdata);
        var url = this.appsetting.myGlobalVar + 'users/singleuser';
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(url, serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            //  alert(response.message);
            if (response.status == true) {
                console.log(response);
                localStorage.setItem("udata", JSON.stringify(response.data));
                _this.userdata = JSON.parse(localStorage.getItem("udata"));
                _this.gall = _this.userdata.gallery_image;
                console.log(_this.gall);
                if (_this.gall) {
                    if (_this.gall.length) {
                        for (var i in _this.gall) {
                            _this.gall[i].img = _this.appsetting.imagevar + _this.gall[i].image;
                        }
                        console.log(_this.gall);
                    }
                }
                if (_this.userdata.additional_addon) {
                    _this.items = _this.userdata.additional_addon;
                    console.log(_this.items);
                    _this.morestatus = true;
                    for (var i = 0; i < _this.items.length; i++) {
                        if (_this.items[i].amount != '') {
                            _this.check1.checked[i] = true;
                        }
                    }
                    // this.check1={
                    //   checked:true
                    // }
                    console.log(_this.check1);
                    console.log("tets");
                }
                if (_this.userdata.photo_vedio) {
                    console.log(_this.userdata.photo_vedio);
                    _this.data.photos = _this.userdata.photo_vedio.photo;
                    console.log(_this.data.photos);
                    _this.data.videos = _this.userdata.photo_vedio.vedio;
                    console.log(_this.data.videos);
                }
                if (_this.userdata.additional_photo_vedio) {
                    _this.items1 = _this.userdata.additional_photo_vedio;
                }
                if (_this.userdata.additional_highlights) {
                    _this.additmes = _this.userdata.additional_highlights;
                    for (var i = 0; i < _this.additmes.length; i++) {
                        if (_this.additmes[i].amount != '') {
                            _this.check12.checked[i] = true;
                        }
                    }
                    _this.morestatus1 = true;
                    // this.check12={
                    //   checked:[]
                    // }
                }
            }
            else {
            }
        });
    };
    ProcessPage.prototype.updateSearch = function () {
        var _this = this;
        console.log('modal > updateSearch');
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        //let self = this; 
        var config = {
            //types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
            input: this.autocomplete.query,
            componentRestrictions: {}
        };
        this.acService.getPlacePredictions(config, (function (predictions, status) {
            console.log('modal > getPlacePredictions > status > ', status);
            _this.autocompleteItems = [];
            console.log(predictions);
            predictions.forEach((function (prediction) {
                console.log("rufh");
                _this.autocompleteItems.push(prediction);
            }));
        }));
    };
    ProcessPage.prototype.addNew = function (title, amount, value) {
        console.log(amount);
        //console.log(value);
        this.items.push({
            title: title,
            amount: amount
        });
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
        var index = this.items.length - 1;
        this.checkBox1(true, index);
        console.log("hey4");
    };
    ProcessPage.prototype.adddiscount = function (dday, dtitle, damount) {
        console.log(dday, dtitle, damount);
        //console.log(value);
        this.ditems.push({
            day: dday,
            title: dtitle,
            amount: damount
        });
        this.data.mtitle = '';
        this.data.mday = '';
        this.data.mamount = '';
        this.ata = 2;
        console.log(this.ditems);
        console.log("tetstettstetst");
    };
    ProcessPage.prototype.Paytm = function () {
        //alert("kkk")
        this.window.plugins.paytm.startPayment(this.txn_id, this.customer_id, "anirudh@avainfotech.com", "8968989319", "10", "staging", successCallback, failureCallback);
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
    };
    ProcessPage.prototype.chooseItem = function (item) {
        console.log(item);
        this.autocomplete.query = item.description;
        this.autocompleteItems = [];
    };
    ProcessPage.prototype.CameraAction = function () {
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
                            // alert("test");
                            _this.image();
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
                            _this.image();
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
    ProcessPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ProcessPage.prototype.updateCbValue = function () {
        console.log('Something new state:' + this.cb_value);
        if (this.cb_value == true) {
            this.status = this.cb_value;
            console.log("true");
        }
        else {
            this.status = this.cb_value;
            console.log("false");
        }
    };
    ProcessPage.prototype.sound = function () {
        if (this.sound_system == true) {
            this.soundstatus = this.sound_system;
            console.log("true");
        }
        else {
            this.soundstatus = this.sound_system;
            console.log("false");
        }
    };
    ProcessPage.prototype.light = function () {
        if (this.lighting == true) {
            this.lightstatus = this.lighting;
            console.log("true");
        }
        else {
            this.lightstatus = this.lighting;
            console.log("false");
        }
    };
    ProcessPage.prototype.security = function () {
        if (this.securitys == true) {
            this.securitystatus = this.securitys;
            console.log("true");
        }
        else {
            this.securitystatus = this.securitys;
            console.log("false");
        }
    };
    ProcessPage.prototype.cocktail = function () {
        if (this.cocktail_service == true) {
            this.cocktailstatus = this.cocktail_service;
            console.log("true");
        }
        else {
            this.cocktailstatus = this.cocktail_service;
            console.log("false");
        }
    };
    ProcessPage.prototype.designValue = function () {
        if (this.design == true) {
            this.designstatus = this.design;
            console.log("true");
        }
        else {
            this.designstatus = this.design;
            console.log("false");
        }
    };
    ProcessPage.prototype.matchValue = function () {
        if (this.match == true) {
            this.matchstatus = this.match;
            console.log("true");
        }
        else {
            this.matchstatus = this.match;
            console.log("false");
        }
    };
    ProcessPage.prototype.trailorValue = function () {
        if (this.tailor == true) {
            this.tailorstatus = this.tailor;
            console.log("true");
        }
        else {
            this.tailorstatus = this.tailor;
            console.log("false");
        }
    };
    ProcessPage.prototype.pool = function () {
        if (this.pool_side == true) {
            this.poolstatus = this.pool_side;
            console.log("true");
        }
        else {
            this.poolstatus = this.pool_side;
            console.log("false");
        }
    };
    ProcessPage.prototype.parking = function () {
        if (this.parking_space == true) {
            this.parkingstatus = this.parking_space;
            console.log("true");
        }
        else {
            this.parkingstatus = this.parking_space;
            console.log("false");
        }
    };
    ProcessPage.prototype.alocohals = function () {
        if (this.alocohal == true) {
            this.alocohalstatus = this.alocohal;
            console.log("true");
        }
        else {
            this.alocohalstatus = this.alocohal;
            console.log("false");
        }
    };
    ProcessPage.prototype.decorations = function () {
        if (this.decoration == true) {
            this.dfmstatus = this.decoration;
            console.log("true");
        }
        else {
            this.dfmstatus = this.decoration;
            console.log("false");
        }
    };
    ProcessPage.prototype.deliveryvalue = function () {
        console.log('Something new state:' + this.deliverycheck8);
        if (this.deliverycheck8 == true) {
            this.delivery_status8 = this.deliverycheck8;
            console.log("true");
        }
        else {
            this.delivery_status8 = this.deliverycheck8;
            console.log("false");
        }
    };
    ProcessPage.prototype.music = function () {
        if (this.dj_musc == true) {
            this.djstatus = this.dj_musc;
            console.log("true");
        }
        else {
            this.djstatus = this.dj_musc;
            console.log("false");
        }
    };
    ProcessPage.prototype.demovalue = function () {
        console.log('Something new state:' + this.democheck8);
        if (this.democheck8 == true) {
            this.demo_status8 = this.democheck8;
            console.log("true");
        }
        else {
            this.demo_status8 = this.democheck8;
            console.log("false");
        }
    };
    ProcessPage.prototype.airValue = function () {
        if (this.air_brush == true) {
            this.airstatus = this.air_brush;
            console.log("true");
        }
        else {
            this.airstatus = this.air_brush;
            console.log("false");
        }
    };
    ProcessPage.prototype.travelValue = function () {
        if (this.travels == true) {
            this.travelstatus = this.travels;
            console.log("true");
        }
        else {
            this.travelstatus = this.travels;
            console.log("false");
        }
    };
    ProcessPage.prototype.design8value = function () {
        console.log('Something new state:' + this.democheck8);
        if (this.design8 == true) {
            this.design_status8 = this.design8;
            console.log("true");
        }
        else {
            this.design_status8 = this.design8;
            console.log("false");
        }
    };
    ProcessPage.prototype.nextvalue = function () {
        console.log('Something new state:' + this.cb_value1);
        if (this.cb_value1 == true) {
            this.status1 = this.cb_value1;
            console.log("true");
        }
        else {
            this.status1 = this.cb_value1;
            console.log("false");
        }
    };
    ProcessPage.prototype.nextvalue1 = function () {
        console.log('Something new state:' + this.cb_value2);
        if (this.cb_value2 == true) {
            this.status2 = this.cb_value2;
            console.log("true");
        }
        else {
            this.status2 = this.cb_value2;
            console.log("false");
        }
    };
    ProcessPage.prototype.nextvalue2 = function () {
        console.log('Something new state:' + this.cb_value3);
        if (this.cb_value3 == true) {
            this.status3 = this.cb_value3;
            console.log("true");
        }
        else {
            this.status3 = this.cb_value3;
            console.log("false");
        }
    };
    ProcessPage.prototype.nextvalue3 = function () {
        console.log('Something new state:' + this.cb_value4);
        if (this.cb_value4 == true) {
            this.status4 = this.cb_value4;
            console.log("true");
        }
        else {
            this.status4 = this.cb_value4;
            console.log("false");
        }
    };
    ProcessPage.prototype.addon = function () {
        console.log('Something new state:' + this.cand);
        if (this.cand == true) {
            this.statuss = this.cand;
            console.log("true");
        }
        else {
            this.statuss = this.cand;
            console.log("false");
        }
    };
    ProcessPage.prototype.theme = function () {
        console.log('Something new state:' + this.cand);
        if (this.theme_wedding == true) {
            this.weddingstatus = this.theme_wedding;
            console.log("true");
        }
        else {
            this.weddingstatus = this.theme_wedding;
            console.log("false");
        }
    };
    ProcessPage.prototype.addon1 = function () {
        console.log('Something new state:' + this.cand1);
        if (this.cand1 == true) {
            this.status1s = this.cand1;
            console.log("true");
        }
        else {
            this.status1s = this.cand1;
            console.log("false");
        }
    };
    ProcessPage.prototype.outdoors = function () {
        if (this.outdoor == true) {
            this.outdoorstatus = this.outdoor;
            console.log("true");
        }
        else {
            this.outdoorstatus = this.outdoor;
            console.log("false");
        }
    };
    ProcessPage.prototype.addon2 = function () {
        console.log('Something new state:' + this.cand2);
        if (this.cand2 == true) {
            this.status2s = this.cand2;
            console.log("true");
        }
        else {
            this.status2s = this.cand2;
            console.log("false");
        }
    };
    ProcessPage.prototype.addon3 = function () {
        console.log('Something new state:' + this.cand3);
        if (this.cand3 == true) {
            this.status3s = this.cand3;
            console.log("true");
        }
        else {
            this.status3s = this.cand3;
            console.log("false");
        }
    };
    ProcessPage.prototype.addon4 = function () {
        console.log('Something new state:' + this.cand4);
        if (this.cand4 == true) {
            this.status4s = this.cand4;
            console.log("true");
        }
        else {
            this.status4s = this.cand4;
            console.log("false");
        }
    };
    ProcessPage.prototype.travel = function () {
        console.log('Something new state:' + this.cand);
        if (this.travel_to_city == true) {
            this.travles = this.travel_to_city;
            console.log("true");
        }
        else {
            this.travles = this.travel_to_city;
            console.log("false");
        }
    };
    ProcessPage.prototype.bulk = function () {
        console.log('Something new state:' + this.delivery_to_home);
        if (this.bulk_discount == true) {
            this.devilerystatus = this.bulk_discount;
            console.log("true");
        }
        else {
            this.devilerystatus = this.bulk_discount;
            console.log("false");
        }
    };
    ProcessPage.prototype.delivery = function () {
        console.log('Something new state:' + this.cand);
        if (this.delivery_to_home == true) {
            this.delivery_status = this.delivery_to_home;
            console.log("true");
        }
        else {
            this.delivery_status = this.delivery_to_home;
            console.log("false");
        }
    };
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
    ProcessPage.prototype.addNewadd = function (titles, amounts) {
        console.log(this.cand4);
        console.log(titles);
        console.log(amounts);
        this.additmes.push({
            title: titles,
            amount: amounts
        });
        this.itemqs = {
            title: '',
            amount: ''
        };
        this.morestatus1 = true;
        this.cand4 = false;
        console.log(this.cand4);
        //this.addon4()
        //    this.check12={
        //  checked:true,
        // }
    };
    ProcessPage.prototype.checkBox1 = function (checked, index) {
        console.log(this.check1);
        console.log(checked);
        this.check1.checked[index] = checked;
        if (checked == true) {
            this.morestatus = checked;
            console.log("true");
        }
        else {
            this.items.splice(this.items.indexOf(index), 1);
            this.morestatus = checked;
            console.log("false");
        }
    };
    ProcessPage.prototype.checkBox12 = function (checked, index) {
        this.check12.checked[index] = checked;
        console.log(checked);
        console.log(index);
        if (checked == true) {
            this.morestatus1 = checked;
            console.log("true");
        }
        else {
            this.additmes.splice(this.additmes.indexOf(index), 1);
            this.morestatus1 = checked;
            console.log("false");
        }
    };
    ProcessPage.prototype.makeup = function () {
        this.make = 1;
    };
    ProcessPage.prototype.mcqAnswer = function (dis, ttt) {
        console.log(dis);
        console.log('pppppp');
        console.log(ttt);
        if (dis == 'more') {
            console.log("moreee");
            this.ata = 1;
        }
        else {
            console.log("more else");
            this.ata = 0;
        }
        if (ttt != undefined) {
            console.log("sdfs");
            this.data.title = ttt.title,
                this.data.amount = ttt.amount;
            this.morediscount = {
                day: ttt.day,
                title: ttt.title,
                amount: ttt.amount
            };
        }
    };
    ProcessPage.prototype.onSubmit = function (data, auto, dis) {
        var _this = this;
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
        };
        this.price_per_plate = {
            vegiterian: data.value.veg,
            non_veg: data.value.nonveg
        };
        console.log(this.discount);
        console.log("================");
        console.log(this.cour);
        console.log("////////");
        console.log(data);
        console.log(this.items);
        this.items.forEach((function (value, key) {
            console.log("rufh");
            console.log(value.amount);
            console.log(value.title);
            console.log(key);
        }));
        if (this.userdata.vendor_type == 'wedding accessories') {
            this.addddon = {
                delivery: data.value.adddon_delivery8,
                house_demo: data.value.adddon_demo8,
                design: data.value.adddon_design8
            };
            this.highlights = {
                travel_to_city: data.value.add_travel,
                bulk_discount: data.value.add_bulk,
                delivery_to_home: data.value.add_delivery
            };
            this.additionalservices = this.items111;
        }
        else if (this.userdata.vendor_type == 'Photographer') {
            this.addddon = {
                candid: data.value.adddon_candid,
                video_editing: data.value.adddon_vedio,
                photo_book: data.value.adddon_photo,
                portrait_framing: data.value.adddon_portrait,
            };
            // this.highlights = {
            //   candid: data.value.hight__candid,
            //   video_editing: data.value.hight_vedio,
            //   photo_book: data.value.h_photo,
            //   portrait_framing: data.value.h_portrait
            // }
        }
        else if (this.userdata.vendor_type == 'Make up') {
            this.addddon = {
                travel: data.value.adddon_travel,
                air_brush: data.value.adddon_air,
            };
            this.additionalservices = this.makeitem;
        }
        else if (this.userdata.vendor_type == 'Groomwear') {
            this.addddon = {
                trailoring: data.value.adddon_tailor,
                designing: data.value.adddon_design,
                matching: data.value.adddon_match
            };
            this.services = {
                title: data.value.goomout,
                amount: data.value.goomamout
            };
            this.additionalservices = this.goomitem;
        }
        else if (this.userdata.vendor_type == 'Wedding venue') {
            this.addddon = {
                sound: data.value.addon_sound,
                lighting: data.value.addon_light,
                security: data.value.addon_security,
                cocktail_services: data.value.addon_cocktail
            };
            this.highlights = {
                pool_side: data.value.adddon_pool,
                Outdoor: data.value.addon_outdoorstatus,
                Alocohal: data.value.addon_alocohal,
                Decoration: data.value.addon_dfmstatus,
                DJ_Music: data.value.djstatus,
                Parking_Space: data.value.addon_parking,
            };
            this.additionalservices = this.venuitems1;
            this.services = {
                day: 'Day',
                amount: data.value.venurent
            };
        }
        else if (this.userdata.vendor_type == 'Wedding Decorator') {
            this.services = {
                starting_price: data.value.wedding_decorator
            };
            this.highlights = {
                theme_wedding: data.value.adddon_theme
            };
        }
        else if (this.userdata.vendor_type == 'Wedding planners') {
            this.services = {
                starting_price: data.value.wedding_decorator
            };
            this.highlights = {
                theme_wedding: data.value.adddon_theme
            };
        }
        else if (this.userdata.vendor_type == 'Wedding cards') {
            this.services = {
                starting_price: data.value.wedding_decorator
            };
            this.highlights = {
                travel_to_city: data.value.add_travel,
                bulk_discount: data.value.add_bulk,
                delivery_to_home: data.value.add_delivery
            };
        }
        else if (this.userdata.vendor_type == 'Mehndi artist') {
            this.highlights = {
                travel_to_city: data.value.add_travel,
                bulk_discount: data.value.add_bulk,
                delivery_to_home: data.value.add_delivery
            };
        }
        else if (this.userdata.vendor_type == 'Wedding cakes') {
            this.services = {
                starting_price: data.value.wedding_decorator
            };
            this.highlights = {
                travel_to_city: data.value.add_travel,
                bulk_discount: data.value.add_bulk,
                delivery_to_home: data.value.add_delivery
            };
        }
        else if (this.userdata.vendor_type == 'Wedding jewellery') {
            this.addddon = {
                delivery: data.value.adddon_delivery8,
                house_demo: data.value.adddon_demo8,
                design: data.value.adddon_design8
            };
            this.highlights = {
                travel_to_city: data.value.add_travel,
                bulk_discount: data.value.add_bulk,
                delivery_to_home: data.value.add_delivery
            };
            this.additionalservices = this.items111;
        }
        else if (this.userdata.vendor_type == 'Wedding catering') {
            this.additionalservices = this.wae1;
            this.services = {
                type: data.value.ptypefg,
                amount: data.value.dfds
            };
        }
        else if (this.userdata.vendor_type == 'Sangeet choreographers') {
            this.services = {
                starting_price: data.value.wedding_decorator
            };
            this.highlights = {
                travel_to_city: data.value.add_travel,
                bulk_discount: data.value.add_bulk,
                delivery_to_home: data.value.add_delivery
            };
        }
        else if (this.userdata.vendor_type == 'wedding favours') {
            this.services = {
                starting_price: data.value.wedding_decorator
            };
            this.highlights = {
                travel_to_city: data.value.add_travel,
                bulk_discount: data.value.add_bulk,
                delivery_to_home: data.value.add_delivery
            };
        }
        else if (this.userdata.vendor_type == 'Bridal Wear') {
            this.services = {
                title: data.value.goomout,
                amount: data.value.goomamout
            };
            this.additionalservices = this.goomitem;
            this.highlights = {
                travel_to_city: data.value.add_travel,
                bulk_discount: data.value.add_bulk,
                delivery_to_home: data.value.add_delivery
            };
        }
        console.log(this.addddon);
        console.log("+++++++++ss" + this.userdata.vendor_type);
        this.photovedio = {
            time: this.data.times,
            photo: this.data.photos,
            vedio: this.data.videos
        };
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
        console.log("hey");
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
        };
        console.log(postdata);
        var serialized_all = this.serializeObj(postdata);
        var url = this.appsetting.myGlobalVar + 'users/savebasicinfo';
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(url, serialized_all, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            //  loading.dismissAll();
            // alert('response')
            // alert(JSON.stringify(response.message));
            alert(response.message);
            if (response.status == true) {
                localStorage.setItem("user_data", JSON.stringify(response.data));
                _this.getdata();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
                console.log(response);
            }
            else {
                // alert(JSON.stringify(response));
            }
        });
    };
    ProcessPage.prototype.menu = function () {
        this.navCtrl.setRoot('MenuPage');
    };
    ProcessPage.prototype.twitter = function () {
        //alert("t")
        this.socialSharing.shareViaTwitter("message", "image", "url").then(function () {
            //  alert("Success")
            // Success!
        }).catch(function () {
            // Error!
            alert("Error");
        });
    };
    ProcessPage.prototype.emails = function () {
        var link = "https://play.google.com/store/apps/details?id=com.dost.wedding&hl=en";
        this.socialSharing.canShareViaEmail().then(function () {
            //   alert("Sharing via email is possible")
            // Sharing via email is possible
        }).catch(function () {
            alert("Sharing via email is not possible");
            // Sharing via email is not possible
        });
        // Share via email
        this.socialSharing.shareViaEmail('Hi there! I&#39;m inviting you to join the DOST network, an app for all things wedding! Sign up as a vendor and have access to all the business opportunities around you and connect with your users directly. Use the code"' + this.userdata.invitecode + '" while signing up so you and I can enjoy early bird offers. Cheers!. Enjoy! App Link ' + link, 'Invite Friend', []).then(function () {
            // alert("Success")
            // Success!
        }).catch(function () {
            // Error!
            //    alert("Error")
        });
    };
    ProcessPage.prototype.whatsappShare = function () {
        var icon = this.appsetting.imagevars + 'icon.png';
        var link = "https://play.google.com/store/apps/details?id=com.dost.wedding&hl=en";
        this.socialSharing.shareViaWhatsApp('<b>Hi</b> there! I&#39;m inviting you to join the DOST network, an app for all things wedding! Sign up as a vendor and have access to all the business opportunities around you and connect with your users directly. Use the code"' + this.userdata.invitecode + '" while signing up so you and I can enjoy early bird offers. Cheers!. Enjoy! App Link ', icon /*Image*/, link /* url */)
            .then(function () {
            // alert("Success");
        }, function () {
            alert("failed");
        });
    };
    ProcessPage.prototype.fbsss = function () {
        //var icon=this.appsetting.imagevars+'icon.png'
        //alert("fb")
        var link = "http://wedding-dost.us-east-1.elasticbeanstalk.com/invitationcode?code=" + this.userdata._id;
        this.socialSharing.shareViaFacebook('Hi there! I&#39;m inviting you to join the DOST network, an app for all things wedding! Sign up as a vendor and have access to all the business opportunities around you and connect with your users directly. Use the code"' + this.userdata.invitecode + '" while signing up so you and I can enjoy early bird offers. Cheers!. Enjoy! App Link ' + link, null /*Image*/, link)
            .then(function () {
            // alert("Success");
        }, function () {
            alert("failed");
        });
    };
    ProcessPage.prototype.getlocation = function () {
        var _this = this;
        //   alert("getlocation");
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        var aa = this;
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.geolocation.getCurrentPosition().then(function (resp) {
            // alert(resp.coords.latitude)
            _this.currentLatitude = resp.coords.latitude;
            _this.currentLongitude = resp.coords.longitude;
            // alert(this.currentLatitude)
            // alert( this.currentLongitude)
            var latLng = new google.maps.LatLng(_this.currentLatitude, _this.currentLongitude);
            _this.geocoder.geocode({ 'latLng': latLng }, (function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[1]) {
                        _this.autocomplete.query = results[1].formatted_address;
                    }
                }
            }));
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(aa.mapElement.nativeElement, mapOptions);
            var marker = new google.maps.Marker({
                position: latLng,
                draggable: true,
                map: _this.map,
            });
            google.maps.event.addListener(marker, 'dragend', (function (marker) {
                var latLng = marker.latLng;
                _this.currentLatitude = latLng.lat();
                _this.currentLongitude = latLng.lng();
                console.log(_this.currentLatitude);
                console.log(_this.currentLongitude);
                var latLong = new google.maps.LatLng(_this.currentLatitude, _this.currentLongitude);
                _this.geocoder.geocode({ 'latLng': latLong }, (function (results, status) {
                    console.log(results);
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[1]) {
                            _this.autocomplete.query = results[1].formatted_address;
                            console.log("srishti");
                            console.log(_this.autocomplete.query);
                        }
                    }
                }));
            }));
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
            // data can be a set of coordinates, or an error (if an error occurred).
            // data.coords.latitude
            // data.coords.longitude
        });
    };
    ProcessPage.prototype.addMore = function (photo, video, value) {
        this.vv = 0;
        console.log(photo, video, value);
        this.items1.push({
            photo: photo,
            video: video,
            day: value
        });
        console.log('edit clicked 1:', this.items1);
        this.item.photow = '';
        this.item.videow = '';
        this.item.pricew = '';
    };
    ProcessPage.prototype.addMorewear = function (type, amount) {
        this.ll = 0;
        console.log(type, amount);
        this.wae1.push({
            photypeto: type,
            amount: amount,
        });
        console.log('edit clicked 1:', this.items1);
        this.wear.ptype = '';
        this.wear.amount = '';
    };
    ProcessPage.prototype.addMoregoom = function (ut, am) {
        this.gom = 0;
        this.goomitem.push({
            out: ut,
            amounts: am
        });
        console.log('edit clicked 1:', this.goomitem);
        this.gooms.event = '';
        this.gooms.amount = '';
    };
    ProcessPage.prototype.addMoresss = function (day, price) {
        this.venu = 0;
        this.venuitems1.push({
            video: price,
            day: day
        });
        console.log('edit clicked 1:', this.venuitems1);
        this.item.videow = '';
        this.item.pricew = '';
    };
    ProcessPage.prototype.addMoremakeup = function (event, amount) {
        this.make = 0;
        this.makeitem.push({
            events: event,
            amounts: amount,
        });
        console.log(this.make);
        this.makes.event = '';
        this.makes.amount = '';
    };
    ProcessPage.prototype.addMore1 = function (title, amount) {
        console.log(title, amount);
        this.vv1 = 0;
        console.log(title, amount);
        this.items111.push({
            title: title,
            amount: amount,
        });
        console.log('edit clicked 1:', this.items111);
        this.checkitem.check8_title = '';
        this.checkitem.check8_amount = '';
    };
    ProcessPage.prototype.baic = function () {
        this.vv = 1;
    };
    ProcessPage.prototype.baic1 = function () {
        this.vv1 = 1;
    };
    ProcessPage.prototype.addvenvue = function () {
        this.venu = 1;
    };
    ProcessPage.prototype.goom = function () {
        this.gom = 1;
    };
    ProcessPage.prototype.tty = function () {
        this.ll = 1;
    };
    return ProcessPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], ProcessPage.prototype, "mapElement", void 0);
ProcessPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-process',template:/*ion-inline-start:"E:\Project\Dost user app new\src\pages\process\process.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>process</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <form #heroForm="ngForm"  novalidate>\n  <ion-list class="base">\n    <ion-item-group>\n        <ion-item-divider color="light">Basic Info</ion-item-divider>\n      <ion-item>\n        <ion-input type="text" placeholder="Establishment Year" [(ngModel)]="data.year" name="year" #year="ngModel" ></ion-input>\n      </ion-item>\n    \n      <ion-item style="padding-top: 8px;">\n          \n        <ion-label>Opening Time</ion-label>\n             \n              <ion-input type="time" class="opentm" placeholder="Opening time" [(ngModel)]="data.starthours" name="starthours" #starthours="ngModel" ></ion-input>\n          \n      <ion-label>Closing Time</ion-label>\n          \n          <ion-input type="time" class="clsntm" placeholder="Closing time" [(ngModel)]="data.endhours" name="endhours" #endhours="ngModel" ></ion-input>\n        \n      </ion-item>\n  <!--<div *ngIf="hours.errors && (hours.dirty || hours.touched)" class="alert alert-danger">\n          <div [hidden]="!hours.errors.pattern" class="alert alert-danger">\n                Enter a valid Working Hours\n              </div>\n          </div> -->\n       <ion-item>\n      <ion-input type="text" placeholder="Primary Email Address" [(ngModel)]="data.email" name="email" #email="ngModel"></ion-input>\n      </ion-item>\n       <ion-item>\n         <ion-icon name="logo-facebook" item-start></ion-icon>\n        <ion-input type="text" placeholder="abc@gmail.com" [(ngModel)]="data.fb" name="fb" #fb="ngModel"></ion-input>\n      </ion-item>\n\n       <ion-item>\n         <ion-icon name="logo-twitter" item-start></ion-icon>\n        <ion-input type="text" placeholder="abc@gmail.com"  [(ngModel)]="data.twitter" name="twitter" #twitter="ngModel"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="logo-instagram" item-start></ion-icon>\n        <ion-input type="text" placeholder="abc@gmail.com"  [(ngModel)]="data.insta" name="insta" #insta="ngModel"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="text" placeholder="Awards & Recognition"  [(ngModel)]="data.awards" name="awards" #awards="ngModel"  required></ion-input>\n      </ion-item>\n\n    </ion-item-group>\n  </ion-list>\n\n<ion-list class="base">\n  <ion-item-group>\n    <ion-item-divider color="light">Invite Friends <span class="disc">(The more connected you are, the higher the chance of getting customers.)</span></ion-item-divider>\n    <ion-grid>\n        <ion-row class="invite">\n        <ion-col col-6 text-center><a class="link"  (click)="fbsss()" ><img src="assets/image/linka.png"></a></ion-col>\n        <ion-col col-6 text-center><a class="link"  (click)="emails()" ><img src="assets/image/linkb.png"></a></ion-col>\n        <!--<ion-col col-4 text-center><a class="link"><img src="assets/image/linkc.png"></a></ion-col>-->\n        <ion-col col-6 (click)="whatsappShare()"><ion-icon name="logo-whatsapp" style="color:#34af23;"></ion-icon></ion-col>\n        </ion-row>\n    </ion-grid>\n  </ion-item-group>\n</ion-list>\n  <!--<ion-list class="base">\n    <ion-item-group>\n        <ion-item-divider color="light">Invite Friends <span class="disc">(more connected you are higher chance of getting customer)</span></ion-item-divider>\n  <button >whatsapp</button>-->\n  <!--<button (click)="fb()">fb</button>\n  <button (click)="twitter()">twitter</button>-->\n<!--<ion-grid>\n  <ion-row class="invite">\n    <ion-col col-4 text-center><ion-icon name="logo-whatsapp" style="color:#34af23;" (click)="whatsapp()"></ion-icon></ion-col>\n  </ion-row>-->\n\n  <!--<h3 class="dwn">Download:</h3>\n  <ion-row>\n    <ion-col col-5 text-center>\n    <img src="assets/image/playstore.png" />  \n  </ion-col>\n    <ion-col col-5 text-center>\n        <img src="assets/image/appstore.png" />   \n   </ion-col>\n      <ion-col col-2 text-center>\n        &nbsp;\n   </ion-col>\n  </ion-row>-->\n\n <!--</ion-grid>\n</ion-item-group>\n</ion-list>-->\n\n<ion-list class="base inpt">\n    <ion-item-group>\n    \n        <ion-item-divider color="light">Service & Cost Details</ion-item-divider>\n          <div *ngIf="vendor_check==1">\n     <h3>Photography & Videography</h3>\n     <!--<textarea>asdasd</textarea>-->\n<div id="btn1" >\n     <div style="width:100%;float:left;height:5vh;"></div>\n\n     <span class="per">Price Per Hour</span>\n <ion-input type="hidden" style=" display: none;"text-right [(ngModel)]="data.times" type="text" value="hour" [ngModelOptions]="{standalone: true}"></ion-input>\n    <ion-item   let i = index; >\n            <ion-label>Photo</ion-label>\n           <ion-input type="text" [(ngModel)]="data.photos" name="photos" #photos="ngModel" placeholder="Enter Amount" text-right ></ion-input>\n     </ion-item>\n        \n    <ion-item>\n            <ion-label>Video</ion-label>\n             <ion-input type="text" [(ngModel)]="data.videos" name="videos" #videos="ngModel" placeholder="Enter Amount" text-right ></ion-input>\n      </ion-item>\n   \n\n<!--<div style="width:100%;float:left;height:5vh;"></div>\n\n     <span class="per">Price Per Day</span>\n       <ion-item>\n             <ion-label>Photo</ion-label>\n               <ion-input type="text" [(ngModel)]="data.photod" name="photod" #photod="ngModel" placeholder="Enter Amount" text-right></ion-input>\n     </ion-item>\n         \n     <ion-item>\n             <ion-label>Video</ion-label>\n              <ion-input type="text" [(ngModel)]="data.videod" name="videod" #videod="ngModel" placeholder="Enter Amount" text-right></ion-input>\n      </ion-item>-->\n      <div *ngIf="items1" >   \n       <div  *ngFor="let ij of items1" >\n        <div style="width:100%;float:left;height:5vh;"></div>\n\n     <span class="per">Price Per {{ij.day}}</span>\n       <ion-item>\n             <ion-label>Photo</ion-label>\n               <ion-input type="text" [(ngModel)]="ij.photo"  [ngModelOptions]="{standalone: true}"  placeholder="Enter Amount" text-right ></ion-input>\n     </ion-item>\n       \n     <ion-item>\n             <ion-label>Video</ion-label>\n              <ion-input type="text" [(ngModel)]="ij.video"  [ngModelOptions]="{standalone: true}" placeholder="Enter Amount" text-right ></ion-input>\n      </ion-item>\n   \n      </div>\n    </div> \n       </div>\n       <div *ngIf="vv==1">\n     <div style="width:100%;float:left;height:5vh;"></div>\n     <ion-item>\n            <ion-label>Price Per</ion-label>\n             <ion-input type="text" [(ngModel)]="item.pricew" name="pricew" #pricew="ngModel" placeholder="Price Per" text-right></ion-input>\n      </ion-item> \n        <ion-item >\n            <ion-label>Photo</ion-label>\n           <ion-input type="text" [(ngModel)]="item.photow" name="photow" #photow="ngModel" placeholder="Enter Amount" text-right ></ion-input>\n     </ion-item>\n       \n    <ion-item>\n            <ion-label>Video</ion-label>\n             <ion-input type="text" [(ngModel)]="item.videow" name="videow" #videow="ngModel" placeholder="Enter Amount" text-right ></ion-input>\n      </ion-item>\n  \n      <button class="add button button-md button-outline button-outline-md button-small button-small-md button-outline-md-dark" (click)="addMore(item.photow, item.videow,item.pricew)">ADD</button>\n </div>\n       <button ion-button color="dark" outline small class="add button button-md button-outline button-outline-md button-small button-small-md button-outline-md-dark" (click)="baic()">Add More</button>\n       <!--<p>{{render}}</p>-->\n    <!--//  <button ion-button color="dark" outline small class="add" (click)="addMore(item.photo, item.video,item.firstname)">Add More</button>-->\n</div>\n<!--venue start -->\n<div *ngIf="vendor_check==3">\n   <h3>Wedding Venue</h3>\n    <ion-list class="base">\n      <ion-item-group>\n    \n        <span class="per">Basic Guest Info</span>\n           <ion-item  >\n            <ion-label>Minimum Guest</ion-label>\n           <ion-input [(ngModel)]="data.minguest" name="minguest" #minguest="ngModel" placeholder="No. of Guest" text-right ></ion-input>\n      </ion-item>\n        <ion-item  >\n            <ion-label>Maximum Guest</ion-label>\n            <ion-input [(ngModel)]="data.maxguest" name="maxguest" #maxguest="ngModel" placeholder="No. of Guest" text-right ></ion-input>\n     </ion-item>\n        <div style="width:100%;float:left;height:5vh;"></div>\n         <span class="per">Starting Price Per Plate</span>\n           <ion-item  >\n            <ion-label>Vegetarian</ion-label>\n              <ion-input  type ="text" [(ngModel)]="data.veg" name="veg" #veg="ngModel" placeholder="Enter Amount" text-right ></ion-input>\n       </ion-item>\n        <ion-item  >\n            <ion-label>Non-Vegetarian</ion-label>\n              <ion-input  type ="text" [(ngModel)]="data.nonveg" name="nonveg" #nonveg="ngModel" placeholder="Enter Amount" text-right ></ion-input>\n  </ion-item>\n       <div style="width:100%;float:left;height:5vh;"></div>\n     <span class="per">Price Per day</span>\n           <ion-item  >\n            <ion-label>Starting Rental</ion-label>\n             <ion-input type ="text" [(ngModel)]="data.venurent" name="venurent" #venurent="ngModel" placeholder="Enter Amount" text-right ></ion-input>\n  </ion-item>\n       <div style="width:100%;float:left;height:5vh;"></div>\n           <div *ngFor="let venuitems1s of venuitems1">\n              <span class="per">Price Per {{venuitems1s.day}}</span>\n     \n     <ion-item>\n             <ion-label>Starting Rental</ion-label>\n              <ion-input type="text" [(ngModel)]="venuitems1s.video" [ngModelOptions]="{standalone: true}" text-right ></ion-input>\n      </ion-item>\n      <div style="width:100%;float:left;height:5vh;"></div>\n   \n      </div>\n       <div *ngIf="venu==1">\n     <div style="width:100%;float:left;height:5vh;"></div>\n     <ion-item>\n            <ion-label>Price Per</ion-label>\n             <ion-input type="text" [(ngModel)]="item.pricew" name="pricew" #pricew="ngModel" placeholder="Price Per" text-right></ion-input>\n      </ion-item> \n     <ion-item>\n         <ion-label>Starting Rental</ion-label>\n             <ion-input type="text" [(ngModel)]="item.videow" name="videow" #videow="ngModel" placeholder="Enter Amount" text-right ></ion-input>\n      </ion-item>\n  \n      <button class="add button button-md button-outline button-outline-md button-small button-small-md button-outline-md-dark" (click)="addMoresss(item.pricew,item.videow)">ADD</button>\n      </div>\n       <button ion-button color="dark" outline small class="add button button-md button-outline button-outline-md button-small button-small-md button-outline-md-dark" (click)="addvenvue()">Add More</button>\n         <div style="width:100%;float:left;height:5vh;"></div>\n       \n\n    </ion-item-group>\n  </ion-list>\n</div>\n<!--venue end  -->\n<!--Wedding decorator start-->\n<div *ngIf="vendor_check==4">\n       <h3>{{userdata.vendor_type}}</h3>\n<ion-list class="base">\n      <ion-item-group>\n       <ion-item>\n            <ion-input type="text" [(ngModel)]="data.wedding_decorator" name="wedding_decorator" #wedding_decorator="ngModel" placeholder="Enter Starting Price" text-right ></ion-input>\n       </ion-item>\n       <div style="width:100%;float:left;height:2vh;"></div>\n </ion-item-group>\n      </ion-list>\n </div>\n   <!--Wedding decorator end--> \n<!--makeup start-->\n<div *ngIf="vendor_check==5">\n  \n  <h3>Make Up</h3>\n     <div style="width:100%;float:left;height:5vh;"></div>\n\n     <span class="per">Price Per Event</span>\n       <ion-item>\n             <ion-label>Event</ion-label>\n               <ion-input type="text" placeholder="Enter Event" text-right ></ion-input>\n     </ion-item>\n       <ion-item>\n             <ion-label>Amount</ion-label>\n               <ion-input type="text" placeholder="Enter Amount" text-right ></ion-input>\n     </ion-item>\n             <div *ngFor="let iuujj of makeitem">\n              <span class="per">Price Per Item</span>\n             \n        <ion-item>\n             <ion-label>Event</ion-label>\n               <ion-input type="text" [(ngModel)]="iuujj.events" name="Event" #Event="ngModel" placeholder="Enter Event" text-right ></ion-input>\n     </ion-item>\n       \n     <ion-item>\n             <ion-label>Amount</ion-label>\n              <ion-input type="text" [(ngModel)]="iuujj.amounts" name="Amount" #Amount="ngModel" placeholder="Enter Amount" text-right ></ion-input>\n      </ion-item>\n   \n      </div>\n           <div *ngIf="make==1">\n     <div style="width:100%;float:left;height:5vh;"></div>\n    <span class="per">Price Per Event</span>\n        <ion-item >\n            <ion-label>Event</ion-label>\n           <ion-input type="text" [(ngModel)]="makes.event" name="event" #event="ngModel" placeholder="Enter Event" text-right ></ion-input>\n     </ion-item>\n       \n    <ion-item>\n            <ion-label>Amount</ion-label>\n             <ion-input type="text" [(ngModel)]="makes.amount" name="amount" #amount="ngModel" placeholder="Enter Amount" text-right ></ion-input>\n      </ion-item>\n  \n      <button class="add button button-md button-outline button-outline-md button-small button-small-md button-outline-md-dark" (click)="addMoremakeup(makes.event,makes.amount)">ADD</button>\n </div>\n       <button ion-button color="dark" outline small class="add button button-md button-outline button-outline-md button-small button-small-md button-outline-md-dark" (click)="makeup()">Add More</button>\n     </div>\n<!--makeup end-->\n<!--makeup start-->\n<div *ngIf="vendor_check==6">\n  <h3>{{userdata.vendor_type}}</h3>\n   \n     <span class="per">Price Per PC</span>\n       <ion-item>\n             <ion-label>Out Fit Type</ion-label>\n               <ion-input type="text" [(ngModel)]="data.goomout"   name="goomout" #goomout="ngModel"  placeholder="Enter title" text-right ></ion-input>\n   </ion-item>\n       <ion-item>\n             <ion-label>Amount</ion-label>\n               <ion-input type="text" [(ngModel)]="data.goomamout"   name="goomamout" #goomamout="ngModel"  placeholder="Enter Amount" text-right ></ion-input>\n    </ion-item>\n                <div *ngFor="let iuujuj of goomitem">\n             <span class="per">Price Per PC</span>\n             \n        <ion-item>\n             <ion-label>Out Fit Type</ion-label>\n               <ion-input type="text" [(ngModel)]="iuujuj.out"  [ngModelOptions]="{standalone: true}"  placeholder="Enter Event" text-right ></ion-input>\n     </ion-item>\n       \n     <ion-item>\n             <ion-label>Amount</ion-label>\n              <ion-input type="text" [(ngModel)]="iuujuj.amounts"  [ngModelOptions]="{standalone: true}"  placeholder="Enter Amount" text-right ></ion-input>\n      </ion-item>\n   \n      </div>\n           <div *ngIf="gom==1">\n     <div style="width:100%;float:left;height:5vh;"></div>\n    <span class="per">Price Per PC</span>\n        <ion-item >\n            <ion-label>Out Fit Type</ion-label>\n           <ion-input type="text" [(ngModel)]="gooms.event" name="out" #out="ngModel" placeholder="Enter Event" text-right ></ion-input>\n     </ion-item>\n       \n    <ion-item>\n            <ion-label>Amount</ion-label>\n             <ion-input type="text" [(ngModel)]="gooms.amount" name="amount" #amount="ngModel" placeholder="Enter Amount" text-right ></ion-input>\n      </ion-item>\n  \n      <button class="add button button-md button-outline button-outline-md button-small button-small-md button-outline-md-dark" (click)="addMoregoom(gooms.event,gooms.amount)">ADD</button>\n </div>\n       <button ion-button color="dark" outline small class="add button button-md button-outline button-outline-md button-small button-small-md button-outline-md-dark" (click)="goom()">Add More</button>\n         </div>\n<!--makeup end-->\n<!--wedding catering start-->\n<div *ngIf="vendor_check==7">\n  <h3>Wedding Catering</h3>\n   \n     <span class="per">Price Per Plate</span>\n       <ion-item>\n             <ion-label>Plate Type</ion-label>\n                <ion-input type="text" [(ngModel)]="data.ptypefg" name="ptypefg" #ptypefg="ngModel" placeholder="Enter Plate Type" text-right ></ion-input>\n         </ion-item>\n       <ion-item>\n             <ion-label>Amount</ion-label>\n              <ion-input type="text" [(ngModel)]="data.dfds" name="dfds" #dfds="ngModel" placeholder="Enter Amount" text-right ></ion-input>\n         </ion-item>\n                     <div *ngFor="let iuujuj of wae1">\n       <span class="per">Price Per Plate</span>\n             \n        <ion-item>\n             <ion-label>Out Fit Type</ion-label>\n               <ion-input type="text" [(ngModel)]="iuujuj.photypeto"  [ngModelOptions]="{standalone: true}"  placeholder="Enter Event" text-right ></ion-input>\n     </ion-item>\n       \n     <ion-item>\n             <ion-label>Amount</ion-label>\n              <ion-input type="text" [(ngModel)]="iuujuj.amount"  [ngModelOptions]="{standalone: true}"  placeholder="Enter Amount" text-right ></ion-input>\n      </ion-item>\n   \n      </div>\n           <div *ngIf="ll==1">\n     <div style="width:100%;float:left;height:5vh;"></div>\n     <span class="per">Price Per Plate</span>\n        <ion-item >\n           <ion-label>Plate Type</ion-label>\n           <ion-input type="text" [(ngModel)]="wear.ptype" name="ptype" #type="ngModel" placeholder="Enter Plate Type" text-right ></ion-input>\n     </ion-item>\n       \n    <ion-item>\n            <ion-label>Amount</ion-label>\n             <ion-input type="text" [(ngModel)]="wear.amount" name="amount" #amount="ngModel" placeholder="Enter Amount" text-right ></ion-input>\n      </ion-item>\n  \n      <button class="add button button-md button-outline button-outline-md button-small button-small-md button-outline-md-dark" (click)="addMorewear(wear.ptype,wear.amount)">ADD</button>\n </div>\n       <button ion-button color="dark" outline small class="add button button-md button-outline button-outline-md button-small button-small-md button-outline-md-dark" (click)="tty()">Add More</button>\n     \n     </div>\n<!--wedding catering end-->\n<!--wedding accessories start-->\n<div *ngIf="vendor_check==8">\n  <h3>{{userdata.vendor_type}}</h3>\n   \n     <span class="per">Price Per Item</span>\n       <ion-item>\n             <ion-label>Title</ion-label>\n               <ion-input type="text" placeholder="Title" text-right ></ion-input>\n     </ion-item>\n       <ion-item>\n             <ion-label>Amount</ion-label>\n               <ion-input type="text" placeholder="Enter Amount" text-right ></ion-input>\n     </ion-item>\n          <div *ngFor="let iuuj of items111">\n              <span class="per">Price Per Item</span>\n             \n        <ion-item>\n             <ion-label>Title</ion-label>\n               <ion-input type="text" [(ngModel)]="iuuj.title" [ngModelOptions]="{standalone: true}" placeholder="Enter title" text-right ></ion-input>\n     </ion-item>\n       \n     <ion-item>\n             <ion-label>Amount</ion-label>\n              <ion-input type="text" [(ngModel)]="iuuj.amount" [ngModelOptions]="{standalone: true}"  placeholder="Enter Amount" text-right ></ion-input>\n      </ion-item>\n   \n      </div>\n           <div *ngIf="vv1==1">\n     <div style="width:100%;float:left;height:5vh;"></div>\n      <ion-item>\n             <ion-label>Title</ion-label>\n               <ion-input type="text" [(ngModel)]="checkitem.check8_title" name="check8_title" #check8_title="ngModel" placeholder="Title" text-right ></ion-input>\n     </ion-item>\n       <ion-item>\n             <ion-label>Amount</ion-label>\n               <ion-input type="text"  [(ngModel)]="checkitem.check8_amount" name="check8_amount" #check8_amount="ngModel" placeholder="Enter Amount" text-right ></ion-input>\n      </ion-item>\n      <button class="add button button-md button-outline button-outline-md button-small button-small-md button-outline-md-dark" (click)="addMore1(checkitem.check8_title,checkitem.check8_amount)">ADD</button>\n        </div>\n        <button ion-button color="dark" outline small class="add button button-md button-outline button-outline-md button-small button-small-md button-outline-md-dark" (click)="baic1()" >Add More</button>\n     </div>\n<!--wedding accessories end-->\n\n\n\n<!--makeup addon start  -->\n\n    <div class="on" *ngIf="vendor_check==5">\n    <!--<ion-label class="label ad" style="margin: 0px;">Addon:</ion-label>-->\n         <ion-item>\n        <ion-label>Air Brush </ion-label>\n        <ion-checkbox color="dark"  [(ngModel)]="air_brush" (ionChange)="airValue()" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n      </ion-item>\n          <ion-grid style="padding: 0px;" *ngIf="airstatus" >\n      <ion-row class="amount">\n        <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.adddon_air" name="adddon_air" #adddon_air="ngModel"  required ></ion-input>\n          </ion-item>\n           <div *ngIf="adddon_air.errors && (adddon_air.dirty || adddon_air.touched)" class="alert alert-danger">\n          <div [hidden]="!adddon_air.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n       \n          </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>\n        <ion-item>\n        <ion-label>Travel</ion-label>\n  <ion-checkbox color="dark"  [(ngModel)]="travels" (ionChange)="travelValue()" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n      </ion-item>  \n       <ion-grid style="padding: 0px;" *ngIf="travelstatus" >\n      <ion-row class="amount">\n        <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.adddon_travel" name="adddon_travel" #adddon_travel="ngModel"  required ></ion-input>\n          </ion-item>\n           <div *ngIf="adddon_travel.errors && (adddon_travel.dirty || adddon_travel.touched)" class="alert alert-danger">\n          <div [hidden]="!adddon_travel.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n       \n          </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>\n   \n<!--makeup addon end  -->\n<!--makeup discount start-->\n<!--<ion-label class="label ad" style="margin: 15px 0 0;">Discount:</ion-label>\n<ion-item class="dis">\n    <ion-select [(ngModel)]="dis" [ngModelOptions]="{standalone: true}" >\n   \n     <ion-option >Booking Over</ion-option>\n      <ion-option >3 Day</ion-option>\n      <ion-option >7 Day</ion-option>\n      <ion-option >10 Day</ion-option>\n      <ion-option >Customize</ion-option>\n    </ion-select>\n  </ion-item>-->\n</div>\n<!--makeup discount end-->\n\n\n<!--venue addon start  -->\n\n    <div class="on" *ngIf="vendor_check==3">\n     <ion-label class="label ad" style="margin: 0px;">Addon:</ion-label>\n         <ion-item>\n        <ion-label>Sound System</ion-label>\n       <ion-checkbox color="dark"  [(ngModel)]="sound_system" (ionChange)="sound()" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n  </ion-item>\n     <ion-grid style="padding: 0px;" *ngIf="soundstatus">\n      <ion-row class="amount">\n         <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.addon_sound" name="addon_sound" #addon_sound="ngModel"  required ></ion-input>\n          </ion-item>\n           <div *ngIf="addon_sound.errors && (addon_sound.dirty || addon_sound.touched)" class="alert alert-danger">\n          <div [hidden]="!addon_sound.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n       \n          </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>\n        <ion-item>\n        <ion-label>Lighting</ion-label>\n        <ion-checkbox color="dark"  [(ngModel)]="lighting" (ionChange)="light()" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n </ion-item>\n      <ion-grid style="padding: 0px;" *ngIf="lightstatus">\n      <ion-row class="amount">\n         <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.addon_light" name="addon_light" #addon_light="ngModel"  required ></ion-input>\n          </ion-item>\n           <div *ngIf="addon_light.errors && (addon_light.dirty || addon_light.touched)" class="alert alert-danger">\n          <div [hidden]="!addon_light.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n       \n          </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>\n        <ion-item>\n        <ion-label>Security</ion-label>\n        <ion-checkbox color="dark"  [(ngModel)]="securitys" (ionChange)="security()" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n     </ion-item>\n            <ion-grid style="padding: 0px;" *ngIf="securitystatus">\n      <ion-row class="amount">\n         <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.addon_security" name="addon_security" #addon_security="ngModel"  required ></ion-input>\n          </ion-item>\n           <div *ngIf="addon_security.errors && (addon_security.dirty || addon_security.touched)" class="alert alert-danger">\n          <div [hidden]="!addon_security.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n       \n          </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>\n           <ion-item>\n        <ion-label>Cocktail Services</ion-label>\n      <ion-checkbox color="dark"  [(ngModel)]="cocktail_service" (ionChange)="cocktail()" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n  </ion-item>\n            <ion-grid style="padding: 0px;" *ngIf="cocktailstatus">\n      <ion-row class="amount">\n         <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.addon_cocktail" name="addon_cocktail" #addon_cocktail="ngModel"  required ></ion-input>\n          </ion-item>\n           <div *ngIf="addon_cocktail.errors && (addon_cocktail.dirty || addon_cocktail.touched)" class="alert alert-danger">\n          <div [hidden]="!addon_cocktail.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n       \n          </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>\n    \n   \n<!--venue addon end  -->\n\n\n\n   </div>\n\n<!--wedding decorator discount  start-->\n\n<!--wedding decorator discount  end-->\n\n<!--photographer addon start-->\n<ion-label class="label ad" style="margin: 0px;">Addon:</ion-label>\n<!--groomwear addon start  -->\n\n    <div class="on" *ngIf="vendor_check==6">\n   \n         <ion-item>\n        <ion-label>Tailoring </ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="tailor" (ionChange)="trailorValue()" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n      </ion-item>\n    <ion-grid style="padding: 0px;" *ngIf="tailorstatus" >\n      <ion-row class="amount">\n        <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.adddon_tailor" name="adddon_tailor" #adddon_tailor="ngModel"  required ></ion-input>\n          </ion-item>\n           <div *ngIf="adddon_tailor.errors && (adddon_tailor.dirty || adddon_tailor.touched)" class="alert alert-danger">\n          <div [hidden]="!adddon_tailor.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n             </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>\n        <ion-item>\n        <ion-label>Designing</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="design" (ionChange)="designValue()" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n        </ion-item>\n         <ion-grid style="padding: 0px;" *ngIf="designstatus" >\n      <ion-row class="amount">\n        <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.adddon_design" name="adddon_design" #adddon_design="ngModel"  required ></ion-input>\n          </ion-item>\n           <div *ngIf="adddon_design.errors && (adddon_design.dirty || adddon_design.touched)" class="alert alert-danger">\n          <div [hidden]="!adddon_design.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n             </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>\n         <ion-item>\n        <ion-label>Matching</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="match" (ionChange)="matchValue()" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n        </ion-item>\n         <ion-grid style="padding: 0px;" *ngIf="matchstatus" >\n      <ion-row class="amount">\n        <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.adddon_match" name="adddon_match" #adddon_match="ngModel"  required ></ion-input>\n          </ion-item>\n           <div *ngIf="adddon_match.errors && (adddon_match.dirty || adddon_match.touched)" class="alert alert-danger">\n          <div [hidden]="!adddon_match.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n             </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>\n    </div>\n<!--groomwear addon end  -->\n<!--wedding catering addon start  -->\n<!--\n    <div class="on" *ngIf="vendor_check==7">\n    \n         <ion-item>\n        <ion-label>Non-Veg </ion-label>\n        <ion-checkbox color="dark" ></ion-checkbox>\n      </ion-item>\n        <ion-item>\n        <ion-label>Garlic</ion-label>\n        <ion-checkbox color="dark" ></ion-checkbox>\n      </ion-item>\n     \n    </div>-->\n<!--wedding catering addon end  -->\n<!--wedding accessories start addon start  -->\n\n    <div class="on" *ngIf="vendor_check==8">\n   \n         <ion-item>\n        <ion-label>Delivery </ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="deliverycheck8" (ionChange)="deliveryvalue()" [ngModelOptions]="{standalone: true}">\n     </ion-checkbox>\n      </ion-item>\n     \n    <ion-grid style="padding: 0px;" *ngIf="delivery_status8" >\n      <ion-row class="amount">\n        <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.adddon_delivery8" name="adddon_delivery8" #adddon_delivery8="ngModel"  required ></ion-input>\n          </ion-item>\n           <div *ngIf="adddon_delivery8.errors && (adddon_delivery8.dirty || adddon_delivery8.touched)" class="alert alert-danger">\n          <div [hidden]="!adddon_delivery8.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n        </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n\n <ion-item>\n        <ion-label>In House Demo</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="democheck8" (ionChange)="demovalue()" [ngModelOptions]="{standalone: true}">\n     </ion-checkbox>\n      </ion-item>\n       <ion-grid style="padding: 0px;" *ngIf="demo_status8" >\n      <ion-row class="amount">\n        <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.adddon_demo8" name="adddon_demo8" #adddon_demo8="ngModel"  required ></ion-input>\n          </ion-item>\n           <div *ngIf="adddon_demo8.errors && (adddon_demo8.dirty || adddon_demo8.touched)" class="alert alert-danger">\n          <div [hidden]="!adddon_demo8.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n        </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>\n         <ion-item>\n        <ion-label>Design</ion-label>\n       <ion-checkbox color="dark" [(ngModel)]="design8" (ionChange)="design8value()" [ngModelOptions]="{standalone: true}">\n     </ion-checkbox>\n      </ion-item>\n             <ion-grid style="padding: 0px;" *ngIf="design_status8" >\n      <ion-row class="amount">\n        <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.adddon_design8" name="adddon_design8" #adddon_design8="ngModel"  required ></ion-input>\n          </ion-item>\n           <div *ngIf="adddon_design8.errors && (adddon_design8.dirty || adddon_design8.touched)" class="alert alert-danger">\n          <div [hidden]="!adddon_design8.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n        </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>\n   </div>\n<!--wedding accessories start addon end  -->\n    <div class="on" *ngIf="vendor_check==1">\n\n    \n      <ion-item>\n        <ion-label>Candid</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="cb_value" (ionChange)="updateCbValue()" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n      </ion-item>\n     \n    <ion-grid style="padding: 0px;" *ngIf="status" >\n      <ion-row class="amount">\n        <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.adddon_candid" name="adddon_candid" #adddon_candid="ngModel"  required ></ion-input>\n          </ion-item>\n           <div *ngIf="adddon_candid.errors && (adddon_candid.dirty || adddon_candid.touched)" class="alert alert-danger">\n          <div [hidden]="!adddon_candid.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n       \n          </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>\n\n      <ion-item >\n        <ion-label>Video Editing</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="cb_value1" (ionChange)="nextvalue()" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n      </ion-item>\n   \n    <ion-grid style="padding: 0px;" *ngIf="status1" >\n      <ion-row class="amount">\n           <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.adddon_vedio" name="adddon_vedio" #adddon_vedio="ngModel"  required ></ion-input>\n          </ion-item>\n           <div *ngIf="adddon_vedio.errors && (adddon_vedio.dirty || adddon_vedio.touched)" class="alert alert-danger">\n          <div [hidden]="!adddon_vedio.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n       \n          </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>\n      <ion-item>\n        <ion-label>photo Book</ion-label>\n        <ion-checkbox color="dark"  [(ngModel)]="cb_value2" (ionChange)="nextvalue1()" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n      </ion-item>\n    <ion-grid style="padding: 0px;" *ngIf="status2" >\n      <ion-row class="amount">\n         <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.adddon_photo" name="adddon_photo" #adddon_photo="ngModel"  required></ion-input>\n          </ion-item>\n           <div *ngIf="adddon_photo.errors && (adddon_photo.dirty || adddon_photo.touched)" class="alert alert-danger">\n          <div [hidden]="!adddon_photo.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n\n          </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>\n      <ion-item>\n        <ion-label>Portrait & Framing</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="cb_value3" (ionChange)="nextvalue2()" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n      </ion-item>\n    <ion-grid style="padding: 0px;" *ngIf="status3" >\n      <ion-row class="amount">\n           <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.adddon_portrait" name="adddon_portrait" #adddon_portrait="ngModel"  required ></ion-input>\n          </ion-item>\n           <div *ngIf="adddon_portrait.errors && (adddon_portrait.dirty || adddon_portrait.touched)" class="alert alert-danger">\n          <div [hidden]="!adddon_portrait.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n    \n          </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>\n <!--<div *ngFor="let item of items; let i = index" [attr.data-index]="i">\n   <ion-item >\n         \n            <ion-label> {{item.title}}</ion-label>\n            <ion-checkbox color="dark" [(ngModel)]="check1.checked[i]" name="check1_{{check1.checked[i]}}"  (ionChange)="checkBox1(check1.checked[i],i)" checked>\n            </ion-checkbox>\n         </ion-item>\n         \n\n\n     \n            <ion-grid style="padding: 0px;" *ngIf="check1.checked[i]" >\n      <ion-row class="amount">\n           <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="item.amount"  [ngModelOptions]="{standalone: true}"></ion-input>\n          </ion-item>\n       </ion-col>\n      </ion-row>\n    </ion-grid>\n    </div>\n       <ion-item>\n        <ion-label>More</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="cb_value4" (ionChange)="nextvalue3()" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n      </ion-item>\n\n    <ion-grid style="padding: 0px;"  *ngIf="status4">\n          <ion-row class="amount">\n                  <ion-col>\n                    <ion-item>\n                      <ion-input type="text" [(ngModel)]="item.title" name="title" #title="ngModel" placeholder="Enter Title"></ion-input>\n                    </ion-item>\n   \n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <ion-input type="text" [(ngModel)]="item.amount" name="amount" #amount="ngModel" placeholder="Enter Amount"></ion-input>\n                    </ion-item>\n             \n                  </ion-col>\n                </ion-row>\n          <button ion-button color="dark" outline small class="add" type="button" (click)="addNew(item.title,item.amount,check1.checked)">Add</button>\n    </ion-grid>-->\n    </div>\n     <div *ngFor="let item of items; let i = index" [attr.data-index]="i">\n         <ion-item >\n           <!--{{item | json}}-->\n            <ion-label> {{item.title}}</ion-label>\n            <ion-checkbox color="dark" [(ngModel)]="check1.checked[i]" name="check1_{{check1.checked[i]}}"  (ionChange)="checkBox1(check1.checked[i],i)" checked>\n            </ion-checkbox>\n         </ion-item>\n         \n\n\n         <!--{{item.amount}}-->\n            <ion-grid style="padding: 0px;" *ngIf="check1.checked[i]" >\n      <ion-row class="amount">\n           <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="item.amount"  [ngModelOptions]="{standalone: true}"></ion-input>\n          </ion-item>\n       </ion-col>\n      </ion-row>\n    </ion-grid>\n    </div>\n       <ion-item class="aaa">\n        <ion-label>More</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="cb_value4" (ionChange)="nextvalue3()" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n      </ion-item>\n\n    <ion-grid style="padding: 0px;"  *ngIf="status4">\n          <ion-row class="amount">\n                  <ion-col>\n                    <ion-item>\n                      <ion-input type="text" [(ngModel)]="item.title" name="title" #title="ngModel" placeholder="Enter Title"></ion-input>\n                    </ion-item>\n   \n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <ion-input type="text" [(ngModel)]="item.amount" name="amount" #amount="ngModel" placeholder="Enter Amount"></ion-input>\n                    </ion-item>\n             \n                  </ion-col>\n\n                   <ion-col col-12>\n          <button ion-button color="dark" outline small class="add" type="button" (click)="addNew(item.title,item.amount,check1.checked)">Add</button>\n                </ion-col>\n\n                </ion-row>\n\n    </ion-grid>\n<!--photographer addon end-->\n<!--photographer discount start-->\n<div>\n<ion-label class="label ad" style="margin: 15px 0 0;">Discount:</ion-label>\n<ion-item class="dis">\n    <ion-label>Booking Over</ion-label>\n    <ion-select [(ngModel)]="dis" [ngModelOptions]="{standalone: true}" >\n      <!--remove  [ngModelOptions]="{standalone: true}"> if you don\'t need it in the form -->\n  <!--<ion-option >Booking Over</ion-option>-->\n      <ion-option value="2" (ionSelect)="mcqAnswer($event)">2 Day</ion-option>\n       <ion-option *ngFor="let iteeem of ditems"  (ionSelect)="mcqAnswer($event,iteeem)" [value]="iteeem.day">{{iteeem.day}} Day</ion-option>\n      <ion-option value="more" (ionSelect)="mcqAnswer($event)" >More</ion-option>\n    </ion-select>\n  </ion-item>\n  <!--<ion-item class="dis" *ngIf="vendor_check==3">\n    <ion-select [(ngModel)]="diss" [ngModelOptions]="{standalone: true}" >\n     <ion-option >Guest Quantity</ion-option>\n      <ion-option >1000</ion-option>\n      <ion-option >2000</ion-option>\n      <ion-option >5000</ion-option>\n      <ion-option >Customize</ion-option>\n    </ion-select>\n  </ion-item>-->\n <ion-grid style="padding: 0px;">\n      <ion-row class="amount"  *ngIf="ata==0">\n         <ion-col>\n            <ion-item>\n              <ion-input type="text" placeholder="Enter Title" [(ngModel)]="data.title" name="title" #title="ngModel"  required></ion-input>\n            </ion-item>\n             <div *ngIf="title.errors && (title.dirty || title.touched)" class="alert alert-danger">\n            <div [hidden]="!title.errors.required" class="alert alert-danger">\n            Title is required\n            </div>\n          </div> \n          </ion-col>\n          <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount"  [(ngModel)]="data.amount" name="amount" #amount="ngModel"  required ></ion-input>\n          </ion-item>\n             <div *ngIf="amount.errors && (amount.dirty || amount.touched)" class="alert alert-danger">\n              <div [hidden]="!amount.errors.required" class="alert alert-danger">\n                  Amount is required\n              </div>\n     \n          </div> \n          </ion-col>\n      </ion-row>\n  \n    <ion-row class="amount"  *ngIf="ata==1">\n      <form >\n        <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter day"  [(ngModel)]="data.mday" name="mday" #mday="ngModel"  required ></ion-input>\n          </ion-item>\n             <div *ngIf="mday.errors && (mday.dirty || mday.touched)" class="alert alert-danger">\n              <div [hidden]="!mday.errors.required" class="alert alert-danger">\n                  day is required\n              </div>\n     \n          </div> \n          </ion-col>\n         <ion-col>\n            <ion-item>\n              <ion-input type="text" placeholder="Enter Title" [(ngModel)]="data.mtitle" name="mtitle" #mtitle="ngModel"  required></ion-input>\n            </ion-item>\n             <div *ngIf="mtitle.errors && (mtitle.dirty || mtitle.touched)" class="alert alert-danger">\n            <div [hidden]="!mtitle.errors.required" class="alert alert-danger">\n            Title is required\n            </div>\n          </div> \n          </ion-col>\n       <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount"  [(ngModel)]="data.mamount" name="mamount" #mamount="ngModel"  required ></ion-input>\n          </ion-item>\n             <div *ngIf="mamount.errors && (mamount.dirty || mamount.touched)" class="alert alert-danger">\n              <div [hidden]="!mamount.errors.required" class="alert alert-danger">\n                  Amount is required\n              </div>\n    \n          </div> \n          </ion-col>\n          <button  (click)="adddiscount(data.mday,data.mtitle,data.mamount)"> ADD</button>\n      </form>\n      </ion-row>\n    </ion-grid>\n      </div><!--on_end-->\n<!--photographer discount end-->\n    </ion-item-group>\n  </ion-list>\n\n  \n<ion-list class="base inpt">\n    <ion-item-group>\n        <ion-item-divider color="light">Highlights</ion-item-divider>\n\n\n     <div style="width:100%;float:left;height:2vh;"></div>\n\n    \n\n    <div class="on">\n\n    <ion-label class="label ad" style="margin: 0px;">Add:</ion-label>\n<!--<div *ngIf="vendor_check==1">\n      <ion-item>\n        <ion-label>Candid</ion-label>\n        <ion-checkbox color="dark"  [(ngModel)]="cand" (ionChange)="addon()" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n      </ion-item>\n     \n    <ion-grid style="padding: 0px;" *ngIf="statuss">\n      <ion-row class="amount">\n         <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.hight__candid" name="hight__candid" #hight__candid="ngModel"  required ></ion-input>\n          </ion-item>\n           <div *ngIf="hight__candid.errors && (hight__candid.dirty || hight__candid.touched)" class="alert alert-danger">\n          <div [hidden]="!hight__candid.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n       \n          </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>\n\n <ion-item >\n        <ion-label>Video Editing</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="cand1" (ionChange)="addon1()" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n      </ion-item>\n   \n    <ion-grid style="padding: 0px;" *ngIf="status1s" >\n      <ion-row class="amount">\n            <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.hight_vedio" name="hight_vedio" #hight_vedio="ngModel"  required></ion-input>\n          </ion-item>\n           <div *ngIf="hight_vedio.errors && (hight_vedio.dirty || hight_vedio.touched)" class="alert alert-danger">\n          <div [hidden]="!hight_vedio.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n           \n          </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>\n      <ion-item>\n        <ion-label>photo Book</ion-label>\n        <ion-checkbox color="dark"  [(ngModel)]="cand2" (ionChange)="addon2()" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n      </ion-item>\n    <ion-grid style="padding: 0px;" *ngIf="status2s" >\n      <ion-row class="amount">\n           <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.h_photo" name="h_photo" #h_photo="ngModel"  required ></ion-input>\n          </ion-item>\n           <div *ngIf="h_photo.errors && (h_photo.dirty || h_photo.touched)" class="alert alert-danger">\n          <div [hidden]="!h_photo.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n            \n          </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>\n      <ion-item>\n        <ion-label>Portrait & Framing</ion-label>\n        <ion-checkbox color="dark"  [(ngModel)]="cand3" (ionChange)="addon3()" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n      </ion-item>\n    <ion-grid style="padding: 0px;" *ngIf="status3s" >\n      <ion-row class="amount">\n     <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.h_portrait" name="h_portrait" #h_portrait="ngModel"  required></ion-input>\n          </ion-item>\n           <div *ngIf="h_portrait.errors && (h_portrait.dirty || h_portrait.touched)" class="alert alert-danger">\n          <div [hidden]="!h_portrait.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n         \n          </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>\n</div>-->\n<!--<div *ngIf="vendor_check==7">\n   <ion-item>\n        <ion-label>Continental</ion-label>\n        <ion-checkbox color="dark"  ></ion-checkbox>\n      </ion-item>\n       <ion-item>\n        <ion-label>Healthy</ion-label>\n        <ion-checkbox color="dark"  ></ion-checkbox>\n      </ion-item>\n       <ion-item>\n        <ion-label>Customize to Allergy</ion-label>\n        <ion-checkbox color="dark"  ></ion-checkbox>\n      </ion-item>\n</div>-->\n<div *ngIf="userdata.vendor_type==\'Wedding planners\' || userdata.vendor_type==\'Wedding Decorator\'">\n   <ion-item>\n        <ion-label>Theme Wedding</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="theme_wedding" (ionChange)="theme()" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n     </ion-item>  <ion-grid style="padding: 0px;" *ngIf="weddingstatus" >\n      <ion-row class="amount">\n           <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.adddon_theme" name="adddon_theme" #adddon_theme="ngModel"  required ></ion-input>\n          </ion-item>\n           <div *ngIf="adddon_theme.errors && (adddon_theme.dirty || adddon_theme.touched)" class="alert alert-danger">\n          <div [hidden]="!adddon_theme.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n    \n          </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>\n</div>\n<div *ngIf="vendor_check==3">\n   <ion-item>\n        <ion-label>Pool Side</ion-label>\n          <ion-checkbox color="dark" [(ngModel)]="pool_side" (ionChange)="pool()" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n     </ion-item>\n    <ion-grid style="padding: 0px;" *ngIf="poolstatus" >\n      <ion-row class="amount">\n           <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.adddon_pool" name="adddon_pool" #adddon_pool="ngModel"  required ></ion-input>\n          </ion-item>\n           <div *ngIf="adddon_pool.errors && (adddon_pool.dirty || adddon_pool.touched)" class="alert alert-danger">\n          <div [hidden]="!adddon_pool.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n    \n          </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>\n       <ion-item>\n        <ion-label>Outdoor</ion-label>\n      <ion-checkbox color="dark" [(ngModel)]="outdoor" (ionChange)="outdoors()" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n       </ion-item>\n           <ion-grid style="padding: 0px;" *ngIf="outdoorstatus" >\n      <ion-row class="amount">\n           <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.addon_outdoorstatus" name="addon_outdoorstatus" #addon_outdoorstatus="ngModel"  required ></ion-input>\n          </ion-item>\n           <div *ngIf="addon_outdoorstatus.errors && (addon_outdoorstatus.dirty || addon_outdoorstatus.touched)" class="alert alert-danger">\n          <div [hidden]="!addon_outdoorstatus.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n           </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>\n       <ion-item>\n        <ion-label>Parking Space</ion-label>\n         <ion-checkbox color="dark" [(ngModel)]="parking_space" (ionChange)="parking()" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n       </ion-item>\n          <ion-grid style="padding: 0px;" *ngIf="parkingstatus" >\n      <ion-row class="amount">\n           <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.addon_parking" name="addon_parking" #addon_parking="ngModel"  required ></ion-input>\n          </ion-item>\n           <div *ngIf="addon_parking.errors && (addon_parking.dirty || addon_parking.touched)" class="alert alert-danger">\n          <div [hidden]="!addon_parking.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n           </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>\n             <!--<ion-item>\n        <ion-label>Near City</ion-label>\n       <ion-checkbox color="dark" [(ngModel)]="near" (ionChange)="outdoors()" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n       </ion-item>\n          <ion-grid style="padding: 0px;" *ngIf="outdoorstatus" >\n      <ion-row class="amount">\n           <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.outdoorstatus" name="outdoorstatus" #outdoorstatus="ngModel"  required ></ion-input>\n          </ion-item>\n           <div *ngIf="outdoorstatus.errors && (outdoorstatus.dirty || outdoorstatus.touched)" class="alert alert-danger">\n          <div [hidden]="!outdoorstatus.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n           </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>-->\n              <ion-item>\n        <ion-label>Alocohal/Bar</ion-label>\n     <ion-checkbox color="dark" [(ngModel)]="alocohal" (ionChange)="alocohals()" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n      </ion-item>\n          <ion-grid style="padding: 0px;" *ngIf="alocohalstatus" >\n      <ion-row class="amount">\n           <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.addon_alocohal" name="addon_alocohal" #addon_alocohal="ngModel"  required ></ion-input>\n          </ion-item>\n           <div *ngIf="addon_alocohal.errors && (addon_alocohal.dirty || addon_alocohal.touched)" class="alert alert-danger">\n          <div [hidden]="!addon_alocohal.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n           </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>\n              <ion-item>\n        <ion-label>Decoration/Flower/Mandap</ion-label>\n         <ion-checkbox color="dark" [(ngModel)]="decoration" (ionChange)="decorations()" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n      </ion-item>\n          <ion-grid style="padding: 0px;" *ngIf="dfmstatus" >\n      <ion-row class="amount">\n           <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.addon_dfmstatus" name="addon_dfmstatus" #addon_dfmstatus="ngModel"  required ></ion-input>\n          </ion-item>\n           <div *ngIf="addon_dfmstatus.errors && (addon_dfmstatus.dirty || addon_dfmstatus.touched)" class="alert alert-danger">\n          <div [hidden]="!addon_dfmstatus.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n           </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>\n            <ion-item>\n        <ion-label>In House DJ/ Music</ion-label>\n      <ion-checkbox color="dark" [(ngModel)]="dj_musc" (ionChange)="music()" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n       </ion-item>\n          <ion-grid style="padding: 0px;" *ngIf="djstatus" >\n      <ion-row class="amount">\n           <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.djstatus" name="djstatus" #djstatus="ngModel"  required ></ion-input>\n          </ion-item>\n           <div *ngIf="djstatus.errors && (djstatus.dirty || djstatus.touched)" class="alert alert-danger">\n          <div [hidden]="!djstatus.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n           </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>\n</div>\n\n<div *ngIf="userdata.vendor_type==\'Mehndi artist\' || userdata.vendor_type==\'Sangeet choreographers\' ||userdata.vendor_type==\'Wedding cards\'|| userdata.vendor_type==\'Wedding cakes\' || userdata.vendor_type==\'wedding favours\' || userdata.vendor_type==\'Make up\' ||  userdata.vendor_type==\'Groomwear\' ||  userdata.vendor_type==\'Bridal Wear\'||  userdata.vendor_type==\'Mehndi artist\'||  userdata.vendor_type==\'wedding accessories\'||  userdata.vendor_type==\'Wedding jewellery\' ">\n   <ion-item>\n        <ion-label>Travel to City</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="travel_to_city" (ionChange)="travel()" [ngModelOptions]="{standalone: true}"  ></ion-checkbox>\n      </ion-item>\n          <ion-grid style="padding: 0px;" *ngIf="travles">\n      <ion-row class="amount">\n         <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.add_travel" name="add_travel" #add_travel="ngModel"  required ></ion-input>\n          </ion-item>\n           <div *ngIf="add_travel.errors && (add_travel.dirty || add_travel.touched)" class="alert alert-danger">\n          <div [hidden]="!add_travel.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n       \n          </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>\n       <ion-item>\n        <ion-label>Bulk Discount</ion-label>\n        <ion-checkbox color="dark"  [(ngModel)]="bulk_discount" (ionChange)="bulk()" [ngModelOptions]="{standalone: true}"   ></ion-checkbox>\n      </ion-item>\n               <ion-grid style="padding: 0px;" *ngIf="devilerystatus">\n      <ion-row class="amount">\n         <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.add_bulk" name="add_bulk" #add_bulk="ngModel"  required ></ion-input>\n          </ion-item>\n           <div *ngIf="add_bulk.errors && (add_bulk.dirty || add_bulk.touched)" class="alert alert-danger">\n          <div [hidden]="!add_bulk.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n       \n          </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>\n       <ion-item>\n        <ion-label>Delivery to Home</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="delivery_to_home" (ionChange)="delivery()" [ngModelOptions]="{standalone: true}" ></ion-checkbox>\n      </ion-item>\n                <ion-grid style="padding: 0px;" *ngIf="delivery_status">\n      <ion-row class="amount">\n         <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="data.add_delivery" name="add_delivery" #add_delivery="ngModel"  required ></ion-input>\n          </ion-item>\n           <div *ngIf="add_delivery.errors && (add_delivery.dirty || add_delivery.touched)" class="alert alert-danger">\n          <div [hidden]="!add_delivery.errors.required" class="alert alert-danger">\n           Amount is required\n            </div>\n       \n          </div> \n          </ion-col>\n      </ion-row>\n    </ion-grid>\n        \n            \n</div>\n    <ion-grid style="padding: 0px;"  >\n     <div *ngFor="let itemq of additmes; let j = index" [attr.data-index]="j">\n        <ion-item >\n          <ion-label> {{itemq.title}}</ion-label>\n            <ion-checkbox color="dark" [(ngModel)]="check12.checked[j]" name="check12"  (ionChange)="checkBox12(check12.checked[j],j)" checked>\n            </ion-checkbox>\n         </ion-item>\n              <ion-grid style="padding: 0px;" *ngIf="check12.checked[j]" >\n           <ion-row class="amount">\n           <ion-col>\n           <ion-item>\n            <ion-input type="text" placeholder="Enter Amount" [(ngModel)]="itemq.amount"  [ngModelOptions]="{standalone: true}"></ion-input>\n          </ion-item>\n       </ion-col>\n      </ion-row>\n    </ion-grid>\n              </div>\n                   <ion-item>\n      \n        <ion-label>More</ion-label>\n        <ion-checkbox color="dark"  [(ngModel)]="cand4" (ionChange)="addon4()" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n      </ion-item>\n      <ion-row class="amount"  *ngIf="status4s">\n        <ion-col>\n              <ion-item>\n                  <ion-input type="text" [(ngModel)]="itemqs.title" name="title" #title="ngModel" placeholder="Enter Title"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <ion-input type="text" [(ngModel)]="itemqs.amount" name="amount" #amount="ngModel" placeholder="Enter Amount"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col col-12>\n          <button ion-button color="dark" outline small class="add" type="button" (click)="addNewadd(itemqs.title,itemqs.amount)">Add</button>\n                  </ion-col>\n      </ion-row>\n  </ion-grid>\n  <ion-label class="label ad" style="margin-bottom:0px;">Gallery:</ion-label>\n\n\n<ion-grid style="padding: 0;">\n  <ion-row>\n      <ion-col col-3 >\n  <div class="upld" *ngFor="let gallss of gall"  >\n       <img [src]="gallss" />\n      </div>\n    </ion-col>\n \n    <ion-col col-3 style="padding: 2px 3px 2px 3px;">\n      <ion-item class="upld">\n        <!--<input type="file" (change)="fileUpload($event)" id="file-input">-->\n        <div for="file" class="fle"  (click)="CameraAction()">\n           <ion-icon name="image" class="image_upld"></ion-icon>\n          <span>Upload</span>\n        </div>\n      </ion-item>\n    </ion-col>\n\n    <!--<ion-col col-3 style="padding: 2px 3px 2px 3px;">\n      <ion-item class="upld">\n        <input type="file" (change)="fileUpload($event)" id="file-input">\n        <div for="file" class="fle">\n           <ion-icon name="image" class="image_upld"></ion-icon>\n          <span>Upload</span>\n        </div>\n      </ion-item>\n    </ion-col>-->\n\n    <!--<ion-col col-3 style="padding: 2px 3px 2px 3px;">\n      <ion-item class="upld">\n        <input type="file" (click)="CameraAction()" id="file-input">\n        <div for="file" class="fle">\n           <ion-icon name="image" class="image_upld"></ion-icon>\n          <span>Upload</span>\n        </div>\n      </ion-item>\n    </ion-col>\n    \n    <ion-col col-3 style="padding: 2px 3px 2px 3px;">\n      <ion-item class="upld">\n        <input type="file" (change)="fileUpload($event)" id="file-input">\n        <div for="file" class="fle">\n           <ion-icon name="image" class="image_upld"></ion-icon>\n          <span>Upload</span>\n        </div>\n      </ion-item>\n    </ion-col>  \n\n    <ion-col col-3 style="padding: 2px 3px 2px 3px;">\n      <ion-item class="upld">\n        <input type="file" (change)="fileUpload($event)" id="file-input">\n        <div for="file" class="fle">\n           <ion-icon name="image" class="image_upld"></ion-icon>\n          <span>Upload</span>\n        </div>\n      </ion-item>\n    </ion-col>  -->\n  </ion-row>\n</ion-grid>\n\n<button ion-button block outline color="blue" class="pay" (click)="Paytm()">Link With Paytm</button>\n\n</div><!--on_end-->\n\n</ion-item-group>\n</ion-list>\n\n\n<ion-list class="base">\n    <ion-item-group>\n        <ion-item-divider color="light">Location</ion-item-divider>\n      <ion-toolbar color="navyb">\n    <ion-searchbar \n    [(ngModel)]="autocomplete.query" \n    [showCancelButton]="true" \n    (ionInput)="updateSearch()" \n    (ionCancel)="dismiss()"\n    placeholder="Select your city ..."\n    [ngModelOptions]="{standalone: true}">\n    </ion-searchbar>\n    <ion-list>\n      <ion-item *ngFor="let item of autocompleteItems" \n      (click)="chooseItem(item)">\n      {{ item.description }}\n      </ion-item>\n      </ion-list>\n  </ion-toolbar>\n <!--<ion-item>\n    <ion-input type="text" placeholder="Enter Location"  [(ngModel)]="data.location" name="location" #location="ngModel" required></ion-input>\n</ion-item>\n <div *ngIf="location.errors && (location.dirty || location.touched)" class="alert alert-danger">\n          <div [hidden]="!location.errors.required" class="alert alert-danger">\n          Location is required\n            </div>\n          </div> -->\n<div class="map" #map id="map"  style="height:20vh;position: initial;float:left;width:100%;">\n  <!--<img src="assets/image/map.jpg" />-->\n</div>\n\n</ion-item-group>\n</ion-list>\n\n\n  <ion-list class="base">\n    <ion-item-group>\n        <ion-item-divider color="light">Deals</ion-item-divider>\n      <ion-item class="area">\n        <textarea type="text" placeholder="Product Detail" class="txt_area"  [(ngModel)]="data.product_detail"  name="product_detail" #product_detail="ngModel"></textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="text" placeholder="Effective Date"  [(ngModel)]="data.effective_date"  name="effective_date" #effective_date="ngModel"></ion-input>\n      </ion-item>\n\n       <ion-item>\n        <ion-input type="text" placeholder="Discount Amount"  [(ngModel)]="data.discount_amount" name="discount_amount" #discount_amount="ngModel" ></ion-input>\n      </ion-item>\n  \n    </ion-item-group>\n  </ion-list>\n  <!--<button ion-button class="publish" (click)="menu()">Publish</button>-->\n  <button ion-button class="publish" type="submit" (click)="onSubmit(heroForm,autocomplete,dis)">Publish</button>\n\n</form>\n</ion-content>\n'/*ion-inline-end:"E:\Project\Dost user app new\src\pages\process\process.html"*/,
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
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
], ProcessPage);

//# sourceMappingURL=process.js.map

/***/ })

},[225]);
//# sourceMappingURL=main.js.map