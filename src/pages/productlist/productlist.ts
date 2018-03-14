import { Component } from '@angular/core';
import {  IonicPage, NavController, NavParams,LoadingController,ToastController,AlertController } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { ProductviewPage } from '../productview/productview';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
/**
/**
 * Generated class for the ProductlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productlist',
  templateUrl: 'productlist.html',
})
export class ProductlistPage {
 array:any=[];
 prods:any=[];
 play=0;
 service:any;
 sservice:any;
 sservices:any=[];
 no_of_products:any;
  constructor(public navCtrl: NavController, 
       public appsetting: Appsetting, 
       public http: Http,public navParams: NavParams,
       private toastCtrl:ToastController,
      public loadingCtrl: LoadingController,
       public alertCtrl: AlertController) {
//       alert('hello');
      if (JSON.parse(localStorage.getItem('proctnumberincart'))){
         this.no_of_products =  JSON.parse(localStorage.getItem('proctnumberincart'));
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductlistPage');
    this.getprodetail();
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
  getprodetail(){
       if (localStorage.getItem('dishprod')) {
                this.array = JSON.parse(localStorage.getItem('dishprod'));
                console.log(this.array);
                
//                alert('cdf');
       }
  }
  dishview(pro){
      console.log(pro);
     localStorage.setItem('producttss', JSON.stringify(pro));
      this.navCtrl.push(ProductviewPage)
  }
  cart1(){
      this.navCtrl.push(CartPage);
  }
  cart(pro) {
      this.play =0;
       this.sservices = [];
             console.log(pro);
              if(pro.take_away == 0){
          if(pro.cook_at_user_place == 0){
//              if(this.splarr.home_delivery == 0){
//                  return null;
//              }else{
             console.log('home delivery');
                  this.sservices.push('Home Delivery');
              
          }else{
               if(pro.home_delivery == 0){
                 this.sservices.push('Cook at MY Place');
                  console.log('cook at my place');
              }
              else{
                   this.sservices.push('Home Delivery')
                   this.sservices.push('Cook at My Place')
                  console.log('cook at my place,home delivery');
              }
          }
      }else{
          if(pro.cook_at_user_place == 0){
              if(pro.home_delivery == 0){
                   this.sservices.push('Cook at Chef place')
                   console.log('cook at chef place');
              }else{
                  this.sservices.push('Home Delivery')
                   this.sservices.push('Cook at Chef place')
                   console.log('cook at chef place,home delivery' );
              }
          }else{
               if(pro.home_delivery == 0){
                this.sservices.push('Cook at MY Place')
                   this.sservices.push('Cook at Chef place')
                    console.log('cook at my place,home delivery' );
              }
              else{
                    this.sservices.push('Cook at MY Place')
                   this.sservices.push('Cook at Chef place')
                     this.sservices.push('Home Delivery')
                      console.log('cook at my place,home delivery,cook at chef place' );
              }
          }}
          console.log(this.sservices);
          console.log(this.sservices.length);
          if(this.sservices.length == 3){
               console.log('di')
      let alert2 = this.alertCtrl.create({
      title: 'RAFAHO',
      message: 'Select some Service',
       inputs: [
          {
            type: 'radio',
            label: this.sservices[0],
            value:  this.sservices[0]
          },
          {
            type: 'radio',
            label:  this.sservices[1],
            value:  this.sservices[1]
          },{
              type: 'radio',
            label:  this.sservices[2],
            value:  this.sservices[2]
          }
        ],
      buttons: [
              {
            text: 'Cancel',
          role: 'cancel',
          handler: () => {
              
          }
        },
        {
          text: 'OK',
          role: 'submit',
          handler: (data:string) => {
              console.log(data);
              this.service = data;
               this.play =1;
               this.hitt(pro,this.service);
          }}]})
           alert2.present();
           }
          else if(this.sservices.length == 2){
               console.log('mata')
              let alert1 = this.alertCtrl.create({
      title: 'RAFAHO',
      message: 'Select some Service',
       inputs: [
          {
            type: 'radio',
            label: this.sservices[0],
            value:  this.sservices[0]
          },
          {
            type: 'radio',
            label:  this.sservices[1],
            value:  this.sservices[1]
          }
        ],
      buttons: [
              {
            text: 'Cancel',
          role: 'cancel',
          handler: () => {
              
          }
        },
        {
          text: 'OK',
          role: 'submit',
          handler: (data:string) => {
              console.log(data);
              this.service = data;
               this.play =1;
               this.hitt(pro, this.service);
          }}]})
           alert1.present();
          }else{
         console.log('jai')
        let alert = this.alertCtrl.create({
      title: 'RAFAHO',
      message: 'Select some Service',
       inputs: [
          {
            type: 'radio',
            label: this.sservices[0],
            value:  this.sservices[0]
          }
       
        ],
      buttons: [
              {
            text: 'Cancel',
          role: 'cancel',
          handler: () => {
              
          }
        },
        {
          text: 'OK',
          role: 'submit',
          handler: (data:string) => {
              console.log(data);
              this.service = data;
               this.play =1;
                this.hitt(pro, this.service);
          }
          }]
          })
          alert.present();
          }
          
      console.log(pro);
      

      console.log(this.sservice);
      console.log(this.play);
     

//    this.navCtrl.push(CartPage);
  }
  hitt(pro,Service){

      let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
let options = new RequestOptions({ headers: headers})
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
             if(Service == 'Home Delivery'){
        Service = 3;
        
      }else if(Service  == 'Cook at MY Place'){
       Service  = 2;
     
      }else{
         Service  = 1;
          
      }
      console.log(Service,pro);
       var postdata = {
        user_id:a._id,
    user_address :a.address,
    long:a.longitude,
    lat:a.latitude,
    chef_id:b._id,
    booking_datetime:c,
    product_id:pro._id,
    product_name:pro.product_name,
   price_per_plate:pro.product_price,
    quantity:pro.minimum_order,
    minimum_order:pro.minimum_order,
     product_image0 :pro.product_image0,
     product_ingredients:pro.product_ingredients,
     discount:pro.discount,
     order_prefrence:Service
     
       }
       
          console.log(postdata)
           var Serialized = this.serializeObj(postdata);
     var Loading = this.loadingCtrl.create({
          spinner: 'hide',
    cssClass: 'loader',
    content: "<img src='assets/img/icons3.gif'>",
    dismissOnPageChange:true
        });
           Loading.present().then(() => {
  this.http.post(this.appsetting.myGlobalVar + 'add_to_cart', Serialized, options).map(res => res.json()).subscribe(response => {
       Loading.dismiss();
       console.log(response);

      if(response.status == true){
//      this.navCtrl.push(CartPage);
    let toast = this.toastCtrl.create({
    message: "Product added Succesfully to Cart",
    duration: 1500,
    position: 'middle'
  });
   localStorage.setItem('proctnumberincart', JSON.stringify(response.data.products.length));
    this.no_of_products =  JSON.parse(localStorage.getItem('proctnumberincart'));
         console.log(  this.no_of_products );
      console.log( this.appsetting.cartid );
  toast.present();
      
      }else{
//        this.navCtrl.push(CartPage);
         this.ToastMsg(response.message);
      }
  },(err)=>{
     this.ToastMsg('Something went wrong');
      Loading.dismissAll();
      console.log(err);
  });    })}
      serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  ToastMsg(msg){
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 3000,
    position: 'middle'
  });
  toast.present();
}
}
