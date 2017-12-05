webpackJsonp([1],{

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab4__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Tab4PageModule = (function () {
    function Tab4PageModule() {
    }
    return Tab4PageModule;
}());
Tab4PageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tab4__["a" /* Tab4Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab4__["a" /* Tab4Page */]),
        ],
    })
], Tab4PageModule);

//# sourceMappingURL=tab4.module.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab4Page; });
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
 * Generated class for the Tab4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Tab4Page = (function () {
    function Tab4Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pet = 'completed';
    }
    Tab4Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Tab4Page');
    };
    return Tab4Page;
}());
Tab4Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tab4',template:/*ion-inline-start:"E:\Project\Dost user app new\src\pages\tab4\tab4.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-buttons>\n    <ion-title>Job Manager</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n \n  <div class="seg">\n  <ion-segment [(ngModel)]="pet">\n    <ion-segment-button value="completed">\n      Completed\n    </ion-segment-button>\n    <ion-segment-button value="shortlisted">\n      Shortlisted\n    </ion-segment-button>\n    <ion-segment-button value="progress">\n      Job in Progress\n    </ion-segment-button>\n  </ion-segment>\n</div>\n\n<div [ngSwitch]="pet">\n\n  <ion-list *ngSwitchCase="\'completed\'" class="bg">\n\n  </ion-list><!--Completed-->\n\n  <ion-list *ngSwitchCase="\'shortlisted\'" class="bg_b">\n    \n\n  </ion-list><!--Shortlisted-->\n\n  <ion-list *ngSwitchCase="\'progress\'" class="bg_b">\n\n  </ion-list><!--Progress-->\n\n</div>\n\n     </ion-content>\n'/*ion-inline-end:"E:\Project\Dost user app new\src\pages\tab4\tab4.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], Tab4Page);

//# sourceMappingURL=tab4.js.map

/***/ })

});
//# sourceMappingURL=1.js.map