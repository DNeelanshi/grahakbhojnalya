import { ProductviewPage } from '../productview/productview';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController, Events } from 'ionic-angular';
import { Appsetting } from '../../providers/appsetting';
import { Http, Headers, RequestOptions } from '@angular/http';
/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
favourites:any=[];
iconname:any='heart';
user:any;
nodata=0;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public appsetting : Appsetting,
    public http: Http,
 
    public alertCtrl: AlertController,
    public toastCtrl:ToastController,
    public loadingCtrl:LoadingController,
    public events: Events) {
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
    
         events.subscribe('index', (res) => {
             console.log(res);
       if(res == 1){
           this.getfavourites();
       }
            })
  }
    doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
        this.getfavourites();
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  
  productview(data){
      console.log(data);
      let headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
  let options = new RequestOptions({ headers: headers });
  var postdata= {
      path:data.favorite_product_id
  }
  var Serialized = this.serializeObj(postdata);
  var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
    dismissOnPageChange:true
  });

  Loading.present().then(() => {
  this.http.post(this.appsetting.myGlobalVar+'users/sigleProductdata',Serialized,options).map(res=>res.json()).subscribe(response=>{
  console.log(response);
  console.log(response.data[0].products);
  for(var p =0; p< response.data[0].products.length ;p++){
      if(response.data[0].products[p]._id == data.favorite_product_id ){
          var products = response.data[0].products[p]
          localStorage.setItem('producttss', JSON.stringify(products))
          this.navCtrl.push(ProductviewPage);
      }
  }
  Loading.dismiss()
  })
  })
  
  }
getfavourites(){
    this.user = JSON.parse(localStorage.getItem('UserDetail'));
    let headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
  let options = new RequestOptions({ headers: headers });
  console.log(this.user._id);
  var postdata= {
      user_id:this.user._id
  }
  var Serialized = this.serializeObj(postdata);
  var Loading = this.loadingCtrl.create({
    spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
    dismissOnPageChange:true
  });

  Loading.present().then(() => {
  this.http.post(this.appsetting.myGlobalVar+'user/get_favarite_products',Serialized,options).map(res=>res.json()).subscribe(response=>{
  console.log(response);
 
  this.iconname ='heart';
  console.log(response.data[0].favorite)
   if(response.data[0].favorite == ''){
       this.nodata = 1;
       console.log('hogya kam');
   }else{  this.nodata = 0;}
 
  this.favourites = response.data[0].favorite;
  console.log( this.favourites);
   Loading.dismiss();
    })
    })
}

  favproduct(proid){
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
         user_id:this.user._id,
         favorite_product_id: proid
      }
            console.log(postdata)

         var Serialized = this.serializeObj(postdata);
         var Loading = this.loadingCtrl.create({
        spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
    dismissOnPageChange:true
        });
           Loading.present().then(() => {
  this.http.post(this.appsetting.myGlobalVar + 'user/delete_favarite_products', Serialized, options).map(res => res.json()).subscribe(responsee => {
        this.iconname = 'heart-outline';
      console.log(responsee);
      this.getfavourites();
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

  }
 
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }
   product() {
    this.navCtrl.push(ProductviewPage);
  }

}
