import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ToastController,LoadingController, Platform } from 'ionic-angular';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import * as moment from 'moment';
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
date:any;
user:any=[];
data:any={}
chat:any;
  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      private platform: Platform,
      private alertCtrl:AlertController,
      private loadCtrl:LoadingController,
      public appsetting: Appsetting,
      private toastCtrl:ToastController, public http: Http) {
   this.date = new Date().toLocaleTimeString()
      console.log(this.date);
      this.user = JSON.parse(localStorage.getItem('UserDetail'));
    console.log( this.user);
    this.getchat();
  }
addmessage(msg){
    
    console.log(msg)
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
    var postdata = {
   chef_id:'5a8ab822d1cb4b0d329a55ad',
    user_id:this.user._id,
    message:msg,
    sender_id:this.user._id
    }
 
      var serialized = this.serializeObj(postdata);
//           var Loading = this.loadCtrl.create({
//            spinner: 'hide',
//            cssClass: 'loader',
//            content: "<img src='assets/image/icons3.gif'>",
//            dismissOnPageChange:true
//     });
//     Loading.present().then(() => {
    this.http.post(this.appsetting.myGlobalVar + 'chats/addmessage', serialized, options).map(res => res.json()).subscribe(data1 => {
           console.log('get msg')
           console.log(data1);
//        Loading.dismiss();
        if(data1.status == true){
            this.getchat();
             
        }else{
             let toast = this.toastCtrl.create({
        message: data1.message,
        duration: 3000,
        position: 'middle'
      });
      toast.present();
        }
        },(err)=>{
             let toast = this.toastCtrl.create({
        message: 'Something went wrong',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
//            Loading.dismissAll();
        })
//        })
}
getchat(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
     var postdata1 = {
      chef_id:'5a8ab822d1cb4b0d329a55ad',
      user_id:this.user._id
    
           }
      var serialized = this.serializeObj(postdata1);
      this.http.post(this.appsetting.myGlobalVar + 'chats/getchat', serialized, options).map(res => res.json()).subscribe(res => {
          console.log('get chat')
          console.log(res);
          this.chat = res.data[0].chat_messages;
          
      })
}
    serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
}

