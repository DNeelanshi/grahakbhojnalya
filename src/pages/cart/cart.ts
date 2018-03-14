import {Component} from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';s
import {IonicPage, NavController, NavParams, LoadingController, ToastController,AlertController} from 'ionic-angular';
import {PaymentPage} from '../payment/payment';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Appsetting} from '../../providers/appsetting';
import {LocationPage} from '../location/location';
import {TabsPage} from '../tabs/tabs';
import * as moment from 'moment';
import {InAppBrowser} from '@ionic-native/in-app-browser';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-cart',
    templateUrl: 'cart.html',
})
export class CartPage {
    chef: any = [];
    user: any = [];
    getcrt: any = [];
    str: any;
    orderaddress: any;
    total1: any = 0;
    str1: any;
    str2: any;
    nodata: any = 0;
    bookdt: any;
    datetosend: any;
    date: any;
    bookalt: any;
    trans_id:any;
   
    test: any;
    data: any = {};
    subtotal: any = [];
    productsamount: any = [];
    constructor(public navCtrl: NavController,
        public toastCtrl: ToastController,
        public alertCtrl:AlertController,
        public loadingCtrl: LoadingController,
        public appsetting: Appsetting,
        public http: Http,
        private iab: InAppBrowser,
        public navParams: NavParams) {
        //        var Loading = this.loadingCtrl.create({
        //         spinner: 'hide',
        //    cssClass: 'loader',
        //    content: "<img src='assets/img/icons3.gif'>",
        //    dismissOnPageChange:true
        //        });
        //        Loading.present().then(() => {
        this.get();
        this.getcart();
//        alert('new1')
//      Loading.dismiss();
//              })
//      this.total();

    }

