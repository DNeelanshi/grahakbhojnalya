webpackJsonp([26],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddwalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the AddwalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddwalletPage = (function () {
    function AddwalletPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddwalletPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddwalletPage');
    };
    return AddwalletPage;
}());
AddwalletPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-addwallet',template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\addwallet\addwallet.html"*/'<!--\n  Generated template for the AddwalletPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n     <ion-title>\n     Add Money\n      <p>Card Details</p>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="content-sec">\n		<div class="sign">\n			<form class="form-sec">\n				<ion-list>\n			      <ion-grid>\n			      	<ion-row>\n			      		<ion-col col-12 class="left right">\n						  <ion-item>\n						    <ion-label stacked>Add Money</ion-label>\n						    <ion-input type="text"></ion-input>\n						  </ion-item>\n						</ion-col>\n						<ion-col col-12 class="right left">\n							<h2 style="font-size: 15px; color: #f27242; font-weight: 500;">Credit card details</h2>\n						  <ion-item>\n\n						    <ion-label stacked>Card Number</ion-label>\n				   		    <ion-input type="text"></ion-input>\n				   		    <div class="image" item-end>\n				   		    	<img src="assets/img/visa.png">\n				   		    </div>\n						  </ion-item>\n						</ion-col>\n						<ion-col col-12 class="left right">\n						  <ion-item>\n						    <ion-label stacked>cardholder</ion-label>\n						    <ion-input type="text"></ion-input>\n						  </ion-item>\n						</ion-col>\n						<ion-col col-6 class="left">\n						  <ion-item>\n						    <ion-label stacked>Expiery Date</ion-label>\n						    <ion-input type="date" class="date"></ion-input>\n						  </ion-item>\n						</ion-col>\n						<ion-col col-6 class="right">\n						  <ion-item>\n						    <ion-label stacked>CVV</ion-label>\n						    <ion-input type="text"></ion-input>\n						  </ion-item>\n						</ion-col>\n					</ion-row>\n				  </ion-grid>\n				</ion-list>\n			</form>\n		</div>\n		<div class="top-sec">\n		   <ion-item style="padding: 0px">\n			  <ion-label style="color: #565656; font-size: 13px; font-weight: 500;">Add card to wallet</ion-label>\n			  <ion-checkbox color="theme-header"></ion-checkbox>\n			</ion-item>\n			<button ion-button full>Continue</button>\n		</div>\n		<div class="bottom-sec">\n			<h3 style="font-size: 15px; color: #f27242; font-weight: 500;">Select your payment method</h3>\n			    <ion-list>\n			        <ion-item>\n			            Credit Card\n			          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n			        </ion-item>\n			         <ion-item>\n			            Debit Card\n			          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n			        </ion-item>\n			    </ion-list>\n		</div>\n\n	</div>\n</ion-content>\n'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\addwallet\addwallet.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], AddwalletPage);

//# sourceMappingURL=addwallet.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapmodal_mapmodal__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nominatimap_nominatimap__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
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
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocationPage = (function () {
    function LocationPage(navCtrl, navParams, geolocation, toastCtrl, nativeGeocoder, modalCtrl, appsetting, http, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.toastCtrl = toastCtrl;
        this.nativeGeocoder = nativeGeocoder;
        this.modalCtrl = modalCtrl;
        this.appsetting = appsetting;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.data = {};
        this.number = false;
        //        this.GetLocation();
        this.Gett();
    }
    LocationPage.prototype.openmapmodal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__mapmodal_mapmodal__["a" /* MapmodalPage */]);
        //    Loading.dismiss();
        modal.onDidDismiss(function (res) {
            //      alert(res.address);
            _this.data.otheraddress = res.address;
            console.log(_this.data.otheraddress);
            console.log(res.lati);
            console.log(res.longi);
            _this.lat = res.lati;
            _this.long = res.longi;
            _this.addrestype = 'other';
            _this.data.aaddress = '';
        });
        modal.present();
    };
    LocationPage.prototype.Gett = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["RequestOptions"]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
        console.log(userid);
        var postdata = {
            id: userid
        };
        var serialized = this.serializeObj(postdata);
        console.log(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            cssClass: 'loader',
            content: 'Connecting...'
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                console.log(data.data.latitude + ',' + data.data.longitude);
                _this.geo(parseFloat(data.data.latitude), parseFloat(data.data.longitude));
                //      this.profile = data.data;
                //      this.srcImage = this.profile.user_image;
                ////      this.city = this.data.city;
                //      console.log(this.profile.firstname);
            });
        });
    };
    LocationPage.prototype.geo = function (lat, long) {
        var _this = this;
        this.lat = lat;
        this.long = long;
        this.addrestype = 'saved';
        //      alert(this.lat+','+this.long+'SAVED');
        console.log(this.lat, this.long);
        //      alert('working');
        this.nativeGeocoder.reverseGeocode(lat, long)
            .then(function (result) {
            // alert(JSON.stringify(result));
            if (result.subThoroughfare) {
                _this.data.aaddress = result.subThoroughfare + ',' + result.thoroughfare + ',' + result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
            }
            else if (result.thoroughfare) {
                _this.data.aaddress = result.thoroughfare + ',' + result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
            }
            else {
                _this.data.aaddress = result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
            }
            console.log(_this.data.aaddress);
            //        alert(this.city);
            //  alert(this.data.result +'Neelanshi');
        }).catch(function (error) { return console.log(error); });
    };
    LocationPage.prototype.isReadonly = function () {
        return this.isReadonly; //return true/false 
    };
    LocationPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    LocationPage.prototype.submitinfo = function (preference) {
        var _this = this;
        console.log(preference.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["RequestOptions"]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
        console.log(userid);
        console.log(preference.value.datetime);
        console.log(preference.value.altdate);
        console.log(this.addrestype);
        //    this.str=preference.value.datetime.slice(0,10);
        //    this.str1=preference.value.datetime.slice(11,16);
        //    if(preference.value.altdate){
        //    this.str2=preference.value.altdate.slice(0,10);
        //    this.str3=preference.value.altdate.slice(11,16);}else{
        //    console.log(this.str+','+this.str1+','+this.str2+','+this.str3);
        if (preference.value.altdate == undefined) {
        }
        if ((this.lat) && (this.long)) {
            this.data = {
                app_user_id: userid,
                todays_datetime: preference.value.datetime,
                //     todays_time:this.str1,
                alternative_datetime: preference.value.altdate,
                //     alternative_time:this.str3,
                lat: this.lat,
                long: this.long,
                address_type: this.addrestype,
            };
            console.log(this.data);
            //      alert(this.data.lat+','+this.data.long);
            var serialized = this.serializeObj(this.data);
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                cssClass: 'loader'
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.myGlobalVar + 'addprefrence', serialized, options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    console.log(data);
                    if (data.status == true) {
                        Loading.dismiss();
                        var toast = _this.toastCtrl.create({
                            message: "Preference is saved",
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                        localStorage.setItem('Userpref', JSON.stringify(_this.data));
                    }
                });
            });
        }
        else {
            this.AlertMsg1('Need to select a location');
        }
    };
    LocationPage.prototype.backtosignin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SigninPage */]);
    };
    LocationPage.prototype.GetLocation = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            cssClass: 'loader'
        });
        Loading.present().then(function () {
            _this.geolocation.getCurrentPosition().then(function (resp) {
                console.log('latitude:' + resp.coords.latitude + 'longitude:' + resp.coords.longitude);
                _this.lat = resp.coords.latitude;
                _this.long = resp.coords.longitude;
                _this.addrestype = 'current';
                Loading.dismiss();
                _this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
                    .then(function (result) {
                    // alert(JSON.stringify(result));
                    if (result.subThoroughfare) {
                        _this.current = result.subThoroughfare + ',' + result.thoroughfare + ',' + result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                    }
                    else if (result.thoroughfare) {
                        _this.current = result.thoroughfare + ',' + result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                    }
                    else {
                        _this.current = result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                    }
                    _this.AlertMsg('Your Location is:' + _this.current);
                    //  alert(this.data.result +'Neelanshi');
                }).catch(function (error) { return console.log(error); });
            }).catch(function (error) {
                console.log('Error getting location', error);
                _this.ToastMsg1('Please enable your location');
            });
        });
    };
    LocationPage.prototype.lupap = function () {
        var _this = this;
        //      localStorage.removeItem('NominatimDetail');
        this.addr = this.data.otheraddress;
        console.log(this.addr);
        if (this.addr == '') {
            this.AlertMsg3('Please fill the address');
            //          this.openmapmodal();
        }
        if (this.addr == undefined) {
            this.AlertMsg3('Please fill the address');
            //          this.openmapmodal();
        }
        else {
            var matches = this.addr.match(/\d+/g);
            if (matches != null) {
                //    console.log('number');
                this.number = true;
            }
            else {
                this.number = false;
            }
            if (this.number == true) {
                console.log('yes it is having number');
                //   this.openmapmodal();
                this.AlertMsg2('Empty response on Nominatim<br>Search via Google maps<br>');
            }
            else {
                console.log('false');
                var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["Headers"]();
                headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                var options_1 = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["RequestOptions"]({ headers: headers });
                if (this.addr) {
                    this.addr = this.addr.replace(/" "/g, '%20');
                    console.log(this.addr);
                    var adr = this.addr;
                    console.log(adr);
                    var Loading = this.loadingCtrl.create({
                        spinner: 'bubbles',
                        cssClass: 'loader'
                    });
                    Loading.present().then(function () {
                        _this.http.post('http://nominatim.openstreetmap.org/search/' + adr + '?format=json&addressdetails=1&limit=1&polygon_svg=1', options_1).map(function (res) { return res.json(); }).subscribe(function (response) {
                            Loading.dismiss();
                            console.log(response[0]);
                            if (response[0] != undefined) {
                                if (response[0].place_id != '') {
                                    console.log('working');
                                    localStorage.setItem('NominatimDetail', JSON.stringify(response[0]));
                                    //        this.navCtrl.push(NominatimapPage);
                                    var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__nominatimap_nominatimap__["a" /* NominatimapPage */]);
                                    modal.onDidDismiss(function (data) {
                                        _this.data.aaddress = '';
                                    });
                                    modal.present();
                                    if (response[0].address.road) {
                                        _this.data.otheraddress = response[0].place_id + ',' + response[0].address.road + ',' + response[0].address.city + ',' + response[0].address.postcode + ',' + response[0].address.state + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                    }
                                    else if (response[0].address.city) {
                                        _this.data.otheraddress = response[0].place_id + ',' + response[0].address.city + ',' + response[0].address.postcode + ',' + response[0].address.state + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                    }
                                    else if (response[0].address.state) {
                                        _this.data.otheraddress = response[0].place_id + ',' + response[0].address.state + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                    }
                                    else if (response[0].address.state_district) {
                                        _this.data.otheraddress = response[0].place_id + ',' + response[0].address.state + ',' + response[0].address.state_district + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                    }
                                    else if (response[0].address.country) {
                                        _this.data.otheraddress = response[0].place_id + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                    }
                                    _this.lat = response[0].lat;
                                    _this.long = response[0].lon;
                                    console.log(_this.lat, _this.long);
                                    _this.addrestype = 'other';
                                }
                            }
                            else {
                                console.log('neelanshi');
                                _this.AlertMsg2('Empty response on Nominatim<br>Search via Google maps<br>');
                            }
                            //    else
                            //        {
                            //       this.AlertMsg1('Empty response on Nominatim<br>Search via Google maps<br>');
                            //        this.openmapmodal();
                            //    }
                        });
                    });
                }
            }
        }
    };
    LocationPage.prototype.AlertMsg3 = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                        //            this.openmapmodal();
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    };
    LocationPage.prototype.AlertMsg1 = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    };
    LocationPage.prototype.AlertMsg2 = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                        _this.openmapmodal();
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    };
    LocationPage.prototype.ngOnInit = function () {
        this.date = __WEBPACK_IMPORTED_MODULE_10_moment__(new Date()).format('YYYY-MM-DD');
        console.log(this.date);
        //    this.GetLocation();
    };
    LocationPage.prototype.ToastMsg1 = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    LocationPage.prototype.AlertMsg = function (msg) {
        var _this = this;
        var alertf = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'CANCEL',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        // this.navCtrl.push(RegisterPage)
                    }
                },
                {
                    text: 'Ok',
                    role: 'submit',
                    handler: function () {
                        console.log('Continue clicked');
                        _this.data.aaddress = '';
                        _this.data.otheraddress = '';
                        _this.lat = _this.l;
                        _this.long = _this.lg;
                        console.log(_this.lat, _this.long);
                        //          alert(this.lat+','+this.long+'Current');
                        _this.addrestype = 'current';
                        //            this.navCtrl.push(LocationPage);
                    }
                }
            ]
        });
        alertf.present();
    };
    LocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocationPage');
    };
    LocationPage.prototype.Tabpage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    return LocationPage;
}());
LocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-location',template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\location\location.html"*/'<!--\n  Generated template for the LocationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="theme-header">\n     <button style="height:28px; color: #fff; padding: 0 0 0 3px; font-size: 2.7rem; z-index: 9999" start ion-button clear (click)="backtosignin()"><ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon></button>\n          <ion-title>Select Location</ion-title>\n  </ion-toolbar>\n  \n</ion-header>\n\n\n<ion-content>\n	<div class="head">\n            <div class="form-sec">\n  		<form #preference="ngForm" novalidate >\n  	<ion-list style="margin: 0 !important;">\n           \n          \n  		<ion-item>\n                   \n<!--                \n-->                         <ion-datetime placeholder="MMM/DD/YYYY HH:MM" displayFormat="MMM/DD/YYYY HH:mm" pickerFormat="MMM DD YYYY HH mm" min="{{date}}" max="3000" [(ngModel)]= "data.datetime" name="datetime" #datetime="ngModel" required></ion-datetime>\n                        \n                </ion-item>\n\n           \n          \n  		<ion-item style="padding: 0;">\n  			<p>OR</p>\n                         \n  		</ion-item>\n            <ion-item style="padding:0;">\n                <p style="text-align: left;">Alternative date and time</p>\n            </ion-item>\n            \n   \n  		<ion-item>\n  			<!--<p style="text-align: left;">Alternative date and time</p>-->\n  			<ion-datetime placeholder="MMM/DD/YYYY       HH:MM" displayFormat="MMM/DD/YYYY HH:mm" pickerFormat="MMM DD YYYY HH mm"   min="{{date}}" max="3000" [(ngModel)]= "data.altdate" name="altdate" #altdate="ngModel"  ></ion-datetime>\n                </ion-item>\n           \n            <!--"-->\n  		<ion-item>\n  			<button ion-button icon-left class="currentbtn"  (click)="GetLocation()"  >\n			  <ion-icon name="paper-plane"  ></ion-icon>\n			  Use my current location\n			</button>\n<!--[(ngModel)]="data.current" name="current" #current="ngModel"-->\n  		</ion-item>\n  		<ion-item style="padding: 0;">\n  			<p>OR</p>\n  		</ion-item>\n  		<ion-item>\n  			<ion-input type="text" placeholder="Saved Address" [readonly]="isReadonly()" [(ngModel)]="data.aaddress" name="aaddress" #aaddress="ngModel" ></ion-input>\n  		</ion-item>\n  		<ion-item style="padding: 0;">\n  			<p>OR</p>\n  		</ion-item>\n            <div style="position: relative; overflow: hidden;">\n    <ion-icon ios="ios-search-outline" md="md-search" (click)="lupap()" style="position: absolute;\n      top: 15px;left:8px;color: #000;z-index: 999;font-size:17px;font-weight: 700;"></ion-icon>\n  		<ion-item>\n  			<ion-input placeholder="Other Address" type="text"  [(ngModel)]= "data.otheraddress" name="otheraddress" #otheraddress="ngModel" style="padding-left:20px;"></ion-input>\n                </ion-item>\n            </div>\n  	</ion-list>\n \n\n    <div>\n          <button ion-button  [disabled]="!preference.valid" (click)="submitinfo(preference)"\n          style="width: 100%;background-color: #322723;height: 30px;margin-top: 10px;">Submit</button>\n    </div>\n                    </form>\n        </div></div>\n<!--	 <div class="content-sec">\n		<h3>Popular City</h3>\n		<ion-list style="margin: 0 !important;">\n			<ion-item>\n				<p>New York City</p>\n			</ion-item>\n			<ion-item>\n				<p>Chicago,Illinois</p>\n			</ion-item>\n			<ion-item>\n				<p>Charleston,South Carolina</p>\n			</ion-item>\n			<ion-item>\n				<p>Las Vegas,Nevada</p>\n			</ion-item>\n			<ion-item>\n				<p>Seattle,Washington</p>\n			</ion-item>\n			<ion-item>\n				<p>San,Francisco,California</p>\n			</ion-item>\n		</ion-list>-->\n	<!--</div>--> \n</ion-content>\n'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\location\location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_7__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], LocationPage);

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__productview_productview__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(7);
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
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoritesPage = (function () {
    function FavoritesPage(navCtrl, navParams, appsetting, http, alertCtrl, toastCtrl, loadingCtrl, events) {
        //     var Loading = this.loadingCtrl.create({
        //    spinner: 'hide',
        //    cssClass: 'loader',
        //    content: "<img src='assets/img/icons3.gif'>",
        //    dismissOnPageChange:true
        //  });
        //
        //  Loading.present().then(() => {
        //    this.getfavourites();
        //    Loading.dismiss();
        //    })
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.favourites = [];
        this.iconname = 'heart';
        this.nodata = 0;
        events.subscribe('index', function (res) {
            console.log(res);
            if (res == 1) {
                _this.getfavourites();
            }
        });
    }
    FavoritesPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            _this.getfavourites();
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    FavoritesPage.prototype.productview = function (data) {
        var _this = this;
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        var postdata = {
            path: data.favorite_product_id
        };
        var Serialized = this.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'users/sigleProductdata', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                console.log(response.data[0].products);
                for (var p = 0; p < response.data[0].products.length; p++) {
                    if (response.data[0].products[p]._id == data.favorite_product_id) {
                        var products = response.data[0].products[p];
                        localStorage.setItem('producttss', JSON.stringify(products));
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__productview_productview__["a" /* ProductviewPage */]);
                    }
                }
                Loading.dismiss();
            });
        });
    };
    FavoritesPage.prototype.getfavourites = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem('UserDetail'));
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        console.log(this.user._id);
        var postdata = {
            user_id: this.user._id
        };
        var Serialized = this.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'user/get_favarite_products', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                _this.iconname = 'heart';
                console.log(response.data[0].favorite);
                if (response.data[0].favorite == '') {
                    _this.nodata = 1;
                    console.log('hogya kam');
                }
                else {
                    _this.nodata = 0;
                }
                _this.favourites = response.data[0].favorite;
                console.log(_this.favourites);
                Loading.dismiss();
            });
        });
    };
    FavoritesPage.prototype.favproduct = function (proid) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        if (this.iconname == 'heart') {
            var alert1 = this.alertCtrl.create({
                title: 'RAFAHO',
                message: 'Remove from Favourite',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                        }
                    },
                    {
                        text: 'OK',
                        role: 'submit',
                        handler: function () {
                            var postdata = {
                                user_id: _this.user._id,
                                favorite_product_id: proid
                            };
                            console.log(postdata);
                            var Serialized = _this.serializeObj(postdata);
                            var Loading = _this.loadingCtrl.create({
                                spinner: 'bubbles',
                                cssClass: 'loader',
                                content: "Loading",
                                dismissOnPageChange: true
                            });
                            Loading.present().then(function () {
                                _this.http.post(_this.appsetting.myGlobalVar + 'user/delete_favarite_products', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (responsee) {
                                    _this.iconname = 'heart-outline';
                                    console.log(responsee);
                                    _this.getfavourites();
                                    Loading.dismiss();
                                }, function (err) {
                                    Loading.dismissAll();
                                    _this.ToastMsg('Something went wrong');
                                });
                            });
                        }
                    }
                ]
            });
            alert1.present();
        }
    };
    FavoritesPage.prototype.ToastMsg = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    FavoritesPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    FavoritesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritesPage');
    };
    FavoritesPage.prototype.product = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__productview_productview__["a" /* ProductviewPage */]);
    };
    return FavoritesPage;
}());
FavoritesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-favorites',template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\favorites\favorites.html"*/'<!--\n  Generated template for the FavoritesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Favorites</ion-title>\n  </ion-navbar>\n<!--   <div class="segment-sec">\n     <ion-toolbar>\n	  <ion-segment color="theme-header" [(ngModel)]="pet">\n	    <ion-segment-button value="kittens">\n	      Favorites\n	    </ion-segment-button>\n	    <ion-segment-button value="puppies">\n	      Suggestions\n	    </ion-segment-button>\n	  </ion-segment>\n	  </ion-toolbar>\n	</div>-->\n\n</ion-header>\n\n\n<ion-content>\n      <ion-refresher (ionRefresh)="doRefresh($event)">\n          <ion-refresher-content\n              pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n              \n          </ion-refresher-content>\n  </ion-refresher>\n	<div class="content-sec">\n		<!--<div [ngSwitch]="pet">-->\n		  <ion-grid >\n		  	<ion-row >\n		  		<ion-col col-6 *ngFor=\'let dat of favourites\'>\n		  			<div class="main-sec" *ngIf="nodata == 0">\n			  			<div class="main" (click)="productview(dat)">\n			  				<img [src]="dat?.favorite_product_image_url">\n			  			</div>\n			  			<div class="heart">\n			  				<button  class="hrtbtn" ion-button icon-only (click)="favproduct(dat.favorite_product_id)">\n                                  <ion-icon name="{{iconname}}" ></ion-icon>\n                                       </button>\n			  			</div>\n			  		</div>\n                                         \n		  		</ion-col>\n		  		<p *ngIf="nodata == 1">No favourites</p>\n		  		\n		  	</ion-row>\n		  </ion-grid>\n<!--		  <ion-grid *ngSwitchCase="\'puppies\'">\n		  	<ion-row>\n		  		<ion-col col-6>\n		  			<div class="main-sec" (click)="product()">\n			  			<div class="main">\n			  				<img src="assets/img/frvtone.png">\n			  			</div>\n			  			<div class="heart">\n			  				<img src="assets/img/redhrt.png">\n			  			</div>\n			  		</div>\n		  		</ion-col>\n		  		<ion-col col-6>\n		  			<div class="main-sec">\n			  			<div class="main">\n			  				<img src="assets/img/frvttwo.png">\n			  			</div>\n			  			<div class="heart">\n			  				<img src="assets/img/redhrt.png">\n			  			</div>\n			  		</div>\n		  		</ion-col>\n		  		<ion-col col-6>\n		  			<div class="main-sec">\n			  			<div class="main">\n			  				<img src="assets/img/frvtthree.png">\n			  			</div>\n			  			<div class="heart">\n			  				<img src="assets/img/redhrt.png">\n			  			</div>\n			  		</div>\n		  		</ion-col>\n		  		<ion-col col-6>\n		  			<div class="main-sec">\n			  			<div class="main">\n			  				<img src="assets/img/frvtfour.png">\n			  			</div>\n			  			<div class="heart">\n			  				<img src="assets/img/redhrt.png">\n			  			</div>\n			  		</div>\n		  		</ion-col>\n		  		<ion-col col-6>\n		  			<div class="main-sec" (click)="product()">\n			  			<div class="main">\n			  				<img src="assets/img/frvtone.png">\n			  			</div>\n			  			<div class="heart">\n			  				<img src="assets/img/redhrt.png">\n			  			</div>\n			  		</div>\n		  		</ion-col>\n		  		<ion-col col-6>\n		  			<div class="main-sec">\n			  			<div class="main">\n			  				<img src="assets/img/frvttwo.png">\n			  			</div>\n			  			<div class="heart">\n			  				<img src="assets/img/redhrt.png">\n			  			</div>\n			  		</div>\n		  		</ion-col>\n\n		  		\n		  	</ion-row>\n		  </ion-grid>-->\n		\n		<!--</div>-->\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\favorites\favorites.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */]])
], FavoritesPage);

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RafahoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderdetial_orderdetial__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectdish_selectdish__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__ = __webpack_require__(8);
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
 * Generated class for the RafahoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RafahoPage = (function () {
    function RafahoPage(navCtrl, navParams, alertCtrl, loadCtrl, appsetting, toastCtrl, events, http, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadCtrl = loadCtrl;
        this.appsetting = appsetting;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.show = 0;
        this.show1 = 0;
        this.show2 = 0;
        this.show3 = 0;
        this.activeorders();
        this.pendingorders();
        this.historycompleted();
        this.historycanceled();
        this.pet = "kittens";
        events.subscribe('index', function (res) {
            console.log(res);
            if (res == 2) {
                _this.activeorders();
                _this.pendingorders();
                _this.historycompleted();
                _this.historycanceled();
            }
        });
    }
    RafahoPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            _this.activeorders();
            _this.pendingorders();
            _this.historycompleted();
            _this.historycanceled();
            console.log('Async operation has ended');
            refresher.complete();
        }, 4000);
    };
    /******************************************************************ACTIVE ORDERS*****************************************************************/
    RafahoPage.prototype.activeorders = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        this.user = JSON.parse(localStorage.getItem('UserDetail'));
        console.log(this.user);
        var postdata = {
            order_status: 2,
            app_user_id: this.user._id
        };
        var serialized = this.serializeObj(postdata);
        var Loading = this.loadCtrl.create({
            spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'order/getorders', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data1) {
                console.log(data1);
                Loading.dismiss();
                if (data1.status == true) {
                    _this.show = 0;
                    _this.activeorder = data1.data;
                    _this.getchefinfo();
                }
                else {
                    _this.show = 1;
                }
            });
        });
    };
    RafahoPage.prototype.getchefinfo = function () {
        var temp = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        this.activeorder.forEach(function (value, key) {
            var chef = value.chef_id;
            console.log(chef);
            var postdata1 = {
                id: chef
            };
            var serialized = temp.serializeObj(postdata1);
            temp.http.post(temp.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (res) {
                console.log(res);
                console.log(value);
                value.chefname = res.data.firstname;
                value.userimage = res.data.user_image;
                value.products.forEach(function (prodvalue, prodkey) {
                    res.data.products.forEach(function (prod1value, prod1key) {
                        if (prodvalue.product_id == prod1value._id) {
                            prodvalue.image = prod1value.product_image0;
                            prodvalue.minorder = prod1value.minimum_order;
                            prodvalue.productprice = prod1value.product_price;
                        }
                    });
                });
            });
        });
        console.log(this.activeorder);
    };
    /******************************************************************PENDING ORDERS*************************************************************/
    RafahoPage.prototype.pendingorders = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        this.user = JSON.parse(localStorage.getItem('UserDetail'));
        console.log(this.user);
        var postdata = {
            order_status: 1,
            app_user_id: this.user._id
        };
        var serialized = this.serializeObj(postdata);
        var Loading = this.loadCtrl.create({
            spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'order/getorders', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data2) {
                console.log(data2);
                Loading.dismiss();
                if (data2.status == true) {
                    _this.show1 = 0;
                    _this.pendingorder = data2.data;
                    _this.pendingorder.forEach(function (value, key) {
                        value.user_data.forEach(function (value1, key1) {
                            value.products.forEach(function (value2, key2) {
                                value1.products.forEach(function (value3, key3) {
                                    if (value2.product_id == value3._id) {
                                        value2.image = value3.product_image0;
                                        value2.minimumorder = value3.minimum_order;
                                        value2.productprice = value3.product_price;
                                    }
                                });
                            });
                        });
                    });
                }
                else {
                    _this.show1 = 1;
                }
                console.log(_this.pendingorder);
            });
        });
    };
    /******************************************************************COMPLETED HISTORY ORDERS*************************************************************/
    RafahoPage.prototype.historycompleted = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        this.user = JSON.parse(localStorage.getItem('UserDetail'));
        console.log(this.user);
        var postdata = {
            order_status: 0,
            app_user_id: this.user._id
        };
        var serialized = this.serializeObj(postdata);
        var Loading = this.loadCtrl.create({
            spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'order/getorders', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data3) {
                console.log(data3);
                Loading.dismiss();
                if (data3.status == true) {
                    _this.show2 = 0;
                    _this.completedorders = data3.data;
                    _this.completedorders.forEach(function (value, key) {
                        value.user_data.forEach(function (value1, key1) {
                            value.products.forEach(function (value2, key2) {
                                value1.products.forEach(function (value3, key3) {
                                    if (value2.product_id == value3._id) {
                                        if (value2.product_id == value3._id) {
                                            value2.image = value3.product_image0;
                                            value2.minimumorder = value3.minimum_order;
                                            value2.productprice = value3.product_price;
                                        }
                                    }
                                });
                            });
                        });
                    });
                }
                else {
                    _this.show2 = 1;
                }
                console.log(_this.completedorders);
            });
        });
    };
    /******************************************************************COMPLETED HISTORY ORDERS*************************************************************/
    RafahoPage.prototype.historycanceled = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        this.user = JSON.parse(localStorage.getItem('UserDetail'));
        console.log(this.user);
        var postdata = {
            order_status: 5,
            app_user_id: this.user._id
        };
        var serialized = this.serializeObj(postdata);
        var Loading = this.loadCtrl.create({
            spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'order/getorders', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data4) {
                console.log(data4);
                Loading.dismiss();
                if (data4.status == true) {
                    _this.show3 = 0;
                    _this.canceledorders = data4.data;
                    _this.canceledorders.forEach(function (value, key) {
                        value.user_data.forEach(function (value1, key1) {
                            value.products.forEach(function (value2, key2) {
                                value1.products.forEach(function (value3, key3) {
                                    if (value2.product_id == value3._id) {
                                        value2.image = value3.product_image0;
                                        value2.minimumorder = value3.minimum_order;
                                        value2.productprice = value3.product_price;
                                    }
                                });
                            });
                        });
                    });
                }
                else {
                    _this.show3 = 1;
                }
                console.log(_this.canceledorders);
            });
        });
    };
    RafahoPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    RafahoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RafahoPage');
    };
    RafahoPage.prototype.selectModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__selectdish_selectdish__["a" /* SelectdishPage */]);
        modal.present();
    };
    RafahoPage.prototype.order = function (orderdetails) {
        localStorage.setItem('Ordersdetails', JSON.stringify(orderdetails));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__orderdetial_orderdetial__["a" /* OrderdetialPage */]);
    };
    return RafahoPage;
}());
RafahoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-rafaho',template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\rafaho\rafaho.html"*/'<!--\n  Generated template for the RafahoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar  color="theme-header" >\n    <ion-title>Order Detail</ion-title>\n  </ion-navbar>\n <div class="segment-sec">\n  <ion-toolbar>\n  <ion-segment color="theme-header" [(ngModel)]="pet">\n    <ion-segment-button value="kittens" class="segment-button segment-activated" style="border-right: none;">\n     Active Order\n    </ion-segment-button>\n    <ion-segment-button value="puppies" style="border-left: none; border-right: none;">\n      Pending Order\n    </ion-segment-button>\n    <ion-segment-button value="History" style="border-left: none;">\n      Order History\n    </ion-segment-button>\n  </ion-segment>\n  </ion-toolbar>\n</div>\n\n</ion-header>\n\n\n<ion-content>\n      <ion-refresher (ionRefresh)="doRefresh($event)">\n          <ion-refresher-content\n              pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n              \n          </ion-refresher-content>\n  </ion-refresher>\n<div class="content-sec">\n	<div [ngSwitch]="pet">\n	<!-- pending order include hear -->\n	  <ion-list *ngSwitchCase="\'puppies\'">\n <div *ngIf="show1 != 1" >\n	   <ion-item *ngFor="let dats of pendingorder" (click)="order(dats)">\n	      <ion-thumbnail item-start>\n	        <img [src]="dats?.products[0].image">\n	      </ion-thumbnail>\n	      <div class="main">\n	      	<div class="image" *ngIf="dats?.user_data">\n                    <img *ngIf="dats?.user_data[0].user_image" [src]="dats?.user_data[0].user_image">\n	      		<img *ngIf="!dats?.user_data[0].user_image" src="assets/img/us.png">\n	      	</div>\n	      	<h1>{{dats?.user_data[0].firstname}}</h1>\n	      	<div class="right-sec">\n	      		<button ion-button class="rating">3/5</button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/phon.png\'); background-size:cover"></button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/chat.png\'); background-size:cover; width: 18px;"></button>\n	      	</div>\n	      </div>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png" >{{dats?.products[0].product_name}}</h2>\n<!--	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <h3>Number of plate 5 x $40<span style="float: right;">$200.00</span></h3>-->\n	    </ion-item></div>\n              <p *ngIf="show1 == 1">No Order placed</p>\n	\n	  </ion-list>\n	  <!-- pending end hear -->\n	  <!-- active order start -->\n          \n          \n	    <ion-list *ngSwitchCase="\'kittens\'">\n              <div *ngIf="show != 1" >\n	    <ion-item  *ngFor="let dat of activeorder" (click)="order(dat)">\n                  \n	      <ion-thumbnail item-start>\n	        <img [src]="dat?.products[0].image">\n	      </ion-thumbnail>\n	      <div class="main">\n	      	<div class="image">\n	      		<img *ngIf="dat?.userimage" [src]="dat?.userimage">\n                        <img *ngIf="!dat?.userimage" src="assets/img/us.png">\n	      	</div>\n	      	<h1>{{dat?.chefname}}</h1>\n	      	<div class="right-sec">\n	      		<button ion-button class="rating">3/5</button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/phon.png\'); background-size:cover"></button>\n	      		<button ion-button clear class="imgbtn" style="background-image:url(\'assets/img/chat.png\'); background-size:cover; width: 18px;"></button>\n	      	</div>\n	      </div>\n	      <h2 > <img class="imgicon" width="11px" src="assets/img/acicon.png">{{dat?.products[0].product_name}}</h2>\n	      <!--<p>{{dat?.products[0].product_name}}</p>-->\n<!--	      <h3>Per plate $</h3>\n	      <h3>Number of plate 5 x $40<span style="float: right;">$200.00</span></h3>-->\n	    \n            </ion-item>\n</div>\n	    <p *ngIf="show == 1">No Active Orders </p>\n\n	  </ion-list>\n          \n          <!-- active order end here -->\n          \n          \n          \n          \n	  <ion-list *ngSwitchCase="\'History\'">\n	\n	   <ion-item *ngFor="let daatt of completedorders" (click)="order(daatt)">\n	      <ion-thumbnail item-start style="width: 65px !important; height: 55px !important;">\n	        <img [src]="daatt?.products[0].image" style="opacity: 0.5;">\n	        <p style="background-color: #2bb600;">Compeleted</p>\n	      </ion-thumbnail>\n	      <div class="main">\n	      	<div class="image">\n	      		 <img *ngIf="daatt?.user_data[0].user_image" [src]="daatt?.user_data[0].user_image">\n	      		<img *ngIf="!daatt?.user_data[0].user_image" src="assets/img/us.png">\n	      	</div>\n	      	<h1>{{daatt?.user_data[0].firstname}}</h1>\n	      	<div class="right-sec">\n	      		<button ion-button class="rating histry">3/5</button>\n	      	</div>\n	      </div>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png" >{{daatt?.products[0].product_name}}</h2>\n<!--	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <h3>Number of plate 5 x $40<span style="float: right;">$200.00</span></h3>-->\n	    </ion-item>\n             \n              \n              <div  *ngIf="show2 != 1" >\n	    <ion-item  *ngFor="let daatts of canceledorders"  (click)="order(daatts)">\n	      <ion-thumbnail item-start style="width: 65px !important; height: 55px !important;">\n	        <img [src]="daatts?.products[0].image" style="opacity: 0.5;">\n	        <p>Cancelled</p>\n	      </ion-thumbnail>\n	      <div class="main">\n	      	<div class="image">\n	      		 <img *ngIf="daatts?.user_data[0].user_image" [src]="daatts?.user_data[0].user_image">\n	      		<img *ngIf="!daatts?.user_data[0].user_image" src="assets/img/us.png">\n	      	</div>\n	      	<h1>{{daatts?.user_data[0].firstname}} </h1>\n	      	<div class="right-sec">\n	      		<button ion-button class="rating histry">3/5</button>\n	      	</div>\n	      </div>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png" >{{daatts?.products[0].product_name}}</h2>\n<!--	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <h3>Number of plate 5 x $40<span style="float: right;">$200.00</span></h3>-->\n	    </ion-item></div>\n               <p *ngIf="show2 == 1">No Orders in History </p>\n	  </ion-list>\n	</div>\n</div>\n</ion-content>\n'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\rafaho\rafaho.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], RafahoPage);

//# sourceMappingURL=rafaho.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderdetialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
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
 * Generated class for the OrderdetialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderdetialPage = (function () {
    function OrderdetialPage(navCtrl, navParams, alertCtrl, loadCtrl, appsetting, toastCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadCtrl = loadCtrl;
        this.appsetting = appsetting;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.orderdetails = [];
        this.orderproddetails = [];
        this.userdetail = [];
        this.subtotal = 0;
        this.get();
    }
    OrderdetialPage.prototype.get = function () {
        this.orderdetails = JSON.parse(localStorage.getItem('Ordersdetails'));
        this.userdetail = JSON.parse(localStorage.getItem('UserDetail'));
        console.log(this.orderdetails);
        console.log(this.userdetail);
        this.str = this.userdetail.address.split(",", this.userdetail.address.length);
        this.str1 = this.str[0] + ',' + this.str[1];
        var len = this.str1.length + 1;
        this.str2 = this.userdetail.address.slice(len, this.userdetail.address.length);
        console.log(this.str);
        console.log(this.str1);
        console.log(this.str2);
        this.orderproddetails = this.orderdetails.products;
        for (var x = 0; x < this.orderproddetails.length; x++) {
            this.subtotal = this.subtotal + (this.orderproddetails[x].quantity * this.orderproddetails[x].productprice);
        }
        console.log(this.subtotal);
        console.log();
        this.str3 = this.orderdetails.booking_datetime.split("T", this.orderdetails.booking_datetime.length);
        //    this.str4=this.str3[1]
        //        this.str3 = this.orderdetails.booking_datetime = this.orderdetails.booking_datetime.replace(/T/gi, " ");
        this.str4 = this.orderdetails.booking_datetime = this.orderdetails.booking_datetime.replace(/:00.000Z/gi, " ");
        //    this.str3 = new Date(this.orderdetails.booking_datetime).toISOString();
        //     this.str4 = new Date(this.orderdetails.booking_datetime).toISOString();
        //      this.str5 =  this.str4.split(":00.");
        //   
        console.log(this.str3);
        console.log(this.str4);
    };
    OrderdetialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderdetialPage');
    };
    return OrderdetialPage;
}());
OrderdetialPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-orderdetial',template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\orderdetial\orderdetial.html"*/'<!--\n  Generated template for the OrderdetialPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Order Detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n	<div class="top-sec">\n			<ion-grid>\n				<ion-row>\n					<ion-col col-6 class="left">\n					  <div class="chef">\n						<h5>{{orderdetails.user_data[0].firstname}}</h5>\n					  </div>\n					</ion-col>\n					<ion-col col-6 class="right">\n					  <div class="phn">\n						<h5>{{orderdetails.user_data[0].phone}}</h5>\n						<!--<span><img src="../assets/img/msg.png"></span>-->\n					  </div>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</div>\n	<div class="text-sec">\n		\n		<div class="mid-sec">\n			<h5>Customer Address:</h5>\n			<p>{{str1}}</p>\n			<p>{{str2}}</p>\n			<div class="rghtbtn">\n				<!--<button ion-button end>Order Cancle</button>-->\n			</div>\n		</div>\n		<div class="bottom-sec">\n			<ion-list>\n				<ion-item>\n					<h5 item-start class="strt">Booking Date & Time</h5>\n					<p>{{ str3[0] | date : "MMM dd, y" }}</p>\n					<p item-end class="ennd">{{ str4 | date : "h:mm a" }}</p>\n                                         \n				</ion-item>\n			</ion-list>\n\n		</div>\n	</div>\n	<div class="content-sec">\n	  <ion-list>\n              <div >\n	    <ion-item *ngFor="let dat of orderproddetails">\n	      <ion-thumbnail item-start>\n                  <img >\n	        <img [src]="dat?.image">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">{{dat?.product_name}}</h2>\n	      <!--<p>Idli,sambhar, Kerla</p>-->\n	      <h3>Per plate ${{dat?.productprice}}</h3>\n	      <h3>Number of plate {{dat?.quantity}} x ${{dat?.productprice}}<span style="float: right;">${{dat?.quantity*dat?.productprice}}</span></h3>\n	    </ion-item>\n	</div>\n	</ion-list>\n</div>\n<div class="total">\n	<h2 class="left">Subtotal</h2>\n	<h2 class="right">${{subtotal}}</h2>\n</div>\n</ion-content>\n'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\orderdetial\orderdetial.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], OrderdetialPage);

//# sourceMappingURL=orderdetial.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectdishPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the SelectdishPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectdishPage = (function () {
    function SelectdishPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    SelectdishPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectdishPage');
    };
    SelectdishPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return SelectdishPage;
}());
SelectdishPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-selectdish',template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\selectdish\selectdish.html"*/'<!--\n  Generated template for the SelectdishPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n  	<button  start color="theme-header" style="background-color: #f27242; color: #fff;" (click)="dismiss()">\n      <ion-icon name="close" style="font-size: 30px;"></ion-icon>\n    </button>\n    <ion-title>\n    	 Select Dish\n    </ion-title>\n     <ion-buttons end>\n      <button ion-button icon-only class="btnprofile">Select All</button>     \n    </ion-buttons>\n   \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<div class="content-sec">\n	  <ion-list>\n	    <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	     <p class="p-note" style="white-space: normal; font-weight: 500; color: #000000; font-size: 12px;"><span style="color: #f27242;">Reg</span> $16.25</p>\n	    </ion-item>\n	    <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>	       \n	    </ion-item>\n		    <ion-item>\n		      <ion-thumbnail item-start>\n		        <img src="../assets/img/southfod.png">\n		      </ion-thumbnail>\n		      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n			      <p>Idli,sambhar, Kerla</p>\n		    </ion-item>\n	     <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	    </ion-item>\n	   \n	</ion-list>\n</div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <button ion-button full color="theme-header">Add Dish</button>\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\selectdish\selectdish.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
], SelectdishPage);

//# sourceMappingURL=selectdish.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChefdetialsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reviews_reviews__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productview_productview__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__ = __webpack_require__(8);
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
 * Generated class for the ChefdetialsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChefdetialsPage = (function () {
    function ChefdetialsPage(navCtrl, appsetting, http, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.appsetting = appsetting;
        this.http = http;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.array = [];
        this.splarray = [];
        this.starone = 'star-outline';
        this.startwo = 'star-outline';
        this.starthree = 'star-outline';
        this.starfour = 'star-outline';
        this.starfive = 'star-outline';
        //       alert('hjhh');
    }
    ChefdetialsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChefdetialsPage');
        this.getchefdetail();
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    ChefdetialsPage.prototype.getchefdetail = function () {
        if (localStorage.getItem('Chefdetail')) {
            this.array.push(JSON.parse(localStorage.getItem('Chefdetail')));
            console.log(this.array);
            console.log(this.array[0].products);
            console.log(this.array[0].avgrating);
            if (this.array[0].avgrating == 1) {
                this.starone = 'star';
            }
            else if (this.array[0].avgrating == 2) {
                this.starone = 'star';
                this.startwo = 'star';
            }
            else if (this.array[0].avgrating == 3) {
                this.starone = 'star';
                this.startwo = 'star';
                this.starthree = 'star';
            }
            else if (this.array[0].avgrating == 4) {
                this.starone = 'star';
                this.startwo = 'star';
                this.starthree = 'star';
                this.starfour = 'star';
            }
            else if (this.array[0].avgrating == 5) {
                this.starone = 'star';
                this.startwo = 'star';
                this.starthree = 'star';
                this.starfour = 'star';
                this.starfive = 'star';
            }
            else if ((1.1 <= this.array[0].avgrating) && (this.array[0].avgrating <= 1.5)) {
                this.starone = 'star-half';
            }
            else if ((1.6 <= this.array[0].avgrating) && (this.array[0].avgrating <= 1.9)) {
                this.starone = 'star';
                this.startwo = 'star';
            }
            else if ((2.1 <= this.array[0].avgrating) && (this.array[0].avgrating <= 2.5)) {
                this.starone = 'star';
                this.startwo = 'star';
                this.starthree = 'star-half';
            }
            else if ((2.6 <= this.array[0].avgrating) && (this.array[0].avgrating <= 2.9)) {
                this.starone = 'star';
                this.startwo = 'star';
                this.starthree = 'star';
            }
            else if ((3.1 <= this.array[0].avgrating) && (this.array[0].avgrating <= 3.5)) {
                this.starone = 'star';
                this.startwo = 'star';
                this.starthree = 'star';
                this.starfour = 'star-half';
            }
            else if ((3.6 <= this.array[0].avgrating) && (this.array[0].avgrating <= 3.9)) {
                this.starone = 'star';
                this.startwo = 'star';
                this.starthree = 'star';
                this.starfour = 'star';
            }
            else if ((4.1 <= this.array[0].avgrating) && (this.array[0].avgrating <= 4.5)) {
                this.starone = 'star';
                this.startwo = 'star';
                this.starthree = 'star';
                this.starfour = 'star-half';
            }
            else if ((4.6 <= this.array[0].avgrating) && (this.array[0].avgrating <= 4.9)) {
                this.starone = 'star';
                this.startwo = 'star';
                this.starthree = 'star';
                this.starfour = 'star';
                this.starfive = 'star';
            }
            this.splarray = JSON.parse(localStorage.getItem('Chefdetail'));
            console.log(this.splarray.productss);
        }
    };
    ChefdetialsPage.prototype.dishview = function (prod) {
        console.log(prod);
        //       console.log(this.splarray.products);
        localStorage.setItem('producttss', JSON.stringify(prod));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__productview_productview__["a" /* ProductviewPage */]);
    };
    ChefdetialsPage.prototype.review = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__reviews_reviews__["a" /* ReviewsPage */]);
    };
    return ChefdetialsPage;
}());
ChefdetialsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-chefdetials',template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\chefdetials\chefdetials.html"*/'<!--\n  Generated template for the ChefdetialsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n	<ion-navbar color="theme-header">\n		<ion-title>\n			Chef Details\n			<!--<p>Online Chef list</p>-->\n		</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="top-sec" padding>\n		<div class="top">\n			<ion-grid style="padding: 0px;">\n				<ion-row *ngFor="let dat of array">\n					<ion-col col-3 style="padding-left: 0px">\n						<div class="image">\n							<img *ngIf="dat?.user_image" src="{{dat?.user_image}}">\n							<img *ngIf="!dat?.user_image" src="assets/img/us.png">\n						</div>\n					</ion-col>\n					<ion-col col-9>\n						<div class="text">\n							<h2>{{dat?.firstname}} {{dat?.lastname}}</h2>\n							<h3>\n								<span>\n									<ion-icon name="pin"></ion-icon>\n								</span>{{dat?.address}}</h3>\n							<p>$500 Min order</p>\n							<h5 (click)="review()">\n								<ul>\n									<li>\n										<ion-icon name="{{starone}}" color="theme-header"></ion-icon>\n									</li>\n									<li>\n										<ion-icon name="{{startwo}}" color="theme-header"></ion-icon>\n									</li>\n									<li>\n										<ion-icon name="{{starthree}}" color="theme-header"></ion-icon>\n									</li>\n									<li>\n										<ion-icon name="{{starfour}}" color="theme-header"></ion-icon>\n									</li>\n									<li>\n										<ion-icon name="{{starfive}}" color="theme-header"></ion-icon>\n									</li>\n								</ul>\n								View Reviews</h5>\n						</div>\n\n					</ion-col>\n\n				</ion-row>\n			</ion-grid>\n		</div>\n	</div>\n	<div class="product" style="width: 100%; float: left; padding-top:5px !important;">\n		<h3>Our Products</h3>\n		<ion-list *ngFor="let datss of array">\n                    <div   *ngFor="let prod of datss.products">\n			<ion-item (click)="dishview(prod)" *ngIf="prod?.status == 1">\n				<ion-thumbnail item-start (click)="dishview(prod)">\n					<img *ngIf ="prod?.product_image0" src="{{prod?.product_image0}}">\n             <img *ngIf = "!prod?.product_image0" src="assets/img/option.png">\n				</ion-thumbnail>\n				<h2>{{prod?.product_name}}</h2>\n                                <p style="    max-height: 27px; overflow: hidden;" [innerHTML]="prod?.product_description"></p>\n				<p>${{prod?.product_price | number}}</p>\n				<!--						<div class="offer" style="position: absolute; background-color: #2bb600; right: 4px; top: 4px; border-radius:2px; padding: 2px 5px;">\n							<p style="margin: 0; font-size: 11px; color: #fff; font-weight: 400;">20% off</p>\n						</div>-->\n			</ion-item>\n\n		\n                        </div>\n		</ion-list>\n\n	</div>\n	<div class="special" >\n		<h3>Specialities</h3>\n              \n		<ion-list *ngFor="let dats of array" >\n                    <div *ngFor="let spec of dats.specialties">\n			<ion-item>\n				<ion-thumbnail item-start>\n\n					<img *ngIf="spec?.specialities_product_image1" src="{{spec?.specialities_product_image1}}">\n					<img *ngIf="!spec?.specialities_product_image1" src="assets/img/option.png">\n\n				</ion-thumbnail>\n				<h2>\n					{{spec?.specialties_product}}</h2>\n				<!--<p>{{spec?.add_ingredients}}</p>-->\n				<!--<ion-note item-end="" class="note note-ios">3/4</ion-note>-->\n			</ion-item>\n					     \n                    </div>\n		</ion-list>\n	</div>\n\n	<div class="about">\n		<h3>About Me</h3>\n		<p>Speaking enthusiastically about and demonstrating their passion for food, flavours and delectable culinary creations from\n			every corner of the globe, our celebrity chefs have unrivalled knowledge and expertise when it comes to all things culinary!</p>\n	</div>\n	<!-- <div class="acrdin">\n\n		  <ion-list style="margin-bottom: 0px;">\n		  <ion-item *ngFor="let d of diseases; let i=index" text-wrap (click)="toggleGroup(i)" [ngClass]="{active: isGroupShown(i)}">\n		    <h3>\n		      {{d.title}}\n		      <ion-icon color="success" item-right [name]="isGroupShown(i) ? \'arrow-up\' : \'arrow-forward\'" style="margin: 0; float: right;"></ion-icon>\n		    </h3>\n		    <div class="dsprtion" *ngIf="isGroupShown(i)">{{d.description}}</div>\n		  </ion-item>\n		</ion-list>\n	</div> -->\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\chefdetials\chefdetials.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */]])
], ChefdetialsPage);

//# sourceMappingURL=chefdetials.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reviews_reviews__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(8);
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
 * Generated class for the RatingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RatingPage = (function () {
    function RatingPage(navCtrl, navParams, viewCtrl, appsetting, platform, http, loadingCtrl, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.appsetting = appsetting;
        this.platform = platform;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.data = {};
    }
    RatingPage.prototype.onModelChange = function (number) {
        console.log(number);
        this.rating = number;
    };
    RatingPage.prototype.adddata = function () {
        var _this = this;
        console.log(this.data.comment);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
        if (localStorage.getItem('Chefdetail')) {
            var chefid = JSON.parse(localStorage.getItem('Chefdetail'))._id;
        }
        var postdata = {
            user_id: userid,
            rating: this.rating,
            chef_id: chefid,
            comment: this.data.comment
        };
        console.log(postdata);
        var Serialized = this.serializeObj(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'user/add_comment_and_rating', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.message == 'User Comment already exits!!') {
                _this.AlertMsg('Your comment already exists!!<br>First delete your comment');
            }
            else if (response.status == true) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reviews_reviews__["a" /* ReviewsPage */]);
            }
            else if (response.message == "Unable to add Comment and Rating!!") {
                _this.AlertMsg1('Please Rate this chef');
            }
        });
    };
    RatingPage.prototype.AlertMsg = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'ok',
                    role: 'ok',
                    handler: function () {
                        console.log('Continue clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reviews_reviews__["a" /* ReviewsPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    RatingPage.prototype.AlertMsg1 = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'ok',
                    role: 'ok',
                    handler: function () {
                        console.log('Continue clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    RatingPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    RatingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RatingPage');
    };
    RatingPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return RatingPage;
}());
RatingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-rating',template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\rating\rating.html"*/'<!--\n  Generated template for the RatingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-buttons start icon-only (click)="dismiss()">\n      <button ion-button clear>\n         <ion-icon name="close"></ion-icon>\n         </button>\n    </ion-buttons>\n\n    <ion-title>Add Rating</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n   \n    \n  <div class="content-sec" padding>\n \n    <div class="star">\n         <rating class="star" \n           \n            [(ngModel)]="rate" \n        readOnly="false" \n        max="5" \n        min=\'0\'\n        emptyStarIconName="star-outline" \n        halfStarIconName="star-half"\n        starIconName="star"\n        nullable="false"\n        (ngModelChange)="onModelChange($event)"> \n</rating>\n      </div>\n     \n  <div class="text">\n    <ion-textarea class="enter" placeholder="Add Comment..."  [(ngModel)]="data.comment" name="comment" #comment="ngModel"></ion-textarea>\n </div>\n  <button ion-button icon-only class="btnprofile" (click)="adddata()">Submit</button>     \n</div> \n \n</ion-content>\n'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\rating\rating.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
], RatingPage);

//# sourceMappingURL=rating.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__productview_productview__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__ = __webpack_require__(8);
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
/**
 * Generated class for the ProductlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductlistPage = (function () {
    function ProductlistPage(navCtrl, appsetting, http, navParams, toastCtrl, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.appsetting = appsetting;
        this.http = http;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.array = [];
        this.prods = [];
        this.play = 0;
        this.sservices = [];
        //       alert('hello');
        if (JSON.parse(localStorage.getItem('proctnumberincart'))) {
            this.no_of_products = JSON.parse(localStorage.getItem('proctnumberincart'));
        }
    }
    ProductlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductlistPage');
        this.getprodetail();
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    ProductlistPage.prototype.getprodetail = function () {
        if (localStorage.getItem('dishprod')) {
            this.array = JSON.parse(localStorage.getItem('dishprod'));
            console.log(this.array);
            //                alert('cdf');
        }
    };
    ProductlistPage.prototype.dishview = function (pro) {
        console.log(pro);
        localStorage.setItem('producttss', JSON.stringify(pro));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__productview_productview__["a" /* ProductviewPage */]);
    };
    ProductlistPage.prototype.cart1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */]);
    };
    ProductlistPage.prototype.cart = function (pro) {
        var _this = this;
        this.play = 0;
        this.sservices = [];
        console.log(pro);
        if (pro.take_away == 0) {
            if (pro.cook_at_user_place == 0) {
                //              if(this.splarr.home_delivery == 0){
                //                  return null;
                //              }else{
                console.log('home delivery');
                this.sservices.push('Home Delivery');
            }
            else {
                if (pro.home_delivery == 0) {
                    this.sservices.push('Cook at MY Place');
                    console.log('cook at my place');
                }
                else {
                    this.sservices.push('Home Delivery');
                    this.sservices.push('Cook at My Place');
                    console.log('cook at my place,home delivery');
                }
            }
        }
        else {
            if (pro.cook_at_user_place == 0) {
                if (pro.home_delivery == 0) {
                    this.sservices.push('Cook at Chef place');
                    console.log('cook at chef place');
                }
                else {
                    this.sservices.push('Home Delivery');
                    this.sservices.push('Cook at Chef place');
                    console.log('cook at chef place,home delivery');
                }
            }
            else {
                if (pro.home_delivery == 0) {
                    this.sservices.push('Cook at MY Place');
                    this.sservices.push('Cook at Chef place');
                    console.log('cook at my place,home delivery');
                }
                else {
                    this.sservices.push('Cook at MY Place');
                    this.sservices.push('Cook at Chef place');
                    this.sservices.push('Home Delivery');
                    console.log('cook at my place,home delivery,cook at chef place');
                }
            }
        }
        console.log(this.sservices);
        console.log(this.sservices.length);
        if (this.sservices.length == 3) {
            console.log('di');
            var alert2 = this.alertCtrl.create({
                title: 'RAFAHO',
                message: 'Select some Service',
                inputs: [
                    {
                        type: 'radio',
                        label: this.sservices[0],
                        value: this.sservices[0]
                    },
                    {
                        type: 'radio',
                        label: this.sservices[1],
                        value: this.sservices[1]
                    }, {
                        type: 'radio',
                        label: this.sservices[2],
                        value: this.sservices[2]
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                        }
                    },
                    {
                        text: 'OK',
                        role: 'submit',
                        handler: function (data) {
                            console.log(data);
                            _this.service = data;
                            _this.play = 1;
                            _this.hitt(pro, _this.service);
                        }
                    }
                ]
            });
            alert2.present();
        }
        else if (this.sservices.length == 2) {
            console.log('mata');
            var alert1 = this.alertCtrl.create({
                title: 'RAFAHO',
                message: 'Select some Service',
                inputs: [
                    {
                        type: 'radio',
                        label: this.sservices[0],
                        value: this.sservices[0]
                    },
                    {
                        type: 'radio',
                        label: this.sservices[1],
                        value: this.sservices[1]
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                        }
                    },
                    {
                        text: 'OK',
                        role: 'submit',
                        handler: function (data) {
                            console.log(data);
                            _this.service = data;
                            _this.play = 1;
                            _this.hitt(pro, _this.service);
                        }
                    }
                ]
            });
            alert1.present();
        }
        else {
            console.log('jai');
            var alert_1 = this.alertCtrl.create({
                title: 'RAFAHO',
                message: 'Select some Service',
                inputs: [
                    {
                        type: 'radio',
                        label: this.sservices[0],
                        value: this.sservices[0]
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                        }
                    },
                    {
                        text: 'OK',
                        role: 'submit',
                        handler: function (data) {
                            console.log(data);
                            _this.service = data;
                            _this.play = 1;
                            _this.hitt(pro, _this.service);
                        }
                    }
                ]
            });
            alert_1.present();
        }
        console.log(pro);
        console.log(this.sservice);
        console.log(this.play);
        //    this.navCtrl.push(CartPage);
    };
    ProductlistPage.prototype.hitt = function (pro, Service) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        var a = JSON.parse(localStorage.getItem('UserDetail'));
        console.log(a);
        var b = JSON.parse(localStorage.getItem('Chefdetail'));
        console.log(b);
        var c = JSON.parse(localStorage.getItem('Bookingdatetime'));
        console.log(c);
        //      for(var z=0; z<this.array.length; z++)
        //      {   if(proid == this.array[z]._id){
        //          this.prods = this.array[z];
        //          }
        //      }
        if (Service == 'Home Delivery') {
            Service = 3;
        }
        else if (Service == 'Cook at MY Place') {
            Service = 2;
        }
        else {
            Service = 1;
        }
        console.log(Service, pro);
        var postdata = {
            user_id: a._id,
            user_address: a.address,
            long: a.longitude,
            lat: a.latitude,
            chef_id: b._id,
            booking_datetime: c,
            product_id: pro._id,
            product_name: pro.product_name,
            price_per_plate: pro.product_price,
            quantity: pro.minimum_order,
            minimum_order: pro.minimum_order,
            product_image0: pro.product_image0,
            product_ingredients: pro.product_ingredients,
            discount: pro.discount,
            order_prefrence: Service
        };
        console.log(postdata);
        var Serialized = this.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'add_to_cart', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                Loading.dismiss();
                console.log(response);
                if (response.status == true) {
                    //      this.navCtrl.push(CartPage);
                    var toast = _this.toastCtrl.create({
                        message: "Product added Succesfully to Cart",
                        duration: 1500,
                        position: 'middle'
                    });
                    localStorage.setItem('proctnumberincart', JSON.stringify(response.data.products.length));
                    _this.no_of_products = JSON.parse(localStorage.getItem('proctnumberincart'));
                    console.log(_this.no_of_products);
                    console.log(_this.appsetting.cartid);
                    toast.present();
                }
                else {
                    //        this.navCtrl.push(CartPage);
                    _this.ToastMsg(response.message);
                }
            }, function (err) {
                _this.ToastMsg('Something went wrong');
                Loading.dismissAll();
                console.log(err);
            });
        });
    };
    ProductlistPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ProductlistPage.prototype.ToastMsg = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    return ProductlistPage;
}());
ProductlistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-productlist',template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\productlist\productlist.html"*/'<!--\n  Generated template for the ProductlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>\n     Menu\n      \n    </ion-title>\n\n\n     <ion-buttons end (click)="cart1()">\n      <button ion-button icon-only class="btnprofile">\n      <div class="iconprf">\n          <img src="assets/img/whitestore.png">\n          <p><span>{{no_of_products}}</span></p>\n       </div>\n      </button>     \n    </ion-buttons>\n  </ion-navbar>\n</ion-header> \n\n\n<ion-content>\n	<div class="content-sec">\n		<ion-list *ngFor="let pro of array">\n	    <ion-item>\n	      <ion-thumbnail item-start (click)="dishview(pro)">\n	        <img src="{{pro?.product_image0}}">\n	      </ion-thumbnail>\n	      <h2 (click)="dishview(pro)"> <img class="imgicon" width="11px" src="assets/img/acicon.png" >{{pro?.product_name}}</h2>\n	      <p>{{pro?.product_ingredients}}</p>\n              <h3>Per plate ${{pro?.product_price| number}}</h3>\n	      <button ion-button outline item-end (click)="cart(pro)">ADD TO CART</button>	       \n	    </ion-item>\n<!--	      <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <button ion-button outline item-end>ADD TO CART</button>	       \n	    </ion-item>\n	      <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <button ion-button outline item-end>ADD TO CART</button>	       \n	    </ion-item>\n	      <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <button ion-button outline item-end>ADD TO CART</button>	       \n	    </ion-item>\n	      <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <button ion-button outline item-end>ADD TO CART</button>	       \n	    </ion-item>\n	      <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <button ion-button outline item-end>ADD TO CART</button>	       \n	    </ion-item>\n	      <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="assets/img/southfod.png">\n	      </ion-thumbnail>\n	      <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>\n	      <p>Idli,sambhar, Kerla</p>\n	      <h3>Per plate $40.00</h3>\n	      <button ion-button outline item-end>ADD TO CART</button>	       \n	    </ion-item>-->\n	     \n	\n	   \n	</ion-list>\n	</div>\n</ion-content>\n'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\productlist\productlist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], ProductlistPage);

//# sourceMappingURL=productlist.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhyrafahoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(42);
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
 * Generated class for the WhyrafahoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WhyrafahoPage = (function () {
    function WhyrafahoPage(navCtrl, navParams, appsetting, http, alertCtrl, toastCtrl, actionSheetCtrl, camera, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.getdata();
    }
    WhyrafahoPage.prototype.getdata = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
        var postdata = {
            pagename: 'Why Rafaho (User)'
        };
        console.log(postdata);
        var serialized = this.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/image/icons3.gif'>",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'static/getstaticpagedata', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                console.log(response);
                if (response.status == true) {
                    _this.pagedata = response.data[0].pagedata;
                }
            });
        });
    };
    WhyrafahoPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    WhyrafahoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WhyrafahoPage');
    };
    return WhyrafahoPage;
}());
WhyrafahoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-whyrafaho',template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\whyrafaho\whyrafaho.html"*/'<!--\n  Generated template for the WhyrafahoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Why Rafaho</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="main">\n	\n			<p [innerHTML] = "pagedata"></p>\n        </div>\n</ion-content>\n'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\whyrafaho\whyrafaho.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], WhyrafahoPage);

//# sourceMappingURL=whyrafaho.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(42);
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
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpPage = (function () {
    function HelpPage(navCtrl, navParams, appsetting, http, alertCtrl, toastCtrl, actionSheetCtrl, camera, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.getdata();
    }
    HelpPage.prototype.getdata = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
        var postdata = {
            pagename: 'Help (User)'
        };
        console.log(postdata);
        var serialized = this.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/image/icons3.gif'>",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'static/getstaticpagedata', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                console.log(response);
                if (response.status == true) {
                    _this.pagedata = response.data[0].pagedata;
                }
            });
        });
    };
    HelpPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    return HelpPage;
}());
HelpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-help',template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\help\help.html"*/'<!--\n  Generated template for the HelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Help</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="main">\n	\n		<p [innerHTML] = "pagedata"></p>\n	</div>\n</ion-content>\n'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\help\help.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], HelpPage);

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(42);
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
 * Generated class for the TermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsPage = (function () {
    function TermsPage(navCtrl, navParams, appsetting, http, alertCtrl, toastCtrl, actionSheetCtrl, camera, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.getdata();
    }
    TermsPage.prototype.getdata = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
        var postdata = {
            pagename: 'Terms and Conditions (User)'
        };
        console.log(postdata);
        var serialized = this.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/image/icons3.gif'>",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'static/getstaticpagedata', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                console.log(response);
                if (response.status == true) {
                    _this.pagedata = response.data[0].pagedata;
                }
            });
        });
    };
    TermsPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    TermsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsPage');
    };
    return TermsPage;
}());
TermsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-terms',template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\terms\terms.html"*/'<!--\n  Generated template for the TermsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Terms and conditions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="main">\n		<h3>Terms and conditions</h3>\n		<p [innerHTML] = "pagedata"></p>	\n        </div>\n</ion-content>\n'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\terms\terms.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], TermsPage);

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mapmodal_mapmodal__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
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
    function EditprofilePage(navCtrl, navParams, toastCtrl, loadingCtrl, http, modalCtrl, alertCtrl, appsetting, actionSheetCtrl, camera, nativeGeocoder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.appsetting = appsetting;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.nativeGeocoder = nativeGeocoder;
        this.number = false;
        this.data = {};
        //    alert('tmmtt');
        this.date = new Date();
        console.log(this.date);
    }
    EditprofilePage.prototype.ngOnInit = function () {
        this.date = __WEBPACK_IMPORTED_MODULE_8_moment__(new Date()).format('YYYY-MM-DD');
        console.log(this.date);
    };
    //   lupap(){
    ////      localStorage.removeItem('NominatimDetail');
    //      this.address = this.data.address;
    //      console.log(this.address);
    //      var matches = this.address.match(/\d+/g);
    //if (matches != null) {
    ////    console.log('number');
    //    this.number = true;
    //    
    //}else{
    //    this.number = false;
    //}
    //
    //if(this.number ==true){
    //   console.log('yes it is having number');
    //   this.openmapmodal();
    //   
    //}else{
    //   console.log('false');
    //let headers = new Headers();
    //    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    //let options = new RequestOptions({ headers: headers})
    //if(this.address){
    //    this.address = this.address.replace(/" "/g, '%20');
    //    console.log(this.address)
    //var adr = this.address
    //console.log(adr);
    //var Loading = this.loadingCtrl.create({
    //          spinner: 'bubbles',
    //          cssClass: 'loader'
    //        });
    //         Loading.present().then(() => {
    //this.http.post('http://nominatim.openstreetmap.org/search/'+adr+'?format=json&addressdetails=1&limit=1&polygon_svg=1',options).map(res => res.json()).subscribe(response => {
    //   Loading.dismiss();
    //     console.log(response[0]);
    //    
    //    if(response[0] != undefined){
    //    if(response[0].place_id != ''){
    //        
    //        console.log('working');
    //         localStorage.setItem('NominatimDetail',JSON.stringify(response[0]));
    ////        this.navCtrl.push(NominatimapPage);
    //         let modal = this.modalCtrl.create(NominatimapPage);
    //    modal.onDidDismiss(data => { 
    //   
    //  });
    //   modal.present();
    //   
    //   if(response[0].address.road){
    //        this.data.address=response[0].place_id+','+response[0].address.road+','+response[0].address.city+','+ response[0].address.postcode+','+response[0].address.state+','+response[0].address.country+','+response[0].address.country_code
    //        }
    //        else if(response[0].address.city){
    //        this.data.address=response[0].place_id+','+response[0].address.city+','+ response[0].address.postcode+','+response[0].address.state+','+response[0].address.country+','+response[0].address.country_code
    //        }
    //         else if(response[0].address.state){
    //            this.data.address=response[0].place_id+','+response[0].address.state+','+response[0].address.country+','+response[0].address.country_code
    //        }
    //        else if(response[0].address.state_district){
    //            this.data.address=response[0].place_id+','+response[0].address.state+','+response[0].address.state_district+','+response[0].address.country+','+response[0].address.country_code
    //        }
    //       else if(response[0].address.country){
    //            this.data.address=response[0].place_id+','+response[0].address.country+','+response[0].address.country_code
    //        }
    //     this.lat = response[0].lat
    //    this.long = response[0].lon
    //      console.log(this.lat,this.long)  
    //    }}
    //    else{
    //        console.log('neelanshi');
    //         this.AlertMsg2('Empty response on Nominatim<br>Search via Google maps<br>');
    //       
    //    }
    ////    else
    ////        {
    ////       this.AlertMsg1('Empty response on Nominatim<br>Search via Google maps<br>');
    ////        this.openmapmodal();
    ////    }
    //});
    //});
    //
    //
    //}
    //}
    //
    //
    //
    //  }
    EditprofilePage.prototype.Userprofile = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
        console.log(userid);
        var postdata = {
            id: userid
        };
        var serialized = this.serializeObj(postdata);
        console.log(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data.data.latitude + ',' + data.data.longitude);
            _this.lat = data.data.latitude;
            _this.long = data.data.longitude;
            _this.nativeGeocoder.reverseGeocode(parseFloat(data.data.latitude), parseFloat(data.data.longitude))
                .then(function (result) {
                console.log(JSON.stringify(result));
                if (result.subThoroughfare) {
                    _this.data.address = result.subThoroughfare + ',' + result.thoroughfare + ',' + result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                }
                else if (result.thoroughfare) {
                    _this.data.address = result.thoroughfare + ',' + result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                }
                else {
                    _this.data.address = result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                }
                _this.city = result.locality;
                console.log(_this.city);
                //        alert(this.city);
            })
                .catch(function (error) { return console.log(error); });
            console.log(data);
            var str = data.data.phone;
            var res = str.substring(0, 3);
            var res1 = str.substring(3, 6);
            var res2 = str.substring(6, 10);
            data.data.phone = res + '-' + res1 + '-' + res2;
            _this.data = data.data;
            _this.srcImage = data.data.user_image;
            console.log(_this.data.firstname);
        }, function (err) {
            _this.ToastMsg('Something went wrong');
        });
    };
    EditprofilePage.prototype.ToastMsg = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    EditprofilePage.prototype.submitinfo = function (editinfo) {
        var _this = this;
        console.log(editinfo.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
        console.log(userid);
        if (editinfo.value.phone) {
            editinfo.value.phone = editinfo.value.phone.replace(/-/g, "");
            this.data = {
                first_name: editinfo.value.firstname,
                last_name: editinfo.value.lastname,
                phone: editinfo.value.phone,
                dob: editinfo.value.dob,
                gender: editinfo.value.gender,
                address: this.data.address,
                id: userid,
                lat: this.lat,
                long: this.long,
            };
            console.log(this.data);
            var serialized = this.serializeObj(this.data);
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                cssClass: 'loader',
                content: "Loading",
                dismissOnPageChange: true
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.myGlobalVar + 'user_data_update', serialized, options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    console.log(data);
                    if (data.status == true) {
                        localStorage.setItem('UserDetail', JSON.stringify(data.data));
                        var userdetail = JSON.parse(localStorage.getItem('UserDetail'));
                        var postdata2 = {
                            user_id: userdetail._id,
                            saved_address: userdetail.address
                        };
                        console.log(postdata2);
                        var Serialized = _this.serializeObj(postdata2);
                        _this.http.post(_this.appsetting.myGlobalVar + 'user/add_saved_address', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response2) {
                            console.log(response2);
                            if (response2.status == true) {
                                localStorage.setItem('UserDetail', JSON.stringify(response2.data[0]));
                            }
                        });
                        localStorage.setItem('UserDetail', JSON.stringify(data.data));
                        //                  console.log(data.data.address);
                        //                  this.appsetting.svd.push(data.data.address);
                        //                    localStorage.setItem('Svedaddress',JSON.stringify(this.appsetting.svd));
                        //                    console.log(this.appsetting.svd);
                        Loading.dismiss();
                        var toast = _this.toastCtrl.create({
                            message: "Profile is updated",
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
                        console.log(_this.navCtrl);
                    }
                }, function (err) {
                    var toast = _this.toastCtrl.create({
                        message: "Something went wrong",
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                    Loading.dismissAll();
                });
            });
        }
    };
    EditprofilePage.prototype.CameraAction = function () {
        var _this = this;
        var actionsheet = this.actionSheetCtrl.create({
            title: "Choose Album",
            buttons: [{
                    text: 'Camera',
                    handler: function () {
                        var options = {
                            quality: 8,
                            sourceType: 1,
                            correctOrientation: true,
                            allowEdit: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageUri) {
                            _this.srcImage = 'data:image/jpeg;base64,' + imageUri;
                            //this.imgTosend = imageUri;
                            // this.loading.dismiss();
                            //            alert('camera');
                            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
                            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
                            var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
                            var postdata = {
                                user_id: userid,
                                profile_picture: imageUri
                            };
                            //            alert(JSON.stringify(postdata));
                            console.log(postdata);
                            var serialized = _this.serializeObj(postdata);
                            var Loading = _this.loadingCtrl.create({
                                spinner: 'bubbles',
                                cssClass: 'loader',
                                content: "Loading",
                                dismissOnPageChange: true
                            });
                            Loading.present().then(function () {
                                _this.http.post(_this.appsetting.myGlobalVar + 'user_profile_pic', postdata).map(function (res) { return res.json(); }).subscribe(function (data) {
                                    Loading.dismiss();
                                    // alert(JSON.stringify(data));
                                    console.log(data);
                                    //              alert("saving image")
                                }, function (err) {
                                    alert(JSON.stringify(err));
                                });
                            });
                        }, function (err) {
                            alert(JSON.stringify(err));
                            // this.loading.dismiss();
                            console.log(err);
                        });
                    }
                },
                {
                    text: 'Gallery',
                    handler: function () {
                        console.log("Gallery Clicked");
                        //	alert("get Picture")
                        // this.loading.present();
                        var options = {
                            quality: 10,
                            sourceType: 0,
                            correctOrientation: true,
                            allowEdit: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            _this.srcImage = 'data:image/jpeg;base64,' + imageData;
                            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
                            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
                            var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
                            var postdata = {
                                user_id: userid,
                                profile_picture: imageData
                            };
                            //            alert(postdata)
                            var serialized = _this.serializeObj(postdata);
                            var Loading = _this.loadingCtrl.create({
                                spinner: 'bubbles',
                                cssClass: 'loader',
                                content: "Loading",
                                dismissOnPageChange: true
                            });
                            Loading.present().then(function () {
                                _this.http.post(_this.appsetting.myGlobalVar + 'user_profile_pic', postdata).map(function (res) { return res.json(); }).subscribe(function (data) {
                                    Loading.dismiss();
                                    console.log(data);
                                    //              alert("saving image")
                                }, function (err) {
                                    console.log(JSON.stringify(err));
                                    alert(JSON.stringify(err));
                                });
                            });
                            //            alert('gallery working');
                        }, function (err) {
                            // this.loading.dismiss();
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
                        actionsheet.dismiss();
                    }
                }]
        });
        actionsheet.present();
    };
    EditprofilePage.prototype.phonevalidation = function (phn) {
        if (phn.length == 3) {
            this.data.phone = this.data.phone + '-';
        }
        else if (phn.length == 7) {
            this.data.phone = this.data.phone + '-';
        }
        // else if (phn.length == 12) {
        //   this.data.phone = this.data.phone + '-';
        // }
    };
    EditprofilePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    EditprofilePage.prototype.isReadonly = function () {
        return this.isReadonly; //return true/false 
    };
    EditprofilePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.Userprofile();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    EditprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditprofilePage');
        this.Userprofile();
        console.log('Rahul Maurya');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    EditprofilePage.prototype.AlertMsg2 = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                        _this.openmapmodal();
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    };
    EditprofilePage.prototype.openmapmodal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__mapmodal_mapmodal__["a" /* MapmodalPage */]);
        //    Loading.dismiss();
        modal.onDidDismiss(function (data) {
            //      alert(data.address);
            _this.data.address = data.address;
            console.log(_this.data.address);
            console.log(data.lati);
            console.log(data.longi);
            _this.lat = data.lati;
            _this.long = data.longi;
            _this.AlertMsg4('Your Location:' + _this.data.address + ' ' + ' is  updated');
        });
        modal.present();
        //  })
    };
    EditprofilePage.prototype.AlertMsg4 = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                        //            this.openmapmodal();
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    };
    return EditprofilePage;
}());
EditprofilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-editprofile',template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\editprofile\editprofile.html"*/'<!--\n  Generated template for the EditprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Edit Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n     <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content refreshingText="Refreshing..." refreshingSpinner="bubbles" pullingText="Pull to refresh"></ion-refresher-content>\n  </ion-refresher>\n	<div class="main">\n    <div class="top-sec">\n			<div class="mainimg">\n      <div class="main-img">\n       <img *ngIf="srcImage" class="pick0" [src]="srcImage">\n <img *ngIf="!srcImage" class="pick0" src="assets/img/us.png">\n      </div>\n<!--			<div class="input-sec" >\n      <div class="upld">\n      \n      	<ion-icon name="camera"></ion-icon>(click)="CameraAction()"\n      </div>\n      </div>-->\n			</div>\n      \n      <div class="text-sec">\n        <h3>{{data?.firstname }} {{ data?.lastname}}</h3>\n        <h6>  <ion-icon ios="ios-pin" md="md-pin"> {{city}}</ion-icon></h6>\n      </div>\n    </div>\n  </div>\n  <div class="content-sec">\n  	<div class="form-sec">\n  		<form #editprofile="ngForm" novalidate (submit)="submitinfo(editprofile)">\n  			<ion-list>\n  				<ion-grid>\n  					<ion-row>\n  						<ion-col col-12>\n						  <ion-item>\n						    <ion-input type="text" placeholder="First name" [(ngModel)]="data.firstname" name="firstname" #firstname="ngModel" required></ion-input>\n						  </ion-item>\n						</ion-col>\n\n						<ion-col col-12>\n						  <ion-item>\n						    <ion-input type="text" placeholder="Last name" [(ngModel)]="data.lastname" name="lastname" #lastname="ngModel" required></ion-input>\n						  </ion-item>\n						</ion-col>\n						<ion-col col-12>\n						   <ion-item>\n						    <ion-input type="email" placeholder="Email" [(ngModel)]="data.email" [readonly]="isReadonly()" name="email" #email="ngModel" pattern="^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$" required></ion-input>\n						  </ion-item>\n							<div class="alert alert-danger" color="danger">\n            <div *ngIf="email.errors && (email.dirty || email.touched)">\n              <div [hidden]="!email.errors.pattern">\n                Invalid email\n              </div>\n            </div>\n          </div>\n						</ion-col>\n						<ion-col col-12>\n						   <ion-item>\n						    <ion-input type="tel" placeholder="Phone number (xxx-xxx-xxx-xxx-xxx)" [(ngModel)]="data.phone" name="phone" #phone="ngModel" (input)="phonevalidation(data.phone)" maxlength="12" required></ion-input>\n						  </ion-item>\n							<div class="alert alert-danger" color="danger">\n                  <div *ngIf="phone.errors && (phone.dirty || phone.touched)">\n                    <div [hidden]="!phone.errors.pattern">\n                      Only number allowed with pattern (xxx-xxx-xxx-xxx-xxx)\n                    </div>\n                  </div>\n                </div>\n						</ion-col>\n						<ion-col col-6>\n						   <ion-item>\n						    <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY" [(ngModel)]="data.dob" name="dob" #dob="ngModel" max="{{date}}" required></ion-datetime>\n						  </ion-item>\n						</ion-col>\n						<ion-col col-6>\n						   <ion-item>\n						    	<ion-select [(ngModel)]="data.gender" name="gender" #gender="ngModel" required>\n							    <ion-option value="female">Female</ion-option>\n							    <ion-option value="male">Male</ion-option>\n							  </ion-select>\n						  </ion-item>\n						</ion-col>\n						<ion-col col-12>\n                                                     <div style="position: relative; overflow: hidden;">\n    <ion-icon ios="ios-search-outline" md="md-search" (click)="openmapmodal()" style="position: absolute;\n    top: 4px;\n    right: -24px;\n    width: 50px;\n    height: 50px;\n    /* display: block; */\n    color: #000;\n    z-index: 999; \n    font-size:26px; "></ion-icon>\n\n						    <ion-item>\n							    <ion-textarea class="enter" placeholder="Enter your address...." [(ngModel)]="data.address" name="address" #address="ngModel" required></ion-textarea>\n							</ion-item> \n                                                     </div>\n						</ion-col>\n					</ion-row>\n				</ion-grid>\n\n			</ion-list>\n			 <div class="btn-sec">\n  	<button ion-button type="submit"  [disabled]="!editprofile.valid">Save</button>\n  </div>\n  		</form>\n  	</div>\n  </div>\n \n\n</ion-content>\n'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\editprofile\editprofile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
], EditprofilePage);

//# sourceMappingURL=editprofile.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprefrencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapmodal_mapmodal__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nominatimap_nominatimap__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
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
 * Generated class for the EditprefrencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditprefrencePage = (function () {
    function EditprefrencePage(navCtrl, navParams, geolocation, toastCtrl, nativeGeocoder, modalCtrl, appsetting, http, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.toastCtrl = toastCtrl;
        this.nativeGeocoder = nativeGeocoder;
        this.modalCtrl = modalCtrl;
        this.appsetting = appsetting;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.data = {};
        this.number = false;
        //        this.GetLocation();
        //       this.Gett();
        this.getprefrence();
        //       alert('hellosss');
    }
    EditprefrencePage.prototype.pasdata = function (str5, str6) {
        console.log(str5, str6);
        this.data.dat = str5;
        console.log(this.data.dat);
        this.data.datetime = str5;
        this.data.altdate = str6;
        console.log(this.data.altdate);
    };
    EditprefrencePage.prototype.openmapmodal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__mapmodal_mapmodal__["a" /* MapmodalPage */]);
        //    Loading.dismiss();
        modal.onDidDismiss(function (res) {
            //      alert(res.address);
            _this.data.otheraddress = res.address;
            console.log(_this.data.otheraddress);
            console.log(res.lati);
            console.log(res.longi);
            _this.lat = res.lati;
            _this.long = res.longi;
            _this.addrestype = 'other';
            _this.data.aaddress = '';
        });
        modal.present();
    };
    EditprefrencePage.prototype.getprefrence = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["RequestOptions"]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
        console.log(userid);
        var postdata = {
            app_user_id: userid
        };
        var serialized = this.serializeObj(postdata);
        console.log(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            cssClass: 'loader',
            content: 'Connecting...'
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'prefrence/get_prefrence', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                Loading.dismiss();
                console.log(response.data[0]);
                console.log(response.data[0].alternative_datetime);
                console.log(response.data[0].todays_datetime);
                //      console.log(response.data[0].todays_date+' '+response.data[0].todays_time);
                //      console.log(response.data[0].alternative_date+' '+response.data[0].alternative_time);
                ////      .format
                ////      const myDate = moment(str, 'YYYY-MM-DD').toDate();
                //      this.data.datetime = response.data[0].todays_date+'T'+response.data[0].todays_time+':00Z';
                //    if((response.data[0].alternative_date == "undefinedT")&&(response.data[0].alternative_time == "ndefi")){
                //         this.data.altdate = '';
                //    }else{
                //      this.data.altdate = response.data[0].alternative_date+'T'+response.data[0].alternative_time+':00Z';}
                ////      +response.data[0].alternative_time
                _this.geo(parseFloat(response.data[0].lat), parseFloat(response.data[0].long));
                //this.pasdata(this.str5,this.str6);
                console.log(_this.data.altdate);
                console.log(_this.data.datetime);
                console.log(_this.data);
            });
        });
    };
    EditprefrencePage.prototype.geo = function (lat, long) {
        var _this = this;
        this.lat = lat;
        this.long = long;
        this.addrestype = 'saved';
        //      alert(this.lat+','+this.long+'SAVED');
        console.log(this.lat, this.long);
        //      alert('working');
        this.nativeGeocoder.reverseGeocode(lat, long)
            .then(function (result) {
            // alert(JSON.stringify(result));
            if (result.subThoroughfare) {
                _this.data.aaddress = result.subThoroughfare + ',' + result.thoroughfare + ',' + result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
            }
            else if (result.thoroughfare) {
                _this.data.aaddress = result.thoroughfare + ',' + result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
            }
            else {
                _this.data.aaddress = result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
            }
            console.log(_this.data.aaddress);
            //        alert(this.city);
            //  alert(this.data.result +'Neelanshi');
        }).catch(function (error) { return console.log(error); });
    };
    EditprefrencePage.prototype.isReadonly = function () {
        return this.isReadonly; //return true/false 
    };
    EditprefrencePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    EditprefrencePage.prototype.submitinfo = function (preference) {
        var _this = this;
        console.log(preference.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["RequestOptions"]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
        console.log(userid);
        console.log(this.addrestype);
        console.log(preference.value.datetime);
        console.log(preference.value.altdate);
        //    this.str=preference.value.datetime.slice(0,10);
        //    this.str1=preference.value.datetime.slice(11,16);
        //    if(preference.value.altdate != ''){
        //    this.str2=preference.value.altdate.slice(0,10);
        //    this.str3=preference.value.altdate.slice(11,16);
        //    }
        //    else{ this.str2 =''
        //    this.str3 =''}
        if ((this.lat) && (this.long)) {
            console.log('hello');
            this.data = {
                app_user_id: userid,
                todays_datetime: preference.value.datetime,
                //     todays_time:this.str1,
                alternative_datetime: preference.value.altdate,
                //     alternative_time:preference.value.altdate,
                lat: this.lat,
                long: this.long,
                address_type: this.addrestype,
            };
            console.log(this.data);
            //      alert(this.data.lat+','+this.data.long);
            var serialized = this.serializeObj(this.data);
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                cssClass: 'loader',
                content: "Loading",
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.myGlobalVar + 'addprefrence', serialized, options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    console.log(data);
                    if (data.status == true) {
                        Loading.dismiss();
                        var toast = _this.toastCtrl.create({
                            message: "Preference is updated",
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                    }
                });
            });
        }
        else {
            this.AlertMsg1('Need to select a location');
        }
    };
    EditprefrencePage.prototype.AlertMsg1 = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    };
    EditprefrencePage.prototype.GetLocation = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
        });
        Loading.present().then(function () {
            _this.geolocation.getCurrentPosition().then(function (resp) {
                // resp.coords.latitude
                // resp.coords.longitude
                console.log('latitude:' + resp.coords.latitude + 'longitude:' + resp.coords.longitude);
                _this.lat = resp.coords.latitude;
                _this.long = resp.coords.longitude;
                _this.addrestype = 'current';
                Loading.dismiss();
                _this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
                    .then(function (result) {
                    // alert(JSON.stringify(result));
                    if (result.subThoroughfare) {
                        _this.current = result.subThoroughfare + ',' + result.thoroughfare + ',' + result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                    }
                    else if (result.thoroughfare) {
                        _this.current = result.thoroughfare + ',' + result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                    }
                    else {
                        _this.current = result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                    }
                    _this.AlertMsg('Your Location is:' + _this.current);
                    //  alert(this.data.result +'Neelanshi');
                }).catch(function (error) { return console.log(error); });
            }).catch(function (error) {
                console.log('Error getting location', error);
                _this.ToastMsg1('Please enable your location');
            });
        });
    };
    EditprefrencePage.prototype.lupap = function () {
        var _this = this;
        //      localStorage.removeItem('NominatimDetail');
        this.addr = this.data.otheraddress;
        console.log(this.addr);
        if (this.addr == '') {
            this.AlertMsg3('Please fill the address');
            //          this.openmapmodal();
        }
        if (this.addr == undefined) {
            this.AlertMsg3('Please fill the address');
            //          this.openmapmodal();
        }
        else {
            var matches = this.addr.match(/\d+/g);
            if (matches != null) {
                //    console.log('number');
                this.number = true;
            }
            else {
                this.number = false;
            }
            if (this.number == true) {
                console.log('yes it is having number');
                this.AlertMsg2('Empty response on Nominatim<br>Search via Google maps<br>');
            }
            else {
                console.log('false');
                var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["Headers"]();
                headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                var options_1 = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["RequestOptions"]({ headers: headers });
                if (this.addr) {
                    this.addr = this.addr.replace(/" "/g, '%20');
                    console.log(this.addr);
                    var adr = this.addr;
                    console.log(adr);
                    var Loading = this.loadingCtrl.create({
                        spinner: 'bubbles',
                        cssClass: 'loader'
                    });
                    Loading.present().then(function () {
                        _this.http.post('http://nominatim.openstreetmap.org/search/' + adr + '?format=json&addressdetails=1&limit=1&polygon_svg=1', options_1).map(function (res) { return res.json(); }).subscribe(function (response) {
                            Loading.dismiss();
                            console.log(response[0]);
                            if (response[0] != undefined) {
                                if (response[0].place_id != '') {
                                    console.log('working');
                                    localStorage.setItem('NominatimDetail', JSON.stringify(response[0]));
                                    //        this.navCtrl.push(NominatimapPage);
                                    var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__nominatimap_nominatimap__["a" /* NominatimapPage */]);
                                    modal.onDidDismiss(function (data) {
                                        _this.addrestype = 'other';
                                        _this.data.aaddress = '';
                                        //   console.log(data);
                                    });
                                    modal.present();
                                    if (response[0].address.road) {
                                        _this.data.otheraddress = response[0].place_id + ',' + response[0].address.road + ',' + response[0].address.city + ',' + response[0].address.postcode + ',' + response[0].address.state + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                    }
                                    else if (response[0].address.city) {
                                        _this.data.otheraddress = response[0].place_id + ',' + response[0].address.city + ',' + response[0].address.postcode + ',' + response[0].address.state + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                    }
                                    else if (response[0].address.state) {
                                        _this.data.otheraddress = response[0].place_id + ',' + response[0].address.state + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                    }
                                    else if (response[0].address.state_district) {
                                        _this.data.otheraddress = response[0].place_id + ',' + response[0].address.state + ',' + response[0].address.state_district + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                    }
                                    else if (response[0].address.country) {
                                        _this.data.otheraddress = response[0].place_id + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                    }
                                    _this.lat = response[0].lat;
                                    _this.long = response[0].lon;
                                    console.log(_this.lat, _this.long);
                                    _this.addrestype = 'other';
                                }
                            }
                            else {
                                console.log('neelanshi');
                                _this.AlertMsg2('Empty response on Nominatim<br>Search via Google maps<br>');
                            }
                            //    else
                            //        {
                            //       this.AlertMsg1('Empty response on Nominatim<br>Search via Google maps<br>');
                            //        this.openmapmodal();
                            //    }
                        });
                    });
                }
            }
        }
    };
    EditprefrencePage.prototype.AlertMsg3 = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                        //            this.openmapmodal();
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    };
    EditprefrencePage.prototype.AlertMsg2 = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                        _this.openmapmodal();
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    };
    EditprefrencePage.prototype.ngOnInit = function () {
        this.date = __WEBPACK_IMPORTED_MODULE_10_moment__(new Date()).format('YYYY-MM-DD');
        console.log(this.date);
        //    this.GetLocation();
    };
    EditprefrencePage.prototype.ToastMsg1 = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    EditprefrencePage.prototype.AlertMsg = function (msg) {
        var _this = this;
        var alertf = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'CANCEL',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        // this.navCtrl.push(RegisterPage)
                    }
                },
                {
                    text: 'Ok',
                    role: 'submit',
                    handler: function () {
                        console.log('Continue clicked');
                        _this.lat = _this.l;
                        _this.long = _this.lg;
                        console.log(_this.lat, _this.long);
                        //          alert(this.lat+','+this.long+'Current');
                        _this.addrestype = 'current';
                        _this.data.aaddress = '';
                        _this.data.otheraddress = '';
                        //            this.navCtrl.push(LocationPage);
                    }
                }
            ]
        });
        alertf.present();
    };
    EditprefrencePage.prototype.Tabpage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    EditprefrencePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditprefrencePage');
    };
    return EditprefrencePage;
}());
EditprefrencePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-editprefrence',template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\editprefrence\editprefrence.html"*/'<!--\n  Generated template for the EditprefrencePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Edit Preference</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="head">\n            <div class="form-sec">\n  		<form #preference="ngForm" novalidate>\n  	<ion-list style="margin: 0 !important;">\n           \n   \n  		<ion-item>\n                   \n<!--                \n-->                         <ion-datetime placeholder="MMM/DD/YYYY    HH:MM" displayFormat="MMM/DD/YYYY HH:mm" pickerFormat="MMM DD YYYY HH mm" min="{{date}}" max="3000"  [(ngModel)]= "data.datetime" name="datetime" #datetime="ngModel" required></ion-datetime>\n                        \n                </ion-item>\n\n           \n          \n  		<ion-item style="padding: 0;">\n  			<p>OR</p>\n                         \n  		</ion-item>\n            <ion-item style="padding:0;">\n                <p style="text-align: left;">Alternative date and time</p>\n            </ion-item>\n   \n  		<ion-item>\n                   \n  			<!--<p style="text-align: left;">Alternative date and time</p>-->\n  			<ion-datetime placeholder="MMM/DD/YYYY HH:MM" displayFormat="MMM/DD/YYYY HH:mm" pickerFormat="MMM DD YYYY HH mm"   min="{{date}}" max="3000" [(ngModel)]= "data.altdate" name="altdate" #altdate="ngModel"  ></ion-datetime>\n                </ion-item>\n<!--                <ion-item>\n                    <ion-input type="text" [(ngModel)]="data.dat" name="dat" #dat="ngModel"></ion-input>\n  		 </ion-item>-->\n           \n            <!--"-->\n  		<ion-item (click)="GetLocation()">\n  			<button ion-button icon-left class="currentbtn" >\n			  <ion-icon name="paper-plane"  ></ion-icon>\n			  Use my current location\n			</button>\n<!--[(ngModel)]="data.current" name="current" #current="ngModel"-->\n  		</ion-item>\n  		<ion-item style="padding: 0;">\n  			<p>OR</p>\n  		</ion-item>\n  		<ion-item>\n  			<ion-input type="text" placeholder="Saved Address" [readonly]="isReadonly()" [(ngModel)]="data.aaddress" name="aaddress" #aaddress="ngModel" ></ion-input>\n  		</ion-item>\n  		<ion-item style="padding: 0;">\n  			<p>OR</p>\n  		</ion-item>\n            <div style="position: relative; overflow: hidden;">\n    <ion-icon ios="ios-search-outline" md="md-search" (click)="lupap()" style="position: absolute;\n      top: 15px;left:8px;color: #000;z-index: 999;font-size:17px;font-weight: 700;"></ion-icon>\n  		<ion-item>\n  			<ion-input placeholder="Other Address" type="text"  [(ngModel)]= "data.otheraddress" name="otheraddress" #otheraddress="ngModel" style="padding-left:20px;" ></ion-input>\n                </ion-item>\n            </div>\n  	</ion-list>\n \n\n    <div>\n          <button ion-button type="submit"  [disabled]="!preference.valid" (click)="submitinfo(preference)" style="width: 100%;background-color: #322723;height: 30px;margin-top: 10px;">Submit</button>\n    </div>\n                    </form>\n        </div></div>\n<!--	 <div class="content-sec">\n		<h3>Popular City</h3>\n		<ion-list style="margin: 0 !important;">\n			<ion-item>\n				<p>New York City</p>\n			</ion-item>\n			<ion-item>\n				<p>Chicago,Illinois</p>\n			</ion-item>\n			<ion-item>\n				<p>Charleston,South Carolina</p>\n			</ion-item>\n			<ion-item>\n				<p>Las Vegas,Nevada</p>\n			</ion-item>\n			<ion-item>\n				<p>Seattle,Washington</p>\n			</ion-item>\n			<ion-item>\n				<p>San,Francisco,California</p>\n			</ion-item>\n		</ion-list>-->\n	<!--</div>--> \n</ion-content>\n'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\editprefrence\editprefrence.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], EditprefrencePage);

//# sourceMappingURL=editprefrence.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrequentquestionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(42);
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
 * Generated class for the FrequentquestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FrequentquestionPage = (function () {
    function FrequentquestionPage(navCtrl, navParams, appsetting, http, alertCtrl, toastCtrl, actionSheetCtrl, camera, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.getdata();
    }
    FrequentquestionPage.prototype.getdata = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
        var postdata = {
            pagename: 'FaQ (User)'
        };
        console.log(postdata);
        var serialized = this.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/image/icons3.gif'>",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'static/getstaticpagedata', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                console.log(response);
                if (response.status == true) {
                    _this.pagedata = response.data[0].pagedata;
                }
            });
        });
    };
    FrequentquestionPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    FrequentquestionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FrequentquestionPage');
    };
    return FrequentquestionPage;
}());
FrequentquestionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-frequentquestion',template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\frequentquestion\frequentquestion.html"*/'<!--\n  Generated template for the FrequentquestionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Frequent Questions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="main">\n		<h3>What is Lorem Ipsum?</h3>\n		<p [innerHtml]="pagedata"></p>\n		\n        </div>\n</ion-content>\n'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\frequentquestion\frequentquestion.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], FrequentquestionPage);

//# sourceMappingURL=frequentquestion.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
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
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedbackPage = (function () {
    function FeedbackPage(navCtrl, navParams, loadingCtrl, http, alertCtrl, appsetting, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.appsetting = appsetting;
        this.toastCtrl = toastCtrl;
        this.array = [];
        this.data = {};
        this.getfeedback();
    }
    FeedbackPage.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    FeedbackPage.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    FeedbackPage.prototype.ngOnInit = function () {
        this.scrollToBottom();
    };
    FeedbackPage.prototype.postfeedback = function (feedbackdata) {
        var _this = this;
        console.log(feedbackdata);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
        console.log(userid);
        var postdata = {
            user_id: userid,
            feedback: feedbackdata.value.feedback
        };
        var serialized = this.serializeObj(postdata);
        console.log(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'postfeedback', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
            // this.Loading.dismiss();
            _this.getfeedback();
            _this.data.feedback = '';
            _this.scrollToBottom();
            console.log(data);
        });
    };
    FeedbackPage.prototype.getfeedback = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        this.userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
        console.log(this.userid);
        var postdata = {
            user_id: this.userid
        };
        var serialized = this.serializeObj(postdata);
        console.log(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'getfeedback', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            // this.Loading.dismiss();
            console.log(response);
            _this.array = response.data;
        });
    };
    FeedbackPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    FeedbackPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getfeedback();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    FeedbackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedbackPage');
        console.log('Rahul Maurya');
        this.getfeedback();
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    return FeedbackPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scrollMe'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], FeedbackPage.prototype, "myScrollContainer", void 0);
FeedbackPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-feedback',template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\feedback\feedback.html"*/'<!--\n  Generated template for the FeedbackPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Rafaho Feedback</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>  \n    <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content refreshingText="Refreshing..." refreshingSpinner="bubbles" pullingText="Pull to refresh"></ion-refresher-content>\n  </ion-refresher>\n    \n	<div class="top-sec" #scrollMe style="overflow: scroll; height: xyz;">\n		<ion-list *ngFor="let dat of array">\n		  <ion-item>\n		    <ion-avatar item-start>\n		      <img src="assets/img/user.png">\n		    </ion-avatar>\n		    <h3>{{dat?.name}}</h3>\n		    <p>Posted {{dat.created_at}}</p>\n		    <h6>{{dat?.feedback}}</h6>\n		  </ion-item>\n		</ion-list>\n	</div>\n	\n	\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n      <form #feedbackform="ngForm" novalidate (submit)="postfeedback(feedbackform)">\n  	<div class="bottom-sec">\n		<div class="text">\n			 <ion-textarea class="enter" placeholder="Enter your feedback...." [(ngModel)]="data.feedback" name="feedback" #feedback="ngModel"></ion-textarea>\n		</div>\n		<div class="send"><button ion-button>Send</button></div>\n	</div>\n  </form>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\feedback\feedback.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
], FeedbackPage);

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(37);
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
 * Generated class for the ChangepwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangepwdPage = (function () {
    function ChangepwdPage(navCtrl, navParams, toastCtrl, loadingCtrl, http, alertCtrl, appsetting) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.appsetting = appsetting;
        this.key = false;
        this.data = {};
        this.ptype = 'password';
        this.iconname = 'eye';
        this.showpass = false;
        this.ptype1 = 'password';
        this.iconname1 = 'eye';
        this.showpass1 = false;
        this.ptype2 = 'password';
        this.iconname2 = 'eye';
        this.showpass2 = false;
    }
    ;
    ChangepwdPage.prototype.changepassword = function (changepass) {
        var _this = this;
        console.log('forgot');
        console.log(changepass.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        if (changepass.value.newpassword == changepass.value.cnewpassword) {
            var email = JSON.parse(localStorage.getItem('UserDetail')).email;
            if (changepass.value.oldpassword.indexOf(' ') >= 0 || changepass.value.newpassword.indexOf(' ') >= 0) {
                var toast = this.toastCtrl.create({
                    message: 'Space not allowed in password',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
            else {
                var postdata = {
                    email: email,
                    password: changepass.value.oldpassword,
                    newpassword: changepass.value.newpassword
                };
                console.log(postdata);
                //alert(JSON.stringify(postdata));
                var Serialized = this.serializeObj(postdata);
                var Loading = this.loadingCtrl.create({
                    spinner: 'bubbles',
                    cssClass: 'loader',
                    content: "Loading",
                    dismissOnPageChange: true
                });
                Loading.present().then(function () {
                    _this.http.post(_this.appsetting.myGlobalVar + 'changepwd', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                        console.log(response);
                        Loading.dismiss();
                        if (response.status == true) {
                            localStorage.removeItem('UserDetail');
                            _this.ToastMsg('Password updated successfully');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SigninPage */]);
                        }
                        else {
                            _this.ToastMsg(response.message);
                        }
                    });
                });
            }
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Change Password',
                subTitle: 'Password did not match',
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
    };
    ChangepwdPage.prototype.showPassword = function () {
        console.log('showpassword');
        this.showpass = !this.showpass;
        if (this.showpass) {
            this.ptype = 'text';
            this.iconname = 'eye-off';
        }
        else {
            this.ptype = 'password';
            this.iconname = 'eye';
        }
    };
    ChangepwdPage.prototype.showPassword1 = function () {
        console.log('showpassword');
        this.showpass1 = !this.showpass1;
        if (this.showpass1) {
            this.ptype1 = 'text';
            this.iconname1 = 'eye-off';
        }
        else {
            this.ptype1 = 'password';
            this.iconname1 = 'eye';
        }
    };
    ChangepwdPage.prototype.showPassword2 = function () {
        console.log('showpassword');
        this.showpass2 = !this.showpass2;
        if (this.showpass2) {
            this.ptype2 = 'text';
            this.iconname2 = 'eye-off';
        }
        else {
            this.ptype2 = 'password';
            this.iconname2 = 'eye';
        }
    };
    ChangepwdPage.prototype.handleKeyboardEvent = function (event, pass, cpass) {
        console.log(event.key);
        console.log(event);
        console.log(pass);
        console.log(cpass);
        console.log(this.key);
        if (pass == cpass) {
            console.log(this.key);
            return this.key = true;
        }
        else {
            console.log(this.key);
            return this.key = false;
        }
    };
    ChangepwdPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ChangepwdPage.prototype.ToastMsg = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    ChangepwdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangepasswordPage');
        console.log('Rahul Maurya');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    return ChangepwdPage;
}());
ChangepwdPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-changepwd',template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\changepwd\changepwd.html"*/'<!--\n  Generated template for the ChangepwdPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="theme-header">\n        <ion-title>Change password</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="main">\n        <div class="image">\n            <img src="assets/img/logo.png">\n        </div>\n    </div>\n    <div class="content-sec">\n        <div class="sign">\n            <form class="form-sec" #changepassForm="ngForm" novalidate (submit)="changepassword(changepassForm)">\n                  <ion-list>\n\n                    <ion-item  >\n                        <ion-label stacked>Enter your old password</ion-label>\n                        <ion-input type="{{ptype}}" [(ngModel)]="data.oldpassword" name="oldpassword" #oldpassword="ngModel" minlength="6"  pattern="(?!^[0-9]*$)(?!^[0-9@/*/-/#/&/^/$/\/|/;/_/,/~/?/!/./\'\'/`/<>/%/:/{}/()/+/=]*$)(?!^[a-zA-Z@/*/#/&/^/$/;/_/,/~/?/\/|/\'\'/-/`/./\/!/<>/%/:/()/{}/+/=]*$)(?!^[a-zA-Z0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9@/*/#/&/$/;/_/{}/%/:/^/?/~/`/\'\'/|/,/-/<>/!/\/./()/+/=]{6,30})"  required></ion-input>\n                        <button class="eyemain" ion-button clear type="button" color="dark" item-right>\n                    <ion-icon name="{{iconname}}" (click)="showPassword()" ></ion-icon>\n                  </button>\n                    </ion-item>\n\n                    <div class="alert alert-danger red" color="danger">\n                        <div *ngIf="oldpassword.errors && (oldpassword.dirty || oldpassword.touched)">\n                            <div [hidden]="!oldpassword.errors.required">\n                                Old password is required\n                            </div>\n                            <div [hidden]="!oldpassword.errors.minlength">\n                                Old password must be at least 6 digits\n                            </div>\n                            <div [hidden]="!oldpassword.errors.pattern">\n                                Password is weak(It should be combination of a-z/A-Z,0-9/@*#)\n                            </div>\n\n                        </div>\n\n                        <!--<ion-icon name="password" (click)="showPassword()" ></ion-icon>-->\n                    </div>\n\n\n                    <ion-item >\n                        <ion-label stacked>Enter your new password</ion-label>\n                        <ion-input type="{{ptype1}}" [(ngModel)]="data.newpassword" name="newpassword" #newpassword="ngModel" minlength="6"  pattern="(?!^[0-9]*$)(?!^[0-9@/*/-/#/&/^/$/\/|/;/_/,/~/?/!/./\'\'/`/<>/%/:/{}/()/+/=]*$)(?!^[a-zA-Z@/*/#/&/^/$/;/_/,/~/?/\/|/\'\'/-/`/./\/!/<>/%/:/()/{}/+/=]*$)(?!^[a-zA-Z0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9@/*/#/&/$/;/_/{}/%/:/^/?/~/`/\'\'/|/,/-/<>/!/\/./()/+/=]{6,30})"  required></ion-input>\n                             <button class="eyemain" ion-button clear type="button" color="dark" item-right>\n                    <ion-icon name="{{iconname1}}" (click)="showPassword1()" ></ion-icon>\n                  </button>\n                    </ion-item>\n\n                    <div class="alert alert-danger red" color="danger">\n                        <div *ngIf="newpassword.errors && (newpassword.dirty || newpassword.touched)">\n                            <div [hidden]="!newpassword.errors.required">\n                                New password is required\n                            </div>\n                            <div [hidden]="!newpassword.errors.minlength">\n                                New password must be at least 6 digits\n                            </div>\n                            <div [hidden]="!newpassword.errors.pattern">\n                                Password is weak(It should be combination of a-z/A-Z,0-9/@*#)\n                            </div>\n                        </div>\n                    </div>\n                    <!--<ion-icon name="{{iconname1}}" (click)="showPassword1()" ></ion-icon>--> \n\n\n\n\n                    <ion-item >\n                        <ion-label stacked>Confirm your new password</ion-label>\n                        <ion-input type="{{ptype2}}" [(ngModel)]="data.cnewpassword" (input)="handleKeyboardEvent($event,data.newpassword,data.cnewpassword)"\n\n                                   name="cnewpassword" #cnewpassword="ngModel"  required></ion-input>\n                           <button class="eyemain" ion-button clear type="button" color="dark" item-right>\n                    <ion-icon name="{{iconname2}}" (click)="showPassword2()" ></ion-icon>\n                  </button>\n                    </ion-item>\n                    <div class="alert alert-danger red" color="danger">\n                        <div *ngIf="key == false && cnewpassword.errors && (cnewpassword.dirty || cnewpassword.touched)">\n                            <div [hidden]="!cnewpassword.errors.required">\n                                Confirm password is required\n                            </div>\n\n                        </div>\n                        <div *ngIf="data.cnewpassword">\n                            <div *ngIf="key != true && (cnewpassword.dirty || cnewpassword.touched)">\n\n                                <span>Password mismatch </span>\n                            </div>\n                        </div>  \n                        <!--<ion-icon name="{{iconname2}}" (click)="showPassword2()" ></ion-icon>-->\n\n                    </div>\n                </ion-list>\n                <div class="frgtpwd">\n                    <button ion-button type="submit" [disabled]="!changepassForm.valid" >Save</button>\n                </div>\n            </form>\n        </div>\n\n\n    </div>\n</ion-content>'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\changepwd\changepwd.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */]])
], ChangepwdPage);

//# sourceMappingURL=changepwd.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgtpwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signin_signin__ = __webpack_require__(37);
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
 * Generated class for the ForgtpwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgtpwdPage = (function () {
    function ForgtpwdPage(navCtrl, navParams, appsetting, loadingCtrl, http, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.data = {};
    }
    ForgtpwdPage.prototype.forgot = function (forgotdata) {
        var _this = this;
        console.log('forgot');
        console.log(forgotdata.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
        var postdata = {
            email: forgotdata.value.email
        };
        console.log(postdata);
        //alert(JSON.stringify(postdata));
        var Serialized = this.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'forgetpassword', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                if (response.status == true) {
                    _this.ToastMsg('Check you email to reset password');
                    //this.ToastMsg('Login successfully');
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signin_signin__["a" /* SigninPage */]);
                }
                else {
                    _this.ToastMsg(response.message);
                }
            });
        });
    };
    ForgtpwdPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ForgtpwdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgtpwdPage');
        console.log('Rahul Maurya');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    ForgtpwdPage.prototype.ToastMsg = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: 'top'
        });
        toast.present();
    };
    ForgtpwdPage.prototype.AlertMsg = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'Continue',
                    role: 'submit',
                    handler: function () {
                        console.log('Continue clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    ForgtpwdPage.prototype.signupPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    return ForgtpwdPage;
}());
ForgtpwdPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-forgtpwd',template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\forgtpwd\forgtpwd.html"*/'<!--\n  Generated template for the ForgtpwdPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Reset password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="main">\n		<div class="image">\n			<img src="assets/img/logo.png">\n		</div>\n	</div>\n	<div class="content-sec">\n		<div class="sign">\n			<form class="form-sec" #forgetpwd="ngForm" novalidate (submit)="forgot(forgetpwd)">\n				<ion-list>\n\n				  <ion-item>\n				    <ion-label stacked>Enter your registered email</ion-label>\n				    <ion-input type="email" [(ngModel)]="data.email" name="email" #email="ngModel" pattern="^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$" required></ion-input>\n				  </ion-item>\n					 <div class="alert alert-danger red" color="danger">\n            <div *ngIf="email.errors && (email.dirty || email.touched)">\n              <div [hidden]="!email.errors.required">\n                Email is required\n              </div>\n              <div [hidden]="!email.errors.pattern">\n                Invalid email\n              </div>\n            </div>\n          </div>\n				</ion-list>\n				<div class="frgtpwd">\n			<button ion-button type="submit" [disabled]="!forgetpwd.valid">Submit</button>\n			</div>\n			</form>\n		</div>\n		<div class="frgtpwd">\n			<h3 class="register">Don\'t have an account? <span (click)="signupPage()">Register</span></h3>\n		</div>\n\n	</div>\n</ion-content>\n'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\forgtpwd\forgtpwd.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], ForgtpwdPage);

//# sourceMappingURL=forgtpwd.js.map

/***/ }),

/***/ 145:
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
webpackEmptyAsyncContext.id = 145;

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addwallet/addwallet.module": [
		452,
		25
	],
	"../pages/cart/cart.module": [
		453,
		24
	],
	"../pages/change/change.module": [
		454,
		1
	],
	"../pages/changepwd/changepwd.module": [
		455,
		23
	],
	"../pages/chefdetials/chefdetials.module": [
		457,
		22
	],
	"../pages/editprefrence/editprefrence.module": [
		456,
		21
	],
	"../pages/editprofile/editprofile.module": [
		458,
		20
	],
	"../pages/favorites/favorites.module": [
		459,
		19
	],
	"../pages/feedback/feedback.module": [
		460,
		18
	],
	"../pages/forgtpwd/forgtpwd.module": [
		461,
		17
	],
	"../pages/frequentquestion/frequentquestion.module": [
		462,
		16
	],
	"../pages/help/help.module": [
		463,
		15
	],
	"../pages/location/location.module": [
		464,
		14
	],
	"../pages/mapmodal/mapmodal.module": [
		467,
		13
	],
	"../pages/nominatimap/nominatimap.module": [
		465,
		12
	],
	"../pages/orderdetial/orderdetial.module": [
		466,
		11
	],
	"../pages/payment/payment.module": [
		468,
		10
	],
	"../pages/productlist/productlist.module": [
		469,
		9
	],
	"../pages/productview/productview.module": [
		470,
		8
	],
	"../pages/rafaho/rafaho.module": [
		471,
		7
	],
	"../pages/rating/rating.module": [
		473,
		6
	],
	"../pages/reviews/reviews.module": [
		472,
		5
	],
	"../pages/selectdish/selectdish.module": [
		474,
		4
	],
	"../pages/southfood/southfood.module": [
		475,
		0
	],
	"../pages/terms/terms.module": [
		476,
		3
	],
	"../pages/whyrafaho/whyrafaho.module": [
		477,
		2
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
webpackAsyncContext.id = 187;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatPage = (function () {
    function ChatPage(navCtrl, navParams, platform, alertCtrl, loadCtrl, appsetting, toastCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.loadCtrl = loadCtrl;
        this.appsetting = appsetting;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.user = [];
        this.data = {};
        this.date = new Date().toLocaleTimeString();
        console.log(this.date);
        this.user = JSON.parse(localStorage.getItem('UserDetail'));
        console.log(this.user);
        this.getchat();
    }
    ChatPage.prototype.addmessage = function (msg) {
        var _this = this;
        console.log(msg);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var postdata = {
            chef_id: '5a8ab822d1cb4b0d329a55ad',
            user_id: this.user._id,
            message: msg,
            sender_id: this.user._id
        };
        var serialized = this.serializeObj(postdata);
        //           var Loading = this.loadCtrl.create({
        //            spinner: 'hide',
        //            cssClass: 'loader',
        //            content: "<img src='assets/image/icons3.gif'>",
        //            dismissOnPageChange:true
        //     });
        //     Loading.present().then(() => {
        this.http.post(this.appsetting.myGlobalVar + 'chats/addmessage', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data1) {
            console.log('get msg');
            console.log(data1);
            //        Loading.dismiss();
            if (data1.status == true) {
                _this.getchat();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: data1.message,
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: 'Something went wrong',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
            //            Loading.dismissAll();
        });
        //        })
    };
    ChatPage.prototype.getchat = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var postdata1 = {
            chef_id: '5a8ab822d1cb4b0d329a55ad',
            user_id: this.user._id
        };
        var serialized = this.serializeObj(postdata1);
        this.http.post(this.appsetting.myGlobalVar + 'chats/getchat', serialized, options).map(function (res) { return res.json(); }).subscribe(function (res) {
            console.log('get chat');
            console.log(res);
            _this.chat = res.data[0].chat_messages;
        });
    };
    ChatPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    return ChatPage;
}());
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-chat',template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\chat\chat.html"*/'<ion-header>\n  <ion-navbar color="theme-header">\n    <ion-title>Chat</ion-title>\n  </ion-navbar>\n\n  <div class="segment-sec">\n  <ion-toolbar>\n  <ion-segment [(ngModel)]="pet">\n    <ion-segment-button value="archived">\n      Archived\n    </ion-segment-button>\n    <ion-segment-button value="chat">\n      Chat\n    </ion-segment-button>\n  </ion-segment>\n  </ion-toolbar>\n</div>\n</ion-header>\n\n<ion-content padding>\n<div [ngSwitch]="pet">\n<div class="chatsec" *ngSwitchCase="\'chat\'">\n	<ul *ngFor="let msg of chat">\n		<li *ngIf="msg.sender_id == msg.chef_id">\n			<span class="userimg"><img src="assets/img/chatimg.png"></span>\n			<div class="chattxt">\n				<p>{{msg.message}}</p>\n				<span class="timedate"> 12:20am</span>\n			</div>\n		</li>\n\n		<li class="rightchat"  *ngIf="msg.sender_id == user._id">\n			<div class="chattxt">\n				<p>{{msg.message}}</p>\n				<span class="timedate">{{date}}</span>\n			</div>\n		</li>\n\n<!--		<li>\n			<span class="userimg"><img src="assets/img/chatimg.png"></span>\n			<div class="chattxt">\n				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>\n				<span class="timedate"> 12:20am</span>\n			</div>\n		</li>\n		<li>\n			<span class="userimg"><img src="assets/img/chatimg.png"></span>\n			<div class="chattxt">\n				<p>Lorem Ipsum is simply dummy text of the printing and.</p>\n				<span class="timedate"> 12:20am</span>\n			</div>\n		</li>\n		<li class="rightchat">\n			<div class="chattxt">\n				<p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>\n				<span class="timedate"> 12:20am</span>\n			</div>\n		</li>-->\n	</ul>\n</div>\n	<ion-list *ngSwitchCase="\'archived\'">\n	  <ion-item>\n	    <ion-avatar item-start>\n	      <img src="assets/img/amanda.png">\n	    </ion-avatar>\n	    <h2>Amanda</h2>\n	  </ion-item>\n	 <ion-item>\n	    <ion-avatar item-start>\n	      <img src="assets/img/arenda.png">\n	    </ion-avatar>\n	    <h2>Arenda</h2>\n	  </ion-item>\n	 <ion-item>\n	    <ion-avatar item-start>\n	      <img src="assets/img/aron.png">\n	    </ion-avatar>\n	    <h2>Aron</h2>\n	  </ion-item>\n	 <ion-item>\n	    <ion-avatar item-start>\n	      <img src="assets/img/aron.png">\n	    </ion-avatar>\n	    <h2>Aron Sanched</h2>\n	  </ion-item>\n	 <ion-item>\n	    <ion-avatar item-start>\n	      <img src="assets/img/amanda.png">\n	    </ion-avatar>\n	    <h2>Amanda</h2>\n	  </ion-item>\n	 <ion-item>\n	    <ion-avatar item-start>\n	      <img src="assets/img/profile.png">\n	    </ion-avatar>\n	    <h2>Frankil Aron</h2>\n	  </ion-item>\n	  <ion-item>\n	    <ion-avatar item-start>\n	      <img src="assets/img/arenda.png">\n	    </ion-avatar>\n	    <h2>Arenda</h2>\n	  </ion-item>\n	</ion-list>\n\n</div>\n\n\n	\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n		<div class="text">\n			 <ion-textarea class="enter" placeholder="Enter your text" [(ngModel)]="data.message" name="message"></ion-textarea>\n		</div>\n		<ion-buttons end>\n      <button ion-button icon-only class="btnprofile" (click)="addmessage(data.message)"><ion-icon name="paper-plane"></ion-icon></button>     \n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\chat\chat.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Service = (function () {
    function Service() {
    }
    Service.prototype.getSomething = function () {
        return 'something';
    };
    return Service;
}());
Service = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], Service);

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_filter__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chefdetials_chefdetials__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mapmodal_mapmodal__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__productlist_productlist__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_android_permissions__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl, appsetting, platform, http, nativeGeocoder, geolocation, androidPermissions, GeolocationOptions, loadingCtrl, alertCtrl, toastCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.appsetting = appsetting;
        this.platform = platform;
        this.http = http;
        this.nativeGeocoder = nativeGeocoder;
        this.geolocation = geolocation;
        this.androidPermissions = androidPermissions;
        this.GeolocationOptions = GeolocationOptions;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.geocoder = new google.maps.Geocoder();
        this.searcharray = [];
        this.searcharray1 = [];
        this.pagon = 1;
        this.arry = true;
        this.Pagetotal = 1;
        this.array11 = [];
        this.altredavail = 1;
        this.lostatus = false;
        this.arr1 = null;
        this.ar = [];
        this.filtrarray = [];
        this.data = {};
        this.chefsearch = {};
        this.rating = 0;
        //        this.getcurrentlocationanddata();
        this.firsthit();
        this.get();
        //        this.platform.ready().then(() => {
        //            var lastTimeBackPress = 0;
        //            var timePeriodToExit = 2000;
        //
        //            this.platform.registerBackButtonAction(() => {
        //                // get current active page
        //                let view = this.navCtrl.getctive();
        //                if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
        //                    this.platform.exitApp(); //Exit from app
        //                } else {
        //                    // alert('Press back again to exit App?');
        //                    let toast = this.toastCtrl.create({
        //                        message: 'Press back again to exit from app?',
        //                        duration: 3000,
        //                        position: 'bottom'
        //                    });
        //                    toast.present();
        //                    lastTimeBackPress = new Date().getTime();
        //                }
        //            });
        //        });
        this.userdetail = JSON.parse(localStorage.getItem('UserDetail'));
        console.log(this.userdetail);
        this.pet = "kittens";
        events.subscribe('index', function (res) {
            console.log(res);
            if (res == 0) {
                _this.firsthit();
                _this.get();
            }
            else {
            }
        });
        //                events.subscribe('homepage', (home) =>         {
        //      console.log(home)        ;
        //      clearInterval(this.appsetting.interval)        ;
        //      this.lookbooklist()        ;
        //    });
    }
    HomePage.prototype.firsthit = function () {
        var _this = this;
        this.data.datetime = this.date;
        //            alert(this.data.datetime);
        if (JSON.parse(localStorage.getItem('proctnumberincart'))) {
            this.no_of_products = JSON.parse(localStorage.getItem('proctnumberincart'));
            console.log(this.no_of_products);
        }
        else {
            this.no_of_products = 0;
        }
        var options;
        this.geolocation.getCurrentPosition(options).then(function (resp) {
            //            alert('aagya');
            _this.lat = resp.coords.latitude;
            _this.long = resp.coords.longitude;
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            _this.lostatus = true;
            var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["Headers"]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["RequestOptions"]({ headers: headers });
            var postdata = {
                lat: _this.lat,
                long: _this.long
            };
            var latLng = new google.maps.LatLng(_this.lat, _this.long);
            var Serialized = _this.serializeObj(postdata);
            _this.http.post('  http://rafao.us-west-2.elasticbeanstalk.com/api/home/reverse_geocoding', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response.data);
                //            alert(response.data);
                var resso = JSON.parse(response.data);
                console.log(resso.response);
                //            console.log(resso.response.properties.address);
                if ((response.data == '{"message":"Result not found"}') || (resso.response.properties.address == null) || (resso.response == undefined)) {
                    //               alert('noresult');
                    _this.geocoder.geocode({ 'location': latLng }, (function (results, status) {
                        //                        alert('googlegeocoding');
                        if (status == google.maps.GeocoderStatus.OK) {
                            if (results == '') {
                                _this.ToastMsg('Invalid Location');
                                _this.lat = '';
                                _this.long = '';
                            }
                            else {
                                if (results[0]) {
                                    //                                    alert(results[0].formatted_address);
                                    console.log(results[0].place_id);
                                    console.log(results[0].formatted_address);
                                    _this.chefsearch.search = results[0].formatted_address;
                                }
                                else if (results[1]) {
                                    //                                    alert(results[1].formatted_address);
                                    _this.chefsearch.search = results[1].formatted_address;
                                    console.log(results[1].formatted_address);
                                }
                            }
                        }
                        //		
                    }));
                }
                else {
                    //                var resso = JSON.parse(response.data)
                    //            alert('lupap address');
                    console.log(resso.response.message);
                    if (resso.response.message == "Result not found") {
                        _this.ToastMsg('Not found');
                        _this.lat = '';
                        _this.long = '';
                    }
                    else {
                        //                     alert('lupap address');
                        var addr = resso.response.properties.address;
                        console.log(resso.response);
                        if (addr == null) {
                        }
                        _this.chefsearch.search = addr + resso.response.properties.city;
                        console.log(_this.chefsearch.search);
                    }
                }
            });
            _this.get();
        }, function (err) {
            _this.ToastMsg('Please enable your Location.');
        });
        //        localStorage.setItem('Currentlocation',this.chefsearch.search);
    };
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            //            this.firsthit();
            _this.get();
            console.log('Async operation has ended');
            refresher.complete();
        }, 3000);
    };
    HomePage.prototype.cartpage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
    };
    HomePage.prototype.doInfinite = function (event) {
        console.log(event);
        this.infiniteScroll = event;
        if (this.pagon < this.Pagetotal) {
            console.log(this.Pagetotal);
            this.pagon++;
            console.log(this.pagon);
            this.scrollupdate(this.pagon);
        }
        else {
            event.complete();
        }
    };
    HomePage.prototype.scrollupdate = function (pages) {
        var _this = this;
        //         this.array =[];
        console.log(pages);
        var temp = this;
        var totalvalue = 0;
        this.maind = __WEBPACK_IMPORTED_MODULE_10_moment__(this.data.datetime).format('YYYY-MM-DD');
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["RequestOptions"]({ headers: headers });
        //        console.log(this.filtrarray);
        if ((this.filtrarray.length > 0) || (this.filtrarray != [])) {
            console.log(this.filtrarray);
            if (this.array.length > 0) {
                var postdata = {
                    lat: this.filtrarray.lat,
                    long: this.filtrarray.long,
                    notavalibility_dates: this.filtrarray.notavalibility_dates,
                    experience: this.filtrarray.experience,
                    cuisine: this.filtrarray.cuisine,
                    attribute: this.filtrarray.attribute,
                    page: pages
                };
                console.log(postdata);
                var serialized = this.serializeObj(postdata);
                setTimeout(function () {
                    _this.http.post(_this.appsetting.myGlobalVar + 'users/filterall', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                        console.log(data);
                        _this.Pagetotal = data.pages;
                        if (data.status == true) {
                            if (data.data.length > 0) {
                                var trial = data.data;
                                console.log(trial);
                                for (var t = 0; t < data.data.length; t++) {
                                    _this.array11.push(data.data[t]);
                                }
                                //                            this.filtrarray = this.array;
                                console.log(_this.array11);
                                //                          var m =  moment(this.data.datetime).format('YYYY-MM-DD')
                                //                            console.log(m);
                                //                          data.data.forEach(function(value,key){
                                //                              console.log(value.avalibilities);
                                //                              if(value.avalibilities.length>0) {
                                //                                  value.avalibilities.forEach(function(val,k){
                                //                                      console.log(val);
                                //                                      console.log(k);
                                //                                       if(moment(temp.alternatedate).isSame(val.notavalibility_dates)){
                                //                                      console.log('matched'+k);
                                //                                            temp.altredavail = 0;
                                //                                            val.altredavail = 0;
                                //                                        }else{
                                //                                        
                                //                                            console.log('not matched');
                                //                                            val.altredavail = 1+':'+k;
                                //                                        }
                                //                                        })
                                //                              }
                                //                          })
                                for (var i = 0; i < trial.length; i++) {
                                    if (trial[i].avalibilities.length > 0) {
                                        for (var j = 0; j < trial[i].avalibilities.length; j++) {
                                            if (__WEBPACK_IMPORTED_MODULE_10_moment__(temp.alternatedate).isSame(trial[i].avalibilities[j].notavalibility_dates)) {
                                                console.log('matched');
                                                console.log(temp.alternatedate);
                                                console.log(trial[i].avalibilities[j].notavalibility_dates);
                                                temp.altredavail = 0;
                                                trial[i].altredavail = 0;
                                                break;
                                            }
                                            else {
                                                console.log('not matched');
                                                console.log(temp.alternatedate);
                                                console.log(trial[i].avalibilities[j].notavalibility_dates);
                                                trial[i].altredavail = 1;
                                            }
                                        }
                                    }
                                    else {
                                        trial[i].mainredavail = 1;
                                        trial[i].altredavail = 1;
                                    }
                                }
                                for (var d = 0; d < trial.length; d++) {
                                    if (trial[d].avalibilities.length > 0) {
                                        for (var j = 0; j < trial[d].avalibilities.length; j++) {
                                            if (__WEBPACK_IMPORTED_MODULE_10_moment__(temp.maind).isSame(trial[d].avalibilities[j].notavalibility_dates)) {
                                                console.log('matched');
                                                console.log(trial[d].avalibilities[j].notavalibility_dates);
                                                temp.mainredavail = 0;
                                                trial[d].mainredavail = 0;
                                                break;
                                            }
                                            else {
                                                console.log('not matched');
                                                console.log(trial[d].avalibilities[j].notavalibility_dates);
                                                trial[d].mainredavail = 1;
                                            }
                                        }
                                    }
                                    else {
                                        trial[d].mainredavail = 1;
                                        trial[d].altredavail = 1;
                                    }
                                }
                                //                      console.log( this.mainredavail);
                                console.log(_this.array11);
                                _this.array11.forEach(function (value, key) {
                                    temp.rating = 0;
                                    value.comments_and_ratings.forEach(function (value1, key1) {
                                        if (value1 == []) {
                                            value1.avgrating = 0;
                                        }
                                        else {
                                            console.log(value1.rating);
                                            console.log(value.comments_and_ratings.length);
                                            console.log(temp.rating);
                                            temp.rating = (temp.rating + value1.rating);
                                            console.log(temp.rating);
                                        }
                                        totalvalue = temp.rating / value.comments_and_ratings.length;
                                        totalvalue = Number((totalvalue).toFixed(1));
                                        value.avgrating = totalvalue;
                                    });
                                });
                                _this.array = _this.array11;
                                _this.bit = 1;
                                _this.arr1 = 1;
                            }
                            else {
                                _this.array = [];
                                _this.arr1 = null;
                                _this.bit = 1;
                                console.log('hjuij');
                            }
                        }
                        else {
                            _this.array = [];
                            _this.arr1 = null;
                            _this.bit = 1;
                        }
                    }, function (err) {
                        _this.ToastMsg('Something went wrong');
                        console.log(err);
                    });
                    if (_this.infiniteScroll) {
                        _this.infiniteScroll.complete();
                    }
                }, 3000);
            }
        }
    };
    HomePage.prototype.fltr_opn = function () {
        var _this = this;
        var temp = this;
        var totalvalue = 0;
        this.maind = __WEBPACK_IMPORTED_MODULE_10_moment__(this.data.datetime).format('YYYY-MM-DD');
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["RequestOptions"]({ headers: headers });
        var curr = [];
        console.log(this.chefsearch.search);
        curr.push({ loc: this.chefsearch.search, lat: this.lat, long: this.long });
        console.log(curr);
        localStorage.setItem('Currentaddr', JSON.stringify(curr));
        var fltr_opn = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__filter_filter__["a" /* FilterPage */]);
        fltr_opn.onDidDismiss(function (filterdata) {
            console.log(filterdata);
            _this.filtrarray = filterdata;
            var postdata = {
                lat: filterdata.lat,
                long: filterdata.long,
                notavalibility_dates: filterdata.notavalibility_dates,
                experience: filterdata.experience,
                cuisine: filterdata.cuisine,
                attribute: filterdata.attribute,
                page: 1
            };
            console.log(postdata);
            _this.array11 = [];
            var serialized = _this.serializeObj(postdata);
            _this.http.post(_this.appsetting.myGlobalVar + 'users/filterall', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log(data);
                _this.Pagetotal = data.pages;
                if (data.status == true) {
                    if (data.data.length > 0) {
                        var trial = data.data;
                        console.log(trial);
                        for (var t = 0; t < data.data.length; t++) {
                            _this.array11.push(data.data[t]);
                        }
                        //                            this.filtrarray = this.array;
                        console.log(_this.array11);
                        //                          var m =  moment(this.data.datetime).format('YYYY-MM-DD')
                        //                            console.log(m);
                        //                          data.data.forEach(function(value,key){
                        //                              console.log(value.avalibilities);
                        //                              if(value.avalibilities.length>0) {
                        //                                  value.avalibilities.forEach(function(val,k){
                        //                                      console.log(val);
                        //                                      console.log(k);
                        //                                       if(moment(temp.alternatedate).isSame(val.notavalibility_dates)){
                        //                                      console.log('matched'+k);
                        //                                            temp.altredavail = 0;
                        //                                            val.altredavail = 0;
                        //                                        }else{
                        //                                        
                        //                                            console.log('not matched');
                        //                                            val.altredavail = 1+':'+k;
                        //                                        }
                        //                                        })
                        //                              }
                        //                          })
                        for (var i = 0; i < trial.length; i++) {
                            if (trial[i].avalibilities.length > 0) {
                                for (var j = 0; j < trial[i].avalibilities.length; j++) {
                                    if (__WEBPACK_IMPORTED_MODULE_10_moment__(temp.alternatedate).isSame(trial[i].avalibilities[j].notavalibility_dates)) {
                                        console.log('matched');
                                        console.log(temp.alternatedate);
                                        console.log(trial[i].avalibilities[j].notavalibility_dates);
                                        temp.altredavail = 0;
                                        trial[i].altredavail = 0;
                                        break;
                                    }
                                    else {
                                        console.log('not matched');
                                        console.log(temp.alternatedate);
                                        console.log(trial[i].avalibilities[j].notavalibility_dates);
                                        trial[i].altredavail = 1;
                                    }
                                }
                            }
                            else {
                                trial[i].mainredavail = 1;
                                trial[i].altredavail = 1;
                            }
                        }
                        for (var d = 0; d < trial.length; d++) {
                            if (trial[d].avalibilities.length > 0) {
                                for (var j = 0; j < trial[d].avalibilities.length; j++) {
                                    if (__WEBPACK_IMPORTED_MODULE_10_moment__(temp.maind).isSame(trial[d].avalibilities[j].notavalibility_dates)) {
                                        console.log('matched');
                                        console.log(trial[d].avalibilities[j].notavalibility_dates);
                                        temp.mainredavail = 0;
                                        trial[d].mainredavail = 0;
                                        break;
                                    }
                                    else {
                                        console.log('not matched');
                                        console.log(trial[d].avalibilities[j].notavalibility_dates);
                                        trial[d].mainredavail = 1;
                                    }
                                }
                            }
                            else {
                                trial[d].mainredavail = 1;
                                trial[d].altredavail = 1;
                            }
                        }
                        console.log(_this.mainredavail);
                        console.log(_this.array11);
                        _this.array11.forEach(function (value, key) {
                            temp.rating = 0;
                            value.comments_and_ratings.forEach(function (value1, key1) {
                                if (value1 == []) {
                                    value1.avgrating = 0;
                                }
                                else {
                                    console.log(value1.rating);
                                    console.log(value.comments_and_ratings.length);
                                    console.log(temp.rating);
                                    temp.rating = (temp.rating + value1.rating);
                                    console.log(temp.rating);
                                }
                                totalvalue = temp.rating / value.comments_and_ratings.length;
                                totalvalue = Number((totalvalue).toFixed(1));
                                value.avgrating = totalvalue;
                            });
                        });
                        _this.array = _this.array11;
                        _this.bit = 1;
                        _this.arr1 = 1;
                    }
                    else {
                        _this.array = [];
                        _this.arr1 = null;
                        _this.bit = 1;
                        console.log('hjuij');
                    }
                }
                else {
                    _this.array = [];
                    _this.arr1 = null;
                    _this.bit = 1;
                }
            }, function (err) {
                _this.ToastMsg('Something went wrong');
                console.log(err);
            });
        });
        fltr_opn.present();
    };
    HomePage.prototype.detail = function (dat) {
        console.log(dat.mainredavail);
        console.log(dat.altredavail);
        if (dat.mainredavail == 0) {
            //      this.bukingdate = this.data.altdate.match(/:00Z/g);
            console.log(this.bukingdate);
            if (this.bukingdate == null) {
                this.bukingdate = this.data.altdate + ':00Z';
                console.log(this.bukingdate);
            }
            else {
                this.bukingdate = this.data.altdate;
            }
        }
        else {
            this.bukingdate = this.data.datetime.match(/:00Z/g);
            console.log(this.bukingdate);
            if (this.bukingdate == null) {
                this.bukingdate = this.data.datetime + ':00Z';
                console.log(this.bukingdate);
            }
            else {
                this.bukingdate = this.data.datetime;
            }
        }
        console.log(this.bukingdate);
        localStorage.setItem('Chefdetail', JSON.stringify(dat));
        localStorage.setItem('Bookingdatetime', JSON.stringify(this.bukingdate));
        localStorage.setItem('Altdatetime', JSON.stringify(this.data.altdate));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chefdetials_chefdetials__["a" /* ChefdetialsPage */]);
    };
    HomePage.prototype.prdlist = function (prods) {
        console.log(prods);
        localStorage.setItem('dishprod', JSON.stringify(prods));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__productlist_productlist__["a" /* ProductlistPage */]);
    };
    HomePage.prototype.openlist = function () {
        this.openllist = 1;
        this.blurclass = 'blurbg';
        this.userdetail = JSON.parse(localStorage.getItem('UserDetail'));
        console.log(this.userdetail);
        this.searcharray1 = [];
        this.searcharray = [];
        console.log(this.searcharray);
        if ((this.userdetail.saved_address.length > 0) || (this.userdetail.favorite_address.length > 0)) {
            for (var p = 0; p < this.userdetail.saved_address.length; p++) {
                this.searcharray.push(this.userdetail.saved_address[p].saved_address);
            }
            console.log(this.searcharray);
            console.log(this.userdetail.favorite_address);
            for (var c = 0; c < this.userdetail.favorite_address.length; c++) {
                this.searcharray1.push(this.userdetail.favorite_address[c].favorite_address);
            }
            //          this.searcharray1 = JSON.parse(localStorage.getItem('Favaddress'));  
            console.log(this.searcharray1);
        }
        else {
            this.searcharray = '';
            this.searcharray1 = '';
            this.openmapmodal();
        }
        //          if (this.userdetail.favorite_address.length > 0){
        ////      if(JSON.parse(localStorage.getItem('Svedaddress'))||JSON.parse(localStorage.getItem('Favaddress'))){
        //        
        ////      this.searcharray = JSON.parse(localStorage.getItem('Svedaddress'));
        ////      this.searcharray =  this.userdetail.favourite_addresses
        //     
        ////       if(JSON.parse(localStorage.getItem('Favaddress'))){
        //
        //       }
        //       else{
        //           this.searcharray1 = '';
        //       }
        console.log(this.searcharray);
    };
    HomePage.prototype.del = function (index) {
        console.log(index);
        this.searcharray.pop(index);
        var productid1;
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["RequestOptions"]({ headers: headers });
        for (var z = 0; z < this.userdetail.saved_address.length; z++) {
            if (index == z) {
                productid1 = this.userdetail.saved_address[z]._id;
            }
        }
        var postdata1 = {
            user_id: this.userdetail._id,
            saved_address_id: productid1
        };
        console.log(postdata1);
        var Serialized = this.serializeObj(postdata1);
        this.http.post(this.appsetting.myGlobalVar + 'user/delete_saved_address', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response11) {
            console.log(response11);
            if (response11.status == true) {
                localStorage.setItem('UserDetail', JSON.stringify(response11.data[0]));
            }
        });
        //         this.appsetting.svd=this.searcharray
    };
    HomePage.prototype.del1 = function (index) {
        this.searcharray1.pop(index);
        var productid;
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["RequestOptions"]({ headers: headers });
        for (var z = 0; z < this.userdetail.favorite_address.length; z++) {
            if (index == z) {
                productid = this.userdetail.favorite_address[z]._id;
            }
        }
        var postdata1 = {
            user_id: this.userdetail._id,
            favorite_address_id: productid
        };
        console.log(postdata1);
        var Serialized = this.serializeObj(postdata1);
        this.http.post(this.appsetting.myGlobalVar + 'user/delete_favarite_address', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response1) {
            console.log(response1);
            if (response1.status == true) {
                localStorage.setItem('UserDetail', JSON.stringify(response1.data[0]));
            }
        });
        //               
        //      console.log(ind        ex);
        //      this.searcharray1.pop(ind        ex);
        //      this.appsetting.saved=this.searchar        ray1
        //       console.log(this.searcharr        ay1)
        //         localStorage.setItem('Favaddress',JSON.stringify( this.appsetting.saved));
    };
    HomePage.prototype.getItem = function (item) {
        //        alert(item);
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.chefsearch.search = item;
            //            alert('inside alert')
            //            alert(this.chefsearch.search);
            _this.nativeGeocoder.forwardGeocode(item).then(function (coordinates) {
                console.log('The coordinates are latitude=' + coordinates.latitude + ' and longitude=' + coordinates.longitude);
                _this.lat = coordinates.latitude;
                _this.long = coordinates.longitude;
                localStorage.setItem('Orderaddress', JSON.stringify(item));
                _this.searcharray = [];
                _this.openllist = 0;
                _this.blurclass = 'blurbg1';
                _this.get();
                //                alert(this.lat);
            }).catch(function (error) {
                //                alert(JSON.stringify("err " + error))
                Loading.dismiss();
            });
            //   setTimeout(() => {
            //    Loading.dismiss();
            //  }, 2000);
        });
    };
    HomePage.prototype.cancellist = function () {
        this.openllist = 0;
        this.blurclass = 'blurbg1';
    };
    HomePage.prototype.openmapmodal = function () {
        var _this = this;
        if (this.lostatus == true) {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__mapmodal_mapmodal__["a" /* MapmodalPage */]);
            modal.onDidDismiss(function (data) {
                _this.chefsearch.search = data.address;
                console.log(_this.data.address);
                console.log(data.lati);
                console.log(data.longi);
                _this.lat = data.lati;
                _this.long = data.longi;
                //    this.searcharray=[];
                _this.openllist = 0;
                _this.blurclass = 'blurbg1';
                _this.get();
                //    this.AlertMsg4('Your Location:'+this.data.address+' '+' is  saved')
            });
            modal.present();
        }
        else {
            this.ToastMsg('Please enable your Location');
        }
    };
    HomePage.prototype.getchefavail = function (dataalt) {
        var _this = this;
        console.log(dataalt);
        this.alternatedate = __WEBPACK_IMPORTED_MODULE_10_moment__(dataalt).format('YYYY-MM-DD');
        console.log(this.alternatedate);
        console.log(this.filtrarray);
        if ((this.filtrarray.length == 0) || (this.filtrarray == [])) {
            this.get();
        }
        else {
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                cssClass: 'loader',
                content: "Loading",
                dismissOnPageChange: true
            });
            Loading.present().then(function () {
                _this.array11 = [];
                _this.scrollupdate(1);
                setTimeout(function () {
                    Loading.dismissAll();
                }, 2500);
            });
        }
    };
    HomePage.prototype.getchefavail1 = function (datamain) {
        var _this = this;
        console.log(datamain);
        this.maind = __WEBPACK_IMPORTED_MODULE_10_moment__(datamain).format('YYYY-MM-DD');
        console.log(this.maind);
        console.log(this.filtrarray);
        if ((this.filtrarray.length == 0) || (this.filtrarray == [])) {
            this.get();
        }
        else {
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                cssClass: 'loader',
                content: "Loading",
                dismissOnPageChange: true
            });
            Loading.present().then(function () {
                _this.array11 = [];
                _this.scrollupdate(1);
                setTimeout(function () {
                    Loading.dismissAll();
                }, 2500);
            });
        }
    };
    HomePage.prototype.get = function () {
        var _this = this;
        this.filtrarray = [];
        var temp = this;
        var totalvalue = 0;
        this.maind = __WEBPACK_IMPORTED_MODULE_10_moment__(this.data.datetime).format('YYYY-MM-DD');
        //         alert('get');
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["RequestOptions"]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
        //     var latt = JSON.parse(localStorage.getItem('Userpref')).lat;
        //        var longg = JSON.parse(localStorage.getItem('Userpref')).long;
        console.log(this.lat, this.long);
        console.log(userid);
        if ((this.lat) && (this.long)) {
            var postdata = {
                app_user_id: userid,
                latitude: this.lat,
                longitude: this.long,
            };
            var serialized = this.serializeObj(postdata);
            console.log(postdata);
            //     alert(postdata);
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                cssClass: 'loader',
                content: "Loading",
                dismissOnPageChange: true
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.myGlobalVar + 'getchefsbyprefrence', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                    if (localStorage.getItem('chefdata')) {
                        console.log(JSON.parse(localStorage.getItem('chefdata')));
                    }
                    console.log(data);
                    setTimeout(function () {
                        Loading.dismissAll();
                    }, 2500);
                    if (data.status == true) {
                        if (data.data.length > 0) {
                            _this.array = data.data;
                            console.log(_this.array);
                            for (var i = 0; i < data.data.length; i++) {
                                if (data.data[i].avalibilities.length > 0) {
                                    for (var j = 0; j < data.data[i].avalibilities.length; j++) {
                                        if (__WEBPACK_IMPORTED_MODULE_10_moment__(temp.alternatedate).isSame(data.data[i].avalibilities[j].notavalibility_dates)) {
                                            console.log('matched');
                                            console.log(temp.alternatedate);
                                            console.log(data.data[i].avalibilities[j].notavalibility_dates);
                                            temp.altredavail = 0;
                                            data.data[i].altredavail = 0;
                                            break;
                                        }
                                        else {
                                            console.log('not matched');
                                            console.log(temp.alternatedate);
                                            console.log(data.data[i].avalibilities[j].notavalibility_dates);
                                            data.data[i].altredavail = 1;
                                        }
                                    }
                                }
                                else {
                                    data.data[i].mainredavail = 1;
                                    data.data[i].altredavail = 1;
                                }
                            }
                            for (var d = 0; d < data.data.length; d++) {
                                if (data.data[d].avalibilities.length > 0) {
                                    for (var j = 0; j < data.data[d].avalibilities.length; j++) {
                                        if (__WEBPACK_IMPORTED_MODULE_10_moment__(temp.maind).isSame(data.data[d].avalibilities[j].notavalibility_dates)) {
                                            console.log('matched');
                                            console.log(data.data[d].avalibilities[j].notavalibility_dates);
                                            temp.mainredavail = 0;
                                            data.data[d].mainredavail = 0;
                                            break;
                                        }
                                        else {
                                            console.log('not matched');
                                            console.log(data.data[d].avalibilities[j].notavalibility_dates);
                                            data.data[d].mainredavail = 1;
                                        }
                                    }
                                }
                                else {
                                    data.data[d].mainredavail = 1;
                                    data.data[d].altredavail = 1;
                                }
                            }
                            console.log(_this.mainredavail);
                            console.log(_this.array);
                            _this.array.forEach(function (value, key) {
                                temp.rating = 0;
                                value.comments_and_ratings.forEach(function (value1, key1) {
                                    if (value1 == []) {
                                        value1.avgrating = 0;
                                    }
                                    else {
                                        console.log(value1.rating);
                                        console.log(value.comments_and_ratings.length);
                                        console.log(temp.rating);
                                        temp.rating = (temp.rating + value1.rating);
                                        console.log(temp.rating);
                                    }
                                    totalvalue = temp.rating / value.comments_and_ratings.length;
                                    totalvalue = Number((totalvalue).toFixed(1));
                                    value.avgrating = totalvalue;
                                });
                            });
                            _this.bit = 1;
                            _this.arr1 = 1;
                        }
                        else {
                            _this.array = [];
                            _this.arr1 = null;
                            _this.bit = 1;
                            console.log('hjuij');
                        }
                    }
                    else {
                        _this.array = [];
                        _this.arr1 = null;
                        _this.bit = 1;
                    }
                }, function (err) {
                    _this.ToastMsg('Something went wrong');
                    Loading.dismissAll();
                    console.log(err);
                });
            });
        }
        else {
            this.bit = null;
            this.arr1 = 2;
        }
    };
    HomePage.prototype.ToastMsg = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    HomePage.prototype.searchaa = function (val) {
        var _this = this;
        var temp = this;
        var totalvalue;
        console.log(val);
        if (val == '') {
            this.get();
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["RequestOptions"]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
        //     var latt = JSON.parse(localStorage.getItem('Userpref')).lat;
        //     var longg = JSON.parse(localStorage.getItem('Userpref')).long;
        console.log(this.lat, this.long);
        console.log(userid);
        console.log(val.length);
        if (val.length >= 3) {
            var postdata = {
                app_user_id: userid,
                latitude: this.lat,
                longitude: this.long,
                searchvalue: val,
            };
            var serialized = this.serializeObj(postdata);
            this.http.post(this.appsetting.myGlobalVar + 'prefrence/searchbychefname', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log(data);
                if (data.status == true) {
                    _this.arr1 = 1;
                    _this.bit = 1;
                    if (data.data) {
                        if (data.data.length > 0) {
                            _this.array = data.data;
                            console.log(_this.array);
                            _this.array.forEach(function (value, key) {
                                temp.rating = 0;
                                value.comments_and_ratings.forEach(function (value1, key1) {
                                    if (value1 == []) {
                                        value1.avgrating = 0;
                                    }
                                    else {
                                        console.log(value1.rating);
                                        console.log(value.comments_and_ratings.length);
                                        console.log(temp.rating);
                                        temp.rating = (temp.rating + value1.rating);
                                        console.log(temp.rating);
                                    }
                                    totalvalue = temp.rating / value.comments_and_ratings.length;
                                    totalvalue = Number((totalvalue).toFixed(1));
                                    value.avgrating = totalvalue;
                                });
                            });
                        }
                        _this.array = data.data;
                        _this.bit = 1;
                        _this.arr1 = 1;
                        console.log(_this.array);
                    }
                }
                else {
                    console.log('here');
                    _this.array = null;
                    _this.bit = null;
                    _this.arr1 = 1;
                }
            }, function (err) {
                _this.ToastMsg('Something went wrong');
                console.log('error');
            });
        }
    };
    HomePage.prototype.dismiss1 = function () {
        console.log('here');
        this.array = null;
        this.bit = null;
        this.arr1 = 1;
        this.get();
    };
    HomePage.prototype.searchdish = function (vali) {
        var _this = this;
        var cookingtime;
        var temp1 = this;
        var totalvalue1;
        console.log(vali);
        //    if(!vali){
        //        console.log('here');
        //       this.arry = null;
        //       this.arr = null;
        //       return false;
        //    }else{
        console.log('thre');
        console.log(vali);
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["RequestOptions"]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
        //     var latt = JSON.parse(localStorage.getItem('Userpref')).lat;
        //        var longg = JSON.parse(localStorage.getItem('Userpref')).long;
        console.log(this.lat, this.long);
        console.log(userid);
        console.log(vali.length);
        if (vali.length > 2) {
            var postdata = {
                app_user_id: userid,
                latitude: this.lat,
                longitude: this.long,
                searchvalue: vali,
            };
            var serialized = this.serializeObj(postdata);
            this.http.post(this.appsetting.myGlobalVar + 'prefrence/searchbydishname', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log(data);
                if (data.status == true) {
                    _this.arry = false;
                    if (data.data) {
                        _this.arr = data.data;
                        for (var i = 0; i < data.data.length; i++) {
                            for (var j = 0; j < _this.arr[i].products.length; j++) {
                                console.log(_this.arr[i].products[j].product_name);
                                var h = _this.arr[i].products[j].product_name.toLowerCase();
                                console.log(h);
                                var a = _this.arr[i].products[j].product_name.indexOf(vali);
                                console.log(a);
                                if (a > -1) {
                                    _this.arr[i].products[j].bit = a;
                                }
                                else {
                                    var val = h.indexOf(vali);
                                    console.log(val);
                                    _this.arr[i].products[j].bit = val;
                                }
                                if (_this.arr[i].products[j].order_prefrence == 1) {
                                    _this.arr[i].products[j].order_prefrence = 'Cook at Chef place';
                                    cookingtime = _this.arr[i].products[j].cooking_time_at_chef_place;
                                }
                                else if (_this.arr[i].products[j].order_prefrence == 2) {
                                    _this.arr[i].products[j].order_prefrence = 'Cook at Client Place';
                                    cookingtime = _this.arr[i].products[j].cooking_time_at_user_home;
                                }
                                else {
                                    _this.arr[i].products[j].order_prefrence = 'Home Delivery';
                                    cookingtime = _this.arr[i].products[j].cooking_time_at_user_home;
                                }
                            }
                        }
                        if (data.data.length > 0) {
                            _this.array = data.data;
                            console.log(_this.array);
                            _this.array.forEach(function (value, key) {
                                temp1.rating = 0;
                                value.comments_and_ratings.forEach(function (value1, key1) {
                                    if (value1 == []) {
                                        value1.avgrating = 0;
                                    }
                                    else {
                                        console.log(value1.rating);
                                        console.log(value.comments_and_ratings.length);
                                        console.log(temp1.rating);
                                        temp1.rating = (temp1.rating + value1.rating);
                                        console.log(temp1.rating);
                                    }
                                    totalvalue1 = temp1.rating / value.comments_and_ratings.length;
                                    totalvalue1 = Number((totalvalue1).toFixed(1));
                                    value.avgrating = totalvalue1;
                                });
                            });
                        }
                        console.log(_this.arr);
                    }
                }
                else {
                    _this.arry = null;
                    _this.arr = null;
                }
            }, function (err) {
                _this.ToastMsg('Something went wrong');
                console.log(err);
            });
        }
        else {
            this.arr = null;
            this.arry = true;
            console.log(this.arr);
            console.log('nothing');
        }
        //}
    };
    HomePage.prototype.dismiss = function () {
        this.arr = null;
        this.arry = true;
        console.log(this.arr);
        console.log('nothing');
        console.log('here');
        this.array = null;
        this.bit = null;
        this.arr1 = 1;
        this.get();
    };
    HomePage.prototype.AlertMsg = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
        this.firsthit();
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    //    ionViewDidEnter(){
    //        alert('enter');
    //         this.firsthit();
    //    }
    HomePage.prototype.isReadonly = function () {
        return this.isReadonly; //return true/false 
    };
    HomePage.prototype.ngOnInit = function () {
        this.date = __WEBPACK_IMPORTED_MODULE_10_moment__(new Date()).format('YYYY-MM-DD[T]hh:mm');
        var ddate = this.date;
        console.log(ddate);
        this.data.datetime = this.date;
        console.log(new Date().toISOString());
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\home\home.html"*/'<ion-header>\n  <ion-toolbar  color="theme-header">\n       <ion-buttons start left icon-only>\n      <button ion-button clear>\n        <ion-icon class="hdrlogo"><img src="assets/img/logo-white.png"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Chef List\n      <!--<p>Online Chef list</p>-->\n    </ion-title>\n     <ion-buttons end right>\n      <button ion-button icon-only class="" (click)="cartpage()">\n      <div class="iconprf">\n          <img src="assets/img/whitestore.png">\n           <p><span>{{no_of_products}}</span></p>\n       </div>\n      </button>     \n    </ion-buttons>\n  </ion-toolbar>\n    \n    \n    \n<div class="searchouter" style="position: relative;">\n<ion-input class="srch" placeholder="Fill Address..." (click)="openlist()" [readonly]="isReadonly()" [(ngModel)]="chefsearch.search" name="search" #search="ngModel">\n   </ion-input>\n    <ion-icon name="arrow-down" class="go" (click)="openlist()"></ion-icon>\n\n    <div class="listout">  \n<ion-list class="listitm" style="margin:0 !important; padding:0;" *ngIf="openllist == 1" >\n\n      <ion-item>\n         <button (click)= "openmapmodal()" outline ion-button color="dark" icon-right round>Go To Other Address <ion-icon name="navigate"></ion-icon> </button>\n         <button ion-button color="danger" outline round icon-right  (click)="cancellist()"> Close</button>\n     </ion-item>\n  \n     <ion-list-header style="background: #f2f2f2; margin: 0;"> Favourite Addresses: </ion-list-header>\n       <div class="fvtaddress">\n       <ion-item *ngFor ="let opt1 of searcharray1;let i = index" \n        (click)="getItem(opt1)">\n        {{opt1}}\n        <ion-icon name="trash" small item-end (click)="del1(i)"></ion-icon>\n    </ion-item>        \n       </div>     \n     \n     <ion-list-header style="background: #f2f2f2; margin: 0;"><span>  <ion-icon name="search"></ion-icon>\n </span> Recent Searches</ion-list-header>\n    <div class="savedaddress"> \n    <ion-item *ngFor ="let opt of searcharray;let i = index"\n        (click)="getItem(opt)">\n        {{opt}}\n        <ion-icon name="trash" small item-end (click)="del(i)"></ion-icon>\n    </ion-item>\n    </div>   \n</ion-list> \n    </div>\n       \n</div>\n    \n\n    \n\n\n  <ion-toolbar class="dateleft">\n      <p>Main Date</p>\n            <ion-datetime  placeholder="MM/DD/YYYY HH:MM" displayFormat="MMM/DD/YYYY HH:mm" pickerFormat="MMM DD YYYY HH mm"  min="{{date}}" [(ngModel)]= "data.datetime" name="datetime" #datetime="ngModel" (ngModelChange)="getchefavail1(data.datetime)"></ion-datetime>\n  </ion-toolbar>\n      \n    <ion-toolbar class="dateleftr">\n        <p>Alternative Date</p>\n            <ion-datetime  placeholder="MM/DD/YYYY HH:MM" displayFormat="MMM/DD/YYYY HH:mm" pickerFormat="MMM DD YYYY HH mm" min="{{date}}" [(ngModel)]= "data.altdate" name="altdate" #altdate="ngModel" (ngModelChange)="getchefavail(data.altdate)" ></ion-datetime>\n            \n    </ion-toolbar> \n    \n\n  <div class="segment-sec">\n      \n  <ion-toolbar>\n  <ion-segment [(ngModel)]="pet">\n    <ion-segment-button value="kittens">\n      chef Search\n    </ion-segment-button>\n    <ion-segment-button value="puppies">\n      Dish Search\n    </ion-segment-button>\n  </ion-segment>\n  </ion-toolbar>\n</div>\n</ion-header>\n<ion-content  class="{{blurclass}}" style="padding: 0;">\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n        pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing..."></ion-refresher-content>\n  </ion-refresher>\n\n    <div class="overlayn" (click)="cancellist()" ></div>\n    \n  <div class="banner">\n  <img src="assets/img/off.png">\n</div>\n\n  <div class="content-sec">\n  <div [ngSwitch]="pet">\n    <ion-list *ngSwitchCase="\'kittens\'">\n        <div class="serch">\n  <ion-searchbar placeholder="Search by chef..." [(ngModel)]="data.dat" name="dat" #dat="ngModel" (input)="searchaa(data.dat)" (ionClear)="dismiss1()" ></ion-searchbar>\n  <div class="option">\n      <img src="assets/img/option.png" (click)="fltr_opn()">\n  </div>\n</div>\n  <ion-list><div *ngFor="let dat of array" (click)="detail(dat)">\n      <ion-item *ngIf="!((dat.mainredavail == 0)&&(dat.altredavail == 0))">\n          \n        <ion-avatar item-start>\n             <img *ngIf ="dat?.user_image"  src="{{dat?.user_image}}">\n             <img *ngIf ="!dat?.user_image" src="assets/img/us.png">\n         \n        </ion-avatar>\n        <h3>{{dat?.firstname}} {{dat?.lastname}}</h3>\n          <div *ngIf="dat?.status == true">\n              <p> <span>Specialities</span><span *ngFor="let spec of dat.specialties">{{spec?.specialties_product}},</span></p>\n        <p><span>Experience </span>Private Chef, Personal,</p>\n        <div class="rightbtn green" item-end *ngIf="dat?.avgrating">\n          <h3 ><span> <img src="assets/img/star.png"></span>{{dat?.avgrating}}/5</h3>\n        </div>\n        <div class="leftbtn">\n          <button ion-button icon-left clear>\n             <ion-icon *ngIf="dat.mainredavail == 1" name="radio-button-on" style="color: #2bb600; line-height: 1;float: left; width: 34px;"></ion-icon>\n              <ion-icon *ngIf="dat.mainredavail == 0" name="radio-button-on" style="color: #ff0000; line-height: 1;float: left; width: 34px;"></ion-icon>\n                 <!--<ion-icon *ngIf="!dat.mainredavail" name="radio-button-on" style="color: #2bb600; line-height: 1;float: left; width: 34px;"></ion-icon>-->\n            Main Date Availability\n          </button>\n        </div>\n        <div class="right">\n          <button ion-button icon-left clear>\n             <ion-icon *ngIf="dat.altredavail == 1" name="radio-button-on" style="color: #2bb600; line-height: 1; float: left; width: 34px;"></ion-icon>\n             <ion-icon *ngIf="dat.altredavail == 0" name="radio-button-on" style="color: #ff0000; line-height: 1; float: left; width: 34px;"></ion-icon>\n              <!--<ion-icon *ngIf="!dat.altredavail" name="radio-button-on" style="color: #2bb600; line-height: 1;float: left; width: 34px;"></ion-icon>-->\n            Alternative Availability\n          </button>\n        </div>\n          </div>\n      </ion-item></div> </ion-list>\n\n        \n<!--      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/arenda.png">\n        </ion-avatar>\n        <h3>Andrea Beaman</h3>\n        <p><span>Specialities</span>Idli,sambhar, Kerla</p>\n        <p><span>Experience </span>Private Chef, Personal,</p>\n        <div class="rightbtn green" item-end>\n          <h3><span> <img src="assets/img/star.png"></span>3/4</h3>\n        </div>\n        <div class="leftbtn">\n          <button ion-button icon-left clear>\n             <ion-icon name="radio-button-on" style="color: #fe4600;"></ion-icon>\n            Not available today\n          </button>\n        </div>\n        <div class="right">\n          <button ion-button icon-left clear>\n             <ion-icon name="radio-button-on" style="color: #dcca00;"></ion-icon>\n            Alternative date available\n          </button>\n        </div>\n      </ion-item>-->\n<div *ngIf="bit == null"><div class="loadimg"><img width="220px" src="assets/img/RafahoLogo-03.png"></div></div>\n<div *ngIf="arr1 == null"><div class="loadimg"><img width="220px" src="assets/img/RafahoLogo-02.png"></div></div>\n    </ion-list>\n  </div>\n\n\n  <div [ngSwitch]="pet">\n\n  <div class="serch-text" *ngSwitchCase="\'puppies\'">\n      <div class="serch">\n          <ion-searchbar placeholder="Search by dish..." [(ngModel)]="data.dats" name="dats" #dats="ngModel" (input)="searchdish(data.dats)"    (ionClear)="dismiss()"></ion-searchbar>\n      <div class="option">\n      <img src="assets/img/option.png" (click)="fltr_opn()">\n      </div>\n     </div>\n  \n      <ion-list *ngIf= "arr != null">\n      <ion-item *ngFor="let dats of arr">\n<!--        <span >-->\n        \n        <ion-thumbnail item-start  >\n            <div *ngFor="let prodds of dats.products">\n              <img  *ngIf="prodds?.bit == 0" src="{{prodds?.product_image0}}">\n                <!--<img *ngIf="!prodds?.bit == 0" src="assets/img/frvttwo.png"">-->\n                </div>\n              </ion-thumbnail>\n      <!--</span>-->\n     \n        <div class="main">\n          <div  class="image">\n            <img *ngIf ="dats?.user_image"  src="{{dats?.user_image}}">\n             <img *ngIf ="!dats?.user_image" src="assets/img/us.png">\n          </div>\n          <h1>{{dats?.firstname}} {{dats?.lastname}} </h1>\n<!--          <div class="right-sec">\n            <button ion-button class="rating histry">{{dats?.avgrating}}/5</button>\n          </div>-->\n            <div class="rightbtn green" item-end *ngIf="dats?.avgrating">\n          <h3 ><span> <img src="assets/img/star.png"></span>{{dats?.avgrating}}/5</h3>\n        </div>\n        </div>\n      \n<!--        <h2> <img class="imgicon" width="11px" src="assets/img/acicon.png">South indian food</h2>-->\n       <div *ngFor="let prods of dats.products"> <p *ngIf="prods?.bit == 0">{{prods?.product_name}}</p></div>\n        <div class="btn-left">\n          <button ion-button outline (click)="prdlist(dats.products)">\n            BOOK NOW\n          </button>\n        </div>\n<!--         <div class="btn-rght"  *ngFor="let prods of dats.products">\n          <button ion-button outline *ngIf="prods?.bit == 0" >\n           {{prods.order_prefrence}}\n          </button>\n        </div>-->\n<!--       <div *ngFor="let proods of dats.products">\n          <div class="hor" style="width: 25px; float: left;" ><ion-icon name="time"></ion-icon><span *ngIf="proods?.bit == 0" >{{cookingtime}}h</span></div>\n     </div>-->\n      </ion-item>\n    \n  </ion-list>\n      <div *ngIf="arry == true"><div class="loadimg"><img width="120px" src="assets/img/srchimg.png"></div></div>\n      <div *ngIf="arry == null"><div class="loadimg"><img width="220px" src="assets/img/RafahoLogo-03.png"></div></div>\n  </div>\n    <!-- <div class="serch-contant" *ngSwitchCase="\'puppies\'">\n        <div class="image">\n            <img src="../assets/img/srchimg.png">\n        </div>\n        <h5>Search Dish</h5>\n        <p>Lorem Ipsum is simply dummy text of the printing and industry.</p>\n    </div> -->\n  </div>\n  \n</div>\n   <ion-infinite-scroll (ionInfinite)="doInfinite($event)" style="position: fixed;  bottom: 0;">\n    <ion-infinite-scroll-content\n      loadingSpinner="bubbles"\n      loadingText="Loading more data...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n\n'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__providers_appsetting__["a" /* Appsetting */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_appsetting__["a" /* Appsetting */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_http__["Http"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__["a" /* NativeGeocoder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__["a" /* NativeGeocoder */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_12__ionic_native_android_permissions__["a" /* AndroidPermissions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__ionic_native_android_permissions__["a" /* AndroidPermissions */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]) === "function" && _o || Object])
], HomePage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapmodal_mapmodal__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
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
    function FilterPage(modalCtrl, appsetting, platform, http, viewCtrl, loadingCtrl, alertCtrl, toastCtrl) {
        this.modalCtrl = modalCtrl;
        this.appsetting = appsetting;
        this.platform = platform;
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.attributes = [];
        this.cuisiness = [];
        this.data = [];
        this.date = __WEBPACK_IMPORTED_MODULE_5_moment__(new Date()).format('YYYY-MM-DD[T]hh:mm');
        this.getattributes();
        this.getcuisine();
    }
    FilterPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FilterPage.prototype.getattributes = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
        this.http.get(this.appsetting.myGlobalVar + 'attribute/all').map(function (res) { return res.json(); }).subscribe(function (ress) {
            console.log(ress);
            for (var t = 0; t < ress.data.length; t++) {
                _this.attributes.push(ress.data[t]);
            }
            console.log(_this.attributes);
        });
    };
    FilterPage.prototype.getcuisine = function () {
        var _this = this;
        var loc = JSON.parse((localStorage.getItem('Currentaddr')));
        console.log(loc);
        //       if(loc[0].loc){
        //           this.data.location = loc[0].loc;
        //       }
        this.lat = loc[0].lat;
        this.long = loc[0].long;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
        this.http.get(this.appsetting.myGlobalVar + 'Cuisine/all').map(function (res) { return res.json(); }).subscribe(function (ress1) {
            console.log(ress1.data);
            for (var u = 0; u < ress1.data.length; u++) {
                _this.cuisiness.push(ress1.data[u]);
            }
            console.log(_this.cuisiness);
        });
    };
    FilterPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    FilterPage.prototype.checkbox = function (legal) {
        console.log(legal.value);
        if (legal.value == false) {
            return { accept: false };
        }
    };
    FilterPage.prototype.openmapmodal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__mapmodal_mapmodal__["a" /* MapmodalPage */]);
        modal.onDidDismiss(function (data) {
            _this.data.location = data.address;
            console.log(_this.data.address);
            console.log(data.lati);
            console.log(data.longi);
            _this.lat = data.lati;
            _this.long = data.longi;
        });
        modal.present();
    };
    FilterPage.prototype.isReadonly = function () {
        return this.isReadonly; //return true/false 
    };
    FilterPage.prototype.apply = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
        if ((this.lat == undefined) || (this.long == undefined)) {
            this.lat = '';
            this.long = '';
        }
        if (this.data.datetime == undefined) {
            this.data.datetime = '';
        }
        if (this.data.exp == undefined) {
            this.data.exp = '';
        }
        if (this.data.cuisines == undefined) {
            this.data.cuisines = '';
        }
        if (this.data.attribute == undefined) {
            this.data.attribute = '';
        }
        //        var postdata = {
        //            lat: this.lat,
        //            long:  this.long,
        //            notavalibility_dates: this.data.datetime,
        //            experience: this.data.exp,
        //            cuisine: this.data.cuisines,
        //            attribute: this.data.attribute
        //        };
        //        console.log(postdata);
        //        var serialized = this.serializeObj(postdata);
        //
        //
        //        this.http.post(this.appsetting.myGlobalVar + 'users/filterall', serialized, options).map(res => res.json()).subscribe(data => {
        //
        //            console.log(data);
        //            if(data.status == true){
        //                if(data.data.length >0){
        //                     localStorage.setItem('chefdata',JSON.stringify(data.data));
        //                     alert('saved')
        //                }
        //            }
        //        })
        this.viewCtrl.dismiss({
            lat: this.lat,
            long: this.long,
            notavalibility_dates: this.data.datetime,
            experience: this.data.exp,
            cuisine: this.data.cuisines,
            attribute: this.data.attribute
        });
    };
    return FilterPage;
}());
FilterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-filter',template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\filter\filter.html"*/'\n<ion-header>\n  <ion-navbar color="theme-header">\n		<ion-buttons start>\n  	<button ion-button color="theme-header" style="color: #fff;" (click)="dismiss()">\n      <ion-icon name="close" style="font-size: 30px;"></ion-icon>\n    </button>\n		</ion-buttons>\n    <ion-title>\n    	 Filter\n    </ion-title>\n<!--    <ion-buttons end>\n      <button ion-button icon-only class="btnprofile">Select All</button>     \n    </ion-buttons>-->\n   \n  </ion-navbar>\n		<div class="header-sec">\n			<h3>The Classic British Breakfast</h3>\n			<ion-grid style="padding: 0px;">\n				<ion-row>\n					<ion-col col-12 style="padding-left: 0px; padding-right:0px;">\n						 <ion-input type="text"  placeholder="Search by location" [readonly]="isReadonly()" (click)="openmapmodal()" [(ngModel)]="data.location" name="location" #location="ngModel"></ion-input>\n					</ion-col>\n					<ion-col col-6 style="padding-left: 0px;">\n						  <ion-datetime  placeholder="Search By Date"  displayFormat="MMM/DD/YYYY " pickerFormat="MMM DD YYYY "  min="{{date}}" [(ngModel)]= "data.datetime" name="datetime" #datetime="ngModel"></ion-datetime>\n					</ion-col>\n					<ion-col col-6 style="padding-right:0px;">\n						<!--  <ion-input type="text" placeholder="Type of event"></ion-input> -->\n						 <ion-select placeholder="Search by Exprience" style="padding: 13px 9px; max-width: 100%; width: 100%;" [(ngModel)]="data.exp" name=\'exp\' #exp="ngModel">\n						    <ion-option value="1">01</ion-option>\n						    <ion-option value="2">02</ion-option>\n						    <ion-option value="3">03</ion-option>\n						    <ion-option value="4">04</ion-option>\n                                                     <ion-option value="5">05</ion-option>\n                                                      <ion-option value="6">06</ion-option>\n                                                       <ion-option value="7">07</ion-option>\n                                                        <ion-option value="8">08</ion-option>\n                                                         <ion-option value="9">09</ion-option>\n                                                          <ion-option value="10">10</ion-option>\n						 </ion-select>\n					</ion-col>\n					<ion-col col-12 style="padding-left: 0px; padding-right:0px;">\n						<ion-item class="attr">\n						 <ion-label>Attribute</ion-label>\n						  <ion-select  [(ngModel)]="data.attribute" name=\'attribute\' #attribute="ngModel">\n						   <span *ngFor ="let dats of attributes"><ion-option  value="{{dats.attribute_name}}">{{dats.attribute_name}}</ion-option></span> \n						  </ion-select>\n						</ion-item>\n					</ion-col>\n				</ion-row>\n				\n			</ion-grid>\n		</div>\n\n</ion-header>\n\n<ion-content>\n	<div class="content-sec">\n		\n		<ion-list radio-group (ionchange)="checkbox(data.cuisines)" [(ngModel)]="data.cuisines" name=\'cuisines\' #cuisines="ngModel">\n			<ion-item>\n			  <ion-label>World Cuisines</ion-label>\n			  <ion-radio  checked></ion-radio >\n			</ion-item>\n\n			<ion-item  *ngFor ="let dat of cuisiness">\n			  <ion-label>{{dat.cuisine_name}}</ion-label>\n			  <ion-radio value="{{dat.cuisine_name}}"></ion-radio >\n			</ion-item>\n                          <!--\n			<ion-item>\n			  <ion-label>British</ion-label>\n			  <ion-radio ></ion-radio >\n			</ion-item>\n			<ion-item>\n			  <ion-label>Indian</ion-label>\n			  <ion-radio ></ion-radio >\n			</ion-item>\n			<ion-item>\n			  <ion-label>Vietnamese</ion-label>\n			  <ion-radio ></ion-radio >\n			</ion-item>\n			<ion-item>\n			  <ion-label>Italian</ion-label>\n			  <ion-radio ></ion-radio >\n			</ion-item>\n			<ion-item>\n			  <ion-label>Swiss</ion-label>\n			  <ion-radio ></ion-radio >\n			</ion-item>\n			<ion-item>\n			  <ion-label>World Cuisine</ion-label>\n			  <ion-radio ></ion-radio >\n			</ion-item>\n			<ion-item>\n			  <ion-label>Continental</ion-label>\n			  <ion-radio ></ion-radio >\n			</ion-item>\n			<ion-item>\n			  <ion-label>British</ion-label>\n			  <ion-radio ></ion-radio >\n			</ion-item>\n			<ion-item>\n			  <ion-label>Indian</ion-label>\n			  <ion-radio ></ion-radio >\n			</ion-item>-->\n		</ion-list>\n	</div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar style="padding: 0;">\n   <button ion-button full color="theme-header" (click)="apply()">Apply</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\filter\filter.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
], FilterPage);

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_chat__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorites_favorites__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rafaho_rafaho__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { Component } from '@angular/core';

//import { FittingroomPage } from '../fittingroom/fittingroom';
//import { MyfavoritesPage } from '../myfavorites/myfavorites';
//import { HomePage } from '../home/home';


//import { SearchPage } from '../search/search';
var TabsPage = (function () {
    function TabsPage(events, navCtrl, viewCtrl, appsetting, navParams) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.appsetting = appsetting;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__favorites_favorites__["a" /* FavoritesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__rafaho_rafaho__["a" /* RafahoPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_1__chat_chat__["a" /* ChatPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */];
        console.log(this.tab1Root);
        //         if(this.tab1Root == HomePage){
        //             this.appsetting.home1 = 1;
        //         }
    }
    //    tabIndex(event) {
    //     console.log('calling----'+event);
    //
    //    var domevent = event.srcElement.parentNode.id || event.path[1].id;
    //    console.log(domevent)
    //    var split = domevent.split('-');
    //    var target = split[2];
    //    console.log(target)
    //    if (target == '1') {
    //      this.events.publish('index', '1');     
    //    } else if (target == '2') {
    //      this.events.publish('index', '2'); 
    //    } else if(target == '3'){
    //         this.events.publish('index', '3');
    //    }
    //     else if(target == '4'){
    //         this.events.publish('index', '4');
    //    }else{
    //        this.events.publish('index','0');
    //    }
    //  }
    TabsPage.prototype.tabIndex = function (event) {
        console.log(event);
        console.log('calling----' + event.srcElement);
        var domevent = event.srcElement.parentNode.id || event.path[1].id;
        console.log(domevent);
        var split = domevent.split('-');
        var target = split[2];
        console.log(target);
        if (target == '1') {
            console.log('hogya');
            this.events.publish('index', '1');
        }
        else if (target == '2') {
            this.events.publish('index', '2');
        }
        else if (target == '3') {
            this.events.publish('index', '3');
        }
        else if (target == '4') {
            this.events.publish('index', '4');
        }
        else if (target == '0') {
            this.events.publish('index', '0');
        }
    };
    return TabsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myTabs'),
    __metadata("design:type", Object)
], TabsPage.prototype, "tabRef", void 0);
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\tabs\tabs.html"*/'<ion-tabs  (click)="tabIndex($event)">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home" preloadTabs="true" ></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Favorites" tabIcon="heart" preloadTabs="true" ></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Rafaho" tabIcon="rsvp" ></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Chat" tabIcon="chatboxes" ></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Profile" tabIcon="contact" ></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["o" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["l" /* NavParams */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgtpwd_forgtpwd__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_fcm__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tabs_tabs__ = __webpack_require__(36);
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
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SigninPage = (function () {
    function SigninPage(navCtrl, navParams, appsetting, http, fcm, alertCtrl, toastCtrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.fcm = fcm;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.data = {};
        this.ptype = 'password';
        this.iconname = 'eye';
        this.showpass = false;
        //    alert('Neelanshi');
        fcm.getToken().then(function (token) {
            _this.devicetoken = token;
        });
        fcm.onNotification().subscribe(function (data) {
            if (data.wasTapped) {
                console.log("Received in background");
            }
            else {
                console.log("Received in foreground");
            }
            ;
        });
    }
    SigninPage.prototype.showPassword = function () {
        console.log('showpassword');
        this.showpass = !this.showpass;
        if (this.showpass) {
            this.ptype = 'text';
            this.iconname = 'eye-off';
        }
        else {
            this.ptype = 'password';
            this.iconname = 'eye';
        }
    };
    SigninPage.prototype.Signin = function (logindata) {
        var _this = this;
        console.log('login');
        console.log(logindata.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        if (logindata.value.password.indexOf(' ') >= 0) {
            var toast = this.toastCtrl.create({
                message: 'Space not allowed in password',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else {
            var postdata = {
                email: logindata.value.email,
                password: logindata.value.password,
                role: 'user',
                divice_token: this.devicetoken
            };
            console.log(postdata);
            //alert(JSON.stringify(postdata));
            var Serialized = this.serializeObj(postdata);
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                cssClass: 'loader',
                content: "Loading",
                dismissOnPageChange: true
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.myGlobalVar + 'loginuser', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                    console.log(response);
                    Loading.dismiss();
                    if (response.status == true) {
                        console.log(response.userinfo._id);
                        localStorage.setItem('UserDetail', JSON.stringify(response.userinfo));
                        console.log(response.userinfo.role);
                        //     var a = JSON.parse((localStorage.getItem('Userpref')))
                        //        if(localStorage.getItem('UserDetail')&&localStorage.getItem('Userpref')){
                        //         var b = JSON.parse(localStorage.getItem('UserDetail'))._id;
                        //          var a = JSON.parse(localStorage.getItem('Userpref')).app_user_id;
                        //      console.log(a,b);
                        //     
                        //      if(b==a)
                        //          {
                        //          this.navCtrl.push(TabsPage); 
                        //      }else{
                        //          this.navCtrl.push(LocationPage); 
                        //      }
                        //      
                        //     }else if(localStorage.getItem('UserDetail')){
                        //          this.navCtrl.push(LocationPage); 
                        //     }
                        if (localStorage.getItem('UserDetail')) {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__tabs_tabs__["a" /* TabsPage */]);
                        }
                    }
                    else {
                        _this.ToastMsg(response.message);
                    }
                });
            });
        }
    };
    SigninPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    SigninPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
        console.log('Neelanshi bhatnagar');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    SigninPage.prototype.ToastMsg = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    SigninPage.prototype.AlertMsg = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'Continue',
                    role: 'cancel',
                    handler: function () {
                        console.log('Continue clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    SigninPage.prototype.signupPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage.prototype.frgt = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgtpwd_forgtpwd__["a" /* ForgtpwdPage */]);
    };
    return SigninPage;
}());
SigninPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signin',template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\signin\signin.html"*/'<!--\n  Generated template for the SigninPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header hidden>\n <ion-toolbar>\n  <ion-title>Menu</ion-title>\n </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n	<div class="main">\n		<div class="top-img">\n			<img src="assets/img/signbg.png">\n		</div>\n		<div class="bottom-img">\n			<img src="assets/img/tpbg.png">\n		</div>\n		<div class="text-sec">\n		<h2>Sign In</h2>\n		<h3>Welcome to <span>Rafaho</span> app</h3>\n	</div>\n	<div class="logo">\n		<img src="assets/img/logo.png">\n	</div>\n	</div>\n	<div class="content-sec">\n		<div class="sign">\n			<form class="form-sec" #SigninForm="ngForm" novalidate (submit)="Signin(SigninForm)">\n				<ion-list>\n\n				  <ion-item>\n				    <ion-label stacked>EMAIL</ion-label>\n				    <ion-input type="email" [(ngModel)]="data.email" name="email" #email="ngModel" pattern="^[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{1,63})$"  required></ion-input>\n                                  </ion-item> \n                                    <div class="alert alert-danger red" color="danger">\n                                           <div *ngIf="email.errors && (email.dirty || email.touched)">\n                                             <div [hidden]="!email.errors.required">\n                                               Email is required\n                                             </div>\n                                             <div [hidden]="!email.errors.pattern">\n                                               Invalid email\n                                             </div>\n                                           </div>\n                                        </div>\n                                    <!--<div style="position:initial !important">-->\n                                      \n				  <ion-item >\n				    <ion-label stacked>PASSWORD</ion-label>\n				    <ion-input type="{{ptype}}" [(ngModel)]="data.password" name="password" #password="ngModel" minlength="6" required></ion-input>\n                                     <button class="eyemain" ion-button clear type="button" color="dark" item-right>\n                    <ion-icon name="{{iconname}}" (click)="showPassword()" ></ion-icon>\n                  </button>\n                                  </ion-item>\n                                        <div class="alert alert-danger red" color="danger"> \n                                    <div *ngIf="password.errors && (password.dirty || password.touched)">\n                                     <div [hidden]="!password.errors.required">\n                                       Password is required\n                                      </div>\n                                       <div [hidden]="!password.errors.minlength">\n                                      Password must be at least 6 digits\n                                       </div>\n                                   </div>\n                                    <!--<ion-icon name="{{iconname}}" (click)="showPassword()" ></ion-icon>-->\n					 \n                                 </div>  <!--</div>-->\n                            \n                            </ion-list>\n					<div class="frgtpwd">\n					<div class="btn-sec">\n			<button ion-button full type="submit" [disabled]="!SigninForm.valid">Sign In</button>\n		    </div>\n				</div>\n			</form>\n		</div>\n		<div class="frgtpwd">\n			<h3 (click)="frgt()">Forgot password?</h3>\n		\n			<h3 class="register">Don\'t have an account? <span (click)="signupPage()">Register</span></h3>\n		</div>\n\n	</div>\n</ion-content>\n'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\signin\signin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_fcm__["a" /* FCM */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], SigninPage);

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentPage = (function () {
    function PaymentPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
    };
    PaymentPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Payment',
            subTitle: 'Your payment has been successfully processed.',
            cssClass: 'alertDanger'
        });
        alert.present();
    };
    return PaymentPage;
}());
PaymentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-payment',template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\payment\payment.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Payment</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only class="btnprofile">\n      <div class="iconprf">\n          <img src="../assets/img/cart.png">\n       </div>\n      </button>     \n    </ion-buttons>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="top">\n		<h2>Select Payment Method</h2>\n	</div>\n	 <ion-list>\n        <ion-item (click)="showAlert()">\n            <h3>Wallet</h3>\n            <p>Current Balance  $60</p>\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n        <ion-item (click)="showAlert()">\n        	<ion-thumbnail item-start>\n	        <img src="assets/img/paypal.png">\n	      </ion-thumbnail>\n            <h3>Paypal</h3>\n            <p>username@gmail.com</p>\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\payment\payment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], PaymentPage);

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(392);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Geolocation } from '@ionic-native/geolocation';


/**
 * Generated class for the MapmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapmodalPage = (function () {
    function MapmodalPage(navCtrl, navParams, viewCtrl, toastCtrl, platform, appsetting, http, geolocation, loadCtrl, alertCtrl, nativeGeocoder, places) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.appsetting = appsetting;
        this.http = http;
        this.geolocation = geolocation;
        this.loadCtrl = loadCtrl;
        this.alertCtrl = alertCtrl;
        this.nativeGeocoder = nativeGeocoder;
        this.places = places;
        this.omega = 0;
        this.number = true;
        this.isenabled = false;
        this.ssaved = [];
        this.iconname = 'star-outline';
        this.markers = [];
        this.userdetail = [];
        this.bb = [];
        this.geocoder = new google.maps.Geocoder();
        this.data = {};
        /**map initialization */
        this.initMap = function () {
            var nill = _this;
            var newShape;
            var map;
            _this.platform.ready().then(function () {
                var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
                headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
                // alert("working");
                // alert(lat+','+long);
                var Loading = _this.loadCtrl.create({
                    spinner: 'bubbles',
                    cssClass: 'loader',
                    content: "Loading",
                    dismissOnPageChange: true
                });
                Loading.present().then(function () {
                    _this.geolocation.getCurrentPosition().then(function (resp) {
                        _this.lat = resp.coords.latitude;
                        _this.long = resp.coords.longitude;
                        console.log(resp.coords.latitude);
                        console.log(resp.coords.longitude);
                        Loading.dismiss();
                        //  if(this.nomi !=null){
                        //      this.l=this.nomi.lat
                        //      this.lo=this.nomi.lon
                        //     console.log(this.l,this.lo)
                        //  }
                        //  else{
                        _this.l = _this.lat;
                        _this.lo = _this.long;
                        //  }
                        var latLng = new google.maps.LatLng(_this.l, _this.lo);
                        console.log(_this.data.city);
                        var postdata = {
                            lat: _this.l,
                            long: _this.lo
                        };
                        var Serialized = _this.serializeObj(postdata);
                        _this.http.post('  http://rafao.us-west-2.elasticbeanstalk.com/api/home/reverse_geocoding', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                            console.log(response.data);
                            var resso = JSON.parse(response.data);
                            console.log(resso.response);
                            //            console.log(resso.response.properties.address);
                            if (response.data == 'Not available credits') {
                                _this.ToastMsg('Sorry! No Credits available');
                            }
                            if ((resso.response == undefined) || (response.data == '{"message":"Result not found"}') || (resso.response.properties.address == null)) {
                                _this.geocoder.geocode({ 'location': latLng }, (function (results, status) {
                                    if (status == google.maps.GeocoderStatus.OK) {
                                        if (results == '') {
                                            _this.ToastMsg('Invalid Location');
                                            _this.lat = '';
                                            _this.long = '';
                                            _this.infowindow.setContent('Error');
                                            _this.infowindow.open(_this.map, marker);
                                        }
                                        else {
                                            if (results[0]) {
                                                console.log(results[0].place_id);
                                                console.log(results[0].formatted_address);
                                                _this.infowindow.setContent(results[0].formatted_address);
                                                //    
                                                _this.infowindow.open(_this.map, marker1);
                                                //           this.data.city = results[0].address_components[0].long_name;
                                                _this.autocomplete.query = results[0].formatted_address;
                                                var citiie6 = results[0].formatted_address.split(',');
                                                console.log(citiie6[1]);
                                                switch (citiie6[1]) {
                                                    case ' Bogotá':
                                                        _this.data.city = 'Bogota';
                                                        break;
                                                    case ' Bogota':
                                                        _this.data.city = 'Bogota';
                                                        break;
                                                    case ' Soacha': {
                                                        _this.data.city = 'cun_soacha';
                                                        break;
                                                    }
                                                    case ' Mosquera': {
                                                        _this.data.city = 'cun_mosquera';
                                                        break;
                                                    }
                                                    case ' Facatativá': {
                                                        _this.data.city = 'cun_facatativa';
                                                        break;
                                                    }
                                                    case ' Madrid': {
                                                        _this.data.city = 'cun_madrid';
                                                        break;
                                                    }
                                                    case ' Cajicá': {
                                                        _this.data.city = 'cun_cajica';
                                                        break;
                                                    }
                                                    case ' Sopó': {
                                                        _this.data.city = 'cun_sopo';
                                                        break;
                                                    }
                                                    case ' Tenjo': {
                                                        _this.data.city = 'cun_tenjo';
                                                        break;
                                                    }
                                                    case ' Tocancipa': {
                                                        _this.data.city = 'cun_tocancipa';
                                                        break;
                                                    }
                                                    case ' Guasca': {
                                                        _this.data.city = 'cun_guasca';
                                                        break;
                                                    }
                                                    case ' Anapoima': {
                                                        _this.data.city = 'cun_anapoima';
                                                        break;
                                                    }
                                                    case ' Villeta': {
                                                        _this.data.city = 'cun_villeta';
                                                        break;
                                                    }
                                                    case ' La Vega': {
                                                        _this.data.city = 'cun_la_vega';
                                                        break;
                                                    }
                                                    case ' La Mesa': {
                                                        _this.data.city = 'cun_la_mesa';
                                                        break;
                                                    }
                                                    default: {
                                                        console.log('not found');
                                                        console.log(citiie6[1]);
                                                        _this.data.city = 'Bogota';
                                                    }
                                                }
                                                console.log(_this.data.city);
                                            }
                                            else if (results[1]) {
                                                _this.autocomplete.query = results[1].formatted_address;
                                                //     this.data.city = results[1].address_components[0].long_name;
                                                console.log(results[1].formatted_address);
                                                _this.infowindow.setContent(results[1].formatted_address);
                                                _this.infowindow.open(_this.map, marker1);
                                                _this.autocomplete.query = results[1].formatted_address;
                                                var citiie8 = results[1].formatted_address.split(',');
                                                _this.data.city = '';
                                                console.log(citiie8[1]);
                                                switch (citiie8[1]) {
                                                    case ' Bogotá':
                                                        _this.data.city = 'Bogota';
                                                        break;
                                                    case ' Bogota':
                                                        _this.data.city = 'Bogota';
                                                        break;
                                                    case ' Soacha': {
                                                        _this.data.city = 'cun_soacha';
                                                        break;
                                                    }
                                                    case ' Mosquera': {
                                                        _this.data.city = 'cun_mosquera';
                                                        break;
                                                    }
                                                    case ' Facatativá': {
                                                        _this.data.city = 'cun_facatativa';
                                                        break;
                                                    }
                                                    case ' Madrid': {
                                                        _this.data.city = 'cun_madrid';
                                                        break;
                                                    }
                                                    case ' Cajicá': {
                                                        _this.data.city = 'cun_cajica';
                                                        break;
                                                    }
                                                    case ' Sopó': {
                                                        _this.data.city = 'cun_sopo';
                                                        break;
                                                    }
                                                    case ' Tenjo': {
                                                        _this.data.city = 'cun_tenjo';
                                                        break;
                                                    }
                                                    case ' Tocancipa': {
                                                        _this.data.city = 'cun_tocancipa';
                                                        break;
                                                    }
                                                    case ' Guasca': {
                                                        _this.data.city = 'cun_guasca';
                                                        break;
                                                    }
                                                    case ' Anapoima': {
                                                        _this.data.city = 'cun_anapoima';
                                                        break;
                                                    }
                                                    case ' Villeta': {
                                                        _this.data.city = 'cun_villeta';
                                                        break;
                                                    }
                                                    case ' La Vega': {
                                                        _this.data.city = 'cun_la_vega';
                                                        break;
                                                    }
                                                    case ' La Mesa': {
                                                        _this.data.city = 'cun_la_mesa';
                                                        break;
                                                    }
                                                    default: {
                                                        console.log('not found');
                                                        console.log(citiie8[1]);
                                                        _this.data.city = 'Bogota';
                                                    }
                                                }
                                                console.log(_this.data.city);
                                            }
                                        }
                                    }
                                    //		
                                }));
                            }
                            else {
                                //                var resso = JSON.parse(response.data)
                                console.log(resso.response.message);
                                if (resso.response.message == "Result not found") {
                                    _this.ToastMsg('Not found');
                                    _this.lat = '';
                                    _this.long = '';
                                    _this.infowindow.setContent('Error');
                                    _this.infowindow.open(_this.map, marker);
                                }
                                else {
                                    var addr = resso.response.properties.address;
                                    console.log(resso.response);
                                    if (addr == null) {
                                    }
                                    _this.autocomplete.query = addr;
                                    if (resso.response.properties.city == 'bogota') {
                                        resso.response.properties.city = resso.response.properties.city.charAt(0).toUpperCase() + resso.response.properties.city.slice(1);
                                    }
                                    _this.data.city = resso.response.properties.city;
                                    console.log(_this.data.city);
                                    console.log(_this.autocomplete.query);
                                    //                   alert(addr);
                                    _this.infowindow.setContent(addr);
                                    _this.infowindow.open(_this.map, marker);
                                }
                            }
                        });
                        _this.MapBounds = new google.maps.LatLngBounds(new google.maps.LatLng(4.820443, -74.250464), new google.maps.LatLng(4.716435, -74.310888), new google.maps.LatLng(4.59393, -74.279989), new google.maps.LatLng(4.476882, -74.124808), new google.maps.LatLng(4.505632, -73.953146), new google.maps.LatLng(4.681533, -73.92568), new google.maps.LatLng(4.858758, -73.911947), new google.maps.LatLng(4.908702, -74.126181), new google.maps.LatLng(4.823864, -74.245657));
                        //       new google.maps.LatLng(4.820443,  -74.25046399999997),
                        //           new google.maps.LatLng(4.716435,  -74.31088799999998));
                        var mapOptions = {
                            center: latLng,
                            zoom: 18,
                            Bounds: _this.MapBounds,
                            //        minZoom:100,
                            //        maxzoom:50,
                            minZoom: 2,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            disableDefaultUI: true,
                            zoomControl: true
                        };
                        _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
                        _this.lastPosition = new google.maps.LatLng(4.624335, -74.063644);
                        _this.boundsSet = false;
                        //   google.maps.event.addListener(this.map, 'bounds_changed', function () {
                        ////    console.log(mapp)
                        //   console.log(this.boundsSet)
                        //    console.log(this.MapBounds)
                        //    if (!this.boundsSet) {
                        //        this.MapBounds = this.MapBounds;
                        //        this.boundsSet = true;
                        //        console.log(this.MapBounds);
                        //    }
                        //});
                        console.log(_this.map);
                        console.log(mapOptions);
                        var polygoncoords = [
                            { lat: 4.820443, lng: -74.250464 },
                            { lat: 4.716435, lng: -74.310888 },
                            { lng: -74.279989, lat: 4.59393 },
                            { lng: -74.251837, lat: 4.502894 },
                            { lng: -74.124808, lat: 4.476882 },
                            { lng: -74.035544, lat: 4.505632 },
                            { lng: -73.953146, lat: 4.562446 },
                            { lng: -73.92568, lat: 4.681533 },
                            { lng: -73.911947, lat: 4.858758 },
                            { lng: -74.126181, lat: 4.908702 },
                            { lng: -74.245657, lat: 4.823864 }
                        ];
                        var bogotapoly = new google.maps.Polygon({
                            paths: polygoncoords,
                            strokeColor: '#FF0000',
                            strokeOpacity: 0.8,
                            strokeWeight: 2,
                            fillColor: '#FF0000',
                            fillOpacity: 0.05
                        });
                        //       bogotapoly.setMap(this.map);
                        //  alert("mapOptions");
                        var marker1 = new google.maps.Marker({
                            position: latLng,
                            //         position:new google.maps.LatLng(4.624335, -74.063644),
                            draggable: false,
                            icon: 'assets/img/location32.png',
                            map: _this.map,
                        });
                        map = _this.map;
                        //         this.map.addListener('click', function(event) {  
                        //          latLng = event.latLng
                        //          console.log(map);
                        //           console.log(this.markers)
                        //     var marker = new google.maps.Marker({  
                        //    position: latLng, 
                        //    draggable:true,
                        //    icon: 'assets/img/location.png',
                        //    map: map  
                        //  }); 
                        //    
                        //    
                        //     this.markers=[];
                        //        this.markers.push(marker);
                        //        
                        //  });
                        var marker = new google.maps.Marker({
                            position: latLng,
                            draggable: true,
                            icon: 'assets/img/location.png',
                            map: _this.map,
                        });
                        _this.markers = [];
                        _this.markers.push(marker);
                        map.setCenter(marker.getPosition());
                        google.maps.event.addListener(marker, 'dragend', (function (marker12) {
                            _this.iconname = 'star-outline';
                            var latLng1 = marker12.latLng;
                            _this.lat = latLng1.lat();
                            _this.long = latLng1.lng();
                            console.log(marker12);
                            console.log(_this.lat);
                            console.log(_this.long);
                            //      var pposition = new google.maps.LatLng(this.lat, this.long)
                            //      console.log(this.MapBounds)
                            //      console.log(pposition.lat(),pposition.lng())
                            ////       MapBounds.contains(position) ? lastPosition = position : marker.setPosition(lastPosition);
                            //       if( this.MapBounds.contains(pposition)){
                            //           this.lastPosition = pposition
                            //       }else{
                            //        this.lastPosition = pposition
                            //           console.log('no sertvice available');
                            //       }
                            //       console.log(this.lastPosition.lat(),this.lastPosition.lng())
                            //    ;
                            var latLong = new google.maps.LatLng(_this.lat, _this.long);
                            var postdata = {
                                lat: _this.lat,
                                long: _this.long
                            };
                            var Serialized = _this.serializeObj(postdata);
                            _this.http.post('http://rafao.us-west-2.elasticbeanstalk.com/api/home/reverse_geocoding', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                                console.log(response.data == '{"message":"Result not found"}');
                                var resso = JSON.parse(response.data);
                                console.log(resso.response);
                                //            console.log(resso.response.properties.address);
                                if (response.data == 'Not available credits') {
                                    _this.ToastMsg('Sorry! No Credits available');
                                }
                                if ((resso.response == undefined) || (response.data == '{"message":"Result not found"}') || (resso.response.properties.address == null)) {
                                    _this.geocoder.geocode({ 'location': latLong }, (function (results, status) {
                                        console.log(results);
                                        if (results == '') {
                                            _this.ToastMsg('Invalid Location');
                                            _this.lat = '';
                                            _this.long = '';
                                            _this.infowindow.setContent('Error');
                                            _this.infowindow.open(_this.map, marker);
                                        }
                                        else {
                                            if (status == google.maps.GeocoderStatus.OK) {
                                                if (results[0]) {
                                                    console.log(results[0].place_id);
                                                    _this.autocomplete.query = results[1].formatted_address;
                                                    console.log(_this.autocomplete.query);
                                                    var citiie = results[0].formatted_address.split(',');
                                                    var City = '';
                                                    _this.data.city = '';
                                                    console.log(citiie[1]);
                                                    switch (citiie[1]) {
                                                        case ' Bogotá':
                                                            _this.data.city = 'Bogota';
                                                            break;
                                                        case ' Bogota':
                                                            _this.data.city = 'Bogota';
                                                            break;
                                                        case ' Soacha': {
                                                            _this.data.city = 'cun_soacha';
                                                            break;
                                                        }
                                                        case ' Mosquera': {
                                                            _this.data.city = 'cun_mosquera';
                                                            break;
                                                        }
                                                        case ' Facatativá': {
                                                            _this.data.city = 'cun_facatativa';
                                                            break;
                                                        }
                                                        case ' Madrid': {
                                                            _this.data.city = 'cun_madrid';
                                                            break;
                                                        }
                                                        case ' Cajicá': {
                                                            _this.data.city = 'cun_cajica';
                                                            break;
                                                        }
                                                        case ' Sopó': {
                                                            _this.data.city = 'cun_sopo';
                                                            break;
                                                        }
                                                        case ' Tenjo': {
                                                            _this.data.city = 'cun_tenjo';
                                                            break;
                                                        }
                                                        case ' Tocancipa': {
                                                            _this.data.city = 'cun_tocancipa';
                                                            break;
                                                        }
                                                        case ' Guasca': {
                                                            _this.data.city = 'cun_guasca';
                                                            break;
                                                        }
                                                        case ' Anapoima': {
                                                            _this.data.city = 'cun_anapoima';
                                                            break;
                                                        }
                                                        case ' Villeta': {
                                                            _this.data.city = 'cun_villeta';
                                                            break;
                                                        }
                                                        case ' La Vega': {
                                                            _this.data.city = 'cun_la_vega';
                                                            break;
                                                        }
                                                        case ' La Mesa': {
                                                            _this.data.city = 'cun_la_mesa';
                                                            break;
                                                        }
                                                        default: {
                                                            console.log('not found');
                                                            console.log(citiie[1]);
                                                            _this.ToastMsg('Sorry!! No service in this area');
                                                        }
                                                    }
                                                    console.log(_this.data.city);
                                                    //            this.data.city = citiie ;
                                                    //          this.infowindow=new google.maps.InfoWindow({
                                                    //              content: results[1].formatted_address,
                                                    //          }); 
                                                    _this.infowindow.setContent(results[0].formatted_address);
                                                    _this.infowindow.open(_this.map, marker);
                                                }
                                                else if (results[1]) {
                                                    console.log(results[1].place_id);
                                                    _this.autocomplete.query = results[1].formatted_address;
                                                    var citiie1 = results[1].formatted_address.split(',');
                                                    var City = '';
                                                    _this.data.city = '';
                                                    console.log(citiie[1]);
                                                    switch (citiie[1]) {
                                                        case ' Bogotá':
                                                            _this.data.city = 'Bogota';
                                                            break;
                                                        case ' Bogota':
                                                            _this.data.city = 'Bogota';
                                                            break;
                                                        case ' Soacha': {
                                                            _this.data.city = 'cun_soacha';
                                                            break;
                                                        }
                                                        case ' Mosquera': {
                                                            _this.data.city = 'cun_mosquera';
                                                            break;
                                                        }
                                                        case ' Facatativá': {
                                                            _this.data.city = 'cun_facatativa';
                                                            break;
                                                        }
                                                        case ' Madrid': {
                                                            _this.data.city = 'cun_madrid';
                                                            break;
                                                        }
                                                        case ' Cajicá': {
                                                            _this.data.city = 'cun_cajica';
                                                            break;
                                                        }
                                                        case ' Sopó': {
                                                            _this.data.city = 'cun_sopo';
                                                            break;
                                                        }
                                                        case ' Tenjo': {
                                                            _this.data.city = 'cun_tenjo';
                                                            break;
                                                        }
                                                        case ' Tocancipa': {
                                                            _this.data.city = 'cun_tocancipa';
                                                            break;
                                                        }
                                                        case ' Guasca': {
                                                            _this.data.city = 'cun_guasca';
                                                            break;
                                                        }
                                                        case ' Anapoima': {
                                                            _this.data.city = 'cun_anapoima';
                                                            break;
                                                        }
                                                        case ' Villeta': {
                                                            _this.data.city = 'cun_villeta';
                                                            break;
                                                        }
                                                        case ' La Vega': {
                                                            _this.data.city = 'cun_la_vega';
                                                            break;
                                                        }
                                                        case ' La Mesa': {
                                                            _this.data.city = 'cun_la_mesa';
                                                            break;
                                                        }
                                                        default: {
                                                            console.log('not found');
                                                            console.log(citiie[1]);
                                                            _this.ToastMsg('Sorry!! No service in this area');
                                                        }
                                                    }
                                                    console.log(_this.data.city);
                                                    //            this.data.city = citiie1 ;
                                                    console.log(_this.autocomplete.query);
                                                    //          this.infowindow=new google.maps.InfoWindow({
                                                    //              content: results[1].formatted_address,
                                                    //          }); 
                                                    _this.infowindow.setContent(results[1].formatted_address);
                                                    _this.infowindow.open(_this.map, marker);
                                                }
                                            }
                                        }
                                    }));
                                }
                                else {
                                    //                var resso = JSON.parse(response.data)
                                    console.log(resso.response.message);
                                    if (resso.response.message == "Result not found") {
                                        _this.ToastMsg('Not found');
                                        _this.lat = '';
                                        _this.long = '';
                                        _this.infowindow.setContent('Error');
                                        _this.infowindow.open(_this.map, marker);
                                    }
                                    else {
                                        var addr = resso.response.properties.address;
                                        console.log(resso.response);
                                        if (addr == null) {
                                        }
                                        _this.autocomplete.query = addr;
                                        if (resso.response.properties.city == 'bogota') {
                                            resso.response.properties.city = resso.response.properties.city.charAt(0).toUpperCase() + resso.response.properties.city.slice(1);
                                        }
                                        _this.data.city = resso.response.properties.city;
                                        console.log(_this.data.city);
                                        console.log(_this.autocomplete.query);
                                        _this.infowindow.setContent(addr);
                                        _this.infowindow.open(_this.map, marker);
                                    }
                                }
                            });
                        }));
                        // alert("working1");
                    }).catch(function (error) {
                        console.log('Error getting location', error);
                        _this.ToastMsg1('Please Turn On your Loaction!!.Error getting location');
                        Loading.dismissAll();
                        var latLng = new google.maps.LatLng(_this.lat, _this.long);
                        _this.geocoder.geocode({ 'latLng': latLng }, (function (results, status) {
                            if (status == google.maps.GeocoderStatus.OK) {
                                if (results[1]) {
                                    _this.autocomplete.query = results[1].formatted_address;
                                }
                            }
                        }));
                        var mapOptions = {
                            center: [-74.07231699675322, 4.66336863727521],
                            zoom: 18,
                            //        minZoom:100,
                            //        maxzoom:50,
                            minZoom: 1,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            disableDefaultUI: true,
                            zoomControl: true
                        };
                        var polygoncoords = [
                            { lat: 4.820443, lng: -74.250464 },
                            { lat: 4.716435, lng: -74.310888 },
                            { lng: -74.279989, lat: 4.59393 },
                            { lng: -74.251837, lat: 4.502894 },
                            { lng: -74.124808, lat: 4.476882 },
                            { lng: -74.035544, lat: 4.505632 },
                            { lng: -73.953146, lat: 4.562446 },
                            { lng: -73.92568, lat: 4.681533 },
                            { lng: -73.911947, lat: 4.858758 },
                            { lng: -74.126181, lat: 4.908702 },
                            { lng: -74.245657, lat: 4.823864 }
                        ];
                        var bogotapoly = new google.maps.Polygon({
                            paths: polygoncoords,
                            strokeColor: '#FF0000',
                            strokeOpacity: 0.8,
                            strokeWeight: 2,
                            fillColor: '#FF0000',
                            fillOpacity: 0.35
                        });
                        bogotapoly.setMap(map);
                        //        this.map.setZoom(1);
                        //        var MapBounds = new google.maps.LatLngBounds(
                        //    new google.maps.LatLng(35.676263, 13.949096),
                        //    new google.maps.LatLng(36.204391, 14.89038));
                        //    google.maps.event.addListener(map, 'dragend', function ()
                        //    {
                        //        if (MapBounds.contains(map.getCenter()))
                        //        {
                        //            return;
                        //        }
                        //        else
                        //        {
                        //            map.setCenter(new google.maps.LatLng( 4.624335, -74.063644));
                        //        }
                        //    });
                        _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
                        //  alert("mapOptions");
                        var marker1 = new google.maps.Marker({
                            position: latLng,
                            draggable: false,
                            icon: 'https://raw.githubusercontent.com/googlemaps/v3-utility-library/4c926fc74d724fe4360e4189e7c926842884614e/markerclusterer/images/m1.png',
                            map: _this.map,
                        });
                        //      var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
                        var marker = new google.maps.Marker({
                            position: latLng,
                            draggable: true,
                            icon: 'assets/img/location.png',
                            map: _this.map,
                        });
                        _this.markers = [];
                        _this.markers.push(marker);
                        map.setCenter(marker.getPosition());
                        //  alert("marker");
                        google.maps.event.addListener(marker, 'dragend', (function (marker12) {
                            _this.iconname = 'star-outline';
                            var latLng1 = marker12.latLng;
                            _this.lat = latLng1.lat();
                            _this.long = latLng1.lng();
                            console.log(marker12);
                            console.log(_this.lat);
                            console.log(_this.long);
                            //  alert(this.crlat);
                            // alert(this.crlng);
                            var latLong = new google.maps.LatLng(_this.lat, _this.long);
                            _this.geocoder.geocode({ 'location': latLong }, (function (results, status) {
                                console.log(results);
                                if (results == '') {
                                    _this.ToastMsg('Invalid Location');
                                    _this.lat = '';
                                    _this.long = '';
                                    _this.infowindow.setContent('Error');
                                    _this.infowindow.open(_this.map, marker);
                                }
                                else {
                                    if (status == google.maps.GeocoderStatus.OK) {
                                        if (results[0]) {
                                            console.log(results[0].place_id);
                                            _this.autocomplete.query = results[0].formatted_address;
                                            console.log(_this.autocomplete.query);
                                            var citiie2 = results[0].formatted_address.split(',');
                                            var City = '';
                                            _this.data.city = '';
                                            console.log(citiie2[1]);
                                            switch (citiie2[1]) {
                                                case ' Bogotá':
                                                    _this.data.city = 'Bogota';
                                                    break;
                                                case ' Bogota':
                                                    _this.data.city = 'Bogota';
                                                    break;
                                                case ' Soacha': {
                                                    _this.data.city = 'cun_soacha';
                                                    break;
                                                }
                                                case ' Mosquera': {
                                                    _this.data.city = 'cun_mosquera';
                                                    break;
                                                }
                                                case ' Facatativá': {
                                                    _this.data.city = 'cun_facatativa';
                                                    break;
                                                }
                                                case ' Madrid': {
                                                    _this.data.city = 'cun_madrid';
                                                    break;
                                                }
                                                case ' Cajicá': {
                                                    _this.data.city = 'cun_cajica';
                                                    break;
                                                }
                                                case ' Sopó': {
                                                    _this.data.city = 'cun_sopo';
                                                    break;
                                                }
                                                case ' Tenjo': {
                                                    _this.data.city = 'cun_tenjo';
                                                    break;
                                                }
                                                case ' Tocancipa': {
                                                    _this.data.city = 'cun_tocancipa';
                                                    break;
                                                }
                                                case ' Guasca': {
                                                    _this.data.city = 'cun_guasca';
                                                    break;
                                                }
                                                case ' Anapoima': {
                                                    _this.data.city = 'cun_anapoima';
                                                    break;
                                                }
                                                case ' Villeta': {
                                                    _this.data.city = 'cun_villeta';
                                                    break;
                                                }
                                                case ' La Vega': {
                                                    _this.data.city = 'cun_la_vega';
                                                    break;
                                                }
                                                case ' La Mesa': {
                                                    _this.data.city = 'cun_la_mesa';
                                                    break;
                                                }
                                                default: {
                                                    console.log('not found');
                                                    console.log(citiie2[1]);
                                                    _this.ToastMsg('Sorry!! No service in this area');
                                                }
                                            }
                                            console.log(_this.data.city);
                                            //            this.data.city = citiie2 ;
                                            //          this.infowindow=new google.maps.InfoWindow({
                                            //              content: results[1].formatted_address,
                                            //          }); 
                                            _this.infowindow.setContent(results[0].formatted_address);
                                            _this.infowindow.open(_this.map, marker);
                                        }
                                        else if (results[1]) {
                                            console.log(results[1].place_id);
                                            _this.autocomplete.query = results[1].formatted_address;
                                            var citiie3 = results[1].formatted_address.split(',');
                                            var City = '';
                                            _this.data.city = '';
                                            console.log(citiie3[1]);
                                            switch (citiie3[1]) {
                                                case ' Bogotá':
                                                    _this.data.city = 'Bogota';
                                                    break;
                                                case ' Bogota':
                                                    _this.data.city = 'Bogota';
                                                    break;
                                                case ' Soacha': {
                                                    _this.data.city = 'cun_soacha';
                                                    break;
                                                }
                                                case ' Mosquera': {
                                                    _this.data.city = 'cun_mosquera';
                                                    break;
                                                }
                                                case ' Facatativá': {
                                                    _this.data.city = 'cun_facatativa';
                                                    break;
                                                }
                                                case ' Madrid': {
                                                    _this.data.city = 'cun_madrid';
                                                    break;
                                                }
                                                case ' Cajicá': {
                                                    _this.data.city = 'cun_cajica';
                                                    break;
                                                }
                                                case ' Sopó': {
                                                    _this.data.city = 'cun_sopo';
                                                    break;
                                                }
                                                case ' Tenjo': {
                                                    _this.data.city = 'cun_tenjo';
                                                    break;
                                                }
                                                case ' Tocancipa': {
                                                    _this.data.city = 'cun_tocancipa';
                                                    break;
                                                }
                                                case ' Guasca': {
                                                    _this.data.city = 'cun_guasca';
                                                    break;
                                                }
                                                case ' Anapoima': {
                                                    _this.data.city = 'cun_anapoima';
                                                    break;
                                                }
                                                case ' Villeta': {
                                                    _this.data.city = 'cun_villeta';
                                                    break;
                                                }
                                                case ' La Vega': {
                                                    _this.data.city = 'cun_la_vega';
                                                    break;
                                                }
                                                case ' La Mesa': {
                                                    _this.data.city = 'cun_la_mesa';
                                                    break;
                                                }
                                                default: {
                                                    console.log('not found');
                                                    console.log(citiie3[1]);
                                                    _this.ToastMsg('Sorry!! No service in this area');
                                                }
                                            }
                                            console.log(_this.data.city);
                                            //            this.data.city = citiie3;
                                            console.log(_this.autocomplete.query);
                                            //          this.infowindow=new google.maps.InfoWindow({
                                            //              content: results[1].formatted_address,
                                            //          }); 
                                            _this.infowindow.setContent(results[1].formatted_address);
                                            _this.infowindow.open(_this.map, marker);
                                        }
                                    }
                                }
                            }));
                        }));
                    });
                });
                var watch = _this.geolocation.watchPosition();
                watch.subscribe(function (data) {
                    // console.log('My latitude : ', data.coords.latitude);
                    // console.log('My longitude: ', data.coords.longitude);
                    nill.latt = data.coords.latitude;
                    nill.longg = data.coords.longitude;
                    //  alert(nill.latt+','+nill.longg);
                });
            });
        };
        //  this.initMap();
        //   alert('hello');
        this.userdetail = JSON.parse(localStorage.getItem('UserDetail'));
        console.log(this.userdetail);
        this.cities();
        console.log(this.appsetting.saved);
    }
    MapmodalPage.prototype.cities = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        //    let options = new RequestOptions({ headers: headers });
        this.http.get('http://rafao.us-west-2.elasticbeanstalk.com/api/allcity').map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response.data);
            _this.arr = response.data;
            console.log(_this.arr);
            //           console.log(this.data.city);
        });
    };
    MapmodalPage.prototype.city1 = function (cit) {
        console.log(cit);
        console.log(this.data.city);
    };
    MapmodalPage.prototype.ngOnInit = function () {
        // alert("neelanshi");
        //        this.nomi= JSON.parse(localStorage.getItem('NominatimDetail'))
        //    console.log(this.nomi);
        //    if(this.nomi !=null){
        //    console.log(this.nomi.lat);
        //    console.log(this.nomi.lon);
        //    this.acService = new google.maps.places.AutocompleteService();      
        //    this.infowindow = new google.maps.InfoWindow;  
        //    this.autocompleteItems = [];
        //    this.autocomplete = {
        //    query: ''
        //  };  
        //    }
        //    else{
        this.acService = new google.maps.places.AutocompleteService();
        this.infowindow = new google.maps.InfoWindow;
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    };
    MapmodalPage.prototype.lupapsearch = function () {
        var _this = this;
        console.log(this.autocomplete.query);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        var oldstr = this.autocomplete.query;
        var newstr = oldstr.toString().replace(/#/g, "%23");
        var newstr1 = newstr.toString().replace(/ /g, "%20");
        var newstr2 = newstr1.toString().replace(/–/g, "%2D");
        var newstr3 = newstr2.toString().replace(/./g, "%2E");
        console.log(newstr2);
        console.log(this.data.city);
        if (this.data.city == undefined) {
            this.ToastMsg('Select some city');
        }
        else {
            var postdata = {
                country_code: 'co',
                country_name: this.data.city,
                address: newstr2
            };
            console.log(postdata);
            var Serialized = this.serializeObj(postdata);
            this.http.post('http://rafao.us-west-2.elasticbeanstalk.com/api/home/address_geocoding', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                if (response) {
                    console.log(typeof (response));
                    console.log(response);
                    var ress = JSON.parse(response.data);
                    console.log(ress);
                    if (ress.message == 'Not available credits') {
                        _this.ToastMsg('Sorry! No Credits available');
                    }
                    if (ress.message == 'Result not found') {
                        _this.chooseItem();
                        //                    this.nomiapi();
                    }
                    else {
                        console.log(ress.response);
                        console.log(ress.response.type);
                        console.log(ress.response.properties.address);
                        _this.infocontent = ress.response.properties.address;
                        console.log(ress.response.geometry.coordinates);
                        _this.lats = ress.response.geometry.coordinates[1];
                        _this.longs = ress.response.geometry.coordinates[0];
                        console.log(_this.lats, _this.longs);
                        _this.description = ress.response.properties;
                        _this.autocompleteItems.push(_this.description);
                        console.log(_this.autocompleteItems);
                        _this.chooseItem1();
                    }
                }
            }, function (err) {
                _this.ToastMsg('Something went Wrong');
            });
        }
    };
    MapmodalPage.prototype.fav = function (auto) {
        var _this = this;
        var productid;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        console.log("place");
        console.log(auto);
        if (auto == '') {
            this.AlertMsg1('Select some address');
        }
        else if (this.iconname == 'star') {
            console.log('new');
            var alert1 = this.alertCtrl.create({
                title: 'RAFAHO',
                message: 'Remove from Favourite',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                        }
                    },
                    {
                        text: 'OK',
                        role: 'submit',
                        handler: function () {
                            _this.iconname = 'star-outline';
                            console.log(_this.appsetting.saved);
                            _this.appsetting.saved.pop(auto);
                            console.log(_this.appsetting.saved);
                            _this.userdetail = JSON.parse(localStorage.getItem('UserDetail'));
                            console.log(_this.userdetail);
                            for (var z = 0; z < _this.userdetail.favorite_address.length; z++) {
                                if (_this.userdetail.favorite_address[z].favorite_address == auto) {
                                    productid = _this.userdetail.favorite_address[z]._id;
                                }
                            }
                            var postdata1 = {
                                user_id: _this.userdetail._id,
                                favorite_address_id: productid
                            };
                            console.log(postdata1);
                            var Serialized = _this.serializeObj(postdata1);
                            _this.http.post(_this.appsetting.myGlobalVar + 'user/delete_favarite_address', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response1) {
                                console.log(response1);
                                if (response1.status == true) {
                                    localStorage.setItem('UserDetail', JSON.stringify(response1.data[0]));
                                }
                            });
                            localStorage.setItem('Favaddress', JSON.stringify(postdata1));
                            localStorage.setItem('Favaddress', JSON.stringify(_this.appsetting.saved));
                        }
                    }
                ]
            });
            alert1.present();
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'RAFAHO',
                message: 'Save this as favourite address?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                        }
                    },
                    {
                        text: 'OK',
                        role: 'submit',
                        handler: function () {
                            var citytosend;
                            switch (_this.data.city) {
                                case 'Bogota': {
                                    citytosend = 'Bogotá DC';
                                    break;
                                }
                                case 'cun_soacha': {
                                    citytosend = 'Soacha';
                                    break;
                                }
                                case 'cun_mosquera': {
                                    citytosend = ' Mosquera';
                                    break;
                                }
                                case 'cun_facatativa': {
                                    citytosend = 'Facatativá';
                                    break;
                                }
                                case 'cun_madrid': {
                                    citytosend = 'Madrid';
                                    break;
                                }
                                case 'cun_cajica': {
                                    citytosend = 'Cajicá';
                                    break;
                                }
                                case 'cun_sopo': {
                                    citytosend = 'Sopó';
                                    break;
                                }
                                case 'cun_tenjo': {
                                    citytosend = 'Tenjo';
                                    break;
                                }
                                case 'cun_tocancipa': {
                                    citytosend = 'Tocancipa';
                                    break;
                                }
                                case 'cun_guasca': {
                                    citytosend = 'Guasca';
                                    break;
                                }
                                case 'cun_anapoima': {
                                    citytosend = 'Anapoima';
                                    break;
                                }
                                case 'cun_villeta': {
                                    citytosend = 'Villeta';
                                    break;
                                }
                                case 'cun_la_vega': {
                                    citytosend = 'La Vega';
                                    break;
                                }
                                case 'cun_la_mesa': {
                                    citytosend = 'La Mesa';
                                    break;
                                }
                                default: {
                                    console.log('not found');
                                    //                   console.log(citiie[1])
                                }
                            }
                            console.log(_this.appsetting.saved);
                            if (citytosend == undefined) {
                                _this.ToastMsg('Select some city');
                            }
                            else {
                                _this.iconname = 'star';
                                console.log(_this.appsetting.saved);
                                _this.appsetting.saved.push(auto);
                                var postdata = {
                                    user_id: _this.userdetail._id,
                                    favorite_address: auto + ' ' + citytosend
                                };
                                console.log(postdata);
                                var Serialized = _this.serializeObj(postdata);
                                _this.http.post(_this.appsetting.myGlobalVar + 'user/add_favarite_address', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                                    console.log(response);
                                    if (response.status == true) {
                                        localStorage.setItem('UserDetail', JSON.stringify(response.data[0]));
                                    }
                                });
                                localStorage.setItem('Favaddress', JSON.stringify(postdata));
                                //        localStorage.setItem('Favaddress',JSON.stringify(this.appsetting.saved));
                            }
                        }
                    }
                ]
            });
            alert_1.present();
        }
        console.log(this.appsetting.saved);
        console.log(localStorage.getItem('Favaddress'));
    };
    MapmodalPage.prototype.AlertMsg1 = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        //            this.navCtrl.push(LocationPage);
                    }
                }
            ]
        });
        alert.present();
    };
    MapmodalPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    MapmodalPage.prototype.updateSearch = function () {
        delete this.crlat;
        delete this.crlng;
        console.log(this.autocomplete.query);
        if (this.autocomplete.query == '') {
            //enable the button
            this.isenabled = false;
        }
        else {
            this.isenabled = true;
        }
        console.log('modal > updateSearch');
        this.iconname = 'star-outline';
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            //    this.lupapsearch();
            return;
        }
        var matches = this.autocomplete.query.match(/\d+/g);
        console.log(matches);
        if (matches != null) {
            console.log('matched');
            this.number = true;
        }
        else {
            console.log('not matched');
            this.number = false;
        }
        //if(this.number == true){
        //    this.lupapsearch();
        //     this.omega = 1;
        //let self = this; 
        //    setTimeout(()=>{    //<<<---    using ()=> syntax
        //     let config = { 
        //    //types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
        //    input: this.autocomplete.query, 
        ////    componentRestrictions: {  } 
        //    componentRestrictions: {country: 'co'}
        //    }
        //    this.acService.getPlacePredictions(config, ((predictions, status)=> {
        //    console.log('modal > getPlacePredictions > status > ', status);
        //    if(status == 'ZERO_RESULTS'){
        //        
        //        this.lupapsearch();
        //        this.omega = 1;
        //         this.autocompleteItems = [];   
        //    }else{
        //      this.omega = 0;
        //    this.autocompleteItems = [];   
        //    console.log(predictions) 
        //    for(var e = 0; e<=1; e++){
        //     this.autocompleteItems.push(predictions[e]);
        //    }     
        //    console.log( this.autocompleteItems);   
        ////    predictions.forEach(((prediction)=> {   
        ////      console.log("abc")           
        ////    this.autocompleteItems.push(prediction);
        ////   
        ////    })
        ////   
        ////   );
        //    }
        //   // return false;
        //    })
        //    
        //   );
        //    this.number = true
        // },2000);
        //  }
        //  else{
        ////    this.lupapsearch();
        ////     this.omega = 1;
        //  }
        //else {
        //    this.nomiapi()
        //}
    };
    MapmodalPage.prototype.Searchlocation = function () {
        console.log(this.number);
        if (this.number == true) {
            this.lupapsearch();
        }
        else {
            this.nomiapi();
        }
    };
    MapmodalPage.prototype.nomiapi = function () {
        var _this = this;
        console.log('it  is not  having number');
        console.log('false');
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        if (this.autocomplete.query) {
            this.autocomplete.query = this.autocomplete.query.replace(/" "/g, '%20');
            console.log(this.autocomplete.query);
            var adr = this.autocomplete.query;
            console.log(adr);
            if (!this.number) {
                console.log('its hitting');
                this.http.post('https://nominatim.openstreetmap.org/search/' + adr + '?countrycodes=co&format=json&addressdetails=1&limit=1&polygon_svg=1', options).map(function (res) { return res.json(); }).subscribe(function (response) {
                    console.log(response[0]);
                    if ((response[0] == undefined)) {
                        _this.lupapsearch();
                        //            
                        //    let config = { 
                        //    //types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
                        //    input: this.autocomplete.query, 
                        ////    componentRestrictions: {  } 
                        ////    componentRestrictions: {country: 'co'}
                        //    }
                        //    this.acService.getPlacePredictions(config, ((predictions, status)=> {
                        //    console.log('modal > getPlacePredictions > status > ', status);
                        //    if(status == 'ZERO_RESULTS'){
                        //        
                        //       this.ToastMsg('Location not found')
                        //        this.omega = 1;
                        //         this.autocompleteItems = [];   
                        //    }else{
                        //      this.omega = 0;
                        //    this.autocompleteItems = [];   
                        //    console.log(predictions)         
                        //    predictions.forEach(((prediction)=> {   
                        //      console.log("abc")           
                        //    this.autocompleteItems.push(prediction);
                        //   
                        //    })
                        //   
                        //   ); }
                        //   // return false;
                        //    })
                        //    
                        //   );
                    }
                    else {
                        if (response[0] != undefined) {
                            if (response[0].place_id != '') {
                                console.log('working');
                                _this.autocompleteItems = [];
                                localStorage.setItem('NominatimDetail', JSON.stringify(response[0]));
                                console.log(response[0].address);
                                //        this.navCtrl.push(NominatimapPage);
                                //         let modal = this.modalCtrl.create(NominatimapPage);
                                //    modal.onDidDismiss(data => { 
                                //      this.AlertMsg4('Your Location has been saved')
                                //  });
                                //   modal.present();
                                ////   
                                if (response[0].address.mall) {
                                    _this.nomaddress = response[0].address.mall + ',' + response[0].address.city + ',' + response[0].address.postcode + ',' + response[0].address.state + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                }
                                if (response[0].address.road) {
                                    _this.nomaddress = response[0].address.road + ',' + response[0].address.city + ',' + response[0].address.postcode + ',' + response[0].address.state + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                }
                                else if (response[0].address.city) {
                                    _this.nomaddress = response[0].address.city + ',' + response[0].address.postcode + ',' + response[0].address.state + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                }
                                else if (response[0].address.state) {
                                    _this.nomaddress = response[0].address.state + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                }
                                else if (response[0].address.state_district) {
                                    _this.nomaddress = response[0].address.state + ',' + response[0].address.state_district + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                }
                                else if (response[0].address.country) {
                                    _this.nomaddress = response[0].address.country + ',' + response[0].address.country_code;
                                }
                                console.log(_this.nomaddress);
                                _this.omega = 2;
                                if (_this.number == false) {
                                    _this.autocompleteItems.push(_this.nomaddress);
                                    console.log(_this.autocompleteItems);
                                }
                                _this.lat = response[0].lat;
                                _this.long = response[0].lon;
                                console.log(_this.lat, _this.long);
                                _this.chooseItem2();
                            }
                        }
                        else {
                            console.log('neelanshi');
                            //         this.AlertMsg2('Empty response on Nominatim<br>Search via Google maps<br>');
                        }
                    }
                    //    else
                    //        {
                    //       this.AlertMsg1('Empty response on Nominatim<br>Search via Google maps<br>');
                    //        this.openmapmodal();
                    //    }
                });
            }
        }
        //}
    };
    MapmodalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapmodalPage');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        this.initMap();
    };
    MapmodalPage.prototype.ToastMsg = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    MapmodalPage.prototype.ToastMsg1 = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 4000,
            position: 'middle'
        });
        toast.present();
    };
    MapmodalPage.prototype.chooseItem1 = function () {
        var _this = this;
        this.number = true;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        this.glob_item = this.autocomplete.query;
        console.log(this.glob_item);
        //      this.data.city = '';
        //this.autocomplete.query = item.address;
        this.lat = this.lats;
        this.long = this.longs;
        this.map.setZoom(17);
        var c = this.map.setCenter(new google.maps.LatLng(this.lat, this.long));
        if (this.markers != '') {
            this.deleteMarkers();
            this.markers = [];
        }
        var latlng = new google.maps.LatLng(this.lat, this.long);
        console.log(this.lat, this.long);
        this.deleteMarkers();
        this.markers = [];
        console.log(this.markers);
        var marker = new google.maps.Marker({
            map: this.map,
            icon: 'assets/img/location.png',
            draggable: true,
            position: latlng
        });
        console.log(marker);
        this.markers.push(marker);
        this.map.setCenter(marker.getPosition());
        google.maps.event.addListener(marker, 'dragend', (function (marker31) {
            _this.iconname = 'star-outline';
            var latLng = marker31.latLng;
            _this.crlat = latLng.lat();
            _this.crlng = latLng.lng();
            console.log(_this.crlat);
            console.log(_this.crlng);
            //  alert(this.crlat);
            // alert(this.crlng);
            _this.markers = [];
            _this.markers.push(marker);
            var postdata = {
                lat: _this.crlat,
                long: _this.crlng,
            };
            var Serialized = _this.serializeObj(postdata);
            _this.http.post('  http://rafao.us-west-2.elasticbeanstalk.com/api/home/reverse_geocoding', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                var resso = JSON.parse(response.data);
                console.log(resso.response);
                if (response.data == 'Not available credits') {
                    _this.ToastMsg('Sorry! No Credits available');
                }
                //            console.log(resso.response.properties.address);
                if ((resso.response == undefined) || (response.data == '{"message":"Result not found"}') || (resso.response.properties.address == null)) {
                    //                console.log(resso.response.properties);
                    //                this.AlertMsg1('Sorry we cannot provide our services for this location')
                    //                 this.autocomplete.query= '';
                    var latLong = new google.maps.LatLng(_this.crlat, _this.crlng);
                    _this.geocoder.geocode({ 'latLng': latLng }, (function (results, status) {
                        console.log(results);
                        if (results == '') {
                            _this.ToastMsg('Invalid Location');
                            _this.autocomplete.query = 'Error';
                            _this.lat = '';
                            _this.long = '';
                            _this.infowindow.setContent('Error');
                            _this.infowindow.open(_this.map, marker);
                        }
                        else {
                            if (status == google.maps.GeocoderStatus.OK) {
                                if (results[0]) {
                                    _this.autocomplete.query = results[0].formatted_address;
                                    var citiie7 = results[0].formatted_address.split(',');
                                    var City = '';
                                    _this.data.city = '';
                                    console.log(citiie7[1]);
                                    _this.data.city = '';
                                    switch (citiie7[1]) {
                                        case ' Bogotá':
                                            _this.data.city = 'Bogota';
                                            break;
                                        case ' Bogota':
                                            _this.data.city = 'Bogota';
                                            break;
                                        case ' Soacha': {
                                            _this.data.city = 'cun_soacha';
                                            break;
                                        }
                                        case ' Mosquera': {
                                            _this.data.city = 'cun_mosquera';
                                            break;
                                        }
                                        case ' Facatativá': {
                                            _this.data.city = 'cun_facatativa';
                                            break;
                                        }
                                        case ' Madrid': {
                                            _this.data.city = 'cun_madrid';
                                            break;
                                        }
                                        case ' Cajicá': {
                                            _this.data.city = 'cun_cajica';
                                            break;
                                        }
                                        case ' Sopó': {
                                            _this.data.city = 'cun_sopo';
                                            break;
                                        }
                                        case ' Tenjo': {
                                            _this.data.city = 'cun_tenjo';
                                            break;
                                        }
                                        case ' Tocancipa': {
                                            _this.data.city = 'cun_tocancipa';
                                            break;
                                        }
                                        case ' Guasca': {
                                            _this.data.city = 'cun_guasca';
                                            break;
                                        }
                                        case ' Anapoima': {
                                            _this.data.city = 'cun_anapoima';
                                            break;
                                        }
                                        case ' Villeta': {
                                            _this.data.city = 'cun_villeta';
                                            break;
                                        }
                                        case ' La Vega': {
                                            _this.data.city = 'cun_la_vega';
                                            break;
                                        }
                                        case ' La Mesa': {
                                            _this.data.city = 'cun_la_mesa';
                                            break;
                                        }
                                        default: {
                                            console.log('not found');
                                            console.log(citiie7[1]);
                                            _this.ToastMsg('Sorry!! No service in this area');
                                        }
                                    }
                                    console.log(_this.data.city);
                                    //            this.data.city = citiie7;
                                    console.log(_this.autocomplete.query);
                                    _this.infowindow.setContent(results[0].formatted_address);
                                    _this.infowindow.open(_this.map, marker);
                                }
                            }
                        }
                    }));
                }
                else {
                    console.log(resso.response.message);
                    if (resso.response.message == "Result not found") {
                        _this.ToastMsg('Not found');
                        _this.lat = '';
                        _this.long = '';
                        _this.infowindow.setContent('Error');
                        _this.infowindow.open(_this.map, marker);
                    }
                    else {
                        var addr = resso.response.properties.address;
                        _this.autocomplete.query = addr;
                        if (resso.response.properties.city == 'bogota') {
                            resso.response.properties.city = resso.response.properties.city.charAt(0).toUpperCase() + resso.response.properties.city.slice(1);
                        }
                        _this.data.city = resso.response.properties.city;
                        console.log(_this.data.city);
                        console.log(_this.autocomplete.query);
                        //                   alert(addr);
                        _this.infowindow.setContent(addr);
                        _this.infowindow.open(_this.map, marker);
                    }
                }
            });
        }));
        this.infowindow.setContent(this.infocontent);
        this.infowindow.open(this.map, marker);
        console.log('hello');
        this.autocompleteItems = [];
    };
    MapmodalPage.prototype.chooseItem2 = function () {
        var _this = this;
        console.log(this.glob_item);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        var latlng = { lat: parseFloat(this.lat), lng: parseFloat(this.long) };
        console.log(latlng);
        this.geocoder.geocode({ 'location': latlng }, (function (results, status) {
            console.log(status);
            if (status === 'OK') {
                if (results[0]) {
                    console.log(results[0]);
                    if (_this.data.city == undefined) {
                        _this.data.city = 'Bogota';
                    }
                    console.log(_this.data.city);
                    _this.deleteMarkers();
                    _this.markers = [];
                    console.log(_this.markers);
                    _this.map.setZoom(17);
                    _this.map.setCenter(results[0].geometry.location);
                    _this.lat = results[0].geometry.location.lat();
                    _this.long = results[0].geometry.location.lng();
                    console.log(_this.lat, _this.long);
                    var marker = new google.maps.Marker({
                        map: _this.map,
                        draggable: true,
                        icon: 'assets/img/location.png',
                        position: results[0].geometry.location
                    });
                    _this.markers.push(marker);
                    _this.map.setCenter(marker.getPosition());
                    google.maps.event.addListener(marker, 'dragend', (function (marker21) {
                        _this.iconname = 'star-outline';
                        var latLng = marker21.latLng;
                        _this.crlat = latLng.lat();
                        _this.crlng = latLng.lng();
                        console.log(_this.crlat);
                        console.log(_this.crlng);
                        //  alert(this.crlat);
                        // alert(this.crlng);
                        _this.markers = [];
                        _this.markers.push(marker);
                        var latLong = new google.maps.LatLng(_this.crlat, _this.crlng);
                        var postdata = {
                            lat: _this.crlat,
                            long: _this.crlng
                        };
                        var Serialized = _this.serializeObj(postdata);
                        _this.http.post('  http://rafao.us-west-2.elasticbeanstalk.com/api/home/reverse_geocoding', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                            console.log(response.data == '{"message":"Result not found"}');
                            var resso = JSON.parse(response.data);
                            console.log(resso.response);
                            if (response.data == 'Not available credits') {
                                _this.ToastMsg('Sorry! No Credits available');
                            }
                            //            console.log(resso.response.properties.address);
                            if ((resso.response == undefined) || (response.data == '{"message":"Result not found"}' || (resso.response.properties.address == null))) {
                                _this.geocoder.geocode({ 'location': latLong }, (function (results, status) {
                                    console.log(results);
                                    if (results == '') {
                                        _this.ToastMsg('Invalid Location');
                                        _this.lat = '';
                                        _this.long = '';
                                        _this.infowindow.setContent('Error');
                                        _this.infowindow.open(_this.map, marker);
                                    }
                                    else {
                                        if (status == google.maps.GeocoderStatus.OK) {
                                            if (results[0]) {
                                                console.log(results[0].place_id);
                                                _this.autocomplete.query = results[1].formatted_address;
                                                var citiie4 = results[0].formatted_address.split(',');
                                                var City = '';
                                                _this.data.city = '';
                                                console.log(citiie4[1]);
                                                switch (citiie4[1]) {
                                                    case ' Bogotá':
                                                        _this.data.city = 'Bogota';
                                                        break;
                                                    case ' Bogota':
                                                        _this.data.city = 'Bogota';
                                                        break;
                                                    case ' Soacha': {
                                                        _this.data.city = 'cun_soacha';
                                                        break;
                                                    }
                                                    case ' Mosquera': {
                                                        _this.data.city = 'cun_mosquera';
                                                        break;
                                                    }
                                                    case ' Facatativá': {
                                                        _this.data.city = 'cun_facatativa';
                                                        break;
                                                    }
                                                    case ' Madrid': {
                                                        _this.data.city = 'cun_madrid';
                                                        break;
                                                    }
                                                    case ' Cajicá': {
                                                        _this.data.city = 'cun_cajica';
                                                        break;
                                                    }
                                                    case ' Sopó': {
                                                        _this.data.city = 'cun_sopo';
                                                        break;
                                                    }
                                                    case ' Tenjo': {
                                                        _this.data.city = 'cun_tenjo';
                                                        break;
                                                    }
                                                    case ' Tocancipa': {
                                                        _this.data.city = 'cun_tocancipa';
                                                        break;
                                                    }
                                                    case ' Guasca': {
                                                        _this.data.city = 'cun_guasca';
                                                        break;
                                                    }
                                                    case ' Anapoima': {
                                                        _this.data.city = 'cun_anapoima';
                                                        break;
                                                    }
                                                    case ' Villeta': {
                                                        _this.data.city = 'cun_villeta';
                                                        break;
                                                    }
                                                    case ' La Vega': {
                                                        _this.data.city = 'cun_la_vega';
                                                        break;
                                                    }
                                                    case ' La Mesa': {
                                                        _this.data.city = 'cun_la_mesa';
                                                        break;
                                                    }
                                                    default: {
                                                        console.log('not found');
                                                        console.log(citiie4[1]);
                                                        _this.ToastMsg('Sorry!! No service in this area');
                                                    }
                                                }
                                                console.log(_this.data.city);
                                                //            this.data.city = citiie4;
                                                console.log(_this.autocomplete.query);
                                                //          this.infowindow=new google.maps.InfoWindow({
                                                //              content: results[1].formatted_address,
                                                //          }); 
                                                _this.infowindow.setContent(results[0].formatted_address);
                                                _this.infowindow.open(_this.map, marker);
                                            }
                                            else if (results[1]) {
                                                console.log(results[1].place_id);
                                                _this.autocomplete.query = results[1].formatted_address;
                                                var citiie5 = results[1].formatted_address.split(',');
                                                var City = '';
                                                _this.data.city = '';
                                                console.log(citiie5[1]);
                                                switch (citiie5[1]) {
                                                    case ' Bogotá':
                                                        _this.data.city = 'Bogota';
                                                        break;
                                                    case ' Bogota':
                                                        _this.data.city = 'Bogota';
                                                        break;
                                                    case ' Soacha': {
                                                        _this.data.city = 'cun_soacha';
                                                        break;
                                                    }
                                                    case ' Mosquera': {
                                                        _this.data.city = 'cun_mosquera';
                                                        break;
                                                    }
                                                    case ' Facatativá': {
                                                        _this.data.city = 'cun_facatativa';
                                                        break;
                                                    }
                                                    case ' Madrid': {
                                                        _this.data.city = 'cun_madrid';
                                                        break;
                                                    }
                                                    case ' Cajicá': {
                                                        _this.data.city = 'cun_cajica';
                                                        break;
                                                    }
                                                    case ' Sopó': {
                                                        _this.data.city = 'cun_sopo';
                                                        break;
                                                    }
                                                    case ' Tenjo': {
                                                        _this.data.city = 'cun_tenjo';
                                                        break;
                                                    }
                                                    case ' Tocancipa': {
                                                        _this.data.city = 'cun_tocancipa';
                                                        break;
                                                    }
                                                    case ' Guasca': {
                                                        _this.data.city = 'cun_guasca';
                                                        break;
                                                    }
                                                    case ' Anapoima': {
                                                        _this.data.city = 'cun_anapoima';
                                                        break;
                                                    }
                                                    case ' Villeta': {
                                                        _this.data.city = 'cun_villeta';
                                                        break;
                                                    }
                                                    case ' La Vega': {
                                                        _this.data.city = 'cun_la_vega';
                                                        break;
                                                    }
                                                    case ' La Mesa': {
                                                        _this.data.city = 'cun_la_mesa';
                                                        break;
                                                    }
                                                    default: {
                                                        console.log('not found');
                                                        console.log(citiie5[1]);
                                                        _this.ToastMsg('Sorry!! No service in this area');
                                                    }
                                                }
                                                console.log(_this.data.city);
                                                //            this.data.city = citiie5;
                                                console.log(_this.autocomplete.query);
                                                //          this.infowindow=new google.maps.InfoWindow({
                                                //              content: results[1].formatted_address,
                                                //          }); 
                                                _this.infowindow.setContent(results[1].formatted_address);
                                                _this.infowindow.open(_this.map, marker);
                                            }
                                        }
                                    }
                                }));
                            }
                            else {
                                var resso = JSON.parse(response.data);
                                console.log(resso.response.message);
                                if (resso.response.message == "Result not found") {
                                    _this.ToastMsg('Not found');
                                    _this.lat = '';
                                    _this.long = '';
                                    _this.infowindow.setContent('Error');
                                    _this.infowindow.open(_this.map, marker);
                                }
                                else {
                                    var addr = resso.response.properties.address;
                                    console.log(resso.response);
                                    _this.autocomplete.query = addr;
                                    if (resso.response.properties.city == 'bogota') {
                                        resso.response.properties.city = resso.response.properties.city.charAt(0).toUpperCase() + resso.response.properties.city.slice(1);
                                    }
                                    _this.data.city = resso.response.properties.city;
                                    console.log(_this.data.city);
                                    console.log(_this.autocomplete.query);
                                    //                   alert(addr);
                                    _this.infowindow.setContent(addr);
                                    _this.infowindow.open(_this.map, marker);
                                }
                            }
                        });
                    }));
                    console.log('hello');
                    _this.infowindow.setContent(results[0].formatted_address);
                    _this.infowindow.open(_this.map, marker);
                    _this.nativeGeocoder.forwardGeocode(results[0].formatted_address)
                        .then(function (coordinates) {
                        console.log('The coordinates are latitude=' + coordinates.latitude + ' and longitude=' + coordinates.longitude);
                        _this.lat = coordinates.latitude;
                        _this.long = coordinates.longitude;
                        console.log(_this.lat + ' ' + _this.long);
                    })
                        .catch(function (error) { return console.log(error); });
                }
            }
        }));
        this.autocompleteItems = [];
    };
    MapmodalPage.prototype.getItem = function (item) {
        console.log(item);
        //     if(this.autocomplete.query){
        //         console.log('google');
        ////          this.autocomplete.query=item.description;
        ////          this.glob_item = item;
        //          this.autocompleteItems = [];
        //          console.log(this.autocompleteItems)
        ////          this.chooseItem(item);
        //     }
        //     else 
        if (item.address) {
            console.log('lupap');
            this.glob_item = item;
            this.autocomplete.query = item.address;
            this.autocompleteItems = [];
            console.log(this.autocompleteItems);
        }
        else {
            //      this.chooseItem2(item);
            console.log('nomi');
            console.log('else part');
            this.glob_item = item;
            this.autocomplete.query = item;
            this.autocompleteItems = [];
            console.log(this.autocompleteItems);
        }
    };
    MapmodalPage.prototype.chooseItem = function () {
        var _this = this;
        var ccitytosend;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        this.glob_item = this.autocomplete.query;
        this.number = true;
        this.lat = '';
        this.long = '';
        console.log(this.glob_item);
        console.log(this.data.city);
        switch (this.data.city) {
            case 'Bogota': {
                ccitytosend = 'Bogotá DC';
                break;
            }
            case 'cun_soacha': {
                ccitytosend = 'Soacha';
                break;
            }
            case 'cun_mosquera': {
                ccitytosend = ' Mosquera';
                break;
            }
            case 'cun_facatativa': {
                ccitytosend = 'Facatativá';
                break;
            }
            case 'cun_madrid': {
                ccitytosend = 'Madrid';
                break;
            }
            case 'cun_cajica': {
                ccitytosend = 'Cajicá';
                break;
            }
            case 'cun_sopo': {
                ccitytosend = 'Sopó';
                break;
            }
            case 'cun_tenjo': {
                ccitytosend = 'Tenjo';
                break;
            }
            case 'cun_tocancipa': {
                ccitytosend = 'Tocancipa';
                break;
            }
            case 'cun_guasca': {
                ccitytosend = 'Guasca';
                break;
            }
            case 'cun_anapoima': {
                ccitytosend = 'Anapoima';
                break;
            }
            case 'cun_villeta': {
                ccitytosend = 'Villeta';
                break;
            }
            case 'cun_la_vega': {
                ccitytosend = 'La Vega';
                break;
            }
            case 'cun_la_mesa': {
                ccitytosend = 'La Mesa';
                break;
            }
            default: {
                console.log('not found');
                //                   console.log(citiie[1])
            }
        }
        if (ccitytosend == undefined) {
            this.ToastMsg('Select some city');
        }
        else {
            this.http.get('https://maps.googleapis.com/maps/api/geocode/json?components=locality:' + this.glob_item + '|administrative_area:' + ccitytosend + '|country:Colombia&key=AIzaSyA1DlP6ydTPDHSNBT_99W80TjfSGEcthhE', options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                // this.autocomplete.query=item.description;
                //    if (this.glob_item.terms[2].value == 'Bogota'){
                //        this.data.city = 'Bogota';
                //    }
                //    console.log(this.glob_item.lat)
                //     console.log(this.glob_item.lng)
                //    this.geocoder.geocode({'placeId': this.glob_item}, ((results, status)=>{
                if (response.status === 'OK') {
                    if (response.results[0]) {
                        console.log(response.results[0]);
                        _this.map.setZoom(17);
                        _this.map.setCenter(response.results[0].geometry.location);
                        _this.lat = response.results[0].geometry.location.lat;
                        _this.long = response.results[0].geometry.location.lng;
                        console.log(_this.lat, _this.long);
                        _this.deleteMarkers();
                        _this.markers = [];
                        console.log(_this.markers);
                        var marker = new google.maps.Marker({
                            map: _this.map,
                            draggable: true,
                            icon: 'assets/img/location.png',
                            position: response.results[0].geometry.location
                        });
                        _this.markers.push(marker);
                        _this.map.setCenter(marker.getPosition());
                        google.maps.event.addListener(marker, 'dragend', (function (marker21) {
                            _this.iconname = 'star-outline';
                            var latLng = marker21.latLng;
                            _this.crlat = latLng.lat();
                            _this.crlng = latLng.lng();
                            console.log(_this.crlat);
                            console.log(_this.crlng);
                            //  alert(this.crlat);
                            // alert(this.crlng);
                            _this.markers = [];
                            _this.markers.push(marker);
                            var latLong = new google.maps.LatLng(_this.crlat, _this.crlng);
                            var postdata = {
                                lat: _this.crlat,
                                long: _this.crlng
                            };
                            var Serialized = _this.serializeObj(postdata);
                            _this.http.post('  http://rafao.us-west-2.elasticbeanstalk.com/api/home/reverse_geocoding', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                                console.log(response.data == '{"message":"Result not found"}');
                                var resso = JSON.parse(response.data);
                                console.log(resso.response);
                                if (response.data == 'Not available credits') {
                                    _this.ToastMsg('Sorry! No Credits available');
                                }
                                //            console.log(resso.response.properties.address);
                                if ((resso.response == undefined) || (resso.response.properties.address == null) || (response.data == '{"message":"Result not found"}')) {
                                    _this.geocoder.geocode({ 'location': latLong }, (function (results, status) {
                                        console.log(results);
                                        if (results == '') {
                                            _this.ToastMsg('Invalid Location');
                                            _this.lat = '';
                                            _this.long = '';
                                            _this.infowindow.setContent('Error');
                                            _this.infowindow.open(_this.map, marker);
                                        }
                                        else {
                                            if (status == google.maps.GeocoderStatus.OK) {
                                                if (results[0]) {
                                                    console.log(results[0].place_id);
                                                    _this.autocomplete.query = results[0].formatted_address;
                                                    console.log(_this.autocomplete.query);
                                                    var citiie = results[0].formatted_address.split(',');
                                                    var City = '';
                                                    _this.data.city = '';
                                                    console.log(citiie[1]);
                                                    switch (citiie[1]) {
                                                        case ' Bogotá':
                                                            _this.data.city = 'Bogota';
                                                            break;
                                                        case ' Bogota':
                                                            _this.data.city = 'Bogota';
                                                            break;
                                                        case ' Soacha': {
                                                            _this.data.city = 'cun_soacha';
                                                            break;
                                                        }
                                                        case ' Mosquera': {
                                                            _this.data.city = 'cun_mosquera';
                                                            break;
                                                        }
                                                        case ' Facatativá': {
                                                            _this.data.city = 'cun_facatativa';
                                                            break;
                                                        }
                                                        case ' Madrid': {
                                                            _this.data.city = 'cun_madrid';
                                                            break;
                                                        }
                                                        case ' Cajicá': {
                                                            _this.data.city = 'cun_cajica';
                                                            break;
                                                        }
                                                        case ' Sopó': {
                                                            _this.data.city = 'cun_sopo';
                                                            break;
                                                        }
                                                        case ' Tenjo': {
                                                            _this.data.city = 'cun_tenjo';
                                                            break;
                                                        }
                                                        case ' Tocancipa': {
                                                            _this.data.city = 'cun_tocancipa';
                                                            break;
                                                        }
                                                        case ' Guasca': {
                                                            _this.data.city = 'cun_guasca';
                                                            break;
                                                        }
                                                        case ' Anapoima': {
                                                            _this.data.city = 'cun_anapoima';
                                                            break;
                                                        }
                                                        case ' Villeta': {
                                                            _this.data.city = 'cun_villeta';
                                                            break;
                                                        }
                                                        case ' La Vega': {
                                                            _this.data.city = 'cun_la_vega';
                                                            break;
                                                        }
                                                        case ' La Mesa': {
                                                            _this.data.city = 'cun_la_mesa';
                                                            break;
                                                        }
                                                        default: {
                                                            console.log('not found');
                                                            console.log(citiie[1]);
                                                            _this.ToastMsg('Sorry!! No service in this area');
                                                        }
                                                    }
                                                    //          this.infowindow=new google.maps.InfoWindow({
                                                    //              content: results[1].formatted_address,
                                                    //          }); 
                                                    _this.infowindow.setContent(results[0].formatted_address);
                                                    _this.infowindow.open(_this.map, marker);
                                                }
                                                else if (results[1]) {
                                                    console.log(results[1].place_id);
                                                    _this.autocomplete.query = results[1].formatted_address;
                                                    var citiie = results[1].formatted_address.split(',');
                                                    var City = '';
                                                    _this.data.city = '';
                                                    switch (citiie[1]) {
                                                        case ' Bogotá':
                                                            _this.data.city = 'Bogota';
                                                            break;
                                                        case ' Bogota':
                                                            _this.data.city = 'Bogota';
                                                            break;
                                                        case ' Soacha': {
                                                            _this.data.city = 'cun_soacha';
                                                            break;
                                                        }
                                                        case ' Mosquera': {
                                                            _this.data.city = 'cun_mosquera';
                                                            break;
                                                        }
                                                        case ' Facatativá': {
                                                            _this.data.city = 'cun_facatativa';
                                                            break;
                                                        }
                                                        case ' Madrid': {
                                                            _this.data.city = 'cun_madrid';
                                                            break;
                                                        }
                                                        case ' Cajicá': {
                                                            _this.data.city = 'cun_cajica';
                                                            break;
                                                        }
                                                        case ' Sopó': {
                                                            _this.data.city = 'cun_sopo';
                                                            break;
                                                        }
                                                        case ' Tenjo': {
                                                            _this.data.city = 'cun_tenjo';
                                                            break;
                                                        }
                                                        case ' Tocancipa': {
                                                            _this.data.city = 'cun_tocancipa';
                                                            break;
                                                        }
                                                        case ' Guasca': {
                                                            _this.data.city = 'cun_guasca';
                                                            break;
                                                        }
                                                        case ' Anapoima': {
                                                            _this.data.city = 'cun_anapoima';
                                                            break;
                                                        }
                                                        case ' Villeta': {
                                                            _this.data.city = 'cun_villeta';
                                                            break;
                                                        }
                                                        case ' La Vega': {
                                                            _this.data.city = 'cun_la_vega';
                                                            break;
                                                        }
                                                        case ' La Mesa': {
                                                            _this.data.city = 'cun_la_mesa';
                                                            break;
                                                        }
                                                        default: {
                                                            console.log('not found');
                                                            console.log(citiie[1]);
                                                            _this.ToastMsg('Sorry!! No service in this area');
                                                        }
                                                    }
                                                    console.log(_this.data.city);
                                                    //            this.data.city = citiie ;
                                                    console.log(_this.autocomplete.query);
                                                    //          this.infowindow=new google.maps.InfoWindow({
                                                    //              content: results[1].formatted_address,
                                                    //          }); 
                                                    _this.infowindow.setContent(results[1].formatted_address);
                                                    _this.infowindow.open(_this.map, marker);
                                                    _this.goglat = _this.crlat;
                                                    _this.goglong = _this.crlng;
                                                }
                                            }
                                        }
                                    }));
                                }
                                else {
                                    var resso = JSON.parse(response.data);
                                    console.log(resso.response.message);
                                    if (resso.response.message == "Result not found") {
                                        _this.ToastMsg('Not found');
                                        _this.lat = '';
                                        _this.long = '';
                                        _this.infowindow.setContent('Error');
                                        _this.infowindow.open(_this.map, marker);
                                    }
                                    else {
                                        var addr = resso.response.properties.address;
                                        console.log(resso.response);
                                        _this.autocomplete.query = addr;
                                        if (resso.response.properties.city == 'bogota') {
                                            resso.response.properties.city = resso.response.properties.city.charAt(0).toUpperCase() + resso.response.properties.city.slice(1);
                                        }
                                        _this.data.city = resso.response.properties.city;
                                        console.log(_this.data.city);
                                        console.log(_this.autocomplete.query);
                                        //                   alert(addr)
                                        _this.infowindow.setContent(addr);
                                        _this.infowindow.open(_this.map, marker);
                                        _this.goglat = _this.crlat;
                                        _this.goglong = _this.crlng;
                                    }
                                }
                            });
                        }));
                        console.log('hello');
                        _this.infowindow.setContent(response.results[0].formatted_address);
                        _this.infowindow.open(_this.map, marker);
                        _this.nativeGeocoder.forwardGeocode(response.results[0].formatted_address)
                            .then(function (coordinates) {
                            console.log('The coordinates are latitude=' + coordinates.latitude + ' and longitude=' + coordinates.longitude);
                            _this.goglat = coordinates.latitude;
                            _this.goglong = coordinates.longitude;
                            console.log(_this.goglat + ' ' + _this.goglong);
                        })
                            .catch(function (error) { return console.log(error); });
                    }
                }
                else {
                    _this.nomiapi();
                }
            });
        }
        this.autocompleteItems = [];
    };
    MapmodalPage.prototype.clsmodel = function () {
        this.viewCtrl.dismiss();
    };
    MapmodalPage.prototype.closeModal = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        this.userdetail = JSON.parse(localStorage.getItem('UserDetail'));
        console.log(this.data.additional);
        if (this.data.additional == undefined) {
            this.data.additional = '';
        }
        //   if(this.data.city == undefined){
        //       this.data.city = '';
        //   }
        console.log(this.autocomplete.query);
        if ((this.lat == '') && (this.long == '')) {
            this.ToastMsg('Nothing is saved');
        }
        else {
            var citytosend;
            switch (this.data.city) {
                case 'Bogota': {
                    citytosend = 'Bogotá DC';
                    break;
                }
                case 'cun_soacha': {
                    citytosend = 'Soacha';
                    break;
                }
                case 'cun_mosquera': {
                    citytosend = ' Mosquera';
                    break;
                }
                case 'cun_facatativa': {
                    citytosend = 'Facatativá';
                    break;
                }
                case 'cun_madrid': {
                    citytosend = 'Madrid';
                    break;
                }
                case 'cun_cajica': {
                    citytosend = 'Cajicá';
                    break;
                }
                case 'cun_sopo': {
                    citytosend = 'Sopó';
                    break;
                }
                case 'cun_tenjo': {
                    citytosend = 'Tenjo';
                    break;
                }
                case 'cun_tocancipa': {
                    citytosend = 'Tocancipa';
                    break;
                }
                case 'cun_guasca': {
                    citytosend = 'Guasca';
                    break;
                }
                case 'cun_anapoima': {
                    citytosend = 'Anapoima';
                    break;
                }
                case 'cun_villeta': {
                    citytosend = 'Villeta';
                    break;
                }
                case 'cun_la_vega': {
                    citytosend = 'La Vega';
                    break;
                }
                case 'cun_la_mesa': {
                    citytosend = 'La Mesa';
                    break;
                }
                default: {
                    console.log('not found');
                    //                   console.log(citiie[1])
                }
            }
            if (citytosend == undefined) {
                this.ToastMsg('Select some city');
            }
            else {
                if ((this.goglat) && (this.goglong)) {
                    this.lat = this.goglat;
                    this.long = this.goglong;
                    console.log('google');
                }
                else {
                    this.lat = this.lat;
                    this.long = this.long;
                    console.log('nomi');
                }
                var postdata2 = {
                    user_id: this.userdetail._id,
                    saved_address: this.autocomplete.query + ' ' + citytosend
                };
                console.log(postdata2);
                var Serialized = this.serializeObj(postdata2);
                this.http.post(this.appsetting.myGlobalVar + 'user/add_saved_address', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response2) {
                    console.log(response2);
                    if (response2.status == true) {
                        if (response2.data) {
                            localStorage.setItem('UserDetail', JSON.stringify(response2.data[0]));
                        }
                    }
                });
                this.viewCtrl.dismiss({
                    address: this.data.additional + ' ' + this.autocomplete.query + '   ' + citytosend,
                    lati: this.lat,
                    longi: this.long
                });
            }
        }
    };
    MapmodalPage.prototype.clearMarkers = function () {
        console.log('clear');
        this.setMapOnAll(null);
    };
    MapmodalPage.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
        console.log(this.markers);
        console.log('setmap');
    };
    MapmodalPage.prototype.deleteMarkers = function () {
        console.log('delete');
        this.clearMarkers();
        this.markers = [];
    };
    return MapmodalPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], MapmodalPage.prototype, "mapElement", void 0);
MapmodalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-mapmodal',template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\mapmodal\mapmodal.html"*/'<!--\n  Generated template for the MapmodalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <!--<ion-buttons start (click)="dismiss()">\n      <button ion-button icon-only>\n        \n      </button>\n    </ion-buttons>-->\n\n    <ion-title></ion-title>\n    \n    <ion-buttons end (click)="closeModal()">\n        <button clear ion-button>Save</button>\n    </ion-buttons>\n      <ion-buttons start (click)="clsmodel()">\n        <button clear ion-button>Cancel</button>\n    </ion-buttons>\n  </ion-navbar>\n   <ion-toolbar class="toolbar_top" style="padding: 0 7px 0px 7px; background: #fff; min-height: auto; padding-top: 10px;">\n     <ion-select  placeholder="Select city" style=" max-width: 100%; background: #fff; padding: 8px 10px; margin-bottom: 3px;" id="cittt" [(ngModel)]="data.city" name="city" #city="ngModel" (ionChange)="city1(data.city)"  required>\n  <ion-option value="Bogota" selected>Bogotá DC, Bogotá DC</ion-option>\n  <ion-option value="cun_soacha">Soacha, Cundinamarca</ion-option>\n  <ion-option value="cun_mosquera"> Mosquera, Cundinamarca</ion-option>\n  <ion-option value="cun_madrid">Madrid, Cundinamarca</ion-option>\n  <ion-option value="cun_cajica">Cajicá, Cundinamarca</ion-option>\n  <ion-option value="cun_sopo">Sopó, Cundinamarca</ion-option>\n  <ion-option value="cun_facatativa">Facatativá, Cundinamarca</ion-option>\n  <ion-option value="cun_tenjo">Tenjo,Cundinamarca</ion-option>\n  <ion-option value="cun_tocancipa">Tocancipa, Cundinamarca</ion-option>\n  <ion-option value="cun_guasca">Guasca, Cundinamarca</ion-option>\n  <ion-option value="cun_anapoima">Anapoima, Cundinamarca</ion-option>\n  <ion-option value="cun_villeta">Villeta, Cundinamarca</ion-option>\n  <ion-option value="cun_la_vega">La Vega, Cundinamarca</ion-option>\n  <ion-option value="cun_la_mesa">La Mesa, Cundinamarca</ion-option>\n</ion-select>\n   </ion-toolbar>\n\n<div class="searchouter">\n<ion-searchbar \n   [(ngModel)]="autocomplete.query" \n   [showCancelButton]="true" \n   (ionInput)="updateSearch()" \n   (ionCancel)="dismiss()"\n   placeholder="Start typing and select ..." required>\n </ion-searchbar>\n    <button class="favbtn" (click)="fav(autocomplete.query)" ion-button icon-only>\n<ion-icon name="{{iconname}}" ></ion-icon>\n</button>\n    \n<!--     <ion-list class="listitm" style="margin:0 !important; padding:0;" *ngIf="omega == 0">\n      <ion-item *ngFor="let item of autocompleteItems;let i = index"\n      (click)="getItem(item)"  >\n     <span > {{ item.description }}</span>\n      </ion-item>\n      </ion-list> -->\n<!--    <ion-list *ngIf="omega == 1;let i = index">\n      <ion-item *ngFor="let item of autocompleteItems" \n      (click)="getItem(item)">\n      {{ item.address }}\n      </ion-item>\n      </ion-list> \n     <ion-list *ngIf="omega == 2">\n      <ion-item *ngFor="let item of autocompleteItems" \n      (click)="getItem(item)">\n      {{ item }}\n      </ion-item>\n      </ion-list>-->\n</div>\n    \n<ion-toolbar class="toolbar_top" style="padding: 0 7px 7px 7px; background: #fff;">\n\n    \n<!--<ion-select  placeholder="Select city" style=" max-width: 100%; background: #fff; padding: 8px 10px; margin-bottom: 3px;"  [(ngModel)]="data.city" name="city" #city="ngModel" (ionChange)="city1(data.city)"  required>\n    <ion-option *ngFor="let cit of arr" [value]="cit.city_code" name="hh">{{cit.city}},{{cit?.state}}</ion-option>\n</ion-select>-->\n   \n\n\n<ion-input type="text" placeholder=\'Additional Address Details\' [(ngModel)]="data.additional" name="additional" #additional="ngModel"  ></ion-input>\n\n    <!--<button ion-button full color="theme-header" *ngIf="omega == 0" (click)="chooseItem()" [disabled]="!isenabled">Search</button>-->\n     <button ion-button full color="theme-header"  (click)="Searchlocation()" [disabled]="!isenabled">Search</button>\n      <!--<button ion-button full color="theme-header" *ngIf="omega == 2" (click)="chooseItem2()" [disabled]="!isenabled" >Search</button>-->\n</ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n<!--    <ion-icon name="star" (click)="fav(autocomplete.query)">Add favourite</ion-icon>\n    <ion-item>\n      </ion-item>-->\n   \n    \n        \n<div #map id="map"></div>\n   \n    <!--<button ion-button (click)="saveaddress">Save Location</button>-->\n</ion-content>\n'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\mapmodal\mapmodal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], MapmodalPage);

//# sourceMappingURL=mapmodal.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_fcm__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_mapmodal_mapmodal__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_nominatimap_nominatimap__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_chat_chat__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_favorites_favorites__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signin_signin__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_rafaho_rafaho__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_editprefrence_editprefrence__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_whyrafaho_whyrafaho__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_help_help__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_terms_terms__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_editprofile_editprofile__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_addwallet_addwallet__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_frequentquestion_frequentquestion__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_feedback_feedback__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_orderdetial_orderdetial__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_forgtpwd_forgtpwd__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_changepwd_changepwd__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_filter_filter__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_productview_productview__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_cart_cart__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_payment_payment__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_chefdetials_chefdetials__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_reviews_reviews__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_rating_rating__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_selectdish_selectdish__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_productlist_productlist__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_location_location__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_status_bar__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_splash_screen__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_angular2_moment__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_41_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_device__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_geolocation__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_native_geocoder__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_camera__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_service__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_angular2_countrypicker__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_angular2_countrypicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_47_angular2_countrypicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48_md_select__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48_md_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_48_md_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_in_app_browser__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50_ionic2_rating__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_android_permissions__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { NavController} from 'ionic-angular';

















































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_favorites_favorites__["a" /* FavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_rafaho_rafaho__["a" /* RafahoPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_whyrafaho_whyrafaho__["a" /* WhyrafahoPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_terms_terms__["a" /* TermsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_editprefrence_editprefrence__["a" /* EditprefrencePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_editprofile_editprofile__["a" /* EditprofilePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_addwallet_addwallet__["a" /* AddwalletPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_frequentquestion_frequentquestion__["a" /* FrequentquestionPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_feedback_feedback__["a" /* FeedbackPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_orderdetial_orderdetial__["a" /* OrderdetialPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_forgtpwd_forgtpwd__["a" /* ForgtpwdPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_changepwd_changepwd__["a" /* ChangepwdPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_filter_filter__["a" /* FilterPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_productview_productview__["a" /* ProductviewPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_payment_payment__["a" /* PaymentPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_chefdetials_chefdetials__["a" /* ChefdetialsPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_reviews_reviews__["a" /* ReviewsPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_rating_rating__["a" /* RatingPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_selectdish_selectdish__["a" /* SelectdishPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_productlist_productlist__["a" /* ProductlistPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_location_location__["a" /* LocationPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_nominatimap_nominatimap__["a" /* NominatimapPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_mapmodal_mapmodal__["a" /* MapmodalPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_47_angular2_countrypicker__["CountryPickerModule"].forRoot({
                baseUrl: 'assets/'
            }),
            __WEBPACK_IMPORTED_MODULE_38__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_41_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_50_ionic2_rating__["a" /* Ionic2RatingModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/addwallet/addwallet.module#AddwalletPageModule', name: 'AddwalletPage', segment: 'addwallet', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/change/change.module#ChangePageModule', name: 'ChangePage', segment: 'change', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/changepwd/changepwd.module#ChangepwdPageModule', name: 'ChangepwdPage', segment: 'changepwd', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editprefrence/editprefrence.module#EditprefrencePageModule', name: 'EditprefrencePage', segment: 'editprefrence', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chefdetials/chefdetials.module#ChefdetialsPageModule', name: 'ChefdetialsPage', segment: 'chefdetials', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/favorites/favorites.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/feedback/feedback.module#FeedbackPageModule', name: 'FeedbackPage', segment: 'feedback', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/forgtpwd/forgtpwd.module#ForgtpwdPageModule', name: 'ForgtpwdPage', segment: 'forgtpwd', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/frequentquestion/frequentquestion.module#FrequentquestionPageModule', name: 'FrequentquestionPage', segment: 'frequentquestion', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/nominatimap/nominatimap.module#NominatimapPageModule', name: 'NominatimapPage', segment: 'nominatimap', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/orderdetial/orderdetial.module#OrderdetialPageModule', name: 'OrderdetialPage', segment: 'orderdetial', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mapmodal/mapmodal.module#MapmodalPageModule', name: 'MapmodalPage', segment: 'mapmodal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/productlist/productlist.module#ProductlistPageModule', name: 'ProductlistPage', segment: 'productlist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/productview/productview.module#ProductviewPageModule', name: 'ProductviewPage', segment: 'productview', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/rafaho/rafaho.module#RafahoPageModule', name: 'RafahoPage', segment: 'rafaho', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reviews/reviews.module#ReviewsPageModule', name: 'ReviewsPage', segment: 'reviews', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/rating/rating.module#RatingPageModule', name: 'RatingPage', segment: 'rating', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/selectdish/selectdish.module#SelectdishPageModule', name: 'SelectdishPage', segment: 'selectdish', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/southfood/southfood.module#SouthfoodPageModule', name: 'SouthfoodPage', segment: 'southfood', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/whyrafaho/whyrafaho.module#WhyrafahoPageModule', name: 'WhyrafahoPage', segment: 'whyrafaho', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_favorites_favorites__["a" /* FavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_editprefrence_editprefrence__["a" /* EditprefrencePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_rafaho_rafaho__["a" /* RafahoPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_whyrafaho_whyrafaho__["a" /* WhyrafahoPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_terms_terms__["a" /* TermsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_editprofile_editprofile__["a" /* EditprofilePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_addwallet_addwallet__["a" /* AddwalletPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_frequentquestion_frequentquestion__["a" /* FrequentquestionPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_feedback_feedback__["a" /* FeedbackPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_orderdetial_orderdetial__["a" /* OrderdetialPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_forgtpwd_forgtpwd__["a" /* ForgtpwdPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_rating_rating__["a" /* RatingPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_changepwd_changepwd__["a" /* ChangepwdPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_nominatimap_nominatimap__["a" /* NominatimapPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_filter_filter__["a" /* FilterPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_productview_productview__["a" /* ProductviewPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_payment_payment__["a" /* PaymentPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_chefdetials_chefdetials__["a" /* ChefdetialsPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_reviews_reviews__["a" /* ReviewsPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_selectdish_selectdish__["a" /* SelectdishPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_productlist_productlist__["a" /* ProductlistPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_location_location__["a" /* LocationPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_mapmodal_mapmodal__["a" /* MapmodalPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_39__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_40__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_46__providers_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_37__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_51__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_42__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_49__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_43__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_44__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_45__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_48_md_select__["MdSelectDispatcher"],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 195,
	"./af.js": 195,
	"./ar": 196,
	"./ar-dz": 197,
	"./ar-dz.js": 197,
	"./ar-kw": 198,
	"./ar-kw.js": 198,
	"./ar-ly": 199,
	"./ar-ly.js": 199,
	"./ar-ma": 200,
	"./ar-ma.js": 200,
	"./ar-sa": 201,
	"./ar-sa.js": 201,
	"./ar-tn": 202,
	"./ar-tn.js": 202,
	"./ar.js": 196,
	"./az": 203,
	"./az.js": 203,
	"./be": 204,
	"./be.js": 204,
	"./bg": 205,
	"./bg.js": 205,
	"./bm": 206,
	"./bm.js": 206,
	"./bn": 207,
	"./bn.js": 207,
	"./bo": 208,
	"./bo.js": 208,
	"./br": 209,
	"./br.js": 209,
	"./bs": 210,
	"./bs.js": 210,
	"./ca": 211,
	"./ca.js": 211,
	"./cs": 212,
	"./cs.js": 212,
	"./cv": 213,
	"./cv.js": 213,
	"./cy": 214,
	"./cy.js": 214,
	"./da": 215,
	"./da.js": 215,
	"./de": 216,
	"./de-at": 217,
	"./de-at.js": 217,
	"./de-ch": 218,
	"./de-ch.js": 218,
	"./de.js": 216,
	"./dv": 219,
	"./dv.js": 219,
	"./el": 220,
	"./el.js": 220,
	"./en-au": 221,
	"./en-au.js": 221,
	"./en-ca": 222,
	"./en-ca.js": 222,
	"./en-gb": 223,
	"./en-gb.js": 223,
	"./en-ie": 224,
	"./en-ie.js": 224,
	"./en-nz": 225,
	"./en-nz.js": 225,
	"./eo": 226,
	"./eo.js": 226,
	"./es": 227,
	"./es-do": 228,
	"./es-do.js": 228,
	"./es-us": 229,
	"./es-us.js": 229,
	"./es.js": 227,
	"./et": 230,
	"./et.js": 230,
	"./eu": 231,
	"./eu.js": 231,
	"./fa": 232,
	"./fa.js": 232,
	"./fi": 233,
	"./fi.js": 233,
	"./fo": 234,
	"./fo.js": 234,
	"./fr": 235,
	"./fr-ca": 236,
	"./fr-ca.js": 236,
	"./fr-ch": 237,
	"./fr-ch.js": 237,
	"./fr.js": 235,
	"./fy": 238,
	"./fy.js": 238,
	"./gd": 239,
	"./gd.js": 239,
	"./gl": 240,
	"./gl.js": 240,
	"./gom-latn": 241,
	"./gom-latn.js": 241,
	"./gu": 242,
	"./gu.js": 242,
	"./he": 243,
	"./he.js": 243,
	"./hi": 244,
	"./hi.js": 244,
	"./hr": 245,
	"./hr.js": 245,
	"./hu": 246,
	"./hu.js": 246,
	"./hy-am": 247,
	"./hy-am.js": 247,
	"./id": 248,
	"./id.js": 248,
	"./is": 249,
	"./is.js": 249,
	"./it": 250,
	"./it.js": 250,
	"./ja": 251,
	"./ja.js": 251,
	"./jv": 252,
	"./jv.js": 252,
	"./ka": 253,
	"./ka.js": 253,
	"./kk": 254,
	"./kk.js": 254,
	"./km": 255,
	"./km.js": 255,
	"./kn": 256,
	"./kn.js": 256,
	"./ko": 257,
	"./ko.js": 257,
	"./ky": 258,
	"./ky.js": 258,
	"./lb": 259,
	"./lb.js": 259,
	"./lo": 260,
	"./lo.js": 260,
	"./lt": 261,
	"./lt.js": 261,
	"./lv": 262,
	"./lv.js": 262,
	"./me": 263,
	"./me.js": 263,
	"./mi": 264,
	"./mi.js": 264,
	"./mk": 265,
	"./mk.js": 265,
	"./ml": 266,
	"./ml.js": 266,
	"./mr": 267,
	"./mr.js": 267,
	"./ms": 268,
	"./ms-my": 269,
	"./ms-my.js": 269,
	"./ms.js": 268,
	"./my": 270,
	"./my.js": 270,
	"./nb": 271,
	"./nb.js": 271,
	"./ne": 272,
	"./ne.js": 272,
	"./nl": 273,
	"./nl-be": 274,
	"./nl-be.js": 274,
	"./nl.js": 273,
	"./nn": 275,
	"./nn.js": 275,
	"./pa-in": 276,
	"./pa-in.js": 276,
	"./pl": 277,
	"./pl.js": 277,
	"./pt": 278,
	"./pt-br": 279,
	"./pt-br.js": 279,
	"./pt.js": 278,
	"./ro": 280,
	"./ro.js": 280,
	"./ru": 281,
	"./ru.js": 281,
	"./sd": 282,
	"./sd.js": 282,
	"./se": 283,
	"./se.js": 283,
	"./si": 284,
	"./si.js": 284,
	"./sk": 285,
	"./sk.js": 285,
	"./sl": 286,
	"./sl.js": 286,
	"./sq": 287,
	"./sq.js": 287,
	"./sr": 288,
	"./sr-cyrl": 289,
	"./sr-cyrl.js": 289,
	"./sr.js": 288,
	"./ss": 290,
	"./ss.js": 290,
	"./sv": 291,
	"./sv.js": 291,
	"./sw": 292,
	"./sw.js": 292,
	"./ta": 293,
	"./ta.js": 293,
	"./te": 294,
	"./te.js": 294,
	"./tet": 295,
	"./tet.js": 295,
	"./th": 296,
	"./th.js": 296,
	"./tl-ph": 297,
	"./tl-ph.js": 297,
	"./tlh": 298,
	"./tlh.js": 298,
	"./tr": 299,
	"./tr.js": 299,
	"./tzl": 300,
	"./tzl.js": 300,
	"./tzm": 301,
	"./tzm-latn": 302,
	"./tzm-latn.js": 302,
	"./tzm.js": 301,
	"./uk": 303,
	"./uk.js": 303,
	"./ur": 304,
	"./ur.js": 304,
	"./uz": 305,
	"./uz-latn": 306,
	"./uz-latn.js": 306,
	"./uz.js": 305,
	"./vi": 307,
	"./vi.js": 307,
	"./x-pseudo": 308,
	"./x-pseudo.js": 308,
	"./yo": 309,
	"./yo.js": 309,
	"./zh-cn": 310,
	"./zh-cn.js": 310,
	"./zh-hk": 311,
	"./zh-hk.js": 311,
	"./zh-tw": 312,
	"./zh-tw.js": 312
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 422;

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signin_signin__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_android_permissions__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//import { Keyboard } from '@ionic-native/keyboard';
var MyApp = (function () {
    function MyApp(statusBar, splashScreen, http, platform, toastCtrl, androidPermissions, alertCtrl, appsetting) {
        this.http = http;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.androidPermissions = androidPermissions;
        this.alertCtrl = alertCtrl;
        this.appsetting = appsetting;
        this.rootPage = '';
        alert('Welcome to Rafaho');
        platform.ready().then(function () {
            //           
            // platform.registerBackButtonAction(()=>{
            ////     if (this.navCtrl.canGoBack()){
            ////                  this.navCtrl.pop();
            ////                }else{
            // this.myHandlerFunction()
            // });
            statusBar.overlaysWebView(true);
            statusBar.hide();
            splashScreen.hide();
        });
        //
        //      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.GEOLOCATION).then(
        //  result =>{ console.log('Has permission?',result.hasPermission)
        //      if(result.hasPermission == true){}else{
        //          this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.GEOLOCATION, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
        //         
        //        let toast = this.toastCtrl.create({
        //            message: 'Turn on your location',
        //            duration: 3000,
        //            position: 'middle'
        //        });
        //        toast.present();
        //    
        //      }
        //  },
        //  err => {this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.GEOLOCATION)}
        //);
        if (localStorage.getItem('UserDetail')) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_signin_signin__["a" /* SigninPage */];
        }
    }
    MyApp.prototype.myHandlerFunction = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Back',
                    handler: function () {
                        //                  this.platform.exitApp();
                        alert('hello');
                        console.log(_this.nav);
                        _this.nav.pop(_this.rootPage);
                        //                    this.nav.config.plt.backButton.observers.pop()
                    }
                }
            ]
        });
        this.alert.present();
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\grahakbhojnalya\src\app\app.html"*/'<ion-nav [root]="rootPage" swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"D:\grahakbhojnalya\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_android_permissions__["a" /* AndroidPermissions */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__location_location__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { IonicPage, NavController, NavParams } from 'ionic-angular';s







/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartPage = (function () {
    function CartPage(navCtrl, toastCtrl, alertCtrl, loadingCtrl, appsetting, http, iab, navParams) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.appsetting = appsetting;
        this.http = http;
        this.iab = iab;
        this.navParams = navParams;
        this.chef = [];
        this.user = [];
        this.getcrt = [];
        this.total1 = 0;
        this.nodata = 0;
        this.Total1 = 0;
        this.discount = 0;
        this.data = {};
        this.subtotal = [];
        this.productsamount = [];
        //        var Loading = this.loadingCtrl.create({
        //         spinner: 'hide',
        //    cssClass: 'loader',
        //    content: "<img src='assets/img/icons3.gif'>",
        //    dismissOnPageChange:true
        //        });
        //        Loading.present().then(() => {
        this.get();
        this.getcart();
        //        alert('new1')
        //      Loading.dismiss();
        //              })
        //      this.total();
    }
    CartPage.prototype.get = function () {
        if (JSON.parse(localStorage.getItem('Chefdetail'))) {
            this.chef = JSON.parse(localStorage.getItem('Chefdetail'));
            console.log(this.chef);
        }
        else {
            this.nodata = 1;
        }
        this.user = JSON.parse(localStorage.getItem('UserDetail'));
        console.log(this.user);
        if ((localStorage.getItem('Bookingdatetime'))) {
            this.bookdt = JSON.parse(localStorage.getItem('Bookingdatetime'));
        }
        else {
            //        this.bookdt =  moment();
            this.bookdt = __WEBPACK_IMPORTED_MODULE_6_moment__(new Date()).format('YYYY-MM-DD[T]HH:mm');
        }
        this.datetosend = this.bookdt;
        console.log(this.bookdt);
        this.bookdt = this.bookdt.split(":00Z", 1);
        console.log(this.bookdt);
        this.data.bookdt = this.bookdt[0];
        console.log(this.data.bookdt);
        if ((localStorage.getItem('Altdatetime'))) {
            this.bookalt = localStorage.getItem('Altdatetime');
            console.log(this.bookalt);
        }
        if (localStorage.getItem('Orderaddress')) {
            this.orderaddress = localStorage.getItem('Orderaddress');
        }
        else {
            this.orderaddress = this.user.address;
        }
        console.log(this.orderaddress);
        this.orderaddress = this.orderaddress.replace(/"/gi, '');
        this.str = this.orderaddress.split(",", this.orderaddress.length);
        this.str1 = this.str[0] + ',' + this.str[1];
        var len = this.str1.length + 1;
        this.str2 = this.orderaddress.slice(len, this.orderaddress.length);
        console.log(this.str);
        console.log(this.str1);
        console.log(this.str2);
    };
    CartPage.prototype.getcart = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var a = JSON.parse(localStorage.getItem('UserDetail'));
        console.log(a);
        var postdata = {
            user_id: a._id
        };
        var Serialized = this.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'get_cart_data', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                console.log(response.data.length);
                if (response.data.length == 0) {
                    var Loading1 = _this.loadingCtrl.create({
                        spinner: 'bubbles',
                        cssClass: 'loader',
                        content: "Loading",
                        dismissOnPageChange: true
                    });
                    Loading1.present().then(function () {
                        if (JSON.parse(localStorage.getItem('proctnumberincart'))) {
                            localStorage.removeItem('proctnumberincart');
                        }
                        _this.getcrt = response.data;
                        console.log(_this.getcrt);
                        _this.appsetting.cart = _this.getcrt;
                        localStorage.setItem('Cartlist', JSON.stringify(_this.appsetting.cart));
                        _this.subtotal = JSON.parse(localStorage.getItem('Cartlist'));
                        console.log(_this.subtotal);
                        _this.total();
                        Loading1.dismiss();
                    });
                }
                else {
                    localStorage.setItem('proctnumberincart', JSON.stringify(response.data[0].products.length));
                }
                console.log(response.data[0]._id);
                _this.appsetting.cartid = response.data[0]._id;
                console.log(response.data[0].products);
                _this.getcrt = response.data[0].products;
                console.log(_this.getcrt);
                _this.appsetting.cart = _this.getcrt;
                localStorage.setItem('Cartlist', JSON.stringify(_this.appsetting.cart));
                _this.subtotal = JSON.parse(localStorage.getItem('Cartlist'));
                console.log(_this.subtotal);
                _this.total();
            }, function (err) {
                _this.ToastMsg('Something went wrong');
                Loading.dismissAll();
                console.log(err);
            });
        });
    };
    CartPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    CartPage.prototype.add = function (qnt, id) {
        var flag = 0;
        console.log(qnt, id);
        for (var i = 0; i < this.getcrt.length; i++) {
            if (id == this.getcrt[i]._id) {
                var index = i;
                flag = 1;
            }
        }
        console.log(flag);
        console.log(index);
        if (flag == 1) {
            qnt = parseFloat(qnt) + 1;
            this.getcrt[index].quantity = qnt;
            this.appsetting.cart[index].quantity = qnt;
            console.log(this.appsetting.cart[index].quantity);
            localStorage.setItem('Cartlist', JSON.stringify(this.appsetting.cart));
            this.total();
            //    this.total(id,index);
            return false;
        }
    };
    CartPage.prototype.remove = function (qntity, id) {
        var flagg = 0;
        console.log(qntity, id);
        for (var i = 0; i < this.getcrt.length; i++) {
            if (id == this.getcrt[i]._id) {
                var index = i;
                flagg = 1;
            }
        }
        if (flagg == 1) {
            if (qntity == this.getcrt[index].minimum_order) {
                console.log(this.getcrt.quantity);
            }
            else {
                qntity = parseFloat(qntity) - 1;
                this.getcrt[index].quantity = qntity;
                console.log(this.getcrt);
                this.appsetting.cart[index].quantity = qntity;
                console.log(this.appsetting.cart[index].quantity);
                localStorage.setItem('Cartlist', JSON.stringify(this.appsetting.cart));
                this.total();
            }
            return false;
        }
    };
    CartPage.prototype.delproduct = function (idd) {
        var _this = this;
        console.log(idd);
        console.log(this.appsetting.cartid);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        var a = JSON.parse(localStorage.getItem('UserDetail'));
        console.log(a);
        var postdata = {
            user_id: a._id,
            cart_id: this.appsetting.cartid,
            _id: idd
        };
        console.log(postdata);
        var Serialized = this.serializeObj(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'delete_add_to_cart_product', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.message == 'There is no item in cart now') {
                _this.getcart();
                _this.ToastMsg('Product deleted successfully');
            }
            if (response.status == true) {
                _this.getcart();
                _this.ToastMsg('Product deleted successfully');
            }
        });
    };
    CartPage.prototype.ToastMsg = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    CartPage.prototype.total = function () {
        this.subtotal = JSON.parse(localStorage.getItem('Cartlist'));
        console.log(this.subtotal);
        this.total1 = 0;
        this.Total1 = 0;
        this.discount = 0;
        for (var x = 0; x < this.subtotal.length; x++) {
            this.discount = this.discount + (this.subtotal[x].discount / 100) * this.subtotal[x].price_per_plate;
            this.total1 = this.total1 + (this.subtotal[x].quantity * this.subtotal[x].price_per_plate);
            console.log(this.total1, this.discount);
            this.Total1 = this.Total1 + (this.total1 - this.discount);
            //             this.Total1 = this.Total1 + (this.subtotal[x].quantity * ((this.subtotal[x].quantity/100)*this.subtotal[x].price_per_plate))
        }
    };
    //total(id,index){
    //    
    //    console.log(id,index);
    //    this.productsamount =  this.getcrt[index].quantity * this.getcrt[index].price_per_plate
    //    console.log( this.productsamount);
    //   this.subtotal.push(this.productsamount);
    //   console.log(this.subtotal);
    //   
    //}
    CartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
    };
    CartPage.prototype.pyment1 = function () {
        var _this = this;
        var proid = [];
        var proname = [];
        var proquant = [];
        var orderservice = [];
        var proprice = [];
        console.log(this.data.bookdt.length);
        if (this.data.bookdt.length < 17) {
            console.log(this.datetosend);
        }
        else {
            this.datetosend = this.data.bookdt;
            console.log(this.datetosend);
        }
        console.log(new Date(this.data.bookdt));
        console.log(this.getcrt);
        console.log(this.chef);
        console.log(this.user);
        //       console.log(this.bookdt);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        for (var j = 0; j < this.getcrt.length; j++) {
            proid.push(this.getcrt[j].product_id);
            proname.push(this.getcrt[j].product_name);
            proquant.push(this.getcrt[j].quantity);
            orderservice.push(this.getcrt[j].order_prefrence);
            proprice.push(this.getcrt[j].price_per_plate);
        }
        console.log(proid, proname, proquant, orderservice);
        proid = proid.join(':');
        proname = proname.join(':');
        proquant = proquant.join(':');
        orderservice = orderservice.join(':');
        proprice = proprice.join(':');
        console.log(proid, proname, proquant, orderservice);
        var postdata = {
            chef_id: this.chef._id,
            user_id: this.user._id,
            customer_address: this.str1 + this.str2,
            booking_datetime: this.datetosend,
            total_order_amount: this.Total1,
            products_id: proid,
            products_quantity: proquant,
            products_name: proname,
            order_prefrence: orderservice,
            payment_status: 1,
            txn_id: this.trans_id,
            products_price: proprice
        };
        console.log(postdata);
        var Serialized = this.serializeObj(postdata);
        var Serialized = this.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'order/addorder', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                _this.ToastMsg('Order placed successfully');
                localStorage.removeItem('proctnumberincart');
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
            }, function (err) {
                _this.ToastMsg('Something went wrong');
                Loading.dismissAll();
            });
        });
    };
    CartPage.prototype.loct = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__location_location__["a" /* LocationPage */]);
    };
    CartPage.prototype.pyment = function () {
        var _this = this;
        if (this.Total1 > 0) {
            var url = 'http://rafao.us-west-2.elasticbeanstalk.com/payment/amt=' + this.Total1 + '=email=' + this.user.email;
            var target = '_self';
            var options = 'location=no';
            var browser = this.iab.create(url, target, options);
            browser.on('loadstart').subscribe(function (e) {
                //        alert(e)
                var url = e;
                //        alert(url)
                if (e.url.includes('paymentstatus') == true) {
                    //            alert('GETTING PAYMENT STATUS');
                    var redirect_uri = e.url.split('=');
                    var redirect_uri1 = redirect_uri[1];
                    var redirect_uri2 = redirect_uri1.split('/');
                    var redirect_uri3 = redirect_uri[2];
                    var redirect_uri4 = redirect_uri3.split('/');
                    //        alert(redirect_uri2[0]);
                    if ((redirect_uri2[0] == 'DECLINED') || (redirect_uri2[0] == 'REJECTED')) {
                        var alert_1 = _this.alertCtrl.create({
                            title: 'Payment info',
                            subTitle: "Payment status: " + redirect_uri2[0] + "<br>for Transaction id:" + redirect_uri4[0],
                            buttons: ['ok']
                        });
                        alert_1.present();
                        setTimeout(function () { return alert_1.dismiss(); }, 3000);
                        localStorage.setItem('transid', redirect_uri4[0]);
                        browser.close();
                    }
                    else if (redirect_uri2[0] == 'APPROVED') {
                        _this.trans_id = redirect_uri4[0];
                        var alert_2 = _this.alertCtrl.create({
                            title: 'Payment info',
                            subTitle: "Payment status: " + redirect_uri2[0] + "<br>for Transaction id:" + redirect_uri4[0],
                            buttons: ['ok']
                        });
                        alert_2.present();
                        setTimeout(function () { return alert_2.dismiss(); }, 1000);
                        localStorage.setItem('transid', redirect_uri4[0]);
                        browser.close();
                        _this.pyment1();
                    }
                }
                if (e.url == 'http://rafao.us-west-2.elasticbeanstalk.com/?') {
                    var code = redirect_uri[1];
                    //alert(code);
                    localStorage.setItem('code', code);
                    browser.close();
                }
            }, function (err) {
                console.log("InAppBrowser loadstart Event Error: " + err);
                //        alert(err)
            });
        }
        else {
            var alert_3 = this.alertCtrl.create({
                title: 'Make sure there are some items in cart',
                buttons: ['ok']
            });
            alert_3.present();
            setTimeout(function () { return alert_3.dismiss(); }, 3000);
        }
    };
    CartPage.prototype.ngOnInit = function () {
        this.date = __WEBPACK_IMPORTED_MODULE_6_moment__(new Date()).format('YYYY-MM-DD[T]HH:mm');
        //
        //   //console.log('fhfgh');
        //    
        //    
        //      this.data.datetime =this.date;
        //      console.log(new Date().toISOString())
        //    this.GetLocation();
    };
    return CartPage;
}());
CartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-cart',template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\cart\cart.html"*/'<!--\n  Generated template for the CartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n \n  <ion-navbar color="theme-header">\n    <ion-title>Payment</ion-title>\n<!--    <ion-buttons end>\n      <div class="iconprf">\n          <img src="assets/img/cart.png">\n       </div>\n      </button>    <button ion-button icon-only class="btnprofile">\n       \n    </ion-buttons>-->\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n	<div class="top-sec">\n			<ion-grid>\n				<ion-row *ngIf = "nodata == 0">\n					<ion-col col-6 class="left">\n					  <div class="chef">\n						<h5>{{chef.firstname}} {{chef.lastname}}</h5>\n					  </div>\n					</ion-col>\n					<ion-col col-6 class="right">\n					  <div class="phn">\n						<h5>{{chef.phone}}</h5>\n						<span><img src="assets/img/msg.png"></span>\n					  </div>\n					</ion-col>\n				</ion-row>\n         <p  *ngIf = "nodata == 1"> </p>\n			</ion-grid>\n		</div>\n	<div class="text-sec">\n		\n		<div class="mid-sec">\n			<ion-grid style="padding: 0;">\n				<ion-row>\n					<ion-col col-6 style="padding: 0 5px 0 0 !important; border-right: 1px solid #cccccc;">\n						<div class="inner-sec">\n							<h5>Customer Address:</h5>\n							<p>{{str1}}</p>\n							<p>{{str2}}</p>	\n						</div>\n					</ion-col>\n					<ion-col col-6 style="padding: 0 0 0 5px !important;">\n					  <div class="inner-sec">\n						<h5>Booking Date & Time</h5>\n						 <ion-datetime placeholder="MMM/DD/YYYY HH:MM" displayFormat="MMM/DD/YYYY HH:mm" pickerFormat="MMM DD YYYY HH mm" min="{{date}}"  [(ngModel)]= "data.bookdt" name="bookdt" #bookdt="ngModel"></ion-datetime>\n					  </div>	\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</div>\n		\n	</div>\n	<div class="content-sec">\n	  <ion-list *ngFor="let item of getcrt">\n	    <ion-item style="position: relative;">\n                <ion-icon class="dlt" name="close-circle" (click)="delproduct(item._id)"></ion-icon>\n	      <ion-thumbnail item-start>\n	        <img src="{{item.product_image0}}">\n	      </ion-thumbnail>\n	      <h2>{{item.product_name}}</h2>\n	      <!--<p>{{item.product_ingredients}}</p>-->\n	      <p item-end class="left-p" >${{item.quantity*item.price_per_plate| number}}</p>\n	      <div class="itembottom" style="width: 100%; float: left; padding-top: 3px;">\n	      <div class="counter_sec">\n			   <button ion-button clear><ion-icon name="remove"  (click)="remove(item.quantity,item._id)"></ion-icon></button>\n                           <input type="text" value="{{item.quantity}}"  >\n			   <button ion-button clear><ion-icon name="add" (click)="add(item.quantity,item._id)"></ion-icon></button>\n			  \n		  </div>\n		  <span style="color: #f27242;"> X ${{item.price_per_plate}}</span>\n		</div>\n              \n	    </ion-item>\n	 \n	</ion-list>\n</div>\n<div class="total" style="padding-top: 14px !important;">\n	<h2 class="left">Subtotal</h2>\n	<h2 class="right">${{total1 | number}}</h2>\n</div>\n    <div class="total">\n	<h2 class="left">Total Discount</h2>\n	<h2 class="right">-${{discount | number}}</h2>\n</div>\n<div class="total">\n	<h2 class="left">Transportation charges</h2>\n	<h2 class="right">$0</h2>\n</div>\n<div class="total">\n	<h2 class="left" style="color: #4d4d4d; font-weight: 700 !important;">Total</h2>\n	<h2 class="right" style="font-weight: 700 !important;">${{Total1 | number}}</h2>\n</div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <button ion-button full color="theme-header" (click)="pyment()">Checkout</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\cart\cart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], CartPage);

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service__ = __webpack_require__(191);
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
 * Generated class for the ProductviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductviewPage = (function () {
    function ProductviewPage(navCtrl, appsetting, http, navParams, toastCtrl, alertCtrl, myService, loadingCtrl) {
        //       alert('happy');
        this.navCtrl = navCtrl;
        this.appsetting = appsetting;
        this.http = http;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.myService = myService;
        this.loadingCtrl = loadingCtrl;
        this.splarr = [];
        this.ar = [];
        this.extraarray = [];
        this.resultant = [];
        this.disharray = [];
        this.data = {};
        this.services = [];
        this.iconname = 'heart-outline';
        this.pet = "Description";
        //       console.log(this.data.service);
    }
    ProductviewPage.prototype.favproduct = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
        if (this.iconname == 'heart') {
            var alert1 = this.alertCtrl.create({
                title: 'RAFAHO',
                message: 'Remove from Favourite',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                        }
                    },
                    {
                        text: 'OK',
                        role: 'submit',
                        handler: function () {
                            var postdata = {
                                user_id: _this.a._id,
                                favorite_product_id: _this.splarr._id
                            };
                            console.log(postdata);
                            var Serialized = _this.serializeObj(postdata);
                            var Loading = _this.loadingCtrl.create({
                                spinner: 'bubbles',
                                cssClass: 'loader',
                                content: "Loading",
                                dismissOnPageChange: true
                            });
                            Loading.present().then(function () {
                                _this.http.post(_this.appsetting.myGlobalVar + 'user/delete_favarite_products', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (responsee) {
                                    _this.iconname = 'heart-outline';
                                    console.log(responsee);
                                    Loading.dismiss();
                                }, function (err) {
                                    Loading.dismissAll();
                                    _this.ToastMsg('Something went wrong');
                                });
                            });
                        }
                    }
                ]
            });
            alert1.present();
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'RAFAHO',
                message: 'Save this as favourite product',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                        }
                    },
                    {
                        text: 'OK',
                        role: 'submit',
                        handler: function () {
                            var postdata = {
                                user_id: _this.a._id,
                                favorite_product_id: _this.splarr._id,
                                favorite_product_image_url: _this.splarr.product_image0
                            };
                            console.log(postdata);
                            var Serialized = _this.serializeObj(postdata);
                            var Loading = _this.loadingCtrl.create({
                                spinner: 'bubbles',
                                cssClass: 'loader',
                                content: "Loading",
                                dismissOnPageChange: true
                            });
                            Loading.present().then(function () {
                                _this.http.post(_this.appsetting.myGlobalVar + 'user/add_to_favarite', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (responsee) {
                                    _this.iconname = 'heart';
                                    console.log(responsee);
                                    Loading.dismiss();
                                    if (responsee.status == false) {
                                        _this.ToastMsg(responsee.message);
                                    }
                                }, function (err) {
                                    Loading.dismissAll();
                                    _this.ToastMsg('Something went wrong');
                                });
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    ProductviewPage.prototype.cartpro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */]);
    };
    ProductviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductviewPage');
        console.log(window.navigator.onLine);
        this.getdishdetail();
        this.a = JSON.parse(localStorage.getItem('UserDetail'));
        console.log(this.a);
        if (JSON.parse(localStorage.getItem('proctnumberincart'))) {
            this.no_of_products = JSON.parse(localStorage.getItem('proctnumberincart'));
            console.log(this.no_of_products);
        }
        else {
            this.no_of_products = 0;
        }
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    ProductviewPage.prototype.getdishdetail = function () {
        var _this = this;
        if (localStorage.getItem('producttss')) {
            this.splarr = JSON.parse(localStorage.getItem('producttss'));
            //               this.array = JSON.parse(localStorage.getItem('Extrastaff'));
            console.log(this.splarr);
            console.log(this.splarr.product_ingredients);
            var str = this.splarr.product_ingredients;
            console.log(str);
            //   
            var str_array = str.split(',');
            ////
            for (var i = 0; i < str_array.length; i++) {
                ////   // Trim the excess whitespace.
                str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
                ////   // Add additional code here, such as:
                console.log(str_array[i]);
                this.ar.push(str_array[i]);
            }
            console.log(this.ar);
        }
        this.price = this.splarr.product_price;
        this.quantity = this.splarr.minimum_order;
        if ((this.splarr.take_away) || (this.splarr.cook_at_user_place) || (this.splarr.home_delivery)) {
        }
        if (this.splarr.take_away == 0) {
            if (this.splarr.cook_at_user_place == 0) {
                //              if(this.splarr.home_delivery == 0){
                //                  return null;
                //              }else{
                this.services.push('Home Delivery');
            }
            else {
                if (this.splarr.home_delivery == 0) {
                    this.services.push('Cook at MY Place');
                }
                else {
                    this.services.push('Home Delivery');
                    this.services.push('Cook at My Place');
                }
            }
        }
        else {
            if (this.splarr.cook_at_user_place == 0) {
                if (this.splarr.home_delivery == 0) {
                    this.services.push('Cook at Chef place');
                }
                else {
                    this.services.push('Home Delivery');
                    this.services.push('Cook at Chef place');
                }
            }
            else {
                if (this.splarr.home_delivery == 0) {
                    this.services.push('Cook at MY Place');
                    this.services.push('Cook at Chef place');
                }
                else {
                    this.services.push('Cook at MY Place');
                    this.services.push('Cook at Chef place');
                    this.services.push('Home Delivery');
                }
            }
        }
        console.log(this.services);
        console.log(this.price, this.quantity);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
        console.log(userid);
        var postdata = {
            id: userid
        };
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            var serialized = _this.serializeObj(postdata);
            console.log(postdata);
            _this.http.post(_this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log(data);
                Loading.dismiss();
                _this.a = data.data;
                console.log(_this.a);
                if (_this.a.favorite) {
                    console.log(_this.a.favorite);
                    for (var t = 0; t < _this.a.favorite.length; t++) {
                        if (_this.splarr._id == _this.a.favorite[t].favorite_product_id) {
                            //               alert('matched');
                            _this.iconname = 'heart';
                            break;
                        }
                    }
                }
            });
        });
    };
    ProductviewPage.prototype.crt11 = function (dish1) {
        var _this = this;
        console.log(this.quantity);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
        var b = JSON.parse(localStorage.getItem('Chefdetail'));
        console.log(b);
        var c = JSON.parse(localStorage.getItem('Bookingdatetime'));
        console.log(c);
        console.log(this.data.service);
        if (this.data.service != undefined) {
            if (this.data.service == 'Home Delivery') {
                console.log('home');
                this.data.service = 3;
            }
            else if (this.data.service == 'Cook at My Place') {
                console.log('my place');
                this.data.service = 2;
            }
            else {
                console.log('chef place');
                this.data.service = 1;
            }
            console.log(this.data.service);
            console.log(this.a);
            var postdata = {
                user_id: this.a._id,
                user_address: this.a.address,
                long: this.a.longitude,
                lat: this.a.latitude,
                chef_id: b._id,
                booking_datetime: c,
                product_id: this.splarr._id,
                product_name: this.splarr.product_name,
                price_per_plate: this.splarr.product_price,
                quantity: this.quantity,
                minimum_order: this.splarr.minimum_order,
                product_image0: this.splarr.product_image0,
                product_ingredients: this.splarr.product_ingredients,
                discount: this.splarr.discount,
                order_prefrence: this.data.service
            };
            console.log(postdata);
            var Serialized = this.serializeObj(postdata);
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                cssClass: 'loader',
                content: "Loading",
                dismissOnPageChange: true
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.myGlobalVar + 'add_to_cart', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                    Loading.dismiss();
                    console.log(response);
                    if (response.status == true) {
                        var toast = _this.toastCtrl.create({
                            message: "Product added Succesfully to Cart",
                            duration: 1500,
                            position: 'middle'
                        });
                        localStorage.setItem('proctnumberincart', JSON.stringify(response.data.products.length));
                        _this.no_of_products = JSON.parse(localStorage.getItem('proctnumberincart'));
                        console.log(_this.no_of_products);
                        console.log(_this.appsetting.cartid);
                        toast.present();
                        //      this.navCtrl.push(CartPage);
                    }
                    else {
                        _this.ToastMsg(response.message);
                        //        this.navCtrl.push(CartPage);
                    }
                }, function (err) {
                    _this.ToastMsg('Something went wrong');
                    Loading.dismissAll();
                    console.log(err);
                });
            });
        }
        else {
            this.ToastMsg('Select a Service');
        }
    };
    //                 crt(dish) {
    //     
    //      
    //      
    //      console.log(this.quantity);
    //      var nik = 0;
    //  console.log(this.splarr)
    //        var col = {
    //            Quantity: this.quantity
    //      }
    //   
    //      this.disharray = col;
    //      console.log(this.disharray);
    //      this.resultant = Object.assign({}, this.splarr, this.disharray); 
    //      console.log(this.resultant)
    //      console.log(dish);
    //      var a= JSON.parse(localStorage.getItem('Cartlist'));
    //      console.log(a);
    //      if(a != null){
    //         // console.log('if');
    //           for(var i =0;i<this.appsetting.cart.length;i++){
    //          console.log(this.appsetting.cart[i]._id)
    //           console.log(this.resultant._id, this.appsetting.cart[i]._id)
    //           if(this.resultant._id == this.appsetting.cart[i]._id) {
    ////               console.log('hey');
    //               nik = 1;
    //               var index = i;
    //             
    ////               this.navCtrl.push(CartPage);
    ////               return false;
    //           }
    ////           else{
    ////               console.log('hey2');
    ////               this.appsetting.cart.push(this.splarr);
    ////                console.log(this.appsetting.cart);
    ////               localStorage.setItem('Cartlist', JSON.stringify(this.appsetting.cart)); 
    ////               this.navCtrl.push(CartPage);
    ////               return false;
    ////           }
    //      } 
    //        console.log(index);
    //        
    //      if(nik == 1){
    ////          this.updateUser(this.appsetting.cart)
    //          this.appsetting.cart[index] = this.resultant;
    //          console.log( this.appsetting.cart)
    //           localStorage.setItem('Cartlist', JSON.stringify(this.appsetting.cart)); 
    //          this.navCtrl.push(CartPage);
    //               return false;
    //      }
    //      else{
    //               this.appsetting.cart.push(this.resultant);
    //                console.log(this.appsetting.cart);
    //               localStorage.setItem('Cartlist', JSON.stringify(this.appsetting.cart)); 
    //               this.navCtrl.push(CartPage);
    //               return false;
    //      }
    //      }
    //      else{
    //          this.appsetting.cart.push(this.resultant);
    //                console.log(this.appsetting.cart);
    //          console.log('here');
    //             console.log(this.resultant._id)
    //            localStorage.setItem('Cartlist', JSON.stringify(this.appsetting.cart)); 
    //             this.navCtrl.push(CartPage);
    //      }
    //     
    //       
    //    
    //  }
    //  updateUser(user){
    //      
    //    this.myService.getUpdate(user._id)
    //    .subscribe(newitem => {
    //      this.updateArray(this.resultant);
    //    });
    //}
    //  updateArray(newitem){
    //    this.appsetting.cart.items[this.resultant._id] = this.resultant
    //  }
    ProductviewPage.prototype.ToastMsg = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    ProductviewPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ProductviewPage.prototype.add = function (qnt) {
        this.quantity = parseFloat(qnt) + 1;
        console.log(this.quantity);
        console.log(qnt);
    };
    ProductviewPage.prototype.remove = function (qntity) {
        if (this.quantity == this.splarr.minimum_order) {
            console.log(this.quantity);
            var toast = this.toastCtrl.create({
                message: 'Minimum order quantity must be :' + ' ' + this.splarr.minimum_order,
                duration: 1000,
                position: 'top'
            });
            ;
            toast.present();
        }
        else {
            this.quantity = parseFloat(qntity) - 1;
            console.log(this.quantity);
            console.log(qntity);
        }
    };
    return ProductviewPage;
}());
ProductviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-productview',template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\productview\productview.html"*/'<!--\n  Generated template for the ProductviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n   <ion-navbar color="theme-header">\n    <ion-title>     \n     Product Details\n    </ion-title>\n\n\n    <ion-buttons end >\n      <button ion-button icon-only class="btnprofile" (click)="cartpro()">\n      <div class="iconprf">\n          <img src="assets/img/whitestore.png">\n         <p><span>{{no_of_products}}</span></p>\n       </div>\n      </button>     \n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<!--(click)="crt()"-->\n\n<ion-content >\n\n	<div class="banner">\n		<div class="main-img">\n			<img src="{{splarr.product_image0}}">\n		</div>\n		<div class="heart">\n                                <button class="hrtbtn" ion-button icon-only (click)="favproduct()">\n                                  <ion-icon name="{{iconname}}" ></ion-icon>\n                                       </button>\n			<!--<img src="assets/img/redhrt.png">-->\n		</div>\n\n		<div class="text">\n			<h1>{{splarr.product_name}}</h1>\n		</div>\n	</div>\n	<div class="content-sec">\n		<div class="top-sec" style="background-color: #fff; padding: 0 16px; padding-top: 12px;">\n			<h3>{{splarr.product_name}}</h3>\n<!--			<p>{{splarr.product_ingredients}}</p>-->\n		</div>\n	<div class="mid-sec" style="background-color: #fff; padding: 0 16px;">\n		<h3 style="width: auto; float: left; font-size: 14px; margin: 7px 25px 0px 0px; color: #f27242;">Reg <span>${{splarr.product_price| number}}</span></h3>\n		<div class="counter_sec">\n			   <button ion-button clear (click)="remove(quantity)"><ion-icon name="remove"></ion-icon></button>\n			   <input type="text" value="{{quantity}}" >\n			   <button ion-button clear (click)="add(quantity)"><ion-icon name="add"></ion-icon></button>\n		</div>\n	</div>\n	<div class="bottom-sec" style="background-color: #fff; padding: 0 16px 14px 16px;">\n		<div class="leftbtn" style="width: 85px; float: left; margin-right: 10px; margin-top: 8px; overflow: hidden;">\n			<button ion-button (click)="crt11(splarr)">Add To Cart</button>\n		</div>\n		<div class="cart-sec">\n			\n			<h3>{{quantity}} x ${{splarr.product_price| number}} = ${{quantity * splarr.product_price| number}}</h3>\n		</div>\n	</div>\n            <div>\n\n                <div class="select-sec">\n        <ion-item>\n             <ion-label>SELECT SERVICE</ion-label>\n            <ion-select class="active"   [(ngModel)]="data.service" name=\'service\' required>\n              \n                <div *ngFor = "let data of services" >\n                \n                 <ion-option [value]="data" >{{data}}</ion-option>\n                </div>\n\n         </ion-select>\n        </ion-item>\n                </div>\n \n            </div>\n		 <div class="segment-section" style="background-color: #fff; padding: 0 16px 15px 16px;">\n		  <ion-toolbar style="min-height: 27px;">\n		  <ion-segment color="pink" [(ngModel)]="pet">\n		    <ion-segment-button value="Description">\n		      Description\n		    </ion-segment-button>\n		    <ion-segment-button value="Ingreditent">\n		      Ingredient\n		    </ion-segment-button>\n		     <ion-segment-button value="Restriction">\n		      Diet Restriction\n		    </ion-segment-button>\n		  </ion-segment>\n		  </ion-toolbar>\n		\n	<div [ngSwitch]="pet">\n		<div class="head"  *ngSwitchCase="\'Ingreditent\'">\n			<ul *ngFor="let ingr of ar" >\n				<li>{{ingr}}</li>\n<!--				<li>Red Onion</li>\n				<li>Piquillo Peppers</li>\n				<li>Radicchio</li>\n				<li>Parmesan Cheese</li>\n				<li>Arugula</li>\n				<li>Blended Oil (canola oil, olive oil)</li>-->\n			</ul>\n		</div>\n		<div class="head"  *ngSwitchCase="\'Description\'">\n			<ul>\n				<li [innerHTML]="splarr.product_description"></li>\n				\n				\n			</ul>\n		</div>\n		<div class="head"  *ngSwitchCase="\'Restriction\'">\n			<ul *ngIf ="splarr.diet_restriction">\n				<li [innerHTML]="splarr.diet_restriction"></li>\n				\n				\n				\n			</ul>\n                    <ul *ngIf ="!splarr.diet_restriction">\n				<li>No restrictions</li>\n				\n				\n				\n			</ul>\n		</div>\n	</div>\n</div>\n</div>\n\n	 \n	    \n</ion-content>\n'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\productview\productview.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_service__["a" /* Service */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], ProductviewPage);

//# sourceMappingURL=productview.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NominatimapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Geolocation } from '@ionic-native/geolocation';

//  import {googlemaps} from 'googlemaps';

/**
 * Generated class for the NominatimapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NominatimapPage = (function () {
    function NominatimapPage(navCtrl, navParams, viewCtrl, toastCtrl, platform, appsetting, http, geolocation, loadCtrl, alertCtrl, nativeGeocoder, places) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.appsetting = appsetting;
        this.http = http;
        this.geolocation = geolocation;
        this.loadCtrl = loadCtrl;
        this.alertCtrl = alertCtrl;
        this.nativeGeocoder = nativeGeocoder;
        this.places = places;
        this.omega = 0;
        this.number = true;
        this.isenabled = false;
        this.ssaved = [];
        this.iconname = 'star-outline';
        this.markers = [];
        this.userdetail = [];
        this.bb = [];
        this.geocoder = new google.maps.Geocoder();
        this.data = {};
        /**map initialization */
        this.initMap = function () {
            var nill = _this;
            var newShape;
            var map;
            _this.platform.ready().then(function () {
                var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
                headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
                // alert("working");
                // alert(lat+','+long);
                var Loading = _this.loadCtrl.create({
                    spinner: 'bubbles',
                    cssClass: 'loader',
                    content: "Loading",
                    dismissOnPageChange: true
                });
                Loading.present().then(function () {
                    _this.geolocation.getCurrentPosition().then(function (resp) {
                        _this.lat = resp.coords.latitude;
                        _this.long = resp.coords.longitude;
                        console.log(resp.coords.latitude);
                        console.log(resp.coords.longitude);
                        Loading.dismiss();
                        //  if(this.nomi !=null){
                        //      this.l=this.nomi.lat
                        //      this.lo=this.nomi.lon
                        //     console.log(this.l,this.lo)
                        //  }
                        //  else{
                        _this.l = _this.lat;
                        _this.lo = _this.long;
                        //  }
                        var latLng = new google.maps.LatLng(_this.l, _this.lo);
                        console.log(_this.data.city);
                        var postdata = {
                            lat: _this.l,
                            long: _this.lo
                        };
                        var Serialized = _this.serializeObj(postdata);
                        _this.http.post('  http://rafao.us-west-2.elasticbeanstalk.com/api/home/reverse_geocoding', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                            console.log(response.data);
                            var resso = JSON.parse(response.data);
                            console.log(resso.response);
                            //            console.log(resso.response.properties.address);
                            if (response.data == 'Not available credits') {
                                _this.ToastMsg('Sorry! No Credits available');
                            }
                            if ((resso.response == undefined) || (response.data == '{"message":"Result not found"}') || (resso.response.properties.address == null)) {
                                _this.geocoder.geocode({ 'location': latLng }, (function (results, status) {
                                    if (status == google.maps.GeocoderStatus.OK) {
                                        if (results == '') {
                                            _this.ToastMsg('Invalid Location');
                                            _this.lat = '';
                                            _this.long = '';
                                            _this.infowindow.setContent('Error');
                                            _this.infowindow.open(_this.map, marker);
                                        }
                                        else {
                                            if (results[0]) {
                                                console.log(results[0].place_id);
                                                console.log(results[0].formatted_address);
                                                _this.infowindow.setContent(results[0].formatted_address);
                                                //    
                                                _this.infowindow.open(_this.map, marker1);
                                                //           this.data.city = results[0].address_components[0].long_name;
                                                _this.autocomplete.query = results[0].formatted_address;
                                                var citiie6 = results[0].formatted_address.split(',');
                                                console.log(citiie6[1]);
                                                switch (citiie6[1]) {
                                                    case ' Bogotá':
                                                        _this.data.city = 'Bogota';
                                                        break;
                                                    case ' Bogota':
                                                        _this.data.city = 'Bogota';
                                                        break;
                                                    case ' Soacha': {
                                                        _this.data.city = 'cun_soacha';
                                                        break;
                                                    }
                                                    case ' Mosquera': {
                                                        _this.data.city = 'cun_mosquera';
                                                        break;
                                                    }
                                                    case ' Facatativá': {
                                                        _this.data.city = 'cun_facatativa';
                                                        break;
                                                    }
                                                    case ' Madrid': {
                                                        _this.data.city = 'cun_madrid';
                                                        break;
                                                    }
                                                    case ' Cajicá': {
                                                        _this.data.city = 'cun_cajica';
                                                        break;
                                                    }
                                                    case ' Sopó': {
                                                        _this.data.city = 'cun_sopo';
                                                        break;
                                                    }
                                                    case ' Tenjo': {
                                                        _this.data.city = 'cun_tenjo';
                                                        break;
                                                    }
                                                    case ' Tocancipa': {
                                                        _this.data.city = 'cun_tocancipa';
                                                        break;
                                                    }
                                                    case ' Guasca': {
                                                        _this.data.city = 'cun_guasca';
                                                        break;
                                                    }
                                                    case ' Anapoima': {
                                                        _this.data.city = 'cun_anapoima';
                                                        break;
                                                    }
                                                    case ' Villeta': {
                                                        _this.data.city = 'cun_villeta';
                                                        break;
                                                    }
                                                    case ' La Vega': {
                                                        _this.data.city = 'cun_la_vega';
                                                        break;
                                                    }
                                                    case ' La Mesa': {
                                                        _this.data.city = 'cun_la_mesa';
                                                        break;
                                                    }
                                                    default: {
                                                        console.log('not found');
                                                        console.log(citiie6[1]);
                                                        _this.data.city = 'Bogota';
                                                    }
                                                }
                                                console.log(_this.data.city);
                                            }
                                            else if (results[1]) {
                                                _this.autocomplete.query = results[1].formatted_address;
                                                //     this.data.city = results[1].address_components[0].long_name;
                                                console.log(results[1].formatted_address);
                                                _this.infowindow.setContent(results[1].formatted_address);
                                                _this.infowindow.open(_this.map, marker1);
                                                _this.autocomplete.query = results[1].formatted_address;
                                                var citiie8 = results[1].formatted_address.split(',');
                                                _this.data.city = '';
                                                console.log(citiie8[1]);
                                                switch (citiie8[1]) {
                                                    case ' Bogotá':
                                                        _this.data.city = 'Bogota';
                                                        break;
                                                    case ' Bogota':
                                                        _this.data.city = 'Bogota';
                                                        break;
                                                    case ' Soacha': {
                                                        _this.data.city = 'cun_soacha';
                                                        break;
                                                    }
                                                    case ' Mosquera': {
                                                        _this.data.city = 'cun_mosquera';
                                                        break;
                                                    }
                                                    case ' Facatativá': {
                                                        _this.data.city = 'cun_facatativa';
                                                        break;
                                                    }
                                                    case ' Madrid': {
                                                        _this.data.city = 'cun_madrid';
                                                        break;
                                                    }
                                                    case ' Cajicá': {
                                                        _this.data.city = 'cun_cajica';
                                                        break;
                                                    }
                                                    case ' Sopó': {
                                                        _this.data.city = 'cun_sopo';
                                                        break;
                                                    }
                                                    case ' Tenjo': {
                                                        _this.data.city = 'cun_tenjo';
                                                        break;
                                                    }
                                                    case ' Tocancipa': {
                                                        _this.data.city = 'cun_tocancipa';
                                                        break;
                                                    }
                                                    case ' Guasca': {
                                                        _this.data.city = 'cun_guasca';
                                                        break;
                                                    }
                                                    case ' Anapoima': {
                                                        _this.data.city = 'cun_anapoima';
                                                        break;
                                                    }
                                                    case ' Villeta': {
                                                        _this.data.city = 'cun_villeta';
                                                        break;
                                                    }
                                                    case ' La Vega': {
                                                        _this.data.city = 'cun_la_vega';
                                                        break;
                                                    }
                                                    case ' La Mesa': {
                                                        _this.data.city = 'cun_la_mesa';
                                                        break;
                                                    }
                                                    default: {
                                                        console.log('not found');
                                                        console.log(citiie8[1]);
                                                        _this.data.city = 'Bogota';
                                                    }
                                                }
                                                console.log(_this.data.city);
                                            }
                                        }
                                    }
                                    //		
                                }));
                            }
                            else {
                                //                var resso = JSON.parse(response.data)
                                console.log(resso.response.message);
                                if (resso.response.message == "Result not found") {
                                    _this.ToastMsg('Not found');
                                    _this.lat = '';
                                    _this.long = '';
                                    _this.infowindow.setContent('Error');
                                    _this.infowindow.open(_this.map, marker);
                                }
                                else {
                                    var addr = resso.response.properties.address;
                                    console.log(resso.response);
                                    if (addr == null) {
                                    }
                                    _this.autocomplete.query = addr;
                                    if (resso.response.properties.city == 'bogota') {
                                        resso.response.properties.city = resso.response.properties.city.charAt(0).toUpperCase() + resso.response.properties.city.slice(1);
                                    }
                                    _this.data.city = resso.response.properties.city;
                                    console.log(_this.data.city);
                                    console.log(_this.autocomplete.query);
                                    //                   alert(addr);
                                    _this.infowindow.setContent(addr);
                                    _this.infowindow.open(_this.map, marker);
                                }
                            }
                        });
                        _this.MapBounds = new google.maps.LatLngBounds(new google.maps.LatLng(4.820443, -74.250464), new google.maps.LatLng(4.716435, -74.310888), new google.maps.LatLng(4.59393, -74.279989), new google.maps.LatLng(4.476882, -74.124808), new google.maps.LatLng(4.505632, -73.953146), new google.maps.LatLng(4.681533, -73.92568), new google.maps.LatLng(4.858758, -73.911947), new google.maps.LatLng(4.908702, -74.126181), new google.maps.LatLng(4.823864, -74.245657));
                        //       new google.maps.LatLng(4.820443,  -74.25046399999997),
                        //           new google.maps.LatLng(4.716435,  -74.31088799999998));
                        var mapOptions = {
                            center: latLng,
                            zoom: 18,
                            Bounds: _this.MapBounds,
                            //        minZoom:100,
                            //        maxzoom:50,
                            minZoom: 2,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            disableDefaultUI: true,
                            zoomControl: true
                        };
                        _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
                        _this.lastPosition = new google.maps.LatLng(4.624335, -74.063644);
                        _this.boundsSet = false;
                        //   google.maps.event.addListener(this.map, 'bounds_changed', function () {
                        ////    console.log(mapp)
                        //   console.log(this.boundsSet)
                        //    console.log(this.MapBounds)
                        //    if (!this.boundsSet) {
                        //        this.MapBounds = this.MapBounds;
                        //        this.boundsSet = true;
                        //        console.log(this.MapBounds);
                        //    }
                        //});
                        console.log(_this.map);
                        console.log(mapOptions);
                        var polygoncoords = [
                            { lat: 4.820443, lng: -74.250464 },
                            { lat: 4.716435, lng: -74.310888 },
                            { lng: -74.279989, lat: 4.59393 },
                            { lng: -74.251837, lat: 4.502894 },
                            { lng: -74.124808, lat: 4.476882 },
                            { lng: -74.035544, lat: 4.505632 },
                            { lng: -73.953146, lat: 4.562446 },
                            { lng: -73.92568, lat: 4.681533 },
                            { lng: -73.911947, lat: 4.858758 },
                            { lng: -74.126181, lat: 4.908702 },
                            { lng: -74.245657, lat: 4.823864 }
                        ];
                        var bogotapoly = new google.maps.Polygon({
                            paths: polygoncoords,
                            strokeColor: '#FF0000',
                            strokeOpacity: 0.8,
                            strokeWeight: 2,
                            fillColor: '#FF0000',
                            fillOpacity: 0.05
                        });
                        //       bogotapoly.setMap(this.map);
                        //  alert("mapOptions");
                        var marker1 = new google.maps.Marker({
                            position: latLng,
                            //         position:new google.maps.LatLng(4.624335, -74.063644),
                            draggable: false,
                            icon: 'assets/img/location32.png',
                            map: _this.map,
                        });
                        map = _this.map;
                        //         this.map.addListener('click', function(event) {  
                        //          latLng = event.latLng
                        //          console.log(map);
                        //           console.log(this.markers)
                        //     var marker = new google.maps.Marker({  
                        //    position: latLng, 
                        //    draggable:true,
                        //    icon: 'assets/img/location.png',
                        //    map: map  
                        //  }); 
                        //    
                        //    
                        //     this.markers=[];
                        //        this.markers.push(marker);
                        //        
                        //  });
                        var marker = new google.maps.Marker({
                            position: latLng,
                            draggable: true,
                            icon: 'assets/img/location.png',
                            map: _this.map,
                        });
                        _this.markers = [];
                        _this.markers.push(marker);
                        map.setCenter(marker.getPosition());
                        google.maps.event.addListener(marker, 'dragend', (function (marker12) {
                            _this.iconname = 'star-outline';
                            var latLng1 = marker12.latLng;
                            _this.lat = latLng1.lat();
                            _this.long = latLng1.lng();
                            console.log(marker12);
                            console.log(_this.lat);
                            console.log(_this.long);
                            //      var pposition = new google.maps.LatLng(this.lat, this.long)
                            //      console.log(this.MapBounds)
                            //      console.log(pposition.lat(),pposition.lng())
                            ////       MapBounds.contains(position) ? lastPosition = position : marker.setPosition(lastPosition);
                            //       if( this.MapBounds.contains(pposition)){
                            //           this.lastPosition = pposition
                            //       }else{
                            //        this.lastPosition = pposition
                            //           console.log('no sertvice available');
                            //       }
                            //       console.log(this.lastPosition.lat(),this.lastPosition.lng())
                            //    ;
                            var latLong = new google.maps.LatLng(_this.lat, _this.long);
                            var postdata = {
                                lat: _this.lat,
                                long: _this.long
                            };
                            var Serialized = _this.serializeObj(postdata);
                            _this.http.post('http://rafao.us-west-2.elasticbeanstalk.com/api/home/reverse_geocoding', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                                console.log(response.data == '{"message":"Result not found"}');
                                var resso = JSON.parse(response.data);
                                console.log(resso.response);
                                //            console.log(resso.response.properties.address);
                                if (response.data == 'Not available credits') {
                                    _this.ToastMsg('Sorry! No Credits available');
                                }
                                if ((resso.response == undefined) || (response.data == '{"message":"Result not found"}') || (resso.response.properties.address == null)) {
                                    _this.geocoder.geocode({ 'location': latLong }, (function (results, status) {
                                        console.log(results);
                                        if (results == '') {
                                            _this.ToastMsg('Invalid Location');
                                            _this.lat = '';
                                            _this.long = '';
                                            _this.infowindow.setContent('Error');
                                            _this.infowindow.open(_this.map, marker);
                                        }
                                        else {
                                            if (status == google.maps.GeocoderStatus.OK) {
                                                if (results[0]) {
                                                    console.log(results[0].place_id);
                                                    _this.autocomplete.query = results[1].formatted_address;
                                                    console.log(_this.autocomplete.query);
                                                    var citiie = results[0].formatted_address.split(',');
                                                    var City = '';
                                                    _this.data.city = '';
                                                    console.log(citiie[1]);
                                                    switch (citiie[1]) {
                                                        case ' Bogotá':
                                                            _this.data.city = 'Bogota';
                                                            break;
                                                        case ' Bogota':
                                                            _this.data.city = 'Bogota';
                                                            break;
                                                        case ' Soacha': {
                                                            _this.data.city = 'cun_soacha';
                                                            break;
                                                        }
                                                        case ' Mosquera': {
                                                            _this.data.city = 'cun_mosquera';
                                                            break;
                                                        }
                                                        case ' Facatativá': {
                                                            _this.data.city = 'cun_facatativa';
                                                            break;
                                                        }
                                                        case ' Madrid': {
                                                            _this.data.city = 'cun_madrid';
                                                            break;
                                                        }
                                                        case ' Cajicá': {
                                                            _this.data.city = 'cun_cajica';
                                                            break;
                                                        }
                                                        case ' Sopó': {
                                                            _this.data.city = 'cun_sopo';
                                                            break;
                                                        }
                                                        case ' Tenjo': {
                                                            _this.data.city = 'cun_tenjo';
                                                            break;
                                                        }
                                                        case ' Tocancipa': {
                                                            _this.data.city = 'cun_tocancipa';
                                                            break;
                                                        }
                                                        case ' Guasca': {
                                                            _this.data.city = 'cun_guasca';
                                                            break;
                                                        }
                                                        case ' Anapoima': {
                                                            _this.data.city = 'cun_anapoima';
                                                            break;
                                                        }
                                                        case ' Villeta': {
                                                            _this.data.city = 'cun_villeta';
                                                            break;
                                                        }
                                                        case ' La Vega': {
                                                            _this.data.city = 'cun_la_vega';
                                                            break;
                                                        }
                                                        case ' La Mesa': {
                                                            _this.data.city = 'cun_la_mesa';
                                                            break;
                                                        }
                                                        default: {
                                                            console.log('not found');
                                                            console.log(citiie[1]);
                                                            _this.ToastMsg('Sorry!! No service in this area');
                                                        }
                                                    }
                                                    console.log(_this.data.city);
                                                    //            this.data.city = citiie ;
                                                    //          this.infowindow=new google.maps.InfoWindow({
                                                    //              content: results[1].formatted_address,
                                                    //          }); 
                                                    _this.infowindow.setContent(results[0].formatted_address);
                                                    _this.infowindow.open(_this.map, marker);
                                                }
                                                else if (results[1]) {
                                                    console.log(results[1].place_id);
                                                    _this.autocomplete.query = results[1].formatted_address;
                                                    var citiie1 = results[1].formatted_address.split(',');
                                                    var City = '';
                                                    _this.data.city = '';
                                                    console.log(citiie[1]);
                                                    switch (citiie[1]) {
                                                        case ' Bogotá':
                                                            _this.data.city = 'Bogota';
                                                            break;
                                                        case ' Bogota':
                                                            _this.data.city = 'Bogota';
                                                            break;
                                                        case ' Soacha': {
                                                            _this.data.city = 'cun_soacha';
                                                            break;
                                                        }
                                                        case ' Mosquera': {
                                                            _this.data.city = 'cun_mosquera';
                                                            break;
                                                        }
                                                        case ' Facatativá': {
                                                            _this.data.city = 'cun_facatativa';
                                                            break;
                                                        }
                                                        case ' Madrid': {
                                                            _this.data.city = 'cun_madrid';
                                                            break;
                                                        }
                                                        case ' Cajicá': {
                                                            _this.data.city = 'cun_cajica';
                                                            break;
                                                        }
                                                        case ' Sopó': {
                                                            _this.data.city = 'cun_sopo';
                                                            break;
                                                        }
                                                        case ' Tenjo': {
                                                            _this.data.city = 'cun_tenjo';
                                                            break;
                                                        }
                                                        case ' Tocancipa': {
                                                            _this.data.city = 'cun_tocancipa';
                                                            break;
                                                        }
                                                        case ' Guasca': {
                                                            _this.data.city = 'cun_guasca';
                                                            break;
                                                        }
                                                        case ' Anapoima': {
                                                            _this.data.city = 'cun_anapoima';
                                                            break;
                                                        }
                                                        case ' Villeta': {
                                                            _this.data.city = 'cun_villeta';
                                                            break;
                                                        }
                                                        case ' La Vega': {
                                                            _this.data.city = 'cun_la_vega';
                                                            break;
                                                        }
                                                        case ' La Mesa': {
                                                            _this.data.city = 'cun_la_mesa';
                                                            break;
                                                        }
                                                        default: {
                                                            console.log('not found');
                                                            console.log(citiie[1]);
                                                            _this.ToastMsg('Sorry!! No service in this area');
                                                        }
                                                    }
                                                    console.log(_this.data.city);
                                                    //            this.data.city = citiie1 ;
                                                    console.log(_this.autocomplete.query);
                                                    //          this.infowindow=new google.maps.InfoWindow({
                                                    //              content: results[1].formatted_address,
                                                    //          }); 
                                                    _this.infowindow.setContent(results[1].formatted_address);
                                                    _this.infowindow.open(_this.map, marker);
                                                }
                                            }
                                        }
                                    }));
                                }
                                else {
                                    //                var resso = JSON.parse(response.data)
                                    console.log(resso.response.message);
                                    if (resso.response.message == "Result not found") {
                                        _this.ToastMsg('Not found');
                                        _this.lat = '';
                                        _this.long = '';
                                        _this.infowindow.setContent('Error');
                                        _this.infowindow.open(_this.map, marker);
                                    }
                                    else {
                                        var addr = resso.response.properties.address;
                                        console.log(resso.response);
                                        if (addr == null) {
                                        }
                                        _this.autocomplete.query = addr;
                                        if (resso.response.properties.city == 'bogota') {
                                            resso.response.properties.city = resso.response.properties.city.charAt(0).toUpperCase() + resso.response.properties.city.slice(1);
                                        }
                                        _this.data.city = resso.response.properties.city;
                                        console.log(_this.data.city);
                                        console.log(_this.autocomplete.query);
                                        _this.infowindow.setContent(addr);
                                        _this.infowindow.open(_this.map, marker);
                                    }
                                }
                            });
                        }));
                        // alert("working1");
                    }).catch(function (error) {
                        console.log('Error getting location', error);
                        _this.ToastMsg('Please Turn On your Loaction!! Error getting location');
                        Loading.dismissAll();
                        var latLng = new google.maps.LatLng(_this.lat, _this.long);
                        _this.geocoder.geocode({ 'latLng': latLng }, (function (results, status) {
                            if (status == google.maps.GeocoderStatus.OK) {
                                if (results[1]) {
                                    _this.autocomplete.query = results[1].formatted_address;
                                }
                            }
                        }));
                        var mapOptions = {
                            center: [-74.07231699675322, 4.66336863727521],
                            zoom: 18,
                            //        minZoom:100,
                            //        maxzoom:50,
                            minZoom: 1,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            disableDefaultUI: true,
                            zoomControl: true
                        };
                        var polygoncoords = [
                            { lat: 4.820443, lng: -74.250464 },
                            { lat: 4.716435, lng: -74.310888 },
                            { lng: -74.279989, lat: 4.59393 },
                            { lng: -74.251837, lat: 4.502894 },
                            { lng: -74.124808, lat: 4.476882 },
                            { lng: -74.035544, lat: 4.505632 },
                            { lng: -73.953146, lat: 4.562446 },
                            { lng: -73.92568, lat: 4.681533 },
                            { lng: -73.911947, lat: 4.858758 },
                            { lng: -74.126181, lat: 4.908702 },
                            { lng: -74.245657, lat: 4.823864 }
                        ];
                        var bogotapoly = new google.maps.Polygon({
                            paths: polygoncoords,
                            strokeColor: '#FF0000',
                            strokeOpacity: 0.8,
                            strokeWeight: 2,
                            fillColor: '#FF0000',
                            fillOpacity: 0.35
                        });
                        bogotapoly.setMap(map);
                        //        this.map.setZoom(1);
                        //        var MapBounds = new google.maps.LatLngBounds(
                        //    new google.maps.LatLng(35.676263, 13.949096),
                        //    new google.maps.LatLng(36.204391, 14.89038));
                        //    google.maps.event.addListener(map, 'dragend', function ()
                        //    {
                        //        if (MapBounds.contains(map.getCenter()))
                        //        {
                        //            return;
                        //        }
                        //        else
                        //        {
                        //            map.setCenter(new google.maps.LatLng( 4.624335, -74.063644));
                        //        }
                        //    });
                        _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
                        //  alert("mapOptions");
                        var marker1 = new google.maps.Marker({
                            position: latLng,
                            draggable: false,
                            icon: 'https://raw.githubusercontent.com/googlemaps/v3-utility-library/4c926fc74d724fe4360e4189e7c926842884614e/markerclusterer/images/m1.png',
                            map: _this.map,
                        });
                        //      var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
                        var marker = new google.maps.Marker({
                            position: latLng,
                            draggable: true,
                            icon: 'assets/img/location.png',
                            map: _this.map,
                        });
                        _this.markers = [];
                        _this.markers.push(marker);
                        map.setCenter(marker.getPosition());
                        //  alert("marker");
                        google.maps.event.addListener(marker, 'dragend', (function (marker12) {
                            _this.iconname = 'star-outline';
                            var latLng1 = marker12.latLng;
                            _this.lat = latLng1.lat();
                            _this.long = latLng1.lng();
                            console.log(marker12);
                            console.log(_this.lat);
                            console.log(_this.long);
                            //  alert(this.crlat);
                            // alert(this.crlng);
                            var latLong = new google.maps.LatLng(_this.lat, _this.long);
                            _this.geocoder.geocode({ 'location': latLong }, (function (results, status) {
                                console.log(results);
                                if (results == '') {
                                    _this.ToastMsg('Invalid Location');
                                    _this.lat = '';
                                    _this.long = '';
                                    _this.infowindow.setContent('Error');
                                    _this.infowindow.open(_this.map, marker);
                                }
                                else {
                                    if (status == google.maps.GeocoderStatus.OK) {
                                        if (results[0]) {
                                            console.log(results[0].place_id);
                                            _this.autocomplete.query = results[0].formatted_address;
                                            console.log(_this.autocomplete.query);
                                            var citiie2 = results[0].formatted_address.split(',');
                                            var City = '';
                                            _this.data.city = '';
                                            console.log(citiie2[1]);
                                            switch (citiie2[1]) {
                                                case ' Bogotá':
                                                    _this.data.city = 'Bogota';
                                                    break;
                                                case ' Bogota':
                                                    _this.data.city = 'Bogota';
                                                    break;
                                                case ' Soacha': {
                                                    _this.data.city = 'cun_soacha';
                                                    break;
                                                }
                                                case ' Mosquera': {
                                                    _this.data.city = 'cun_mosquera';
                                                    break;
                                                }
                                                case ' Facatativá': {
                                                    _this.data.city = 'cun_facatativa';
                                                    break;
                                                }
                                                case ' Madrid': {
                                                    _this.data.city = 'cun_madrid';
                                                    break;
                                                }
                                                case ' Cajicá': {
                                                    _this.data.city = 'cun_cajica';
                                                    break;
                                                }
                                                case ' Sopó': {
                                                    _this.data.city = 'cun_sopo';
                                                    break;
                                                }
                                                case ' Tenjo': {
                                                    _this.data.city = 'cun_tenjo';
                                                    break;
                                                }
                                                case ' Tocancipa': {
                                                    _this.data.city = 'cun_tocancipa';
                                                    break;
                                                }
                                                case ' Guasca': {
                                                    _this.data.city = 'cun_guasca';
                                                    break;
                                                }
                                                case ' Anapoima': {
                                                    _this.data.city = 'cun_anapoima';
                                                    break;
                                                }
                                                case ' Villeta': {
                                                    _this.data.city = 'cun_villeta';
                                                    break;
                                                }
                                                case ' La Vega': {
                                                    _this.data.city = 'cun_la_vega';
                                                    break;
                                                }
                                                case ' La Mesa': {
                                                    _this.data.city = 'cun_la_mesa';
                                                    break;
                                                }
                                                default: {
                                                    console.log('not found');
                                                    console.log(citiie2[1]);
                                                    _this.ToastMsg('Sorry!! No service in this area');
                                                }
                                            }
                                            console.log(_this.data.city);
                                            //            this.data.city = citiie2 ;
                                            //          this.infowindow=new google.maps.InfoWindow({
                                            //              content: results[1].formatted_address,
                                            //          }); 
                                            _this.infowindow.setContent(results[0].formatted_address);
                                            _this.infowindow.open(_this.map, marker);
                                        }
                                        else if (results[1]) {
                                            console.log(results[1].place_id);
                                            _this.autocomplete.query = results[1].formatted_address;
                                            var citiie3 = results[1].formatted_address.split(',');
                                            var City = '';
                                            _this.data.city = '';
                                            console.log(citiie3[1]);
                                            switch (citiie3[1]) {
                                                case ' Bogotá':
                                                    _this.data.city = 'Bogota';
                                                    break;
                                                case ' Bogota':
                                                    _this.data.city = 'Bogota';
                                                    break;
                                                case ' Soacha': {
                                                    _this.data.city = 'cun_soacha';
                                                    break;
                                                }
                                                case ' Mosquera': {
                                                    _this.data.city = 'cun_mosquera';
                                                    break;
                                                }
                                                case ' Facatativá': {
                                                    _this.data.city = 'cun_facatativa';
                                                    break;
                                                }
                                                case ' Madrid': {
                                                    _this.data.city = 'cun_madrid';
                                                    break;
                                                }
                                                case ' Cajicá': {
                                                    _this.data.city = 'cun_cajica';
                                                    break;
                                                }
                                                case ' Sopó': {
                                                    _this.data.city = 'cun_sopo';
                                                    break;
                                                }
                                                case ' Tenjo': {
                                                    _this.data.city = 'cun_tenjo';
                                                    break;
                                                }
                                                case ' Tocancipa': {
                                                    _this.data.city = 'cun_tocancipa';
                                                    break;
                                                }
                                                case ' Guasca': {
                                                    _this.data.city = 'cun_guasca';
                                                    break;
                                                }
                                                case ' Anapoima': {
                                                    _this.data.city = 'cun_anapoima';
                                                    break;
                                                }
                                                case ' Villeta': {
                                                    _this.data.city = 'cun_villeta';
                                                    break;
                                                }
                                                case ' La Vega': {
                                                    _this.data.city = 'cun_la_vega';
                                                    break;
                                                }
                                                case ' La Mesa': {
                                                    _this.data.city = 'cun_la_mesa';
                                                    break;
                                                }
                                                default: {
                                                    console.log('not found');
                                                    console.log(citiie3[1]);
                                                    _this.ToastMsg('Sorry!! No service in this area');
                                                }
                                            }
                                            console.log(_this.data.city);
                                            //            this.data.city = citiie3;
                                            console.log(_this.autocomplete.query);
                                            //          this.infowindow=new google.maps.InfoWindow({
                                            //              content: results[1].formatted_address,
                                            //          }); 
                                            _this.infowindow.setContent(results[1].formatted_address);
                                            _this.infowindow.open(_this.map, marker);
                                        }
                                    }
                                }
                            }));
                        }));
                    });
                });
                var watch = _this.geolocation.watchPosition();
                watch.subscribe(function (data) {
                    // console.log('My latitude : ', data.coords.latitude);
                    // console.log('My longitude: ', data.coords.longitude);
                    nill.latt = data.coords.latitude;
                    nill.longg = data.coords.longitude;
                    //  alert(nill.latt+','+nill.longg);
                });
            });
        };
        //  this.initMap();
        //   alert('hello');
        this.userdetail = JSON.parse(localStorage.getItem('UserDetail'));
        console.log(this.userdetail);
        this.cities();
        console.log(this.appsetting.saved);
    }
    NominatimapPage.prototype.cities = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        //    let options = new RequestOptions({ headers: headers });
        this.http.get('http://rafao.us-west-2.elasticbeanstalk.com/api/allcity').map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response.data);
            _this.arr = response.data;
            console.log(_this.arr);
            //           console.log(this.data.city);
        });
    };
    NominatimapPage.prototype.city1 = function (cit) {
        console.log(cit);
        console.log(this.data.city);
    };
    NominatimapPage.prototype.ngOnInit = function () {
        // alert("neelanshi");
        //        this.nomi= JSON.parse(localStorage.getItem('NominatimDetail'))
        //    console.log(this.nomi);
        //    if(this.nomi !=null){
        //    console.log(this.nomi.lat);
        //    console.log(this.nomi.lon);
        //    this.acService = new google.maps.places.AutocompleteService();      
        //    this.infowindow = new google.maps.InfoWindow;  
        //    this.autocompleteItems = [];
        //    this.autocomplete = {
        //    query: ''
        //  };  
        //    }
        //    else{
        this.acService = new google.maps.places.AutocompleteService();
        this.infowindow = new google.maps.InfoWindow;
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    };
    NominatimapPage.prototype.lupapsearch = function () {
        var _this = this;
        console.log(this.autocomplete.query);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        var oldstr = this.autocomplete.query;
        var newstr = oldstr.toString().replace(/#/g, "%23");
        var newstr1 = newstr.toString().replace(/ /g, "%20");
        var newstr2 = newstr1.toString().replace(/–/g, "%2D");
        var newstr3 = newstr2.toString().replace(/./g, "%2E");
        console.log(newstr2);
        console.log(this.data.city);
        if (this.data.city == undefined) {
            this.ToastMsg('Select some city');
        }
        else {
            var postdata = {
                country_code: 'co',
                country_name: this.data.city,
                address: newstr2
            };
            console.log(postdata);
            var Serialized = this.serializeObj(postdata);
            this.http.post('http://rafao.us-west-2.elasticbeanstalk.com/api/home/address_geocoding', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                if (response) {
                    console.log(typeof (response));
                    console.log(response);
                    var ress = JSON.parse(response.data);
                    console.log(ress);
                    if (ress.message == 'Not available credits') {
                        _this.ToastMsg('Sorry! No Credits available');
                    }
                    if (ress.message == 'Result not found') {
                        _this.chooseItem();
                        //                    this.nomiapi();
                    }
                    else {
                        console.log(ress.response);
                        console.log(ress.response.type);
                        console.log(ress.response.properties.address);
                        _this.infocontent = ress.response.properties.address;
                        console.log(ress.response.geometry.coordinates);
                        _this.lats = ress.response.geometry.coordinates[1];
                        _this.longs = ress.response.geometry.coordinates[0];
                        console.log(_this.lats, _this.longs);
                        _this.description = ress.response.properties;
                        _this.autocompleteItems.push(_this.description);
                        console.log(_this.autocompleteItems);
                        _this.chooseItem1();
                    }
                }
            }, function (err) {
                _this.ToastMsg('Something went Wrong');
            });
        }
    };
    NominatimapPage.prototype.fav = function (auto) {
        var _this = this;
        var productid;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        console.log("place");
        console.log(auto);
        if (auto == '') {
            this.AlertMsg1('Select some address');
        }
        else if (this.iconname == 'star') {
            console.log('new');
            var alert1 = this.alertCtrl.create({
                title: 'RAFAHO',
                message: 'Remove from Favourite',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                        }
                    },
                    {
                        text: 'OK',
                        role: 'submit',
                        handler: function () {
                            _this.iconname = 'star-outline';
                            console.log(_this.appsetting.saved);
                            _this.appsetting.saved.pop(auto);
                            console.log(_this.appsetting.saved);
                            _this.userdetail = JSON.parse(localStorage.getItem('UserDetail'));
                            console.log(_this.userdetail);
                            for (var z = 0; z < _this.userdetail.favorite_address.length; z++) {
                                if (_this.userdetail.favorite_address[z].favorite_address == auto) {
                                    productid = _this.userdetail.favorite_address[z]._id;
                                }
                            }
                            var postdata1 = {
                                user_id: _this.userdetail._id,
                                favorite_address_id: productid
                            };
                            console.log(postdata1);
                            var Serialized = _this.serializeObj(postdata1);
                            _this.http.post(_this.appsetting.myGlobalVar + 'user/delete_favarite_address', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response1) {
                                console.log(response1);
                                if (response1.status == true) {
                                    localStorage.setItem('UserDetail', JSON.stringify(response1.data[0]));
                                }
                            });
                            localStorage.setItem('Favaddress', JSON.stringify(postdata1));
                            localStorage.setItem('Favaddress', JSON.stringify(_this.appsetting.saved));
                        }
                    }
                ]
            });
            alert1.present();
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'RAFAHO',
                message: 'Save this as favourite address?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                        }
                    },
                    {
                        text: 'OK',
                        role: 'submit',
                        handler: function () {
                            var citytosend;
                            switch (_this.data.city) {
                                case 'Bogota': {
                                    citytosend = 'Bogotá DC';
                                    break;
                                }
                                case 'cun_soacha': {
                                    citytosend = 'Soacha';
                                    break;
                                }
                                case 'cun_mosquera': {
                                    citytosend = ' Mosquera';
                                    break;
                                }
                                case 'cun_facatativa': {
                                    citytosend = 'Facatativá';
                                    break;
                                }
                                case 'cun_madrid': {
                                    citytosend = 'Madrid';
                                    break;
                                }
                                case 'cun_cajica': {
                                    citytosend = 'Cajicá';
                                    break;
                                }
                                case 'cun_sopo': {
                                    citytosend = 'Sopó';
                                    break;
                                }
                                case 'cun_tenjo': {
                                    citytosend = 'Tenjo';
                                    break;
                                }
                                case 'cun_tocancipa': {
                                    citytosend = 'Tocancipa';
                                    break;
                                }
                                case 'cun_guasca': {
                                    citytosend = 'Guasca';
                                    break;
                                }
                                case 'cun_anapoima': {
                                    citytosend = 'Anapoima';
                                    break;
                                }
                                case 'cun_villeta': {
                                    citytosend = 'Villeta';
                                    break;
                                }
                                case 'cun_la_vega': {
                                    citytosend = 'La Vega';
                                    break;
                                }
                                case 'cun_la_mesa': {
                                    citytosend = 'La Mesa';
                                    break;
                                }
                                default: {
                                    console.log('not found');
                                    //                   console.log(citiie[1])
                                }
                            }
                            console.log(_this.appsetting.saved);
                            if (citytosend == undefined) {
                                _this.ToastMsg('Select some city');
                            }
                            else {
                                _this.iconname = 'star';
                                console.log(_this.appsetting.saved);
                                _this.appsetting.saved.push(auto);
                                var postdata = {
                                    user_id: _this.userdetail._id,
                                    favorite_address: auto + ' ' + citytosend
                                };
                                console.log(postdata);
                                var Serialized = _this.serializeObj(postdata);
                                _this.http.post(_this.appsetting.myGlobalVar + 'user/add_favarite_address', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                                    console.log(response);
                                    if (response.status == true) {
                                        localStorage.setItem('UserDetail', JSON.stringify(response.data[0]));
                                    }
                                });
                                localStorage.setItem('Favaddress', JSON.stringify(postdata));
                                //        localStorage.setItem('Favaddress',JSON.stringify(this.appsetting.saved));
                            }
                        }
                    }
                ]
            });
            alert_1.present();
        }
        console.log(this.appsetting.saved);
        console.log(localStorage.getItem('Favaddress'));
    };
    NominatimapPage.prototype.AlertMsg1 = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        //            this.navCtrl.push(LocationPage);
                    }
                }
            ]
        });
        alert.present();
    };
    NominatimapPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    NominatimapPage.prototype.updateSearch = function () {
        delete this.crlat;
        delete this.crlng;
        console.log(this.autocomplete.query);
        if (this.autocomplete.query == '') {
            //enable the button
            this.isenabled = false;
        }
        else {
            this.isenabled = true;
        }
        console.log('modal > updateSearch');
        this.iconname = 'star-outline';
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            //    this.lupapsearch();
            return;
        }
        var matches = this.autocomplete.query.match(/\d+/g);
        console.log(matches);
        if (matches != null) {
            console.log('matched');
            this.number = true;
        }
        else {
            console.log('not matched');
            this.number = false;
        }
        //if(this.number == true){
        //    this.lupapsearch();
        //     this.omega = 1;
        //let self = this; 
        //    setTimeout(()=>{    //<<<---    using ()=> syntax
        //     let config = { 
        //    //types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
        //    input: this.autocomplete.query, 
        ////    componentRestrictions: {  } 
        //    componentRestrictions: {country: 'co'}
        //    }
        //    this.acService.getPlacePredictions(config, ((predictions, status)=> {
        //    console.log('modal > getPlacePredictions > status > ', status);
        //    if(status == 'ZERO_RESULTS'){
        //        
        //        this.lupapsearch();
        //        this.omega = 1;
        //         this.autocompleteItems = [];   
        //    }else{
        //      this.omega = 0;
        //    this.autocompleteItems = [];   
        //    console.log(predictions) 
        //    for(var e = 0; e<=1; e++){
        //     this.autocompleteItems.push(predictions[e]);
        //    }     
        //    console.log( this.autocompleteItems);   
        ////    predictions.forEach(((prediction)=> {   
        ////      console.log("abc")           
        ////    this.autocompleteItems.push(prediction);
        ////   
        ////    })
        ////   
        ////   );
        //    }
        //   // return false;
        //    })
        //    
        //   );
        //    this.number = true
        // },2000);
        //  }
        //  else{
        ////    this.lupapsearch();
        ////     this.omega = 1;
        //  }
        //else {
        //    this.nomiapi()
        //}
    };
    NominatimapPage.prototype.Searchlocation = function () {
        console.log(this.number);
        if (this.number == true) {
            this.lupapsearch();
        }
        else {
            this.nomiapi();
        }
    };
    NominatimapPage.prototype.nomiapi = function () {
        var _this = this;
        console.log('it  is not  having number');
        console.log('false');
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        if (this.autocomplete.query) {
            this.autocomplete.query = this.autocomplete.query.replace(/" "/g, '%20');
            console.log(this.autocomplete.query);
            var adr = this.autocomplete.query;
            console.log(adr);
            if (!this.number) {
                console.log('its hitting');
                this.http.post('https://nominatim.openstreetmap.org/search/' + adr + '?countrycodes=co&format=json&addressdetails=1&limit=1&polygon_svg=1', options).map(function (res) { return res.json(); }).subscribe(function (response) {
                    console.log(response[0]);
                    if ((response[0] == undefined)) {
                        _this.lupapsearch();
                        //            
                        //    let config = { 
                        //    //types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
                        //    input: this.autocomplete.query, 
                        ////    componentRestrictions: {  } 
                        ////    componentRestrictions: {country: 'co'}
                        //    }
                        //    this.acService.getPlacePredictions(config, ((predictions, status)=> {
                        //    console.log('modal > getPlacePredictions > status > ', status);
                        //    if(status == 'ZERO_RESULTS'){
                        //        
                        //       this.ToastMsg('Location not found')
                        //        this.omega = 1;
                        //         this.autocompleteItems = [];   
                        //    }else{
                        //      this.omega = 0;
                        //    this.autocompleteItems = [];   
                        //    console.log(predictions)         
                        //    predictions.forEach(((prediction)=> {   
                        //      console.log("abc")           
                        //    this.autocompleteItems.push(prediction);
                        //   
                        //    })
                        //   
                        //   ); }
                        //   // return false;
                        //    })
                        //    
                        //   );
                    }
                    else {
                        if (response[0] != undefined) {
                            if (response[0].place_id != '') {
                                console.log('working');
                                _this.autocompleteItems = [];
                                localStorage.setItem('NominatimDetail', JSON.stringify(response[0]));
                                console.log(response[0].address);
                                //        this.navCtrl.push(NominatimapPage);
                                //         let modal = this.modalCtrl.create(NominatimapPage);
                                //    modal.onDidDismiss(data => { 
                                //      this.AlertMsg4('Your Location has been saved')
                                //  });
                                //   modal.present();
                                ////   
                                if (response[0].address.mall) {
                                    _this.nomaddress = response[0].address.mall + ',' + response[0].address.city + ',' + response[0].address.postcode + ',' + response[0].address.state + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                }
                                if (response[0].address.road) {
                                    _this.nomaddress = response[0].address.road + ',' + response[0].address.city + ',' + response[0].address.postcode + ',' + response[0].address.state + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                }
                                else if (response[0].address.city) {
                                    _this.nomaddress = response[0].address.city + ',' + response[0].address.postcode + ',' + response[0].address.state + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                }
                                else if (response[0].address.state) {
                                    _this.nomaddress = response[0].address.state + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                }
                                else if (response[0].address.state_district) {
                                    _this.nomaddress = response[0].address.state + ',' + response[0].address.state_district + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                }
                                else if (response[0].address.country) {
                                    _this.nomaddress = response[0].address.country + ',' + response[0].address.country_code;
                                }
                                console.log(_this.nomaddress);
                                _this.omega = 2;
                                if (_this.number == false) {
                                    _this.autocompleteItems.push(_this.nomaddress);
                                    console.log(_this.autocompleteItems);
                                }
                                _this.lat = response[0].lat;
                                _this.long = response[0].lon;
                                console.log(_this.lat, _this.long);
                                _this.chooseItem2();
                            }
                        }
                        else {
                            console.log('neelanshi');
                            //         this.AlertMsg2('Empty response on Nominatim<br>Search via Google maps<br>');
                        }
                    }
                    //    else
                    //        {
                    //       this.AlertMsg1('Empty response on Nominatim<br>Search via Google maps<br>');
                    //        this.openmapmodal();
                    //    }
                });
            }
        }
        //}
    };
    NominatimapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapmodalPage');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        this.initMap();
    };
    NominatimapPage.prototype.ToastMsg = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    NominatimapPage.prototype.chooseItem1 = function () {
        var _this = this;
        this.number = true;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        this.glob_item = this.autocomplete.query;
        console.log(this.glob_item);
        //      this.data.city = '';
        //this.autocomplete.query = item.address;
        this.lat = this.lats;
        this.long = this.longs;
        this.map.setZoom(17);
        var c = this.map.setCenter(new google.maps.LatLng(this.lat, this.long));
        if (this.markers != '') {
            this.deleteMarkers();
            this.markers = [];
        }
        var latlng = new google.maps.LatLng(this.lat, this.long);
        console.log(this.lat, this.long);
        this.deleteMarkers();
        this.markers = [];
        console.log(this.markers);
        var marker = new google.maps.Marker({
            map: this.map,
            icon: 'assets/img/location.png',
            draggable: true,
            position: latlng
        });
        console.log(marker);
        this.markers.push(marker);
        this.map.setCenter(marker.getPosition());
        google.maps.event.addListener(marker, 'dragend', (function (marker31) {
            _this.iconname = 'star-outline';
            var latLng = marker31.latLng;
            _this.crlat = latLng.lat();
            _this.crlng = latLng.lng();
            console.log(_this.crlat);
            console.log(_this.crlng);
            //  alert(this.crlat);
            // alert(this.crlng);
            _this.markers = [];
            _this.markers.push(marker);
            var postdata = {
                lat: _this.crlat,
                long: _this.crlng,
            };
            var Serialized = _this.serializeObj(postdata);
            _this.http.post('  http://rafao.us-west-2.elasticbeanstalk.com/api/home/reverse_geocoding', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                var resso = JSON.parse(response.data);
                console.log(resso.response);
                if (response.data == 'Not available credits') {
                    _this.ToastMsg('Sorry! No Credits available');
                }
                //            console.log(resso.response.properties.address);
                if ((resso.response == undefined) || (response.data == '{"message":"Result not found"}') || (resso.response.properties.address == null)) {
                    //                console.log(resso.response.properties);
                    //                this.AlertMsg1('Sorry we cannot provide our services for this location')
                    //                 this.autocomplete.query= '';
                    var latLong = new google.maps.LatLng(_this.crlat, _this.crlng);
                    _this.geocoder.geocode({ 'latLng': latLng }, (function (results, status) {
                        console.log(results);
                        if (results == '') {
                            _this.ToastMsg('Invalid Location');
                            _this.autocomplete.query = 'Error';
                            _this.lat = '';
                            _this.long = '';
                            _this.infowindow.setContent('Error');
                            _this.infowindow.open(_this.map, marker);
                        }
                        else {
                            if (status == google.maps.GeocoderStatus.OK) {
                                if (results[0]) {
                                    _this.autocomplete.query = results[0].formatted_address;
                                    var citiie7 = results[0].formatted_address.split(',');
                                    var City = '';
                                    _this.data.city = '';
                                    console.log(citiie7[1]);
                                    _this.data.city = '';
                                    switch (citiie7[1]) {
                                        case ' Bogotá':
                                            _this.data.city = 'Bogota';
                                            break;
                                        case ' Bogota':
                                            _this.data.city = 'Bogota';
                                            break;
                                        case ' Soacha': {
                                            _this.data.city = 'cun_soacha';
                                            break;
                                        }
                                        case ' Mosquera': {
                                            _this.data.city = 'cun_mosquera';
                                            break;
                                        }
                                        case ' Facatativá': {
                                            _this.data.city = 'cun_facatativa';
                                            break;
                                        }
                                        case ' Madrid': {
                                            _this.data.city = 'cun_madrid';
                                            break;
                                        }
                                        case ' Cajicá': {
                                            _this.data.city = 'cun_cajica';
                                            break;
                                        }
                                        case ' Sopó': {
                                            _this.data.city = 'cun_sopo';
                                            break;
                                        }
                                        case ' Tenjo': {
                                            _this.data.city = 'cun_tenjo';
                                            break;
                                        }
                                        case ' Tocancipa': {
                                            _this.data.city = 'cun_tocancipa';
                                            break;
                                        }
                                        case ' Guasca': {
                                            _this.data.city = 'cun_guasca';
                                            break;
                                        }
                                        case ' Anapoima': {
                                            _this.data.city = 'cun_anapoima';
                                            break;
                                        }
                                        case ' Villeta': {
                                            _this.data.city = 'cun_villeta';
                                            break;
                                        }
                                        case ' La Vega': {
                                            _this.data.city = 'cun_la_vega';
                                            break;
                                        }
                                        case ' La Mesa': {
                                            _this.data.city = 'cun_la_mesa';
                                            break;
                                        }
                                        default: {
                                            console.log('not found');
                                            console.log(citiie7[1]);
                                            _this.ToastMsg('Sorry!! No service in this area');
                                        }
                                    }
                                    console.log(_this.data.city);
                                    //            this.data.city = citiie7;
                                    console.log(_this.autocomplete.query);
                                    _this.infowindow.setContent(results[0].formatted_address);
                                    _this.infowindow.open(_this.map, marker);
                                }
                            }
                        }
                    }));
                }
                else {
                    console.log(resso.response.message);
                    if (resso.response.message == "Result not found") {
                        _this.ToastMsg('Not found');
                        _this.lat = '';
                        _this.long = '';
                        _this.infowindow.setContent('Error');
                        _this.infowindow.open(_this.map, marker);
                    }
                    else {
                        var addr = resso.response.properties.address;
                        _this.autocomplete.query = addr;
                        if (resso.response.properties.city == 'bogota') {
                            resso.response.properties.city = resso.response.properties.city.charAt(0).toUpperCase() + resso.response.properties.city.slice(1);
                        }
                        _this.data.city = resso.response.properties.city;
                        console.log(_this.data.city);
                        console.log(_this.autocomplete.query);
                        //                   alert(addr);
                        _this.infowindow.setContent(addr);
                        _this.infowindow.open(_this.map, marker);
                    }
                }
            });
        }));
        this.infowindow.setContent(this.infocontent);
        this.infowindow.open(this.map, marker);
        console.log('hello');
        this.autocompleteItems = [];
    };
    NominatimapPage.prototype.chooseItem2 = function () {
        var _this = this;
        console.log(this.glob_item);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        var latlng = { lat: parseFloat(this.lat), lng: parseFloat(this.long) };
        console.log(latlng);
        this.geocoder.geocode({ 'location': latlng }, (function (results, status) {
            console.log(status);
            if (status === 'OK') {
                if (results[0]) {
                    console.log(results[0]);
                    if (_this.data.city == undefined) {
                        _this.data.city = 'Bogota';
                    }
                    console.log(_this.data.city);
                    _this.deleteMarkers();
                    _this.markers = [];
                    console.log(_this.markers);
                    _this.map.setZoom(17);
                    _this.map.setCenter(results[0].geometry.location);
                    _this.lat = results[0].geometry.location.lat();
                    _this.long = results[0].geometry.location.lng();
                    console.log(_this.lat, _this.long);
                    var marker = new google.maps.Marker({
                        map: _this.map,
                        draggable: true,
                        icon: 'assets/img/location.png',
                        position: results[0].geometry.location
                    });
                    _this.markers.push(marker);
                    _this.map.setCenter(marker.getPosition());
                    google.maps.event.addListener(marker, 'dragend', (function (marker21) {
                        _this.iconname = 'star-outline';
                        var latLng = marker21.latLng;
                        _this.crlat = latLng.lat();
                        _this.crlng = latLng.lng();
                        console.log(_this.crlat);
                        console.log(_this.crlng);
                        //  alert(this.crlat);
                        // alert(this.crlng);
                        _this.markers = [];
                        _this.markers.push(marker);
                        var latLong = new google.maps.LatLng(_this.crlat, _this.crlng);
                        var postdata = {
                            lat: _this.crlat,
                            long: _this.crlng
                        };
                        var Serialized = _this.serializeObj(postdata);
                        _this.http.post('  http://rafao.us-west-2.elasticbeanstalk.com/api/home/reverse_geocoding', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                            console.log(response.data == '{"message":"Result not found"}');
                            var resso = JSON.parse(response.data);
                            console.log(resso.response);
                            if (response.data == 'Not available credits') {
                                _this.ToastMsg('Sorry! No Credits available');
                            }
                            //            console.log(resso.response.properties.address);
                            if ((resso.response == undefined) || (response.data == '{"message":"Result not found"}' || (resso.response.properties.address == null))) {
                                _this.geocoder.geocode({ 'location': latLong }, (function (results, status) {
                                    console.log(results);
                                    if (results == '') {
                                        _this.ToastMsg('Invalid Location');
                                        _this.lat = '';
                                        _this.long = '';
                                        _this.infowindow.setContent('Error');
                                        _this.infowindow.open(_this.map, marker);
                                    }
                                    else {
                                        if (status == google.maps.GeocoderStatus.OK) {
                                            if (results[0]) {
                                                console.log(results[0].place_id);
                                                _this.autocomplete.query = results[1].formatted_address;
                                                var citiie4 = results[0].formatted_address.split(',');
                                                var City = '';
                                                _this.data.city = '';
                                                console.log(citiie4[1]);
                                                switch (citiie4[1]) {
                                                    case ' Bogotá':
                                                        _this.data.city = 'Bogota';
                                                        break;
                                                    case ' Bogota':
                                                        _this.data.city = 'Bogota';
                                                        break;
                                                    case ' Soacha': {
                                                        _this.data.city = 'cun_soacha';
                                                        break;
                                                    }
                                                    case ' Mosquera': {
                                                        _this.data.city = 'cun_mosquera';
                                                        break;
                                                    }
                                                    case ' Facatativá': {
                                                        _this.data.city = 'cun_facatativa';
                                                        break;
                                                    }
                                                    case ' Madrid': {
                                                        _this.data.city = 'cun_madrid';
                                                        break;
                                                    }
                                                    case ' Cajicá': {
                                                        _this.data.city = 'cun_cajica';
                                                        break;
                                                    }
                                                    case ' Sopó': {
                                                        _this.data.city = 'cun_sopo';
                                                        break;
                                                    }
                                                    case ' Tenjo': {
                                                        _this.data.city = 'cun_tenjo';
                                                        break;
                                                    }
                                                    case ' Tocancipa': {
                                                        _this.data.city = 'cun_tocancipa';
                                                        break;
                                                    }
                                                    case ' Guasca': {
                                                        _this.data.city = 'cun_guasca';
                                                        break;
                                                    }
                                                    case ' Anapoima': {
                                                        _this.data.city = 'cun_anapoima';
                                                        break;
                                                    }
                                                    case ' Villeta': {
                                                        _this.data.city = 'cun_villeta';
                                                        break;
                                                    }
                                                    case ' La Vega': {
                                                        _this.data.city = 'cun_la_vega';
                                                        break;
                                                    }
                                                    case ' La Mesa': {
                                                        _this.data.city = 'cun_la_mesa';
                                                        break;
                                                    }
                                                    default: {
                                                        console.log('not found');
                                                        console.log(citiie4[1]);
                                                        _this.ToastMsg('Sorry!! No service in this area');
                                                    }
                                                }
                                                console.log(_this.data.city);
                                                //            this.data.city = citiie4;
                                                console.log(_this.autocomplete.query);
                                                //          this.infowindow=new google.maps.InfoWindow({
                                                //              content: results[1].formatted_address,
                                                //          }); 
                                                _this.infowindow.setContent(results[0].formatted_address);
                                                _this.infowindow.open(_this.map, marker);
                                            }
                                            else if (results[1]) {
                                                console.log(results[1].place_id);
                                                _this.autocomplete.query = results[1].formatted_address;
                                                var citiie5 = results[1].formatted_address.split(',');
                                                var City = '';
                                                _this.data.city = '';
                                                console.log(citiie5[1]);
                                                switch (citiie5[1]) {
                                                    case ' Bogotá':
                                                        _this.data.city = 'Bogota';
                                                        break;
                                                    case ' Bogota':
                                                        _this.data.city = 'Bogota';
                                                        break;
                                                    case ' Soacha': {
                                                        _this.data.city = 'cun_soacha';
                                                        break;
                                                    }
                                                    case ' Mosquera': {
                                                        _this.data.city = 'cun_mosquera';
                                                        break;
                                                    }
                                                    case ' Facatativá': {
                                                        _this.data.city = 'cun_facatativa';
                                                        break;
                                                    }
                                                    case ' Madrid': {
                                                        _this.data.city = 'cun_madrid';
                                                        break;
                                                    }
                                                    case ' Cajicá': {
                                                        _this.data.city = 'cun_cajica';
                                                        break;
                                                    }
                                                    case ' Sopó': {
                                                        _this.data.city = 'cun_sopo';
                                                        break;
                                                    }
                                                    case ' Tenjo': {
                                                        _this.data.city = 'cun_tenjo';
                                                        break;
                                                    }
                                                    case ' Tocancipa': {
                                                        _this.data.city = 'cun_tocancipa';
                                                        break;
                                                    }
                                                    case ' Guasca': {
                                                        _this.data.city = 'cun_guasca';
                                                        break;
                                                    }
                                                    case ' Anapoima': {
                                                        _this.data.city = 'cun_anapoima';
                                                        break;
                                                    }
                                                    case ' Villeta': {
                                                        _this.data.city = 'cun_villeta';
                                                        break;
                                                    }
                                                    case ' La Vega': {
                                                        _this.data.city = 'cun_la_vega';
                                                        break;
                                                    }
                                                    case ' La Mesa': {
                                                        _this.data.city = 'cun_la_mesa';
                                                        break;
                                                    }
                                                    default: {
                                                        console.log('not found');
                                                        console.log(citiie5[1]);
                                                        _this.ToastMsg('Sorry!! No service in this area');
                                                    }
                                                }
                                                console.log(_this.data.city);
                                                //            this.data.city = citiie5;
                                                console.log(_this.autocomplete.query);
                                                //          this.infowindow=new google.maps.InfoWindow({
                                                //              content: results[1].formatted_address,
                                                //          }); 
                                                _this.infowindow.setContent(results[1].formatted_address);
                                                _this.infowindow.open(_this.map, marker);
                                            }
                                        }
                                    }
                                }));
                            }
                            else {
                                var resso = JSON.parse(response.data);
                                console.log(resso.response.message);
                                if (resso.response.message == "Result not found") {
                                    _this.ToastMsg('Not found');
                                    _this.lat = '';
                                    _this.long = '';
                                    _this.infowindow.setContent('Error');
                                    _this.infowindow.open(_this.map, marker);
                                }
                                else {
                                    var addr = resso.response.properties.address;
                                    console.log(resso.response);
                                    _this.autocomplete.query = addr;
                                    if (resso.response.properties.city == 'bogota') {
                                        resso.response.properties.city = resso.response.properties.city.charAt(0).toUpperCase() + resso.response.properties.city.slice(1);
                                    }
                                    _this.data.city = resso.response.properties.city;
                                    console.log(_this.data.city);
                                    console.log(_this.autocomplete.query);
                                    //                   alert(addr);
                                    _this.infowindow.setContent(addr);
                                    _this.infowindow.open(_this.map, marker);
                                }
                            }
                        });
                    }));
                    console.log('hello');
                    _this.infowindow.setContent(results[0].formatted_address);
                    _this.infowindow.open(_this.map, marker);
                    _this.nativeGeocoder.forwardGeocode(results[0].formatted_address)
                        .then(function (coordinates) {
                        console.log('The coordinates are latitude=' + coordinates.latitude + ' and longitude=' + coordinates.longitude);
                        _this.lat = coordinates.latitude;
                        _this.long = coordinates.longitude;
                        console.log(_this.lat + ' ' + _this.long);
                    })
                        .catch(function (error) { return console.log(error); });
                }
            }
        }));
        this.autocompleteItems = [];
    };
    NominatimapPage.prototype.getItem = function (item) {
        console.log(item);
        //     if(this.autocomplete.query){
        //         console.log('google');
        ////          this.autocomplete.query=item.description;
        ////          this.glob_item = item;
        //          this.autocompleteItems = [];
        //          console.log(this.autocompleteItems)
        ////          this.chooseItem(item);
        //     }
        //     else 
        if (item.address) {
            console.log('lupap');
            this.glob_item = item;
            this.autocomplete.query = item.address;
            this.autocompleteItems = [];
            console.log(this.autocompleteItems);
        }
        else {
            //      this.chooseItem2(item);
            console.log('nomi');
            console.log('else part');
            this.glob_item = item;
            this.autocomplete.query = item;
            this.autocompleteItems = [];
            console.log(this.autocompleteItems);
        }
    };
    NominatimapPage.prototype.chooseItem = function () {
        var _this = this;
        var ccitytosend;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        this.glob_item = this.autocomplete.query;
        this.number = true;
        this.lat = '';
        this.long = '';
        console.log(this.glob_item);
        console.log(this.data.city);
        switch (this.data.city) {
            case 'Bogota': {
                ccitytosend = 'Bogotá DC';
                break;
            }
            case 'cun_soacha': {
                ccitytosend = 'Soacha';
                break;
            }
            case 'cun_mosquera': {
                ccitytosend = ' Mosquera';
                break;
            }
            case 'cun_facatativa': {
                ccitytosend = 'Facatativá';
                break;
            }
            case 'cun_madrid': {
                ccitytosend = 'Madrid';
                break;
            }
            case 'cun_cajica': {
                ccitytosend = 'Cajicá';
                break;
            }
            case 'cun_sopo': {
                ccitytosend = 'Sopó';
                break;
            }
            case 'cun_tenjo': {
                ccitytosend = 'Tenjo';
                break;
            }
            case 'cun_tocancipa': {
                ccitytosend = 'Tocancipa';
                break;
            }
            case 'cun_guasca': {
                ccitytosend = 'Guasca';
                break;
            }
            case 'cun_anapoima': {
                ccitytosend = 'Anapoima';
                break;
            }
            case 'cun_villeta': {
                ccitytosend = 'Villeta';
                break;
            }
            case 'cun_la_vega': {
                ccitytosend = 'La Vega';
                break;
            }
            case 'cun_la_mesa': {
                ccitytosend = 'La Mesa';
                break;
            }
            default: {
                console.log('not found');
                //                   console.log(citiie[1])
            }
        }
        if (ccitytosend == undefined) {
            this.ToastMsg('Select some city');
        }
        else {
            this.http.get('https://maps.googleapis.com/maps/api/geocode/json?components=locality:' + this.glob_item + '|administrative_area:' + ccitytosend + '|country:Colombia&key=AIzaSyA1DlP6ydTPDHSNBT_99W80TjfSGEcthhE', options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                // this.autocomplete.query=item.description;
                //    if (this.glob_item.terms[2].value == 'Bogota'){
                //        this.data.city = 'Bogota';
                //    }
                //    console.log(this.glob_item.lat)
                //     console.log(this.glob_item.lng)
                //    this.geocoder.geocode({'placeId': this.glob_item}, ((results, status)=>{
                if (response.status === 'OK') {
                    if (response.results[0]) {
                        console.log(response.results[0]);
                        _this.map.setZoom(17);
                        _this.map.setCenter(response.results[0].geometry.location);
                        _this.lat = response.results[0].geometry.location.lat;
                        _this.long = response.results[0].geometry.location.lng;
                        console.log(_this.lat, _this.long);
                        _this.deleteMarkers();
                        _this.markers = [];
                        console.log(_this.markers);
                        var marker = new google.maps.Marker({
                            map: _this.map,
                            draggable: true,
                            icon: 'assets/img/location.png',
                            position: response.results[0].geometry.location
                        });
                        _this.markers.push(marker);
                        _this.map.setCenter(marker.getPosition());
                        google.maps.event.addListener(marker, 'dragend', (function (marker21) {
                            _this.iconname = 'star-outline';
                            var latLng = marker21.latLng;
                            _this.crlat = latLng.lat();
                            _this.crlng = latLng.lng();
                            console.log(_this.crlat);
                            console.log(_this.crlng);
                            //  alert(this.crlat);
                            // alert(this.crlng);
                            _this.markers = [];
                            _this.markers.push(marker);
                            var latLong = new google.maps.LatLng(_this.crlat, _this.crlng);
                            var postdata = {
                                lat: _this.crlat,
                                long: _this.crlng
                            };
                            var Serialized = _this.serializeObj(postdata);
                            _this.http.post('  http://rafao.us-west-2.elasticbeanstalk.com/api/home/reverse_geocoding', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                                console.log(response.data == '{"message":"Result not found"}');
                                var resso = JSON.parse(response.data);
                                console.log(resso.response);
                                if (response.data == 'Not available credits') {
                                    _this.ToastMsg('Sorry! No Credits available');
                                }
                                //            console.log(resso.response.properties.address);
                                if ((resso.response == undefined) || (resso.response.properties.address == null) || (response.data == '{"message":"Result not found"}')) {
                                    _this.geocoder.geocode({ 'location': latLong }, (function (results, status) {
                                        console.log(results);
                                        if (results == '') {
                                            _this.ToastMsg('Invalid Location');
                                            _this.lat = '';
                                            _this.long = '';
                                            _this.infowindow.setContent('Error');
                                            _this.infowindow.open(_this.map, marker);
                                        }
                                        else {
                                            if (status == google.maps.GeocoderStatus.OK) {
                                                if (results[0]) {
                                                    console.log(results[0].place_id);
                                                    _this.autocomplete.query = results[0].formatted_address;
                                                    console.log(_this.autocomplete.query);
                                                    var citiie = results[0].formatted_address.split(',');
                                                    var City = '';
                                                    _this.data.city = '';
                                                    console.log(citiie[1]);
                                                    switch (citiie[1]) {
                                                        case ' Bogotá':
                                                            _this.data.city = 'Bogota';
                                                            break;
                                                        case ' Bogota':
                                                            _this.data.city = 'Bogota';
                                                            break;
                                                        case ' Soacha': {
                                                            _this.data.city = 'cun_soacha';
                                                            break;
                                                        }
                                                        case ' Mosquera': {
                                                            _this.data.city = 'cun_mosquera';
                                                            break;
                                                        }
                                                        case ' Facatativá': {
                                                            _this.data.city = 'cun_facatativa';
                                                            break;
                                                        }
                                                        case ' Madrid': {
                                                            _this.data.city = 'cun_madrid';
                                                            break;
                                                        }
                                                        case ' Cajicá': {
                                                            _this.data.city = 'cun_cajica';
                                                            break;
                                                        }
                                                        case ' Sopó': {
                                                            _this.data.city = 'cun_sopo';
                                                            break;
                                                        }
                                                        case ' Tenjo': {
                                                            _this.data.city = 'cun_tenjo';
                                                            break;
                                                        }
                                                        case ' Tocancipa': {
                                                            _this.data.city = 'cun_tocancipa';
                                                            break;
                                                        }
                                                        case ' Guasca': {
                                                            _this.data.city = 'cun_guasca';
                                                            break;
                                                        }
                                                        case ' Anapoima': {
                                                            _this.data.city = 'cun_anapoima';
                                                            break;
                                                        }
                                                        case ' Villeta': {
                                                            _this.data.city = 'cun_villeta';
                                                            break;
                                                        }
                                                        case ' La Vega': {
                                                            _this.data.city = 'cun_la_vega';
                                                            break;
                                                        }
                                                        case ' La Mesa': {
                                                            _this.data.city = 'cun_la_mesa';
                                                            break;
                                                        }
                                                        default: {
                                                            console.log('not found');
                                                            console.log(citiie[1]);
                                                            _this.ToastMsg('Sorry!! No service in this area');
                                                        }
                                                    }
                                                    //          this.infowindow=new google.maps.InfoWindow({
                                                    //              content: results[1].formatted_address,
                                                    //          }); 
                                                    _this.infowindow.setContent(results[0].formatted_address);
                                                    _this.infowindow.open(_this.map, marker);
                                                }
                                                else if (results[1]) {
                                                    console.log(results[1].place_id);
                                                    _this.autocomplete.query = results[1].formatted_address;
                                                    var citiie = results[1].formatted_address.split(',');
                                                    var City = '';
                                                    _this.data.city = '';
                                                    switch (citiie[1]) {
                                                        case ' Bogotá':
                                                            _this.data.city = 'Bogota';
                                                            break;
                                                        case ' Bogota':
                                                            _this.data.city = 'Bogota';
                                                            break;
                                                        case ' Soacha': {
                                                            _this.data.city = 'cun_soacha';
                                                            break;
                                                        }
                                                        case ' Mosquera': {
                                                            _this.data.city = 'cun_mosquera';
                                                            break;
                                                        }
                                                        case ' Facatativá': {
                                                            _this.data.city = 'cun_facatativa';
                                                            break;
                                                        }
                                                        case ' Madrid': {
                                                            _this.data.city = 'cun_madrid';
                                                            break;
                                                        }
                                                        case ' Cajicá': {
                                                            _this.data.city = 'cun_cajica';
                                                            break;
                                                        }
                                                        case ' Sopó': {
                                                            _this.data.city = 'cun_sopo';
                                                            break;
                                                        }
                                                        case ' Tenjo': {
                                                            _this.data.city = 'cun_tenjo';
                                                            break;
                                                        }
                                                        case ' Tocancipa': {
                                                            _this.data.city = 'cun_tocancipa';
                                                            break;
                                                        }
                                                        case ' Guasca': {
                                                            _this.data.city = 'cun_guasca';
                                                            break;
                                                        }
                                                        case ' Anapoima': {
                                                            _this.data.city = 'cun_anapoima';
                                                            break;
                                                        }
                                                        case ' Villeta': {
                                                            _this.data.city = 'cun_villeta';
                                                            break;
                                                        }
                                                        case ' La Vega': {
                                                            _this.data.city = 'cun_la_vega';
                                                            break;
                                                        }
                                                        case ' La Mesa': {
                                                            _this.data.city = 'cun_la_mesa';
                                                            break;
                                                        }
                                                        default: {
                                                            console.log('not found');
                                                            console.log(citiie[1]);
                                                            _this.ToastMsg('Sorry!! No service in this area');
                                                        }
                                                    }
                                                    console.log(_this.data.city);
                                                    //            this.data.city = citiie ;
                                                    console.log(_this.autocomplete.query);
                                                    //          this.infowindow=new google.maps.InfoWindow({
                                                    //              content: results[1].formatted_address,
                                                    //          }); 
                                                    _this.infowindow.setContent(results[1].formatted_address);
                                                    _this.infowindow.open(_this.map, marker);
                                                    _this.goglat = _this.crlat;
                                                    _this.goglong = _this.crlng;
                                                }
                                            }
                                        }
                                    }));
                                }
                                else {
                                    var resso = JSON.parse(response.data);
                                    console.log(resso.response.message);
                                    if (resso.response.message == "Result not found") {
                                        _this.ToastMsg('Not found');
                                        _this.lat = '';
                                        _this.long = '';
                                        _this.infowindow.setContent('Error');
                                        _this.infowindow.open(_this.map, marker);
                                    }
                                    else {
                                        var addr = resso.response.properties.address;
                                        console.log(resso.response);
                                        _this.autocomplete.query = addr;
                                        if (resso.response.properties.city == 'bogota') {
                                            resso.response.properties.city = resso.response.properties.city.charAt(0).toUpperCase() + resso.response.properties.city.slice(1);
                                        }
                                        _this.data.city = resso.response.properties.city;
                                        console.log(_this.data.city);
                                        console.log(_this.autocomplete.query);
                                        //                   alert(addr)
                                        _this.infowindow.setContent(addr);
                                        _this.infowindow.open(_this.map, marker);
                                        _this.goglat = _this.crlat;
                                        _this.goglong = _this.crlng;
                                    }
                                }
                            });
                        }));
                        console.log('hello');
                        _this.infowindow.setContent(response.results[0].formatted_address);
                        _this.infowindow.open(_this.map, marker);
                        _this.nativeGeocoder.forwardGeocode(response.results[0].formatted_address)
                            .then(function (coordinates) {
                            console.log('The coordinates are latitude=' + coordinates.latitude + ' and longitude=' + coordinates.longitude);
                            _this.goglat = coordinates.latitude;
                            _this.goglong = coordinates.longitude;
                            console.log(_this.goglat + ' ' + _this.goglong);
                        })
                            .catch(function (error) { return console.log(error); });
                    }
                }
                else {
                    _this.nomiapi();
                }
            });
        }
        this.autocompleteItems = [];
    };
    NominatimapPage.prototype.clsmodel = function () {
        this.viewCtrl.dismiss();
    };
    NominatimapPage.prototype.closeModal = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        this.userdetail = JSON.parse(localStorage.getItem('UserDetail'));
        console.log(this.data.additional);
        if (this.data.additional == undefined) {
            this.data.additional = '';
        }
        //   if(this.data.city == undefined){
        //       this.data.city = '';
        //   }
        console.log(this.autocomplete.query);
        if ((this.lat == '') && (this.long == '')) {
            this.ToastMsg('Nothing is saved');
        }
        else {
            var citytosend;
            switch (this.data.city) {
                case 'Bogota': {
                    citytosend = 'Bogotá DC';
                    break;
                }
                case 'cun_soacha': {
                    citytosend = 'Soacha';
                    break;
                }
                case 'cun_mosquera': {
                    citytosend = ' Mosquera';
                    break;
                }
                case 'cun_facatativa': {
                    citytosend = 'Facatativá';
                    break;
                }
                case 'cun_madrid': {
                    citytosend = 'Madrid';
                    break;
                }
                case 'cun_cajica': {
                    citytosend = 'Cajicá';
                    break;
                }
                case 'cun_sopo': {
                    citytosend = 'Sopó';
                    break;
                }
                case 'cun_tenjo': {
                    citytosend = 'Tenjo';
                    break;
                }
                case 'cun_tocancipa': {
                    citytosend = 'Tocancipa';
                    break;
                }
                case 'cun_guasca': {
                    citytosend = 'Guasca';
                    break;
                }
                case 'cun_anapoima': {
                    citytosend = 'Anapoima';
                    break;
                }
                case 'cun_villeta': {
                    citytosend = 'Villeta';
                    break;
                }
                case 'cun_la_vega': {
                    citytosend = 'La Vega';
                    break;
                }
                case 'cun_la_mesa': {
                    citytosend = 'La Mesa';
                    break;
                }
                default: {
                    console.log('not found');
                    //                   console.log(citiie[1])
                }
            }
            if (citytosend == undefined) {
                this.ToastMsg('Select some city');
            }
            else {
                if ((this.goglat) && (this.goglong)) {
                    this.lat = this.goglat;
                    this.long = this.goglong;
                    console.log('google');
                }
                else {
                    this.lat = this.lat;
                    this.long = this.long;
                    console.log('nomi');
                }
                //       var postdata2 = {
                //            user_id: this.userdetail._id,
                //            saved_address: this.autocomplete.query +' '+ citytosend
                //       }
                //       
                //          console.log(postdata2)
                //           var Serialized = this.serializeObj(postdata2);
                //            this.http.post(this.appsetting.myGlobalVar + 'user/add_saved_address', Serialized, options).map(res => res.json()).subscribe(response2 => {
                //                console.log(response2);
                //                if(response2.status == true){
                //                 localStorage.setItem('UserDetail',JSON.stringify(response2.data[0]));
                //                 }
                //            })    
                this.viewCtrl.dismiss({
                    address: this.data.additional + ' ' + this.autocomplete.query + '   ' + citytosend,
                    lati: this.lat,
                    longi: this.long
                });
            }
        }
    };
    NominatimapPage.prototype.clearMarkers = function () {
        console.log('clear');
        this.setMapOnAll(null);
    };
    NominatimapPage.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
        console.log(this.markers);
        console.log('setmap');
    };
    NominatimapPage.prototype.deleteMarkers = function () {
        console.log('delete');
        this.clearMarkers();
        this.markers = [];
    };
    return NominatimapPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], NominatimapPage.prototype, "mapElement", void 0);
NominatimapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-nominatimap',template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\nominatimap\nominatimap.html"*/'<!--\n  Generated template for the NominatimapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <!--<ion-buttons start (click)="dismiss()">\n      <button ion-button icon-only>\n        \n      </button>\n    </ion-buttons>-->\n\n    <ion-title></ion-title>\n    \n    <ion-buttons end (click)="closeModal()">\n        <button clear ion-button>Save</button>\n    </ion-buttons>\n      <ion-buttons start (click)="clsmodel()">\n        <button clear ion-button>Cancel</button>\n    </ion-buttons>\n  </ion-navbar>\n   <ion-toolbar class="toolbar_top" style="padding: 0 7px 0px 7px; background: #fff; min-height: auto; padding-top: 10px;">\n     <ion-select  placeholder="Select city" style=" max-width: 100%; background: #fff; padding: 8px 10px; margin-bottom: 3px;" id="cittt" [(ngModel)]="data.city" name="city" #city="ngModel" (ionChange)="city1(data.city)"  required>\n  <ion-option value="Bogota" selected>Bogotá DC, Bogotá DC</ion-option>\n  <ion-option value="cun_soacha">Soacha, Cundinamarca</ion-option>\n  <ion-option value="cun_mosquera"> Mosquera, Cundinamarca</ion-option>\n  <ion-option value="cun_madrid">Madrid, Cundinamarca</ion-option>\n  <ion-option value="cun_cajica">Cajicá, Cundinamarca</ion-option>\n  <ion-option value="cun_sopo">Sopó, Cundinamarca</ion-option>\n  <ion-option value="cun_facatativa">Facatativá, Cundinamarca</ion-option>\n  <ion-option value="cun_tenjo">Tenjo,Cundinamarca</ion-option>\n  <ion-option value="cun_tocancipa">Tocancipa, Cundinamarca</ion-option>\n  <ion-option value="cun_guasca">Guasca, Cundinamarca</ion-option>\n  <ion-option value="cun_anapoima">Anapoima, Cundinamarca</ion-option>\n  <ion-option value="cun_villeta">Villeta, Cundinamarca</ion-option>\n  <ion-option value="cun_la_vega">La Vega, Cundinamarca</ion-option>\n  <ion-option value="cun_la_mesa">La Mesa, Cundinamarca</ion-option>\n</ion-select>\n   </ion-toolbar>\n\n<div class="searchouter">\n<ion-searchbar \n   [(ngModel)]="autocomplete.query" \n   [showCancelButton]="true" \n   (ionInput)="updateSearch()" \n   (ionCancel)="dismiss()"\n   placeholder="Start typing and select ..." required>\n </ion-searchbar>\n<!--    <button class="favbtn" (click)="fav(autocomplete.query)" ion-button icon-only>\n<ion-icon name="{{iconname}}" ></ion-icon>\n</button>-->\n    \n<!--     <ion-list class="listitm" style="margin:0 !important; padding:0;" *ngIf="omega == 0">\n      <ion-item *ngFor="let item of autocompleteItems;let i = index"\n      (click)="getItem(item)"  >\n     <span > {{ item.description }}</span>\n      </ion-item>\n      </ion-list> \n    <ion-list *ngIf="omega == 1;let i = index">\n      <ion-item *ngFor="let item of autocompleteItems" \n      (click)="getItem(item)">\n      {{ item.address }}\n      </ion-item>\n      </ion-list> \n     <ion-list *ngIf="omega == 2">\n      <ion-item *ngFor="let item of autocompleteItems" \n      (click)="getItem(item)">\n      {{ item }}\n      </ion-item>\n      </ion-list>-->\n</div>\n    \n<ion-toolbar class="toolbar_top" style="padding: 0 7px 7px 7px; background: #fff;">\n\n    \n<!--<ion-select  placeholder="Select city" style=" max-width: 100%; background: #fff; padding: 8px 10px; margin-bottom: 3px;"  [(ngModel)]="data.city" name="city" #city="ngModel" (ionChange)="city1(data.city)"  required>\n    <ion-option *ngFor="let cit of arr" [value]="cit.city_code" name="hh">{{cit.city}},{{cit?.state}}</ion-option>\n</ion-select>-->\n   \n\n\n<ion-input type="text" placeholder=\'Additional Address Details\' [(ngModel)]="data.additional" name="additional" #additional="ngModel"  ></ion-input>\n\n    <!--<button ion-button full color="theme-header" *ngIf="omega == 0" (click)="chooseItem()" [disabled]="!isenabled">Search</button>-->\n     <button ion-button full color="theme-header" (click)="Searchlocation()" [disabled]="!isenabled">Search</button>\n      <!--<button ion-button full color="theme-header" *ngIf="omega == 2" (click)="chooseItem2()" [disabled]="!isenabled" >Search</button>-->\n</ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n\n<!--    <ion-icon name="star" (click)="fav(autocomplete.query)">Add favourite</ion-icon>\n    <ion-item>\n      </ion-item>-->\n   \n    \n        \n<div #map id="map"></div>\n   \n    <!--<button ion-button (click)="saveaddress">Save Location</button>-->\n</ion-content>\n'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\nominatimap\nominatimap.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], NominatimapPage);

//# sourceMappingURL=nominatimap.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rating_rating__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(8);
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
 * Generated class for the ReviewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReviewsPage = (function () {
    function ReviewsPage(navCtrl, navParams, modalCtrl, appsetting, platform, http, loadingCtrl, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.appsetting = appsetting;
        this.platform = platform;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.details = [];
        this.chefid = [];
        this.userid = [];
        this.starone = 'star-outline';
        this.startwo = 'star-outline';
        this.starthree = 'star-outline';
        this.starfour = 'star-outline';
        this.starfive = 'star-outline';
        this.getdata();
    }
    ReviewsPage.prototype.getdata = function () {
        var _this = this;
        var temp = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
        this.userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
        if (localStorage.getItem('Chefdetail')) {
            this.chefid = JSON.parse(localStorage.getItem('Chefdetail'));
            console.log(this.chefid);
        }
        var postdata = {
            chef_id: this.chefid._id,
            page: 1
        };
        console.log(postdata);
        var Serialized = this.serializeObj(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'user/get_comment_and_rating', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.status == true) {
                _this.details = response.data;
                _this.totalreviews = _this.details.length;
                console.log(response.average_rating);
                response.average_rating = Number((response.average_rating).toFixed(1));
                console.log(response.average_rating);
                var Loading = _this.loadingCtrl.create({
                    spinner: 'bubbles',
                    cssClass: 'loader',
                    content: "Loading",
                    dismissOnPageChange: true
                });
                Loading.present().then(function () {
                    if (response.average_rating == 1) {
                        _this.starone = 'star';
                    }
                    else if (response.average_rating == 2) {
                        _this.starone = 'star';
                        _this.startwo = 'star';
                    }
                    else if (response.average_rating == 3) {
                        _this.starone = 'star';
                        _this.startwo = 'star';
                        _this.starthree = 'star';
                    }
                    else if (response.average_rating == 4) {
                        _this.starone = 'star';
                        _this.startwo = 'star';
                        _this.starthree = 'star';
                        _this.starfour = 'star';
                    }
                    else if (response.average_rating == 5) {
                        _this.starone = 'star';
                        _this.startwo = 'star';
                        _this.starthree = 'star';
                        _this.starfour = 'star';
                        _this.starfive = 'star';
                    }
                    else if ((1.1 <= response.average_rating) && (response.average_rating <= 1.5)) {
                        _this.starone = 'star-half';
                    }
                    else if ((1.6 <= response.average_rating) && (response.average_rating <= 1.9)) {
                        _this.starone = 'star';
                        _this.startwo = 'star';
                    }
                    else if ((2.1 <= response.average_rating) && (response.average_rating <= 2.5)) {
                        _this.starone = 'star';
                        _this.startwo = 'star';
                        _this.starthree = 'star-half';
                    }
                    else if ((2.6 <= response.average_rating) && (response.average_rating <= 2.9)) {
                        _this.starone = 'star';
                        _this.startwo = 'star';
                        _this.starthree = 'star';
                    }
                    else if ((3.1 <= response.average_rating) && (response.average_rating <= 3.5)) {
                        _this.starone = 'star';
                        _this.startwo = 'star';
                        _this.starthree = 'star';
                        _this.starfour = 'star-half';
                    }
                    else if ((3.6 <= response.average_rating) && (response.average_rating <= 3.9)) {
                        _this.starone = 'star';
                        _this.startwo = 'star';
                        _this.starthree = 'star';
                        _this.starfour = 'star';
                    }
                    else if ((4.1 <= response.average_rating) && (response.average_rating <= 4.5)) {
                        _this.starone = 'star';
                        _this.startwo = 'star';
                        _this.starthree = 'star';
                        _this.starfour = 'star-half';
                    }
                    else if ((4.6 <= response.average_rating) && (response.average_rating <= 4.9)) {
                        _this.starone = 'star';
                        _this.startwo = 'star';
                        _this.starthree = 'star';
                        _this.starfour = 'star';
                        _this.starfive = 'star';
                    }
                    Loading.dismiss();
                });
                _this.details.forEach(function (value, key) {
                    temp.chefid.products.forEach(function (value1, key1) {
                        var _this = this;
                        var usernameid = value.user_id;
                        console.log(usernameid);
                        var postdata1 = {
                            id: usernameid
                        };
                        var serialized = temp.serializeObj(postdata1);
                        temp.http.post(temp.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (res) {
                            console.log(res);
                            console.log(value);
                            value.username = res.data.firstname,
                                value.picture = value1.product_image0;
                            if (value.rating == 1) {
                                _this.starrone = 'star';
                            }
                            else if (value.rating == 2) {
                                value.starrone = 'star';
                                value.starrtwo = 'star';
                                value.starrthree = 'star-outline';
                                value.starrfour = 'star-outline';
                                value.starrfive = 'star-outline';
                            }
                            else if (value.rating == 3) {
                                value.starrone = 'star';
                                value.starrtwo = 'star';
                                value.starrthree = 'star';
                                value.starrfour = 'star-outline';
                                value.starrfive = 'star-outline';
                            }
                            else if (value.rating == 4) {
                                value.starrone = 'star';
                                value.starrtwo = 'star';
                                value.starrthree = 'star';
                                value.starrfour = 'star';
                                value.starrfive = 'star-outline';
                            }
                            else if (value.rating == 5) {
                                value.starrone = 'star';
                                value.starrtwo = 'star';
                                value.starrthree = 'star';
                                value.starrfour = 'star';
                                value.starrfive = 'star';
                            }
                            else if (value.rating == 1.5) {
                                _this.starrone = 'star';
                                value.starrone = 'star-half';
                                value.starrtwo = 'star-outline';
                                value.starrthree = 'star-outline';
                                value.starrfour = 'star-outline';
                                value.starrfive = 'star-outline';
                            }
                            else if (value.rating == 2.5) {
                                value.starrone = 'star';
                                value.starrtwo = 'star';
                                value.starrthree = 'star-half';
                                value.starrfour = 'star-outline';
                                value.starrfive = 'star-outline';
                            }
                            else if (value.rating == 3.5) {
                                value.starrone = 'star';
                                value.starrtwo = 'star';
                                value.starrthree = 'star';
                                value.starrfour = 'star-half';
                                value.starrfive = 'star-outline';
                            }
                            else if (value.rating == 4.5) {
                                value.starrone = 'star';
                                value.starrtwo = 'star';
                                value.starrthree = 'star';
                                value.starrfour = 'star';
                                value.starrfive = 'star-half';
                            }
                        });
                    });
                });
                console.log(_this.details);
            }
        });
    };
    ReviewsPage.prototype.delreview = function (Data) {
        var _this = this;
        console.log(Data);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
        var postdata = {
            comment_id: Data._id
        };
        console.log(postdata);
        var Serialized = this.serializeObj(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'user/delete_comment_and_rating', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
            console.log(response);
            if (response.status == true) {
                _this.getdata();
            }
        });
    };
    ReviewsPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ReviewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReviewsPage');
    };
    ReviewsPage.prototype.rating = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__rating_rating__["a" /* RatingPage */]);
        modal.present();
    };
    return ReviewsPage;
}());
ReviewsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-reviews',template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\reviews\reviews.html"*/'<!--\n  Generated template for the ReviewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>View Reviews</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="top">\n		<ion-list style="margin: 0;">\n		  <ion-item>\n		    <ion-avatar item-start>\n		      <img src="assets/img/us.png">\n		    </ion-avatar>\n		    <h2>{{chefid.firstname}} {{chefid.lastname}}</h2>\n			<h3><span><ion-icon name="pin"></ion-icon> {{chefid.address}}</span></h3>\n\n		      <div class="btn" item-end>\n		      		<ul>\n				     	<li><ion-icon name="{{starone}}" color="theme-header"></ion-icon></li>\n				     	<li><ion-icon name="{{startwo}}" color="theme-header"></ion-icon></li>\n				     	<li><ion-icon name="{{starthree}}" color="theme-header"></ion-icon></li>\n				     	<li><ion-icon name="{{starfour}}" color="theme-header"></ion-icon></li>\n				     	<li><ion-icon name="{{starfive}}" color="theme-header"></ion-icon></li>\n				     </ul>\n				    <h4>{{totalreviews}} Reviews</h4>\n		      </div>     \n		 \n		  </ion-item>\n		</ion-list>\n	</div>\n	<div class="bottom">\n		<ion-list *ngFor = "let dat of details">\n		  <ion-item>\n		    <ion-thumbnail item-start>\n		         <img *ngIf="dat?.picture" src="{{dat?.picture}}">\n                               <img *ngIf="!dat?.picture" src="assets/img/southfod.png">\n		    </ion-thumbnail>\n		    <h2>{{dat?.username}}</h2>\n				<p>{{dat?.comment}}</p>\n				<ul>\n						<li><ion-icon name="{{dat?.starrone}}" color="theme-header"></ion-icon></li>\n				     	<li><ion-icon name="{{dat?.starrtwo}}" color="theme-header"></ion-icon></li>\n				     	<li><ion-icon name="{{dat?.starrthree}}" color="theme-header"></ion-icon></li>\n				     	<li><ion-icon name="{{dat?.starrfour}}" color="theme-header"></ion-icon></li>\n				     	<li><ion-icon name="{{dat?.starrfive}}" color="theme-header"></ion-icon></li>\n				 </ul>\n                           <ion-icon *ngIf="dat?.user_id == userid" item-end style="font-size: 20px;" name="trash" color="theme-header" (click)=delreview(dat)></ion-icon>\n		  </ion-item>\n\n		</ion-list>\n	</div>\n</ion-content>\n<ion-footer>\n	<ion-toolbar>\n		<button ion-button full (click)="rating()" color="theme-header" class="ftrbtn">Add Rating</button>\n	</ion-toolbar>\n</ion-footer>\n<!-- <ion-footer>\n  <ion-toolbar style="padding: 6px;">\n		<div class="text">\n			 <ion-textarea class="enter" placeholder="Enter your text"></ion-textarea>\n		</div>\n		<div>\n			<div class="star">\n				<ul>\n			     	<li><ion-icon name="star" color="theme-header"></ion-icon></li>\n			     	<li><ion-icon name="star" color="theme-header"></ion-icon></li>\n			     	<li><ion-icon name="star" color="theme-header"></ion-icon></li>\n			     	<li><ion-icon name="star" color="lightgray"></ion-icon></li>\n			     	<li><ion-icon name="star" color="lightgray"></ion-icon></li>\n			    </ul>\n			</div>\n			<ion-buttons end>\n		      <button ion-button icon-only class="btnprofile">Submit</button>     \n		    </ion-buttons>\n		</div>\n		\n  </ion-toolbar>\n</ion-footer> -->\n'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\reviews\reviews.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
], ReviewsPage);

//# sourceMappingURL=reviews.js.map

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Appsetting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
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
  Generated class for the Appsetting provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Appsetting = (function () {
    function Appsetting(http, toastCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.cart = [];
        this.saved = [];
        this.svd = [];
        this.myGlobalVar = 'http://rafao.us-west-2.elasticbeanstalk.com/api/'; //'http://ec2-13-59-151-198.us-east-2.compute.amazonaws.com/api/';//'http://fashapp.io/api/';
        console.log('Hello Appsetting Provider');
        // if(localStorage.getItem('UserInfo')){
        //   console.log(localStorage.getItem('UserInfo'));
        //   this.navCtrl.push(TabsPage);
        // }else{
        //   this.navCtrl.push(SigninPage);
        // }
    }
    Appsetting.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    return Appsetting;
}());
Appsetting = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */]])
], Appsetting);

//# sourceMappingURL=appsetting.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__whyrafaho_whyrafaho__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__help_help__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terms_terms__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editprofile_editprofile__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editprefrence_editprefrence__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__addwallet_addwallet__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__frequentquestion_frequentquestion__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__feedback_feedback__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__changepwd_changepwd__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__signin_signin__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_native_geocoder__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, toastCtrl, loadingCtrl, nativeGeocoder, http, events, alertCtrl, appsetting, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.nativeGeocoder = nativeGeocoder;
        this.http = http;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.appsetting = appsetting;
        this.app = app;
        this.data = {};
        setTimeout(function () {
            console.log('Async operation has ended');
            _this.Userprofile();
        }, 1000);
        events.subscribe('index', function (res) {
            console.log(res);
            if (res == 4) {
                setTimeout(function () {
                    _this.Userprofile();
                }, 500);
            }
        });
    }
    ProfilePage.prototype.Userprofile = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_12__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_12__angular_http__["RequestOptions"]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
        console.log(userid);
        var postdata = {
            id: userid
        };
        var serialized = this.serializeObj(postdata);
        console.log(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                setTimeout(function () {
                    Loading.dismiss();
                }, 3000);
                console.log(data);
                console.log(data.data.latitude + ',' + data.data.longitude);
                _this.geo(parseFloat(data.data.latitude), parseFloat(data.data.longitude));
                _this.profile = data.data;
                _this.srcImage = _this.profile.user_image;
                //      this.city = this.data.city;
                console.log(_this.profile.firstname);
            }, function (err) {
                _this.ToastMsg('Something went Wrong');
                Loading.dismissAll();
            });
        });
    };
    ProfilePage.prototype.geo = function (lat, long) {
        var _this = this;
        //      alert('working');
        console.log(lat, long);
        this.nativeGeocoder.reverseGeocode(lat, long)
            .then(function (result) {
            // alert(JSON.stringify(result));
            _this.city = result.locality;
            console.log(_this.city);
            //        alert(this.city);
            //  alert(this.data.result +'Neelanshi');
        }).catch(function (error) { return console.log(error); });
    };
    ProfilePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ProfilePage.prototype.ToastMsg = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    ProfilePage.prototype.editpr = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__editprefrence_editprefrence__["a" /* EditprefrencePage */]);
    };
    ProfilePage.prototype.whyrafaha = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__whyrafaho_whyrafaho__["a" /* WhyrafahoPage */]);
    };
    ProfilePage.prototype.help = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__help_help__["a" /* HelpPage */]);
    };
    ProfilePage.prototype.term = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__terms_terms__["a" /* TermsPage */]);
    };
    ProfilePage.prototype.edit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__editprofile_editprofile__["a" /* EditprofilePage */]);
    };
    ProfilePage.prototype.wallet = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__addwallet_addwallet__["a" /* AddwalletPage */]);
    };
    ProfilePage.prototype.frequent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__frequentquestion_frequentquestion__["a" /* FrequentquestionPage */]);
    };
    ProfilePage.prototype.feedback = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__feedback_feedback__["a" /* FeedbackPage */]);
    };
    ProfilePage.prototype.change = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__changepwd_changepwd__["a" /* ChangepwdPage */]);
    };
    ProfilePage.prototype.logout = function () {
        if (localStorage.getItem('UserDetail')) {
            // console.log(localStorage.getItem('UserInfo'));
            localStorage.removeItem('UserDetail');
            localStorage.removeItem('Orderaddress');
            // alert("local storage cleared");
            //  this.navCtrl.push(SigninPage);
            this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_11__signin_signin__["a" /* SigninPage */]);
            // this.rootPage = TabsPage;
        }
    };
    //  doRefresh(refresher) {
    //    console.log('Begin async operation', refresher);
    //     this.Userprofile();
    //    setTimeout(() => {
    //      console.log('Async operation has ended');
    //      refresher.complete();
    //
    //    }, 2000);
    //  }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
        console.log('Neelanshi');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profile',template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\profile\profile.html"*/'<ion-header>\n  <ion-navbar color="theme-header">\n    <ion-title>\n     Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content refreshingText="Refreshing..." refreshingSpinner="bubbles" pullingText="Pull to refresh"></ion-refresher-content>\n  </ion-refresher>\n\n  <div class="main">\n    <div class="top-sec">\n      <div class="main-img">\n       <img *ngIf="srcImage" class="pick0" [src]="srcImage">\n <img *ngIf="!srcImage" class="pick0" src="assets/img/us.png">\n      </div>\n      <div class="text-sec">\n        <h3>{{profile?.firstname }} {{ profile?.lastname}}</h3>\n       \n        <h6><ion-icon ios="ios-pin" md="md-pin"></ion-icon> {{city}}</h6>\n      </div>\n    </div>\n  </div>\n  <div class="content-sec">\n       <ion-list>\n        <ion-item (click)="edit()">\n            Edit profile\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n<!--           <ion-item (click)="editpr()">\n            Edit preferences\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>-->\n         <ion-item (click)="wallet()">\n            Add wallet\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item>\n            Payment\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item (click)="frequent()">\n            Frequent questions\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item (click)="whyrafaha()">\n            Why RAFAHO\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item (click)="help()">\n            Help\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item>\n            Settings\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item (click)="term()">\n            Terms & conditions\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item (click)="feedback()">\n            Feadback RAFAHO\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n        <ion-item (click)="change()">\n            Change Password\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item (click)="logout()">\n            Logout\n        </ion-item>\n      </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\profile\profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_14__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
        __WEBPACK_IMPORTED_MODULE_12__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_13__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_fcm__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__nominatimap_nominatimap__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_countrypicker__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_countrypicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_countrypicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_android_permissions__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { Geolocation } from '@ionic-native/geolocation';








/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    // permissions = cordova.plugins.permissions;
    function SignupPage(navCtrl, navParams, toastCtrl, geolocation, appsetting, fcm, androidPermissions, nativeGeocoder, http, device, alertCtrl, loadingCtrl, modalCtrl, countryPickerService, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.geolocation = geolocation;
        this.appsetting = appsetting;
        this.fcm = fcm;
        this.androidPermissions = androidPermissions;
        this.nativeGeocoder = nativeGeocoder;
        this.http = http;
        this.device = device;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.countryPickerService = countryPickerService;
        this.events = events;
        this.key = false;
        this.locationstatus = false;
        this.savd = [];
        this.Ctype = 'password';
        this.iconname1 = 'eye';
        this.ptype = 'password';
        this.iconname = 'eye';
        this.number = false;
        this.data = {};
        this.showCpass = false;
        this.showpass = false;
        this.countryPickerService.getCountries().subscribe(function (countries) {
            _this.countries = countries;
            console.log(countries);
        });
        //  alert('updatehogai');
        fcm.getToken().then(function (token) {
            _this.devicetoken = token;
        });
        fcm.onNotification().subscribe(function (data) {
            if (data.wasTapped) {
                console.log("Received in background");
            }
            else {
                console.log("Received in foreground");
            }
            ;
        });
        // this.GetLocation();
        // this.cities()
    }
    //  cities(){
    //     let headers = new Headers();
    //    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    ////    let options = new RequestOptions({ headers: headers });
    //       this.http.get('http://rafao.us-west-2.elasticbeanstalk.com/api/allcity').map(res => res.json()).subscribe(response => {
    //           console.log(response.data);
    //           this.arr = response.data;
    //           console.log(this.arr)
    //          
    //       });
    //  }
    SignupPage.prototype.lupap = function () {
        var _this = this;
        console.log(this.data.city);
        this.address = this.data.address;
        console.log(this.address);
        if (this.address == '') {
            this.AlertMsg3('Please fill the address');
            //          this.openmapmodal();
        }
        if (this.address == undefined) {
            this.AlertMsg3('Please fill the address');
            //          this.openmapmodal();
        }
        else {
            var matches = this.address.match(/\d+/g);
            if (matches != null) {
                //    console.log('number');
                this.number = true;
            }
            else {
                this.number = false;
            }
            if (this.number == true) {
                console.log('yes it is having number');
                this.AlertMsg2('Empty response on Nominatim<br>Search via Google maps<br>');
            }
            else {
                console.log('false');
                var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["Headers"]();
                headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["RequestOptions"]({ headers: headers });
                if (this.address) {
                    this.address = this.address.replace(/" "/g, '%20');
                    console.log(this.address);
                    var adr = this.address;
                    console.log(adr);
                    this.http.post('http://nominatim.openstreetmap.org/search/' + adr + '?format=json&addressdetails=1&limit=1&polygon_svg=1', options).map(function (res) { return res.json(); }).subscribe(function (response) {
                        console.log(response[0]);
                        if (response[0] != undefined) {
                            if (response[0].place_id != '') {
                                console.log('working');
                                localStorage.setItem('NominatimDetail', JSON.stringify(response[0]));
                                //        this.navCtrl.push(NominatimapPage);
                                var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__nominatimap_nominatimap__["a" /* NominatimapPage */]);
                                modal.onDidDismiss(function (data) {
                                    _this.AlertMsg4('Your Location has been saved');
                                });
                                modal.present();
                                if (response[0].address.road) {
                                    _this.data.address = response[0].place_id + ',' + response[0].address.road + ',' + response[0].address.city + ',' + response[0].address.postcode + ',' + response[0].address.state + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                }
                                else if (response[0].address.city) {
                                    _this.data.address = response[0].place_id + ',' + response[0].address.city + ',' + response[0].address.postcode + ',' + response[0].address.state + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                }
                                else if (response[0].address.state) {
                                    _this.data.address = response[0].place_id + ',' + response[0].address.state + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                }
                                else if (response[0].address.state_district) {
                                    _this.data.address = response[0].place_id + ',' + response[0].address.state + ',' + response[0].address.state_district + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                }
                                else if (response[0].address.country) {
                                    _this.data.address = response[0].place_id + ',' + response[0].address.country + ',' + response[0].address.country_code;
                                }
                                _this.lat = response[0].lat;
                                _this.long = response[0].lon;
                                console.log(_this.lat, _this.long);
                            }
                        }
                        else {
                            console.log('neelanshi');
                            _this.AlertMsg2('Empty response on Nominatim<br>Search via Google maps<br>');
                        }
                        //    else
                        //        {
                        //       this.AlertMsg1('Empty response on Nominatim<br>Search via Google maps<br>');
                        //        this.openmapmodal();
                        //    }
                    });
                }
            }
        }
    };
    SignupPage.prototype.showPassword = function () {
        console.log('showpassword');
        this.showpass = !this.showpass;
        if (this.showpass) {
            this.ptype = 'text';
            this.iconname = 'eye-off';
        }
        else {
            this.ptype = 'password';
            this.iconname = 'eye';
        }
    };
    SignupPage.prototype.showCPassword = function () {
        console.log('showCpassword');
        this.showCpass = !this.showCpass;
        if (this.showCpass) {
            this.Ctype = 'text';
            this.iconname1 = 'eye-off';
        }
        else {
            this.Ctype = 'password';
            this.iconname1 = 'eye';
        }
    };
    SignupPage.prototype.Registration = function (register) {
        var _this = this;
        console.log('registration');
        console.log(register.value);
        console.log(register.value.address);
        //    alert(JSON.stringify(register.value));
        console.log(this.lat, this.long);
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["RequestOptions"]({ headers: headers });
        if (register.value.password.indexOf(' ') >= 0) {
            var toast = this.toastCtrl.create({
                message: 'Space not allowed in password',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else {
            if (register.value.phone) {
                register.value.phone = register.value.phone.replace(/-/g, "");
                var postdata = {
                    first_name: register.value.firstname,
                    last_name: register.value.lastname,
                    birth_day: register.value.dob,
                    gender: register.value.gender,
                    phone: register.value.phone,
                    emailid: register.value.email,
                    password: register.value.password,
                    address: this.data.address,
                    lat: this.lat,
                    long: this.long,
                    role: 'user',
                    deviceid: this.devicetoken
                };
                console.log(postdata);
                if (this.lat != null) {
                    var Serialized = this.serializeObj(postdata);
                    var Loading = this.loadingCtrl.create({
                        spinner: 'bubbles',
                        cssClass: 'loader',
                        content: "Loading",
                        dismissOnPageChange: true
                    });
                    Loading.present().then(function () {
                        _this.http.post(_this.appsetting.myGlobalVar + 'chefregistration', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                            console.log(response);
                            Loading.dismiss();
                            if (response.status == true) {
                                //              this.AlertMsg('CONGRATULATIONS<br>You have been selected to provide your services in RAFAHO.<br>Press continue to complete the registration');
                                _this.ToastMsg('You have succesfully registered');
                                localStorage.setItem('UserDetail', JSON.stringify(response.data));
                                var userdetail = JSON.parse(localStorage.getItem('UserDetail'));
                                var postdata2 = {
                                    user_id: userdetail._id,
                                    saved_address: userdetail.address
                                };
                                console.log(postdata2);
                                var Serialized = _this.serializeObj(postdata2);
                                _this.http.post(_this.appsetting.myGlobalVar + 'user/add_saved_address', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response2) {
                                    console.log(response2);
                                    if (response2.status == true) {
                                        localStorage.setItem('UserDetail', JSON.stringify(response2.data[0]));
                                    }
                                });
                                _this.appsetting.svd.push(response.data.address);
                                localStorage.setItem('Svedaddress', JSON.stringify(_this.appsetting.svd));
                                _this.events.publish('hk');
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                            }
                            else {
                                _this.AlertMsg1(response.message);
                            }
                        }, function (err) {
                            _this.ToastMsg('Something went Wrong');
                            Loading.dismissAll();
                        });
                    });
                }
                else {
                    this.AlertMsg('Please add address');
                }
            }
        }
    };
    /*************function for get user corrent location (latitude and longitude) and get address from lat long ************/
    SignupPage.prototype.GetLocation = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
            dismissOnPageChange: true
        });
        Loading.present().then(function () {
            _this.geolocation.getCurrentPosition().then(function (resp) {
                // resp.coords.latitude
                //
                // resp.coords.longitude
                console.log('latitude:' + resp.coords.latitude + 'longitude:' + resp.coords.longitude);
                _this.locationstatus = true;
                // this.lat = resp.coords.latitude;
                // this.long = resp.coords.longitud
                //      let timerId = setInterval(() =>  Loading.dismiss(), 5000);
                // setTimeout(() => { clearInterval(timerId);  let toast = this.toastCtrl.create({
                //        message: 'Something Went Wrong',
                //        duration: 3000,
                //        position: 'top'
                //      });
                //      toast.present(); }, 7000);
                Loading.dismiss();
                //      this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
                //      .then((result: NativeGeocoderReverseResult) => {
                //        // alert(JSON.stringify(result));
                //          if (result.subThoroughfare){
                //        this.data.address=result.subThoroughfare+','+result.thoroughfare+','+ result.subLocality+','+result.locality+','+result.postalCode+','+result.countryName;
                //            } else if (result.thoroughfare){
                //                 this.data.address=result.thoroughfare+','+ result.subLocality+','+result.locality+','+result.postalCode+','+result.countryName;
                //            }
                //            else {
                //                 this.data.address= result.subLocality+','+result.locality+','+result.postalCode+','+result.countryName;
                //            }
                //        //  alert(this.data.result +'Neelanshi');
                //      }).catch((error: any) => console.log(error));
            }).catch(function (error) {
                console.log('Error getting location', error);
                _this.ToastMsg('Please enable your location');
                Loading.dismissAll();
            });
        });
    };
    SignupPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
        console.log('Neelanshi');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    SignupPage.prototype.ToastMsg = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    SignupPage.prototype.ToastMsg1 = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    SignupPage.prototype.AlertMsg1 = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    };
    SignupPage.prototype.AlertMsg3 = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                        //            this.openmapmodal();
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    };
    SignupPage.prototype.AlertMsg2 = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                        _this.openmapmodal();
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    };
    SignupPage.prototype.AlertMsg4 = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                        //            this.openmapmodal();
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    };
    SignupPage.prototype.AlertMsg = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'CANCEL',
                    handler: function () {
                        console.log('OK clicked');
                        _this.openmapmodal();
                        //            this.navCtrl.push(LocationPage);
                    }
                }
            ]
        });
        alert.present();
    };
    SignupPage.prototype.tabbtnPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        // this.navCtrl.push(SignupPage);
    };
    SignupPage.prototype.phonevalidation = function (phn) {
        console.log(phn.length);
        if (phn.length == 3) {
            this.data.phone = this.data.phone + '-';
        }
        else if (phn.length == 7) {
            this.data.phone = this.data.phone + '-';
        }
    };
    SignupPage.prototype.openmapmodal = function () {
        var _this = this;
        if (this.locationstatus == true) {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__nominatimap_nominatimap__["a" /* NominatimapPage */]);
            modal.onDidDismiss(function (data) {
                _this.data.address = data.address;
                console.log(_this.data.address);
                console.log(data.lati);
                console.log(data.longi);
                _this.lat = data.lati;
                _this.long = data.longi;
                _this.AlertMsg4('Your Location:' + _this.data.address + ' ' + ' is  saved');
            });
            modal.present();
        }
        else {
            this.ToastMsg1('Please enable your Location');
        }
    };
    SignupPage.prototype.ngOnInit = function () {
        this.date = __WEBPACK_IMPORTED_MODULE_2_moment__(new Date()).format('YYYY-MM-DD');
        console.log(this.date);
        this.GetLocation();
    };
    SignupPage.prototype.handleKeyboardEvent = function (event, pass, cpass) {
        console.log(event.key);
        console.log(event);
        console.log(pass);
        console.log(cpass);
        console.log(this.key);
        if (pass == cpass) {
            console.log(this.key);
            return this.key = true;
        }
        else {
            console.log(this.key);
            return this.key = false;
        }
    };
    SignupPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SigninPage */]);
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signup',template:/*ion-inline-start:"D:\grahakbhojnalya\src\pages\signup\signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header hidden>\n    <ion-toolbar>\n        <ion-title>Menu</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class="main">\n        <div class="top-img">\n            <img src="assets/img/signup-bg.png">\n        </div>\n        <div class="bottom-img">\n            <img src="assets/img/tpbg.png">\n        </div>\n        <div class="text-sec">\n            <h2>Sign In</h2>\n            <h3>Welcome to <span>Rafaho</span> app</h3>\n        </div>\n        <div class="logo">\n            <img src="assets/img/logo.png">\n        </div>\n    </div>\n    <div class="content-sec">\n        <div class="sign">\n            <form class="form-sec" #registrationForm="ngForm" novalidate (submit)="Registration(registrationForm)">\n                  <ion-list >\n                    <ion-grid>\n                        <ion-row>\n                            <ion-col col-6 class="left">\n                                <ion-item>\n                                    <ion-label stacked>First name</ion-label>\n                                    <ion-input type="text" [(ngModel)]="data.firstname" name="firstname" #firstname="ngModel" required></ion-input>\n                                </ion-item>\n                                <div class="alert alert-danger red" color="danger">\n                                    <div *ngIf="firstname.errors && (firstname.dirty || firstname.touched)">\n                                        <div [hidden]="!firstname.errors.required">\n                                            First name is required\n                                        </div>\n                                    </div>\n                                </div>\n                            </ion-col>\n                            <ion-col col-6 class="right">\n                                <ion-item>\n                                    <ion-label stacked>Last name</ion-label>\n                                    <ion-input type="text" [(ngModel)]="data.lastname" name="lastname" #lastname="ngModel" required></ion-input>\n                                </ion-item>\n                                <div class="alert alert-danger red" color="danger">\n                                    <div *ngIf="lastname.errors && (lastname.dirty || lastname.touched)">\n                                        <div [hidden]="!lastname.errors.required">\n                                            Last name is required\n                                        </div>\n                                    </div>\n                                </div>\n                            </ion-col>\n                            <ion-col col-6 class="left">\n                                <ion-item>\n                                    <ion-label stacked>Birthday</ion-label>\n                                    <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY"  [(ngModel)]="data.dob" name="dob" #dob="ngModel" max="{{date}}" required></ion-datetime>\n                                </ion-item>\n                                <div class="alert alert-danger red" color="danger">\n                                    <div *ngIf="dob.errors && (dob.dirty || dob.touched)">\n                                        <div [hidden]="!dob.errors.required">\n                                            What\'s your date of birth?\n                                        </div>\n                                    </div>\n                                </div>\n                            </ion-col>\n                            <ion-col col-6 class="right gender">\n                                <ion-label>Gender</ion-label>\n                                <ion-item>\n                                    <ion-select [(ngModel)]="data.gender" name="gender" #gender="ngModel" required>\n                                        <ion-option value="female">Female</ion-option>\n                                        <ion-option value="male">Male</ion-option>\n                                    </ion-select>\n                                </ion-item>\n                                <div class="alert alert-danger red" color="danger">\n                                    <div *ngIf="gender.errors && (gender.dirty || gender.touched)">\n                                        <div [hidden]="!gender.errors.required">\n                                            You are?\n                                        </div>\n                                    </div>\n                                </div>\n                            </ion-col>\n\n                            <!--                <ion-col col-12 class="right gender">\n                                                                                    <ion-label>ENTER CITY</ion-label>\n                                                                              <ion-item>\n                                                                                      <ion-select [(ngModel)]="data.city" name="city" #city="ngModel" required>\n                                                                                        <ion-option *ngFor="let cit of arr" value="{{cit.city_code}}" name="hh">{{cit.city}},{{cit?.state}}</ion-option>\n                                                                                        \n                                                                                      </ion-select>\n                                                                              </ion-item>\n                                                                                    <div class="alert alert-danger" color="danger">\n                                              <div *ngIf="city.errors && (city.dirty || city.touched)">\n                                                <div [hidden]="!city.errors.required">\n                                                  City is required\n                                                </div>\n                                              </div>\n                                            </div>\n                                                                            </ion-col>   \n                            -->\n\n                            <button color=\'dark\' ion-button full type="button" (click)="openmapmodal()" ><ion-icon style="margin-right: 5px;" name="pin"></ion-icon>ADD ADDRESS</button>\n\n                            <!--                             <ion-col col-12 class="left right">\n                                                                              <div style="position: relative; overflow: hidden;">\n                            \n                                              <ion-icon ios="ios-search-outline" md="md-search" (click)="openmapmodal()" style="position: absolute;\n                                              top: 4px;\n                                              right: -24px;\n                                              width: 50px;\n                                              height: 50px;\n                                              /* display: block; */\n                                              color: #a6a6a6;\n                                              z-index: 999; \n                                              font-size:26px;\n                                              "></ion-icon>\n                                              <button>click here</button>\n                            \n                                            <ion-item>\n                                              <ion-label stacked>ADDRESS </ion-label>\n                                              \n                                              <ion-input type="text" placeholder="Type and click search"  [(ngModel)]= "data.address" name="address" #address="ngModel" required></ion-input>\n                                              \n                                            </ion-item>\n                                          </div>		\n                                                                            </ion-col>       -->\n\n\n                            <!--						<ion-col col-12 class="left right">\n                                                                              <div style="position: relative; overflow: hidden;">\n                            \n                                              <ion-icon ios="ios-locate-outline" md="md-locate" (click)="openmapmodal()" style="position: absolute;\n                                              top: 4px;\n                                              right: -24px;\n                                              width: 50px;\n                                              height: 50px;\n                                              /* display: block; */\n                                              color: #000;\n                                              z-index: 999; \n                                              font-size:26px;\n                                              "></ion-icon>\n                            \n                                            <ion-item>\n                                              <ion-label stacked>ADDRESS </ion-label>\n                                              \n                                              <ion-input  (focus)="lupap()" type="text" [(ngModel)]= "data.address" name="address" #address="ngModel" required></ion-input>\n                                              \n                                            </ion-item>\n                                          </div>		\n                                                                            </ion-col>-->\n                            <ion-col col-12 class="left right">\n                                <ion-item>\n                                    <ion-label stacked>Phone Number (xxx-xxx-xxxx)</ion-label>\n                                    <ion-input (input)="phonevalidation(data.phone)" type="tel" [(ngModel)]="data.phone" name="phone" #phone="ngModel" pattern="^[0-9]+(-[0-9]+)+$" maxlength="12" required></ion-input>\n                                </ion-item>\n                                <div class="alert alert-danger red" color="danger">\n                                    <div *ngIf="phone.errors && (phone.dirty || phone.touched)">\n                                        <div [hidden]="!phone.errors.required">\n                                            Phone number required\n                                        </div>\n                                        <div [hidden]="!phone.errors.pattern">\n                                            Only number allowed\n                                        </div>\n                                    </div>\n                                </div>\n                            </ion-col>\n                            <ion-col col-12 class="left right">\n                                <ion-item>\n                                    <ion-label stacked>Email</ion-label>\n                                    <ion-input type="text" [(ngModel)]="data.email" name="email" #email="ngModel" pattern="^[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{1,63})$" required></ion-input>\n                                </ion-item>                                                                                \n                                <div class="alert alert-danger red" color="danger">\n                                    <div *ngIf="email.errors && (email.dirty || email.touched)">  \n                                        <div [hidden]="!email.errors.required">\n                                            Email is required\n                                        </div>\n                                        <div [hidden]="!email.errors.pattern">\n                                            Invalid email\n                                        </div>\n                                    </div>\n                                </div>\n                            </ion-col>\n\n\n                            <ion-item  > \n                                <ion-label stacked>Password</ion-label>\n                                <ion-input type="{{ptype}}" [(ngModel)]="data.password" name="password" #password="ngModel" pattern="(?!^[0-9]*$)(?!^[0-9@/*/-/#/&/^/$/\/|/;/_/,/~/?/!/./\'\'/`/<>/%/:/{}/()/+/=]*$)(?!^[a-zA-Z@/*/#/&/^/$/;/_/,/~/?/\/|/\'\'/-/`/./\/!/<>/%/:/()/{}/+/=]*$)(?!^[a-zA-Z0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9@/*/#/&/$/;/_/{}/%/:/^/?/~/`/\'\'/|/,/-/<>/!/\/./()/+/=]{6,30})" required></ion-input>\n                                <button class="eyemain" ion-button clear type="button" color="dark" item-right>\n                                    <ion-icon name="{{iconname}}" (click)="showPassword()" ></ion-icon>\n                                </button>\n\n                            </ion-item>\n                            <!--<ion-icon name="{{iconname}}" (click)="showPassword()" ></ion-icon>-->      \n                            <div class="alert alert-danger red" color="danger">\n                                <div *ngIf="password.errors && (password.dirty || password.touched)">\n                                    <div [hidden]="!password.errors.required">\n                                        Password is required\n                                    </div>\n                                    <div [hidden]="!password.errors.minlength">\n                                        Password must be at least 6 digits\n                                    </div>\n                                    <div [hidden]="!password.errors.pattern">\n                                        Password is weak(It should be combination of a-z/A-Z,0-9/@*#)\n                                    </div>\n\n                                </div>  </div>\n\n\n\n                            \n                                <ion-item>\n                                    <ion-label stacked>Confirm Password</ion-label>\n                                    <ion-input type="{{Ctype}}" [(ngModel)]="data.cpassword" (input)="handleKeyboardEvent($event,data.password,data.cpassword)" name="cpassword" #cpassword="ngModel" required></ion-input>\n                                    <button class="eyemain" ion-button clear type="button" color="dark" item-right>\n                                        <ion-icon name="{{iconname1}}" (click)="showCPassword()" ></ion-icon>\n                                    </button>\n                                </ion-item>\n                                <!--<ion-icon name="{{iconname1}}" (click)="showCPassword()"></ion-icon>-->\n                                <div class="alert alert-danger red" color="danger">\n                                    <div *ngIf="key == false && cpassword.errors && (cpassword.dirty || cpassword.touched)">\n                                        <div [hidden]="!cpassword.errors.required">\n                                            Confirm password is required\n                                        </div>\n\n                                    </div>\n                                    <div *ngIf="data.cpassword">\n                                        <div *ngIf="key != true && (cpassword.dirty || cpassword.touched)">\n\n                                            <span>Password mismatch </span> \n                                        </div>\n                                    </div>\n                                </div>\n\n                        </ion-row>\n                    </ion-grid>\n                </ion-list>\n                <div class="frgtpwd">\n                    <button ion-button type="submit" [disabled]="!registrationForm.valid">Register</button>\n                </div>\n            </form>\n        </div>\n        <div class="frgtpwd" >\n            <h3 class="register">I have an account? <span (click)="login()">Login</span></h3>\n        </div>\n\n    </div>\n    <!--   <md-input-container>\n      <md-select name="countrypicker">\n        <md-option *ngFor="let c of countries">{{c.capital}}</md-option>\n      </md-select>\n    </md-input-container>-->\n</ion-content>\n<!--;[a-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$-->'/*ion-inline-end:"D:\grahakbhojnalya\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_fcm__["a" /* FCM */],
        __WEBPACK_IMPORTED_MODULE_13__ionic_native_android_permissions__["a" /* AndroidPermissions */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
        __WEBPACK_IMPORTED_MODULE_7__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__["a" /* Device */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_12_angular2_countrypicker__["CountryPickerService"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ })

},[373]);
//# sourceMappingURL=main.js.map