import { Component } from '@angular/core';

import { ReviewsPage } from '../reviews/reviews';
import { ProductviewPage } from '../productview/productview';

import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';


/**
 * Generated class for the ChefdetialsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chefdetials',
  templateUrl: 'chefdetials.html',
})
export class ChefdetialsPage {
array:any=[];
splarray:any=[];
 starone:any='star-outline';
    startwo:any='star-outline';
     starthree:any='star-outline';
      starfour:any='star-outline';
       starfive:any='star-outline';

  constructor(public navCtrl: NavController, 
       public appsetting: Appsetting, 
       public http: Http,public navParams: NavParams,
       private toastCtrl:ToastController) {
//       alert('hjhh');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChefdetialsPage');
    this.getchefdetail();
   
      
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
  getchefdetail(){
       if (localStorage.getItem('Chefdetail')) {
            this.array.push(JSON.parse(localStorage.getItem('Chefdetail'))) ;

           console.log(this.array);
           console.log(this.array[0].products);
           console.log(this.array[0].avgrating)
            if(this.array[0].avgrating == 1){
                  this.starone = 'star'
              }
              else if(this.array[0].avgrating == 2){
                   this.starone = 'star'
                  this.startwo = 'star'
              }
              else if(this.array[0].avgrating == 3){
                   this.starone = 'star'
                  this.startwo = 'star'
                  this.starthree = 'star'
              }
              else if(this.array[0].avgrating == 4){
                  this.starone = 'star'
                  this.startwo = 'star'
                  this.starthree = 'star'
                   this.starfour = 'star'
              }
             else if(this.array[0].avgrating == 5){
                 this.starone = 'star'
                  this.startwo = 'star'
                  this.starthree = 'star'
                   this.starfour = 'star'
                  this.starfive = 'star'
             }  else if((1.1 <=this.array[0].avgrating)&&(this.array[0].avgrating <= 1.5)){
           
              this.starone = 'star-half'
                  
              }  else if((1.6 <= this.array[0].avgrating)&&(this.array[0].avgrating <= 1.9)){
            
              this.starone = 'star'
                  this.startwo = 'star'
                
              }  else if((2.1 <= this.array[0].avgrating)&&(this.array[0].avgrating <= 2.5)){
           
              this.starone = 'star'
                  this.startwo = 'star'
                   this.starthree = 'star-half'
                
              }  else if((2.6 <= this.array[0].avgrating)&&(this.array[0].avgrating <= 2.9)){
             
              this.starone = 'star'
                  this.startwo = 'star'
                  this.starthree = 'star'
                
              }
                else if((3.1<= this.array[0].avgrating)&&(this.array[0].avgrating <= 3.5)){
                   
              this.starone = 'star'
                  this.startwo = 'star'
                  this.starthree = 'star'
                   this.starfour='star-half'
                
              }
                else if((3.6 <= this.array[0].avgrating)&&(this.array[0].avgrating <= 3.9)){
                   
              this.starone = 'star'
                  this.startwo = 'star'
                  this.starthree = 'star'
                  this.starfour='star'
              }
           else if((4.1 <= this.array[0].avgrating)&&(this.array[0].avgrating <= 4.5)){
            
              this.starone = 'star'
                  this.startwo = 'star'
                  this.starthree = 'star'
                   this.starfour='star-half'
                
              }
                else if((4.6 <= this.array[0].avgrating)&&(this.array[0].avgrating <= 4.9)){
                   
              this.starone = 'star'
                  this.startwo = 'star'
                  this.starthree = 'star'
                  this.starfour='star'
                  this.starfive='star'
                
              }
           this.splarray = JSON.parse(localStorage.getItem('Chefdetail'));
           console.log(this.splarray.productss);
       }
  }
  dishview(prod){
      console.log(prod)
//       console.log(this.splarray.products);
       localStorage.setItem('producttss', JSON.stringify(prod));
      this.navCtrl.push(ProductviewPage);
  }
   review() {
    this.navCtrl.push(ReviewsPage);
  }
  
  // toggleGroup(group) {
  //   if (this.isGroupShown(group)) {
  //       this.shownGroup = null;
  //   } else {
  //       this.shownGroup = group;
  //   }
  // }

  // isGroupShown(group) {
  //   return this.shownGroup === group;
  // }

}
