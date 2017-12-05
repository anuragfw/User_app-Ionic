webpackJsonp([6],{

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordPageModule", function() { return ChangepasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changepassword__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangepasswordPageModule = (function () {
    function ChangepasswordPageModule() {
    }
    return ChangepasswordPageModule;
}());
ChangepasswordPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__changepassword__["a" /* ChangepasswordPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__changepassword__["a" /* ChangepasswordPage */]),
        ],
    })
], ChangepasswordPageModule);

//# sourceMappingURL=changepassword.module.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
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







/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangepasswordPage = (function () {
    function ChangepasswordPage(navCtrl, navParams, http, alertCtrl, loadingCtrl, appsetting) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.appsetting = appsetting;
        this.data = '';
        this.userdata = '';
        this.userdata = JSON.parse(localStorage.getItem("user_data"));
    }
    ChangepasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangepasswordPage');
    };
    ChangepasswordPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ChangepasswordPage.prototype.onSubmit = function (data) {
        var _this = this;
        if (data.value.newpassword == data.value.cpassword) {
            var loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                showBackdrop: false,
                cssClass: 'loader'
            });
            console.log(data);
            loading.present();
            var postdata = {
                id: this.userdata._id,
                password: data.value.newpassword,
            };
            console.log(postdata);
            var serialized_all = this.serializeObj(postdata);
            var url = this.appsetting.myGlobalVar + 'users/changepass';
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
                    localStorage.clear();
                }
                else {
                }
            });
        }
        else {
            alert('new password mismatch');
        }
    };
    return ChangepasswordPage;
}());
ChangepasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-changepassword',template:/*ion-inline-start:"E:\Project\Dost user app new\src\pages\changepassword\changepassword.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>Change Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n<div style="height:10vh;float:left;width:100%;"></div>\n  \n  <div class="logo">\n      <img src="assets/image/logo.png">\n     </div>\n  \n     <div style="height:5vh;float:left;width:100%;"></div>\n  \n     <div class="signin_field">\n     <form #heroForm="ngForm"  novalidate>\n  \n     <ion-list>\n\n       <!--<ion-item>\n            <ion-input type="password" placeholder="Enter Old Password" [(ngModel)]="data.opassword" name="opassword" #opassword="ngModel"  required></ion-input>\n          </ion-item>\n            <div *ngIf="opassword.errors && (opassword.dirty || opassword.touched)" class="alert alert-danger">\n          <div [hidden]="!opassword.errors.required" class="alert alert-danger">\n            Old Password is required\n            </div>\n             </div>  -->\n           <ion-item>\n            <ion-input type="password" placeholder="Enter New Password" [(ngModel)]="data.newpassword" name="newpassword" #newpassword="ngModel"  required></ion-input>\n          </ion-item>\n            <div *ngIf="newpassword.errors && (newpassword.dirty || newpassword.touched)" class="alert alert-danger">\n          <div [hidden]="!newpassword.errors.required" class="alert alert-danger">\n            New Password is required\n            </div>\n             </div>  \n              <ion-item>\n            <ion-input type="password" placeholder="Confirm New Password" [(ngModel)]="data.cpassword" name="cpassword" #cpassword="ngModel"  required></ion-input>\n          </ion-item>\n            <div *ngIf="cpassword.errors && (cpassword.dirty || cpassword.touched)" class="alert alert-danger">\n          <div [hidden]="!cpassword.errors.required" class="alert alert-danger">\n            Confirm Password is required\n            </div>\n             </div>  \n        \n        \n        </ion-list>\n  \n        <button ion-button type="submit"  (click)="onSubmit(heroForm)">Confirm</button>\n  \n        </form>\n\n\n        </div>\n</ion-content>\n'/*ion-inline-end:"E:\Project\Dost user app new\src\pages\changepassword\changepassword.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_appsetting_appsetting__["a" /* AppsettingProvider */]])
], ChangepasswordPage);

//# sourceMappingURL=changepassword.js.map

/***/ })

});
//# sourceMappingURL=6.js.map