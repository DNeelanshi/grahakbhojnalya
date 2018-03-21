import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController ,AlertController} from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import { Service } from '../../providers/service';
/**
 * Generated class for the ProductviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productview',
  templateUrl: 'productview.html',
})
export class ProductviewPage {
  pet: string;
 splarr:any=[];
 a:any;
 ar:any=[];
 price:any;
 extraarray:any=[];
 resultant:any=[];
 disharray:any =[];
 cart1:any;
 cartid:any;
 data:any={};
 result:any;
 services:any=[];
 iconname:any='heart-outline'
 no_of_products:any;
 quantity:any;
  constructor(public navCtrl: NavController, 
       public appsetting: Appsetting, 
       public http: Http,public navParams: NavParams,
       private toastCtrl:ToastController,
       private alertCtrl:AlertController,
       private myService:Service,
       public loadingCtrl: LoadingController) {
//       alert('happy');


       this.pet = "Description";
  
//       console.log(this.data.service);
  }
  favproduct(){
      let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
let options = new RequestOptions({ headers: headers})
      if(this.iconname == 'heart'){
        let alert1 = this.alertCtrl.create({
      title: 'RAFAHO',
      message: 'Remove from Favourite',
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
          handler: () => {
            
            
                  
                        
          var postdata = {
         user_id:this.a._id,
         favorite_product_id: this.splarr._id
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
  this.http.post(this.appsetting.myGlobalVar + 'user/delete_favarite_products', Serialized, options).map(res => res.json()).subscribe(responsee => {
        this.iconname = 'heart-outline';
      console.log(responsee);
      
       Loading.dismiss();
       
  },(err)=>{
      Loading.dismissAll();
      this.ToastMsg('Something went wrong');
  })})
          }
        }
      ]
    });
     alert1.present();}
     else{
         let alert = this.alertCtrl.create({
      title: 'RAFAHO',
      message: 'Save this as favourite product',
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
          handler: () => {
             
       var postdata = {
       user_id: this.a._id,
favorite_product_id:this.splarr._id,
favorite_product_image_url:this.splarr.product_image0
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
  this.http.post(this.appsetting.myGlobalVar + 'user/add_to_favarite', Serialized, options).map(res => res.json()).subscribe(responsee => {
       this.iconname = 'heart';
      console.log(responsee);
      
       Loading.dismiss();
       if(responsee.status == false){
           this.ToastMsg(responsee.message);
           
       }
  },(err)=>{
      Loading.dismissAll();
      this.ToastMsg('Something went wrong');
  })})
          }
        }

      ]
    });
    alert.present();
     }
  }
cartpro(){
    this.navCtrl.push(CartPage)
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductviewPage');
     console.log(window.navigator.onLine);
     this.getdishdetail();
              
          this.a = JSON.parse(localStorage.getItem('UserDetail'));
      console.log(this.a);
            if (JSON.parse(localStorage.getItem('proctnumberincart'))){
         this.no_of_products =  JSON.parse(localStorage.getItem('proctnumberincart'));
         console.log(  this.no_of_products );
 }else{
     this.no_of_products =0;
 }
    if (window.navigator.onLine == true) {
    } else {
      let toast = this.toastCtrl.create({
        message: 'Network connection failed',
        duration: 3000,
        position: 'top'
      });
      toast.present();
  }}
   getdishdetail(){
         if (localStorage.getItem('producttss')) {
             this.splarr = JSON.parse(localStorage.getItem('producttss'));
//               this.array = JSON.parse(localStorage.getItem('Extrastaff'));
             console.log(this.splarr);
             console.log(this.splarr.product_ingredients)
             var str = this.splarr.product_ingredients;
             console.log(str);
                          //   
   var str_array = str.split(',');
////
for(var i = 0; i < str_array.length; i++) {
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
        if((this.splarr.take_away)||(this.splarr.cook_at_user_place)||(this.splarr.home_delivery)){
            
        }
              if(this.splarr.take_away == 0){
          if(this.splarr.cook_at_user_place == 0){
//              if(this.splarr.home_delivery == 0){
//                  return null;
//              }else{
                  this.services.push('Home Delivery');
              
          }else{
               if(this.splarr.home_delivery == 0){
                 this.services.push('Cook at MY Place');
              }
              else{
                   this.services.push('Home Delivery')
                   this.services.push('Cook at My Place')
              }
          }
      }else{
          if(this.splarr.cook_at_user_place == 0){
              if(this.splarr.home_delivery == 0){
                   this.services.push('Cook at Chef place')
              }else{
                  this.services.push('Home Delivery')
                   this.services.push('Cook at Chef place')
              }
          }else{
               if(this.splarr.home_delivery == 0){
                this.services.push('Cook at MY Place')
                   this.services.push('Cook at Chef place')
              }
              else{
                    this.services.push('Cook at MY Place')
                   this.services.push('Cook at Chef place')
                     this.services.push('Home Delivery')
              }
          }
      }
      console.log(this.services);
        console.log(this.price,this.quantity);
  }
  crt11(dish1){
      console.log(this.quantity);
       let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
let options = new RequestOptions({ headers: headers})

      var b = JSON.parse(localStorage.getItem('Chefdetail'));
      console.log(b); 
      var c = JSON.parse(localStorage.getItem('Bookingdatetime'));
      console.log(c); 
      console.log(this.data.service);
      if(this.data.service != undefined){
      if(this.data.service == 'Home Delivery'){
          console.log('home')
          this.data.service = 3;
      }else if(this.data.service == 'Cook at My Place'){
         console.log('my place')
        this.data.service = 2;
      }else {
         console.log('chef place')
           this.data.service = 1;
      }
      console.log(this.data.service);
      console.log(this.a)
     var postdata = {
    user_id:this.a._id,
    user_address :this.a.address,
    long:this.a.longitude,
    lat:this.a.latitude,
    chef_id:b._id,
    booking_datetime:c,
    product_id:this.splarr._id,
    product_name:this.splarr.product_name,
   price_per_plate:this.splarr.product_price,
    quantity:this.quantity,
    minimum_order:this.splarr.minimum_order,
     product_image0 :this.splarr.product_image0,
     product_ingredients:this.splarr.product_ingredients,
     discount:this.splarr.discount,
     order_prefrence:this.data.service
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
//      this.navCtrl.push(CartPage);
 
      
      }else{
        this.ToastMsg(response.message);
//        this.navCtrl.push(CartPage);
      }
  },(err)=>{
     this.ToastMsg('Something went wrong');
      Loading.dismissAll();
      console.log(err);
  });    }) } else{
       this.ToastMsg('Select a Service');
  }
  }
 
   
           
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
  ToastMsg(msg){
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 3000,
    position: 'middle'
  });
  toast.present();
}
    serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  add(qnt){
      this.quantity = parseFloat(qnt)+1;
      console.log(this.quantity);
      console.log(qnt);
  }
  remove(qntity){
      if(this.quantity == this.splarr.minimum_order){
          console.log(this.quantity)
          let toast = this.toastCtrl.create({
    message: 'Minimum order quantity must be :'+' '+this.splarr.minimum_order,
    duration: 1000,
    position: 'top'
  });
;

  toast.present();
      }
          else{
          this.quantity = parseFloat(qntity)-1;
      console.log(this.quantity);
      console.log(qntity);
      }
      
  }

}
