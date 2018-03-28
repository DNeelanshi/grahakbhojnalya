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
import {Geolocation,GeolocationOptions ,Geoposition ,PositionError} from '@ionic-native/geolocation';
import { AndroidPermissions } from '@ionic-native/android-permissions';
declare var google;
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    geocoder = new google.maps.Geocoder();
    pet: string;
    searcharray: any = [];
    searcharray1: any = [];
    array: any;
    array1: any;
    arry: any = true;
    srcimage: any;
    arr: any;
    maingreenavail:number=1;
     mainredavail:number=1;
    altgreenavail:number=1;
  altredavail:number=1;
    lat: any;
    lostatus:boolean = false;
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
    rating:any=0;
    constructor(public navCtrl: NavController, public modalCtrl: ModalController,
        public appsetting: Appsetting,
        private platform: Platform,
        public http: Http,
        private nativeGeocoder: NativeGeocoder,
        public geolocation: Geolocation,
         private androidPermissions: AndroidPermissions,
        public GeolocationOptions:Geolocation,
        public loadingCtrl: LoadingController,
        private alertCtrl: AlertController,
        public toastCtrl: ToastController,
        public events: Events,
    ) {
//        alert('constructor');
//        this.getcurrentlocationanddata();
              this.firsthit();
                this.get();
//        this.platform.ready().then(() => {
//            var lastTimeBackPress = 0;
//            var timePeriodToExit = 2000;
//
//            this.platform.registerBackButtonAction(() => {
//                // get current active page
//                let view = this.navCtrl.getActive();
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
    
        events.subscribe('index', (res) => {
            console.log(res);
            if (res == 0) {
        
                this.firsthit();
                this.get();


            } else {
            
            }
        })
        //                    
        //                events.subscribe('homepage', (home) =>         {
        //      console.log(home)        ;
        //      clearInterval(this.appsetting.interval)        ;
        //      this.lookbooklist()        ;
        //    });

    }
    firsthit() {
//        alert('firsthit');

                      this.data.datetime = this.date;
        //            alert(this.data.datetime);
        if (JSON.parse(localStorage.getItem('proctnumberincart'))) {
            this.no_of_products = JSON.parse(localStorage.getItem('proctnumberincart'));
            console.log(this.no_of_products);
        }
        else {
            this.no_of_products = 0;
        }
              var options : GeolocationOptions
       this.geolocation.getCurrentPosition(options).then((resp) => {
//            alert('aagya');
        
            this.lat = resp.coords.latitude;
            this.long = resp.coords.longitude;

            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);

            this.lostatus = true;


            let headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            let options = new RequestOptions({headers: headers});
            var postdata = {
                lat: this.lat,
                long: this.long
            }
            let latLng = new google.maps.LatLng(this.lat, this.long);
            var Serialized = this.serializeObj(postdata);
           
                this.http.post('  http://rafao.us-west-2.elasticbeanstalk.com/api/home/reverse_geocoding', Serialized, options).map(res => res.json()).subscribe(response => {
                    console.log(response.data);
                    //            alert(response.data);
                    var resso = JSON.parse(response.data)
                    console.log(resso.response)
                    //            console.log(resso.response.properties.address);

                    if ((response.data == '{"message":"Result not found"}') || (resso.response.properties.address == null)||(resso.response == undefined)) {

                        //               alert('noresult');
                        this.geocoder.geocode({'location': latLng}, ((results, status) => {
                            //                        alert('googlegeocoding');
                            if (status == google.maps.GeocoderStatus.OK) {
                                if (results == '') {
                                    this.ToastMsg('Invalid Location')
                                    this.lat = '';
                                    this.long = '';

                                }
                                else {
                                    if (results[0]) {
                                        //                                    alert(results[0].formatted_address);
                                        console.log(results[0].place_id);
                                        console.log(results[0].formatted_address);
                                        this.chefsearch.search = results[0].formatted_address

                                    }
                                    else if (results[1]) {
                                        //                                    alert(results[1].formatted_address);
                                        this.chefsearch.search = results[1].formatted_address;
                                        console.log(results[1].formatted_address);

                                    }
                                }
                            }
                            //		
                        })
                        )
                    } else {
                        //                var resso = JSON.parse(response.data)
                        //            alert('lupap address');
                        console.log(resso.response.message)
                        if (resso.response.message == "Result not found") {
                            this.ToastMsg('Not found');
                            this.lat = '';
                            this.long = '';

                        }
                        else {
                            //                     alert('lupap address');
                            var addr = resso.response.properties.address
                            console.log(resso.response)
                            if (addr == null) {

                            }
                            this.chefsearch.search = addr + resso.response.properties.city;

                            console.log(this.chefsearch.search);

                        }
                    }
                });
                this.get();

        }, err=>{
            this.ToastMsg('Please enable your Location.')
        })
        

  
       
    }
    doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        setTimeout(() => {
            this.firsthit();
             this.get();
            console.log('Async operation has ended');
            refresher.complete();
        }, 3000);
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
            spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
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
          if( this.lostatus == true){let modal = this.modalCtrl.create(MapmodalPage);
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
      }else{
              this.ToastMsg('Please enable your Location')
      }
           
    }
    get() {
        var temp=this;
        var totalvalue =0;
//         alert('get');
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
                spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
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
                          var m =  moment(this.data.datetime).format('YYYY-MM-DD')
                            console.log(m);
                            this.array.forEach(function(value,key){
                          if(value.avalibilities.length>0) {
                              value.avalibilities.forEach(function(value2,key2){
                                  if(moment(m).isSame(value2.notavalibility_dates)){
                                      temp.mainredavail = 0;
                                      value.mainredavail = 0;
                                  }
                              })
                          }else{ value.mainredavail = 1;}
                            })
//                            for(var d =0; d<this.array.length ; d++){
//                                if(this.array[d].avalibilities.length>0){
//                            for(var t=0;t< this.array[d].avalibilities.length; t++){
//                                if(moment(m).isSame(this.array[d].avalibilities[t].notavalibility_dates))
//                                {    this.mainredavail = 1;}
//
//                            }}}
                      console.log( this.mainredavail);
                       console.log(this.array);
                          this.array.forEach(function(value,key){
                               temp.rating =0;
                                    value.comments_and_ratings.forEach(function(value1,key1){
                            if(value1 == []){
                                value1.avgrating=0;
                            }else{
                            console.log(value1.rating);
                        console.log( value.comments_and_ratings.length);
                      console.log( temp.rating);
                            temp.rating =(temp.rating+value1.rating);
                            console.log(temp.rating);
                        
                          }
                          totalvalue = temp.rating/value.comments_and_ratings.length   
                            totalvalue = Number((totalvalue).toFixed(1));
                             value.avgrating =  totalvalue;
                               
                                 })})
                       
                            
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
        var temp = this
        var totalvalue:any;
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
                     if (data.data.length > 0) {
                            this.array = data.data;
                            console.log(this.array);
                          this.array.forEach(function(value,key){
                               temp.rating =0;
                                    value.comments_and_ratings.forEach(function(value1,key1){
                            if(value1 == []){
                                value1.avgrating=0;
                            }else{
                            console.log(value1.rating);
                        console.log( value.comments_and_ratings.length);
                      console.log( temp.rating);
                            temp.rating =(temp.rating+value1.rating);
                            console.log(temp.rating);
                        
                          }
                          totalvalue = temp.rating/value.comments_and_ratings.length   
                            totalvalue = Number((totalvalue).toFixed(1));
                             value.avgrating =  totalvalue;
                               
                                 })
                                 })
                        }
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
                console.log('error')
            });
        }

    }
        dismiss1(){
      
          console.log('here');
                    this.array = null;
                    this.bit = null
                    this.arr1 = 1;
                     this.get();
    }
    searchdish(vali) {
        var cookingtime;
        var temp1 = this;
        var totalvalue1:any;
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
               if (data.data.length > 0) {
                            this.array = data.data;
                            console.log(this.array);
                          this.array.forEach(function(value,key){
                               temp1.rating =0;
                                    value.comments_and_ratings.forEach(function(value1,key1){
                            if(value1 == []){
                                value1.avgrating=0;
                            }else{
                            console.log(value1.rating);
                        console.log( value.comments_and_ratings.length);
                      console.log( temp1.rating);
                            temp1.rating =(temp1.rating+value1.rating);
                            console.log(temp1.rating);
                        
                          }
                          totalvalue1 = temp1.rating/value.comments_and_ratings.length   
                            totalvalue1 = Number((totalvalue1).toFixed(1));
                             value.avgrating =  totalvalue1;
                               
                                 })
                                 })
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
    dismiss(){
      
         this.arr = null;
            this.arry = true;
            console.log(this.arr);
            console.log('nothing');
             console.log('here');
                    this.array = null;
                    this.bit = null
                    this.arr1 = 1;
                     this.get();
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

        this.firsthit();
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
//    ionViewDidEnter(){
//        alert('enter');
//         this.firsthit();
//    }
    isReadonly() {
        return this.isReadonly;   //return true/false 
    }

    ngOnInit() {

        this.date = moment(new Date()).format('YYYY-MM-DD[T]hh:mm');
        var ddate = this.date;
        console.log(ddate);


        this.data.datetime = this.date;
        console.log(new Date().toISOString())
    

    }
}
