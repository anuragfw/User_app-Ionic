webpackJsonp([2],{

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab3__ = __webpack_require__(331);
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
            __WEBPACK_IMPORTED_MODULE_2__tab3__["a" /* Tab3Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab3__["a" /* Tab3Page */]),
        ],
    })
], Tab4PageModule);

//# sourceMappingURL=tab3.module.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jobdetail_jobdetail__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postedit_postedit__ = __webpack_require__(221);
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
var Tab3Page = (function () {
    function Tab3Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pet = 'current';
    }
    Tab3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Tab3Page');
    };
    Tab3Page.prototype.jobdetailPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__jobdetail_jobdetail__["a" /* JobdetailPage */]);
    };
    Tab3Page.prototype.postedit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__postedit_postedit__["a" /* PosteditPage */]);
    };
    return Tab3Page;
}());
Tab3Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tab3',template:/*ion-inline-start:"E:\Project\Dost user app new\src\pages\tab3\tab3.html"*/'\n<ion-header>\n  \n    <ion-navbar>\n      <ion-buttons start>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>Job Manager</ion-title>\n      <ion-buttons end>\n          <button ion-button (click)="postedit();">\n            <ion-icon name="add"></ion-icon>\n          </button>\n        </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n    <ion-scroll zooming="true" direction="x" style="width: 100%; height: 60px" class="wide-as-needed">\n    <div class="seg">\n    <ion-segment [(ngModel)]="pet">\n       <ion-segment-button value="current">\n        current\n      </ion-segment-button>\n      <ion-segment-button value="completed">\n        Completed\n      </ion-segment-button>\n      <ion-segment-button value="shortlisted">\n        Shortlisted\n      </ion-segment-button>\n  \n      <ion-segment-button value="all">\n        All Jobs\n      </ion-segment-button>\n     \n    </ion-segment>\n  </div>\n   </ion-scroll>\n  \n  <div [ngSwitch]="pet">\n  \n    <ion-list *ngSwitchCase="\'current\'" class="bg">\n       <ion-card>\n        <ion-card-content class="cnt">\n          <ion-card-title>\n           #Id\n            </ion-card-title>\n          <h3>Title(Location)</h3>\n          <div class="date">\n            <h4>Start Date: <span>26 oct,2014</span></h4>\n            <h4>End Date: <span>30 oct,2014</span></h4>\n          </div>\n          <h4>Cost: <span style="color:#e5053a;">2,00,000</span></h4>\n          <p>\n            The most popular industrial group ever, and largely\n            responsible for bringing the music to a mass audience.\n          </p>\n          <a (click)="jobdetailPage();" float-right style="color:#e5053a;cursor: pointer;">Read More</a>\n        </ion-card-content>\n      </ion-card>\n  \n    </ion-list><!--current-->\n  \n  \n    <ion-list *ngSwitchCase="\'completed\'" class="bg">\n      <ion-card>\n        <ion-card-content class="cnt">\n         <ion-card-title>\n           #Id\n            </ion-card-title>\n          <h3>Title(Location)</h3>\n  \n            <ul class="stars">\n              <li><ion-icon name="star" class="active"></ion-icon></li>\n              <li><ion-icon name="star"></ion-icon></li>\n              <li><ion-icon name="star"></ion-icon></li>\n              <li><ion-icon name="star"></ion-icon></li>\n              <li><ion-icon name="star"></ion-icon></li>\n            </ul>\n  \n  \n          <h4>Cost: <span style="color:#e5053a;">1,00,000</span></h4>\n          <p>\n            The most popular industrial group ever, and largely\n            responsible for bringing the music to a mass audience.\n          </p>\n          <a (click)="jobdetailPage();" float-right style="color:#e5053a;cursor: pointer;">Read More</a>\n        </ion-card-content>\n      </ion-card>\n    </ion-list><!--Completed-->\n  \n    <ion-list *ngSwitchCase="\'shortlisted\'" class="bg">\n      \n       <ion-card>\n        <ion-card-content class="cnt">\n          <ion-card-title>\n           #Id\n            </ion-card-title>\n          <h3>Title(Location)</h3>\n          <h4>Cost: <span style="color:#e5053a;">1,00,000</span></h4>\n          <h4>Date: <span>24 oct,2014</span></h4>\n          <p>\n            The most popular industrial group ever, and largely\n            responsible for bringing the music to a mass audience.\n          </p>\n          <a (click)="jobdetailPage();" float-right style="color:#e5053a;cursor: pointer;">Read More</a>\n        </ion-card-content>\n      </ion-card>\n  \n    </ion-list><!--Shortlisted-->\n  \n    <!--all-->\n    <ion-list *ngSwitchCase="\'all\'" class="bg">\n    <ion-card>\n        <ion-card-content class="cnt all">\n          <ion-card-title>\n           #Id\n          </ion-card-title>\n          <span class="status">Current</span>\n          <h3>Title(Location)</h3>\n          <div class="date">\n            <h4>Start Date: <span>26 oct,2014</span></h4>\n            <h4>End Date: <span>30 oct,2014</span></h4>\n          </div>\n          <h4>Cost: <span style="color:#e5053a;">2,00,000</span></h4>\n          <p>\n            The most popular industrial group ever, and largely\n            responsible for bringing the music to a mass audience.\n          </p>\n          <a (click)="jobdetailPage();" float-right style="color:#e5053a;cursor: pointer;">Read More</a>\n        </ion-card-content>\n    </ion-card>\n  \n      <ion-card>\n        <ion-card-content class="cnt all">\n         <ion-card-title>\n           #Id\n            </ion-card-title>\n          <span class="status">Completed</span>\n          <h3>Title(Location)</h3>\n            <ul class="stars">\n              <li><ion-icon name="star" class="active"></ion-icon></li>\n              <li><ion-icon name="star"></ion-icon></li>\n              <li><ion-icon name="star"></ion-icon></li>\n              <li><ion-icon name="star"></ion-icon></li>\n              <li><ion-icon name="star"></ion-icon></li>\n            </ul>\n          <h4>Cost: <span style="color:#e5053a;">1,00,000</span></h4>\n          <p>\n            The most popular industrial group ever, and largely\n            responsible for bringing the music to a mass audience.\n          </p>\n          <a (click)="jobdetailPage();" float-right style="color:#e5053a;cursor: pointer;">Read More</a>\n        </ion-card-content>\n      </ion-card>\n  \n    <ion-card>\n        <ion-card-content class="cnt all">\n          <ion-card-title>\n           #Id\n            </ion-card-title>\n          <span class="status">In Progress</span>\n          <h3>Title(Location)</h3>\n          <h4>Cost: <span style="color:#e5053a;">1,00,000</span></h4>\n          <h4>Date: <span>24 oct,2014</span></h4>\n          <p>\n            The most popular industrial group ever, and largely\n            responsible for bringing the music to a mass audience.\n          </p>\n          <a (click)="jobdetailPage();" float-right style="color:#e5053a;cursor: pointer;">Read More</a>\n        </ion-card-content>\n      </ion-card>\n  \n    </ion-list><!--all_end-->\n  \n  \n  </div>\n  \n       </ion-content>\n  '/*ion-inline-end:"E:\Project\Dost user app new\src\pages\tab3\tab3.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], Tab3Page);

//# sourceMappingURL=tab3.js.map

/***/ })

});
//# sourceMappingURL=2.js.map