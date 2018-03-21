import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {ModalController, LoadingController, AlertController, ToastController, Events, Platform} from 'ionic-angular';
import {FilterPage} from '../filter/filter';
import {ChefdetialsPage} from '../chefdetials/chefdetials';
import {ReviewsPage} from "../reviews/reviews";
import {CartPage} from "../cart/cart";
import {ProductlistPage} from '../productlist/productlist';
import {Http, RequestOptions, Headers} from "@angular/http";
import {Appsetting} from "../../providers/appsetting";
import {NativeGeocoder, NativeGeocoderForwardResult} from '@ionic-native/native-geocoder';
import { Ionic2RatingModule } from 'ionic2-rating';
/**
 * Generated class for the RatingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rating',
  templateUrl: 'rating.html',

})
export class RatingPage {
 public data: any = {};
 rating:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
       public viewCtrl: ViewController,
        public appsetting: Appsetting,
        private platform: Platform,
        public http: Http,
        public loadingCtrl: LoadingController,
        private alertCtrl: AlertController,
        public toastCtrl: ToastController) {
    
  }
  onModelChange(number){
      console.log(number);
      this.rating = number;
  }
adddata(){
    console.log(this.data.comment);
     let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        let options = new RequestOptions({headers: headers})
        var userid = JSON.parse(localStorage.getItem('UserDetail'))._id;
             if (localStorage.getItem('Chefdetail')) {
           var chefid =  JSON.parse(localStorage.getItem('Chefdetail'))._id ;

       }
          var postdata = {
         user_id:userid,
rating:  this.rating,
chef_id:chefid,
comment:this.data.comment
        }
        console.log(postdata)
        var Serialized = this.serializeObj(postdata);
        this.http.post(this.appsetting.myGlobalVar + 'user/add_comment_and_rating', Serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response);
             if(response.message == 'User Comment already exits!!'){
                 this.AlertMsg('Your comment already exists!!<br>First delete your comment')
             }else if(response.status == true){
                 this.navCtrl.push(ReviewsPage);
             }else if(response.message == "Unable to add Comment and Rating!!"){
                 this.AlertMsg1('Rate this chef')
             }
        })
}
AlertMsg(msg){
  let alert = this.alertCtrl.create({
    title: 'RAFAHO',
    message: msg,
    buttons: [
      {
        text: 'ok',
        role: 'ok',
        handler: () => {
          console.log('Continue clicked');
           this.navCtrl.push(ReviewsPage);
        }
      }
    ]
  });
  alert.present();
}
AlertMsg1(msg){
  let alert = this.alertCtrl.create({
    title: 'RAFAHO',
    message: msg,
    buttons: [
      {
        text: 'ok',
        role: 'ok',
        handler: () => {
          console.log('Continue clicked');
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
    console.log('ionViewDidLoad RatingPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
