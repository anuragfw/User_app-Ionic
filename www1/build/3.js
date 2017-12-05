webpackJsonp([3],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab2__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Tab2PageModule = (function () {
    function Tab2PageModule() {
    }
    return Tab2PageModule;
}());
Tab2PageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tab2__["a" /* Tab2Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab2__["a" /* Tab2Page */]),
        ],
    })
], Tab2PageModule);

//# sourceMappingURL=tab2.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filterc_filterc__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting_appsetting__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addtodo_addtodo__ = __webpack_require__(220);
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
 * Generated class for the Tab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Tab2Page = (function () {
    function Tab2Page(navCtrl, navParams, loadingCtrl, appsetting, http, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.appsetting = appsetting;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.pet = 'Profile';
        this.invitemail = '';
        this.show = '';
        this.userdata = '';
        this.colorb = '';
        this.showreviews = '';
        this.invitephone = '';
        console.log('updated');
        if (JSON.parse(localStorage.getItem("user_data"))) {
            this.userdata = JSON.parse(localStorage.getItem("user_data"));
        }
        this.getsdata();
    }
    Tab2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Tab2Page');
    };
    Tab2Page.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__filterc_filterc__["a" /* FiltercPage */]);
        modal.present();
    };
    Tab2Page.prototype.dismiss = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    Tab2Page.prototype.addtodoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__addtodo_addtodo__["a" /* AddtodoPage */]);
    };
    Tab2Page.prototype.getsdata = function () {
        var _this = this;
        console.log("=======");
        if (JSON.parse(localStorage.getItem("user_data"))) {
            this.userdata = JSON.parse(localStorage.getItem("user_data"));
        }
        var postdata1 = {
            userid: this.userdata._id,
            role: 'Vendor'
        };
        console.log(postdata1);
        var serialized_all1 = this.serializeObj(postdata1);
        var url = this.appsetting.myGlobalVar + 'users/vendor';
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(url, serialized_all1, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            if (response.status = true) {
                console.log("isha");
                console.log(response.data);
                _this.show = response.data;
                console.log(_this.show);
                console.log(_this.show[3].name);
                //  for(let i in this.show){
                //         this.show[i].colorb = '';
                //  }
            }
            else {
            }
        });
    };
    Tab2Page.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    return Tab2Page;
}());
Tab2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tab2',template:/*ion-inline-start:"E:\Project\Dost user app new\src\pages\tab2\tab2.html"*/'<ion-header>\n    <ion-navbar>\n       <ion-buttons start>\n         <button ion-button menuToggle>\n           <ion-icon name="menu"></ion-icon>\n         </button>\n       </ion-buttons>\n           <ion-title>Market Place</ion-title>\n  \n     </ion-navbar>\n  </ion-header>\n  \n       \n  <ion-content>\n      <div *ngFor="let th of show; let i = index" [attr.data-index]="i">\n    <ion-card class="box">\n    <ion-card-header style="position: relative;font-family:Lora-Regular;">\n     <div class="px">\n       <img [src]="th.image">\n    </div>\n  \n    </ion-card-header>\n    <ion-card-content style="font-family:roboto;">\n      \n        <h3>{{th.name}}\n  \n          <ul class="stars">\n            <li><ion-icon name="star" class="active"></ion-icon></li>\n            <li><ion-icon name="star"></ion-icon></li>\n            <li><ion-icon name="star"></ion-icon></li>\n            <li><ion-icon name="star"></ion-icon></li>\n            <li><ion-icon name="star"></ion-icon></li>\n          </ul>\n        \n        </h3>\n        <h4><span style="color:#e5053a;">rs 165,000 onwards</span><span style="float:right; color:#484848;">5 reviews</span></h4>\n        <p><ion-icon ios="ios-pin" md="md-pin"></ion-icon>location</p>\n    </ion-card-content>\n  </ion-card>\n </div>\n  \n  </ion-content>'/*ion-inline-end:"E:\Project\Dost user app new\src\pages\tab2\tab2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting_appsetting__["a" /* AppsettingProvider */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
], Tab2Page);

//# sourceMappingURL=tab2.js.map

/***/ })

});
//# sourceMappingURL=3.js.map