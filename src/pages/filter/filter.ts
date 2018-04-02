import {Component, } from '@angular/core';
import {NavController} from 'ionic-angular';
import {ModalController, LoadingController, ViewController, AlertController, ToastController, Events, Platform} from 'ionic-angular';
import {ChefdetialsPage} from '../chefdetials/chefdetials';
import {MapmodalPage} from "../mapmodal/mapmodal";
import {CartPage} from "../cart/cart";
import {ProductlistPage} from '../productlist/productlist';
import {Http, RequestOptions, Headers} from "@angular/http";
import {Appsetting} from "../../providers/appsetting";
import {NativeGeocoder, NativeGeocoderForwardResult} from '@ionic-native/native-geocoder';
import * as moment from 'moment';
import {Geolocation, GeolocationOptions, Geoposition, PositionError} from '@ionic-native/geolocation';
import {AndroidPermissions} from '@ionic-native/android-permissions';
declare var google;
@Component({
    selector: 'page-filter',
    templateUrl: 'filter.html'
})
export class FilterPage {
    attributes: any = [];
    cuisiness: any = [];
    date: any;
    lat:any;
    long:any;
    public data: any = [];
    constructor(public modalCtrl: ModalController,
        public appsetting: Appsetting,
        private platform: Platform,
        public http: Http,
        public viewCtrl: ViewController,
        public loadingCtrl: LoadingController,
        private alertCtrl: AlertController,
        public toastCtrl: ToastController, ) {
        this.date = moment(new Date()).format('YYYY-MM-DD[T]hh:mm');
        this.getattributes();
        this.getcuisine();
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    getattributes() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        let options = new RequestOptions({headers: headers});
        this.http.get(this.appsetting.myGlobalVar + 'attribute/all').map(res => res.json()).subscribe(ress => {
            console.log(ress);
            for (var t = 0; t < ress.data.length; t++) {
                this.attributes.push(ress.data[t]);
            }
            console.log(this.attributes);

        })
    }
    
    getcuisine() {
      var loc = JSON.parse((localStorage.getItem('Currentaddr')));
       console.log(loc);
//       if(loc[0].loc){
//           this.data.location = loc[0].loc;
//       }
       this.lat =loc[0].lat;
       this.long =loc[0].long;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        let options = new RequestOptions({headers: headers});

        this.http.get(this.appsetting.myGlobalVar + 'Cuisine/all').map(res => res.json()).subscribe(ress1 => {
            console.log(ress1.data);
            for (var u = 0; u < ress1.data.length; u++) {
                this.cuisiness.push(ress1.data[u]);
            }

            console.log(this.cuisiness);
        })
    }

    serializeObj(obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

        return result.join("&");
    }
    checkbox(legal) {
        console.log(legal.value);
        if (legal.value == false) {
            return {accept: false}
        }
    }
    
        openmapmodal() {
  
              let modal = this.modalCtrl.create(MapmodalPage);
        modal.onDidDismiss(data => {
            this.data.location = data.address;


            console.log(this.data.address)
            console.log(data.lati)
            console.log(data.longi)
            this.lat = data.lati
            this.long = data.longi

        });
        modal.present();
     
           
    }
    isReadonly() {
        return this.isReadonly;   //return true/false 
    }
    apply() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        let options = new RequestOptions({headers: headers});
        if((this.lat == undefined)||(this.long == undefined)){
            this.lat =''
            this.long=''
        }
        if(this.data.datetime == undefined){
            this.data.datetime  = ''
        }
        if( this.data.exp == undefined){
            this.data.exp = ''
        }
        if(this.data.cuisines == undefined){
            this.data.cuisines = ''
        }
        if( this.data.attribute == undefined){
            this.data.attribute = ''
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
            long:  this.long,
            notavalibility_dates: this.data.datetime,
            experience: this.data.exp,
            cuisine: this.data.cuisines,
            attribute: this.data.attribute
      });
    }
 
}
