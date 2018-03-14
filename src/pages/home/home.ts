import {Component, } from '@angular/core';
import {NavController} from 'ionic-angular';
import {ModalController, LoadingController, AlertController, ToastController, Events, Platform} from 'ionic-angular';
import {FilterPage} from '../filter/filter';
import {ChefdetialsPage} from '../chefdetials/chefdetials';
import {MapmodalPage} from "../mapmodal/mapmodal";
import {CartPage} from "../cart/cart";
import {ProductlistPage} from '../productlist/productlist';
import {Http, RequestOptions, Headers} from "@angular/http";
import {Appsetting} from "../../providers/appsetting";
import {NativeGeocoder, NativeGeocoderForwardResult} from '@ionic-native/native-geocoder';
import * as moment from 'moment';
import { Geolocation } from '@ionic-native/geolocation';
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    pet: string;
    searcharray: any = [];
    searcharray1: any = [];
    array: any;
    array1: any;
    arry: any = true;
    srcimage: any;
    arr: any;
    lat: any;
    openllist: any;
    long: any;
    arr1: any = null;
    date: any;
    userdetail: any;
    bit: any;
    srcImage: any;
    ar: any = [];
    data: any = {};
    bukingdate: any;
    blurclass: any;
    no_of_products: any;
    chefsearch: any = {};
    constructor(public navCtrl: NavController, public modalCtrl: ModalController,
        public appsetting: Appsetting,
        private platform: Platform,
        public http: Http,
        private nativeGeocoder: NativeGeocoder,
         private geolocation: Geolocation,
        public loadingCtrl: LoadingController,
        private alertCtrl: AlertController,
        public toastCtrl: ToastController,
        public events: Events,
    ) {

        
        this.platform.ready().then(() => {
            var lastTimeBackPress = 0;
            var timePeriodToExit = 2000;

            this.platform.registerBackButtonAction(() => {
                // get current active page
                let view = this.navCtrl.getActive();
                if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
                    this.platform.exitApp(); //Exit from app
                } else {
                    // alert('Press back again to exit App?');
                    let toast = this.toastCtrl.create({
                        message: 'Press back again to exit from app?',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.present();
                    lastTimeBackPress = new Date().getTime();
                }
            });
        });

        this.firsthit();
        this.userdetail = JSON.parse(localStorage.getItem('UserDetail'));
        console.log(this.userdetail);
        this.pet = "kittens";
        //      if (this.appsetting.home1 == 1){
        //          console.log('homepageactivated');
        //      }
        // events.subscribe('index', (res) => {
        //     console.log(res);
        // this.firsthit();
        //    })
    }
    firsthit() {
        var Loading = this.loadingCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/img/icons3.gif'>",
            dismissOnPageChange: true
        });
        Loading.present().then(() => {

            this.data.datetime = this.date;
//            alert(this.data.datetime);
            if (JSON.parse(localStorage.getItem('proctnumberincart'))) {
                this.no_of_products = JSON.parse(localStorage.getItem('proctnumberincart'));
                console.log(this.no_of_products);
            }
            else {
                this.no_of_products = 0;
            }
            Loading.dismiss();
        })
    }
    doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        setTimeout(() => {
            this.get();
            this.firsthit();
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    }
    cartpage() {
        this.navCtrl.push(CartPage);
    }
    fltr_opn() {
        let fltr_opn = this.modalCtrl.create(FilterPage);
        fltr_opn.present();
    }
    detail(dat) {
        this.bukingdate = this.data.datetime.match(/:00Z/g);
        console.log(this.bukingdate)
        if (this.bukingdate == null) {
            this.bukingdate = this.data.datetime + ':00Z'
            console.log(this.bukingdate);
        } else {
            this.bukingdate = this.data.datetime
        }
        console.log(this.bukingdate);
        console.log(this.data.altdate);

        localStorage.setItem('Chefdetail', JSON.stringify(dat));
        localStorage.setItem('Bookingdatetime', JSON.stringify(this.bukingdate));
        localStorage.setItem('Altdatetime', JSON.stringify(this.data.altdate));
        this.navCtrl.push(ChefdetialsPage);
    }
    prdlist(prods) {
        console.log(prods)
        localStorage.setItem('dishprod', JSON.stringify(prods));
        this.navCtrl.push(ProductlistPage);
    }
    openlist() {
        this.openllist = 1;
        this.blurclass = 'blurbg'
        this.userdetail = JSON.parse(localStorage.getItem('UserDetail'));
        console.log(this.userdetail)
        this.searcharray1 = [];
        this.searcharray = [];
        console.log(this.searcharray)
        if ((this.userdetail.saved_address.length > 0) || (this.userdetail.favorite_address.length > 0)) {
            for (var p = 0; p < this.userdetail.saved_address.length; p++) {
                this.searcharray.push(this.userdetail.saved_address[p].saved_address)
            }
            console.log(this.searcharray)

            console.log(this.userdetail.favorite_address);
            for (var c = 0; c < this.userdetail.favorite_address.length; c++) {
                this.searcharray1.push(this.userdetail.favorite_address[c].favorite_address)
            }
            //          this.searcharray1 = JSON.parse(localStorage.getItem('Favaddress'));  
            console.log(this.searcharray1)
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

    }
    del(index) {
        console.log(index);
        this.searcharray.pop(index);
        var productid1;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        let options = new RequestOptions({headers: headers})
        for (var z = 0; z < this.userdetail.saved_address.length; z++) {
            if (index == z) {
                productid1 = this.userdetail.saved_address[z]._id;
            }
        }
        var postdata1 = {
            user_id: this.userdetail._id,
            saved_address_id: productid1
        }

        console.log(postdata1)
        var Serialized = this.serializeObj(postdata1);
        this.http.post(this.appsetting.myGlobalVar + 'user/delete_saved_address', Serialized, options).map(res => res.json()).subscribe(response11 => {
            console.log(response11);
            if (response11.status == true) {
                localStorage.setItem('UserDetail', JSON.stringify(response11.data[0]));
            }
        })
        //         this.appsetting.svd=this.searcharray
        //       console.log(this.searcharray)
        //         localStorage.setItem('Svedaddress',JSON.stringify(this.appsetting.svd));
    }
    del1(index) {
        this.searcharray1.pop(index);
        var productid;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        let options = new RequestOptions({headers: headers})
        for (var z = 0; z < this.userdetail.favorite_address.length; z++) {
            if (index == z) {
                productid = this.userdetail.favorite_address[z]._id;
            }
        }
        var postdata1 = {
            user_id: this.userdetail._id,
            favorite_address_id: productid
        }

        console.log(postdata1)
        var Serialized = this.serializeObj(postdata1);
        this.http.post(this.appsetting.myGlobalVar + 'user/delete_favarite_address', Serialized, options).map(res => res.json()).subscribe(response1 => {
            console.log(response1);
            if (response1.status == true) {
                localStorage.setItem('UserDetail', JSON.stringify(response1.data[0]));
            }
                })
//               
//      console.log(ind        ex);
//      this.searcharray1.pop(ind        ex);
//      this.appsetting.saved=this.searchar        ray1
//       console.log(this.searcharr        ay1)
//         localStorage.setItem('Favaddress',JSON.stringify( this.appsetting.saved));

    }
    getItem(item) {
//        alert(item);

        var Loading = this.loadingCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/img/icons3.gif'>",
            dismissOnPageChange: true
        });
        Loading.present().then(() => {
            this.chefsearch.search = item;
//            alert('inside alert')
//            alert(this.chefsearch.search);
            this.nativeGeocoder.forwardGeocode(item).then((coordinates: NativeGeocoderForwardResult) => {
                console.log('The coordinates are latitude=' + coordinates.latitude + ' and longitude=' + coordinates.longitude)
                this.lat = coordinates.latitude
                this.long = coordinates.longitude
                localStorage.setItem('Orderaddress', JSON.stringify(item));
                this.searcharray = [];
                this.openllist = 0;
                this.blurclass = 'blurbg1'
                this.get();
                
//                alert(this.lat);
            }).catch((error: any) => {
//                alert(JSON.stringify("err " + error))
                Loading.dismiss();
            });
            //   setTimeout(() => {
            //    Loading.dismiss();
            //  }, 2000);

        })

    }
    cancellist() {
        this.openllist = 0;
        this.blurclass = 'blurbg1'
    }
    openmapmodal() {
        let modal = this.modalCtrl.create(MapmodalPage);
        modal.onDidDismiss(data => {
            this.chefsearch.search = data.address;


            console.log(this.data.address)
            console.log(data.lati)
            console.log(data.longi)
            this.lat = data.lati
            this.long = data.longi

//    this.searcharray=[];

            this.openllist = 0;
            this.blurclass = 'blurbg1'
            this.get();
            //    this.AlertMsg4('Your Location:'+this.data.address+' '+' is  saved')
        });
        modal.present();
    }
    get() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        let options = new RequestOptions({headers: headers});
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
                spinner: 'hide',
                cssClass: 'loader',
                content: "<img src='assets/img/icons3.gif'>",
                dismissOnPageChange: true
            });
            Loading.present().then(() => {
                this.http.post(this.appsetting.myGlobalVar + 'getchefsbyprefrence', serialized, options).map(res => res.json()).subscribe(data => {

                    console.log(data);
                    setTimeout(() => {
                        Loading.dismissAll();
                    }, 2500);

                    if (data.status == true) {
                        if (data.data.length > 0) {
                            this.array = data.data;
                            console.log(this.array);
                            this.bit = 1;
                            this.arr1 = 1;
                        } else {
                            this.array = [];
                            this.arr1 = null;
                            this.bit = 1;
                            console.log('hjuij');
                        }
                    }
                    else {
                        this.array = [];
                        this.arr1 = null;
                        this.bit = 1;
                    }



                }, (err) => {
                    this.ToastMsg('Something went wrong');
                    Loading.dismissAll();
                    console.log(err)
                });
            })
        } else {
            this.bit = null;
            this.arr1 = 2;
        }
    }
    ToastMsg(msg) {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    }
    searchaa(val) {
        console.log(val);
        if (val == '') {
            this.get();
        }
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        let options = new RequestOptions({headers: headers});
        var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
        //     var latt = JSON.parse(localStorage.getItem('Userpref')).lat;
        //     var longg = JSON.parse(localStorage.getItem('Userpref')).long;
        console.log(this.lat, this.long);
        console.log(userid);
        console.log(val.length)

        if (val.length >= 3) {
            var postdata = {
                app_user_id: userid,
                latitude: this.lat,
                longitude: this.long,
                searchvalue: val,
            };
            var serialized = this.serializeObj(postdata);


            this.http.post(this.appsetting.myGlobalVar + 'prefrence/searchbychefname', serialized, options).map(res => res.json()).subscribe(data => {
                console.log(data);
                if (data.status == true) {
                    this.arr1 = 1;
                    this.bit = 1;
                    if (data.data) {
                        this.array = data.data;
                        this.bit = 1;
                        this.arr1 = 1;
                        console.log(this.array);
                    }
                } else {
                    console.log('here');
                    this.array = null;
                    this.bit = null
                    this.arr1 = 1;
                }
            }, (err) => {
                this.ToastMsg('Something went wrong');
                console.log('error')});
        }

    }
    searchdish(vali) {
        var cookingtime;
        console.log(vali);
        //    if(!vali){
        //        console.log('here');
        //       this.arry = null;
        //       this.arr = null;
        //       return false;
        //    }else{
        console.log('thre');
        console.log(vali);
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        let options = new RequestOptions({headers: headers});
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


            this.http.post(this.appsetting.myGlobalVar + 'prefrence/searchbydishname', serialized, options).map(res => res.json()).subscribe(data => {

                console.log(data);
                if (data.status == true) {
                    this.arry = false;
                    if (data.data) {
                        this.arr = data.data;
                        for (var i = 0; i < data.data.length; i++) {
                            for (var j = 0; j < this.arr[i].products.length; j++) {
                                console.log(this.arr[i].products[j].product_name);
                                var h = this.arr[i].products[j].product_name.toLowerCase();
                                console.log(h);
                                var a = this.arr[i].products[j].product_name.indexOf(vali);
                                console.log(a);
                                if (a > -1) {
                                    this.arr[i].products[j].bit = a;
                                } else {
                                    var val = h.indexOf(vali);
                                    console.log(val);
                                    this.arr[i].products[j].bit = val;
                                }

                                if (this.arr[i].products[j].order_prefrence == 1) {
                                    this.arr[i].products[j].order_prefrence = 'Cook at Chef place'
                                    cookingtime = this.arr[i].products[j].cooking_time_at_chef_place
                                } else if (this.arr[i].products[j].order_prefrence == 2) {
                                    this.arr[i].products[j].order_prefrence = 'Cook at Client Place'
                                    cookingtime = this.arr[i].products[j].cooking_time_at_user_home
                                } else {
                                    this.arr[i].products[j].order_prefrence = 'Home Delivery'
                                    cookingtime = this.arr[i].products[j].cooking_time_at_user_home
                                }

                            }
                        }

                        console.log(this.arr);

                    }

                }
                else {
                    this.arry = null;
                    this.arr = null;
                }
            }, (err) => {
                this.ToastMsg('Something went wrong')
                console.log(err)
            });
        } else {
            this.arr = null;
            this.arry = true;
            console.log(this.arr);
            console.log('nothing');

            }
    //}

    }
    AlertMsg(msg) {
        let alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: () => {
                        console.log('ok clicked');
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    }
    serializeObj(obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

        return result.join("&");
    }
    ionViewDidLoad() {

        console.log('ionViewDidLoad HomePage');
      
          this.geolocation.getCurrentPosition().then((resp) => {
    this.lat = resp.coords.latitude;
  this.long= resp.coords.longitude;

 console.log(resp.coords.latitude);
  console.log(resp.coords.longitude);

  this.get();
 
  })
        
//    alert('ara h');/

        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        } else {
            let toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    }
    ngOnInit() {
        this.date = moment(new Date()).format('YYYY-MM-DD[T]hh:mm');
       var ddate = this.date;
   console.log(ddate);


        this.data.datetime = this.date;
        console.log(new Date().toISOString())
//        alert( this.data.datetime );
        //    this.GetLocation();

    }
}
