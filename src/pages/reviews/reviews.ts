import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RatingPage} from '../rating/rating';
import {ModalController, LoadingController, AlertController, ToastController, Events, Platform} from 'ionic-angular';
import {FilterPage} from '../filter/filter';
import {ChefdetialsPage} from '../chefdetials/chefdetials';
import {MapmodalPage} from "../mapmodal/mapmodal";
import {CartPage} from "../cart/cart";
import {ProductlistPage} from '../productlist/productlist';
import {Http, RequestOptions, Headers} from "@angular/http";
import {Appsetting} from "../../providers/appsetting";
import {NativeGeocoder, NativeGeocoderForwardResult} from '@ionic-native/native-geocoder';
/**
 * Generated class for the ReviewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-reviews',
    templateUrl: 'reviews.html',
})
export class ReviewsPage {
    details: any = [];
    chefid:any=[];
    userid:any=[];
    totalreviews:any;
    starone:any='star-outline';
    startwo:any='star-outline';
     starthree:any='star-outline';
      starfour:any='star-outline';
       starfive:any='star-outline';
       
    constructor(public navCtrl: NavController, public navParams: NavParams,
        public modalCtrl: ModalController,
        public appsetting: Appsetting,
        private platform: Platform,
        public http: Http,
        public loadingCtrl: LoadingController,
        private alertCtrl: AlertController,
        public toastCtrl: ToastController,
    ) {
        this.getdata();
    }
    getdata() {
         var temp = this;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        let options = new RequestOptions({headers: headers})
        this.userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
        if (localStorage.getItem('Chefdetail')) {
            this.chefid = JSON.parse(localStorage.getItem('Chefdetail'));
console.log(this.chefid);
        }
        var postdata = {
            chef_id: this.chefid._id,
            page: 1
        }

        console.log(postdata)
        var Serialized = this.serializeObj(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'user/get_comment_and_rating', Serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response);
            if (response.status == true) {
                   
                this.details = response.data;
            this.totalreviews = this.details.length;
 console.log(response.average_rating);
response.average_rating = Number((response.average_rating).toFixed(1));

console.log(response.average_rating);
  var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
                dismissOnPageChange: true
            });
            Loading.present().then(() => {
              if(response.average_rating == 1){
                  this.starone = 'star'
              }
              else if(response.average_rating == 2){
                   this.starone = 'star'
                  this.startwo = 'star'
              }
              else if(response.average_rating == 3){
                   this.starone = 'star'
                  this.startwo = 'star'
                  this.starthree = 'star'
              }
              else if(response.average_rating == 4){
                  this.starone = 'star'
                  this.startwo = 'star'
                  this.starthree = 'star'
                   this.starfour = 'star'
              }
             else if(response.average_rating == 5){
                 this.starone = 'star'
                  this.startwo = 'star'
                  this.starthree = 'star'
                   this.starfour = 'star'
                  this.starfive = 'star'
             }  else if((1.1 <= response.average_rating)&&(response.average_rating <= 1.5)){
           
              this.starone = 'star-half'
                  
              }  else if((1.6 <= response.average_rating)&&(response.average_rating <= 1.9)){
            
              this.starone = 'star'
                  this.startwo = 'star'
                
              }  else if((2.1 <= response.average_rating)&&(response.average_rating <= 2.5)){
           
              this.starone = 'star'
                  this.startwo = 'star'
                   this.starthree = 'star-half'
                
              }  else if((2.6 <= response.average_rating)&&(response.average_rating <= 2.9)){
             
              this.starone = 'star'
                  this.startwo = 'star'
                  this.starthree = 'star'
                
              }
                else if((3.1<= response.average_rating)&&(response.average_rating <= 3.5)){
                   
              this.starone = 'star'
                  this.startwo = 'star'
                  this.starthree = 'star'
                   this.starfour='star-half'
                
              }
                else if((3.6 <= response.average_rating)&&(response.average_rating <= 3.9)){
                   
              this.starone = 'star'
                  this.startwo = 'star'
                  this.starthree = 'star'
                  this.starfour='star'
              }
           else if((4.1 <= response.average_rating)&&(response.average_rating <= 4.5)){
            
              this.starone = 'star'
                  this.startwo = 'star'
                  this.starthree = 'star'
                   this.starfour='star-half'
                
              }
                else if((4.6 <= response.average_rating)&&(response.average_rating <= 4.9)){
                   
              this.starone = 'star'
                  this.startwo = 'star'
                  this.starthree = 'star'
                  this.starfour='star'
                  this.starfive='star'
                
              }
              Loading.dismiss();  
              })
            this.details.forEach(function (value, key) {
             temp.chefid.products.forEach(function (value1,key1){
                var usernameid = value.user_id
                console.log(usernameid);
                var postdata1 = {
                    id: usernameid
                }
                var serialized = temp.serializeObj(postdata1);
                temp.http.post(temp.appsetting.myGlobalVar + 'userinfo', serialized, options).map(res => res.json()).subscribe(res => {
                    console.log(res);
                    console.log(value);
                    value.username = res.data.firstname,
                    value.picture = value1.product_image0
                        if(value.rating == 1){
                  this.starrone = 'star'
              }
              else if(value.rating== 2){
                 value.starrone = 'star'
                  value.starrtwo = 'star'
                  value.starrthree = 'star-outline'
                   value.starrfour = 'star-outline'
                  value.starrfive = 'star-outline'
              }
              else if(value.rating == 3){
             value.starrone = 'star'
                  value.starrtwo = 'star'
                  value.starrthree = 'star'
                   value.starrfour = 'star-outline'
                  value.starrfive = 'star-outline'
              }
              else if(value.rating == 4){
                 value.starrone = 'star'
                  value.starrtwo = 'star'
                  value.starrthree = 'star'
                   value.starrfour = 'star'
                  value.starrfive = 'star-outline'
              }
             else if(value.rating == 5){
                 value.starrone = 'star'
                  value.starrtwo = 'star'
                  value.starrthree = 'star'
                   value.starrfour = 'star'
                  value.starrfive = 'star'
             }  else if(value.rating == 1.5){
              this.starrone = 'star'
                  value.starrone = 'star-half'
                  value.starrtwo = 'star-outline'
                  value.starrthree = 'star-outline'
                   value.starrfour = 'star-outline'
                  value.starrfive = 'star-outline'
              }  else if(value.rating== 2.5){

                  value.starrone = 'star'
                  value.starrtwo = 'star'
                  value.starrthree = 'star-half'
                   value.starrfour = 'star-outline'
                  value.starrfive = 'star-outline'
              }  else if(value.rating == 3.5){
                value.starrone = 'star'
                  value.starrtwo = 'star'
                  value.starrthree = 'star'
                  value.starrfour = 'star-half'
                  value.starrfive = 'star-outline'
              }  else if(value.rating== 4.5){
              value.starrone = 'star'
                  value.starrtwo = 'star'
                  value.starrthree = 'star'
                   value.starrfour = 'star'
                  value.starrfive = 'star-half'
              }
                })
            })
             })
             
            console.log(this.details);
            }
        })
    }
    delreview(Data){
        console.log(Data)
             let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        let options = new RequestOptions({headers: headers})
    
          var postdata = {

comment_id:Data._id
        }

        console.log(postdata)
        var Serialized = this.serializeObj(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'user/delete_comment_and_rating', Serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response);
             if(response.status == true){
                  this.getdata();
             }
        })
    }
    serializeObj(obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

        return result.join("&");
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad ReviewsPage');
    }
    rating() {
        let modal = this.modalCtrl.create(RatingPage);
        modal.present();
    }


}