    get() {
        if (JSON.parse(localStorage.getItem('Chefdetail'))) {
            this.chef = JSON.parse(localStorage.getItem('Chefdetail'))
            console.log(this.chef);
        } else {
            this.nodata = 1;
        }
        this.user = JSON.parse(localStorage.getItem('UserDetail'))
        console.log(this.user);
        if ((localStorage.getItem('Bookingdatetime'))) {
            this.bookdt = JSON.parse(localStorage.getItem('Bookingdatetime'))
        } else {
            //        this.bookdt =  moment();
            this.bookdt = moment(new Date()).format('YYYY-MM-DD[T]HH:mm');
        }
        this.datetosend = this.bookdt
        console.log(this.bookdt);

        this.bookdt = this.bookdt.split(":00Z", 1);

        console.log(this.bookdt);
        this.data.bookdt = this.bookdt[0];
        console.log(this.data.bookdt);
  if ((localStorage.getItem('Altdatetime'))) {
            this.bookalt = localStorage.getItem('Altdatetime')
            console.log(this.bookalt);
        }
       
        
        if (localStorage.getItem('Orderaddress')) {
            this.orderaddress = localStorage.getItem('Orderaddress')
        }
        else {
            this.orderaddress = this.user.address;
        }
        console.log(this.orderaddress);
        this.orderaddress = this.orderaddress.replace(/"/gi, '');
        this.str = this.orderaddress.split(",", this.orderaddress.length);
        this.str1 = this.str[0] + ',' + this.str[1]
        var len = this.str1.length + 1;
        this.str2 = this.orderaddress.slice(len, this.orderaddress.length);
        console.log(this.str);
        console.log(this.str1)
        console.log(this.str2)

    }

    getcart() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        let options = new RequestOptions({headers: headers})
        var a = JSON.parse(localStorage.getItem('UserDetail'));
        console.log(a);
        var postdata = {
            user_id: a._id
        }
        var Serialized = this.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'hide',
            cssClass: 'loader',
            content: "<img src='assets/img/icons3.gif'>",
            dismissOnPageChange: true
        });
        Loading.present().then(() => {
            this.http.post(this.appsetting.myGlobalVar + 'get_cart_data', Serialized, options).map(res => res.json()).subscribe(response => {
                console.log(response)
                Loading.dismiss();
                console.log(response.data.length);
                if (response.data.length == 0) {
                    var Loading1 = this.loadingCtrl.create({
                        spinner: 'hide',
                        cssClass: 'loader',
                        content: "<img src='assets/img/icons3.gif'>",
                        dismissOnPageChange: true
                    });
                    Loading1.present().then(() => {
                        if (JSON.parse(localStorage.getItem('proctnumberincart'))) {
                            localStorage.removeItem('proctnumberincart');
                        }
                        this.getcrt = response.data
                console.log(this.getcrt)
                this.appsetting.cart = this.getcrt;

                localStorage.setItem('Cartlist', JSON.stringify(this.appsetting.cart));
                this.subtotal = JSON.parse(localStorage.getItem('Cartlist'));
                console.log(this.subtotal);
                this.total();
                        Loading1.dismiss();
                    })
                } else {
                    localStorage.setItem('proctnumberincart', JSON.stringify(response.data[0].products.length));
            
                }
                        console.log(response.data[0]._id);
                this.appsetting.cartid = response.data[0]._id;
                console.log(response.data[0].products);
                this.getcrt = response.data[0].products;
                console.log(this.getcrt)
                this.appsetting.cart = this.getcrt;

                localStorage.setItem('Cartlist', JSON.stringify(this.appsetting.cart));
                this.subtotal = JSON.parse(localStorage.getItem('Cartlist'));
                console.log(this.subtotal);
                this.total();

            }, (err) => {
                this.ToastMsg('Something went wrong')
                Loading.dismissAll();
                console.log(err);
            });
        })

    }
    serializeObj(obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

        return result.join("&");
    }
    add(qnt, id) {
        var flag = 0;
        console.log(qnt, id);
        for (var i = 0; i < this.getcrt.length; i++) {
            if (id == this.getcrt[i]._id) {
                var index = i;
                flag = 1;
            }
        }
        console.log(flag);
        console.log(index)
        if (flag == 1) {
            qnt = parseFloat(qnt) + 1;
            this.getcrt[index].quantity = qnt;
            this.appsetting.cart[index].quantity = qnt;

            console.log(this.appsetting.cart[index].quantity)
            localStorage.setItem('Cartlist', JSON.stringify(this.appsetting.cart));
            this.total();
            //    this.total(id,index);
            return false;
        }

    }
    remove(qntity, id) {
        var flagg = 0;
        console.log(qntity, id)
        for (var i = 0; i < this.getcrt.length; i++) {
            if (id == this.getcrt[i]._id) {
                var index = i;
                flagg = 1;
            }
        }
        if (flagg == 1) {
            if (qntity == this.getcrt[index].minimum_order) {
                console.log(this.getcrt.quantity)
            }
            else {
                qntity = parseFloat(qntity) - 1;

                this.getcrt[index].quantity = qntity;
                console.log(this.getcrt);
                this.appsetting.cart[index].quantity = qntity;

                console.log(this.appsetting.cart[index].quantity)
                localStorage.setItem('Cartlist', JSON.stringify(this.appsetting.cart));
                this.total();


            }
            return false;
        }

    }

    delproduct(idd) {
        console.log(idd);
        console.log(this.appsetting.cartid);
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        let options = new RequestOptions({headers: headers})
        var a = JSON.parse(localStorage.getItem('UserDetail'));
        console.log(a);
        var postdata = {
            user_id: a._id,
            cart_id: this.appsetting.cartid,
            _id: idd
        }
        console.log(postdata);
        var Serialized = this.serializeObj(postdata);
        this.http.post(this.appsetting.myGlobalVar +'delete_add_to_cart_product', Serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response);
            if(response.message == 'There is no item in cart now'){
              
                this.getcart();
                this.ToastMsg('Product deleted successfully')
            }
            if (response.status == true) {
           
                this.getcart();
                this.ToastMsg('Product deleted successfully')
            }
        });
    }


    ToastMsg(msg) {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    }
    total() {
        this.subtotal = JSON.parse(localStorage.getItem('Cartlist'));
        console.log(this.subtotal);
        this.total1 = 0;
        for (var x = 0; x < this.subtotal.length; x++) {

            this.total1 = this.total1 + (this.subtotal[x].quantity * this.subtotal[x].price_per_plate)
        }
    }
    //total(id,index){
    //    
    //    console.log(id,index);
    //    this.productsamount =  this.getcrt[index].quantity * this.getcrt[index].price_per_plate
    //    console.log( this.productsamount);
    //   this.subtotal.push(this.productsamount);
    //   console.log(this.subtotal);
    //   
    //}
    ionViewDidLoad() {
        console.log('ionViewDidLoad CartPage');
    }
       pyment1() {
           var proid:any=[];
            var proname:any=[];
             var proquant:any=[];
             var orderservice:any=[];
             console.log(this.data.bookdt.length);
           if(this.data.bookdt.length < 17){
               console.log(this.datetosend)
           }else{
               this.datetosend=this.data.bookdt
                console.log(this.datetosend)
           }
          
            
          console.log(new Date(this.data.bookdt));
           console.log(this.getcrt);
           console.log(this.chef);
           console.log(this.user);
    //       console.log(this.bookdt);
           let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers}) 
    for(var j =0;j<this.getcrt.length;j++){
        proid.push(this.getcrt[j].product_id)
        proname.push(this.getcrt[j].product_name)
        proquant.push(this.getcrt[j].quantity)
        orderservice.push(this.getcrt[j].order_prefrence)
    }
    console.log(proid,proname,proquant,orderservice);
            proid = proid.join(':');
            proname = proname.join(':');
            proquant = proquant.join(':');
            orderservice = orderservice.join(':');
            console.log(proid,proname,proquant,orderservice);
     var postdata = {
      chef_id:this.chef._id,
      user_id:this.user._id,
    customer_address:this.str1+this.str2,
         booking_datetime: this.datetosend,
    total_order_amount:this.total1,
    products_id:proid,
    products_quantity: proquant,
    products_name:proname,
    order_prefrence:orderservice,
    payment_status:1,
    txn_id:  this.trans_id
           }
           console.log(postdata);
     var Serialized = this.serializeObj(postdata);
      var Serialized = this.serializeObj(postdata);
            var Loading = this.loadingCtrl.create({
              spinner: 'hide',
        cssClass: 'loader',
        content: "<img src='assets/img/icons3.gif'>",
        dismissOnPageChange:true
            });
            Loading.present().then(() => {
      this.http.post(this.appsetting.myGlobalVar + 'order/addorder', Serialized, options).map(res => res.json()).subscribe(response => {
          console.log(response);
           this.ToastMsg('Order placed successfully')
           localStorage.removeItem('proctnumberincart');
            this.navCtrl.push(TabsPage);
            
      },(err)=>{
          this.ToastMsg('Something went wrong');
          Loading.dismissAll();
      });})
      
       
       
      }
    loct() {
        this.navCtrl.push(LocationPage);
    }
    pyment() {
        if( this.total1> 0 ){

   var url = 'http://rafao.us-west-2.elasticbeanstalk.com/payment/amt='+this.total1+'=email='+this.user.email;
   
     var target = '_self'
    var options = 'location=no'
    var browser = this.iab.create(url,target,options);
    
      browser.on('loadstart').subscribe((e)=>{
//        alert(e)
        let url = e;
//        alert(url)

        if (e.url.includes('paymentstatus') == true){
//            alert('GETTING PAYMENT STATUS');
        var redirect_uri = e.url.split('=');
        var redirect_uri1= redirect_uri[1];
    var redirect_uri2 = redirect_uri1.split('/');
     var redirect_uri3= redirect_uri[2];
    var redirect_uri4 = redirect_uri3.split('/');

//        alert(redirect_uri2[0]);
  if((redirect_uri2[0] == 'DECLINED')||(redirect_uri2[0] == 'REJECTED')){
       let alert = this.alertCtrl.create({
                title: 'Payment info',
                subTitle: "Payment status: "+redirect_uri2[0]+"<br>for Transaction id:"+redirect_uri4[0],
                buttons:['ok']
                });
                alert.present();
                setTimeout(()=>alert.dismiss(),3000);
          
         
            localStorage.setItem('transid',redirect_uri4[0]);
             browser.close();
        } else if(redirect_uri2[0] == 'APPROVED'){
      this.trans_id=redirect_uri4[0];
       
              let alert = this.alertCtrl.create({
                title: 'Payment info',
                subTitle: "Payment status: "+redirect_uri2[0]+"<br>for Transaction id:"+redirect_uri4[0],
                buttons:['ok']
                });
                alert.present();
                setTimeout(()=>alert.dismiss(),1000);
          
         
            localStorage.setItem('transid',redirect_uri4[0]);
             browser.close();
             this.pyment1()
        }
        
        }
                      if(e.url == 'http://rafao.us-west-2.elasticbeanstalk.com/?'){
            let code = redirect_uri[1];
             //alert(code);
             localStorage.setItem('code',code);
             browser.close();
        }
    }, err =>{
       console.log("InAppBrowser loadstart Event Error: " + err);
//        alert(err)
    });
        }
        else{
            let alert = this.alertCtrl.create({
                title: 'Make sure there are some items in cart',
                buttons:['ok']
                });
                alert.present();
                setTimeout(()=>alert.dismiss(),3000);  
        }
           
            
    }


    ngOnInit() {
        this.date = moment(new Date()).format('YYYY-MM-DD[T]HH:mm');
        //
        //   //console.log('fhfgh');
        //    
        //    
        //      this.data.datetime =this.date;
        //      console.log(new Date().toISOString())
        //    this.GetLocation();

    }
}
