 import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController ,ModalController} from 'ionic-angular';
import * as moment from 'moment';
import { TabsPage } from '../tabs/tabs';
import { SigninPage } from "../signin/signin";
import { HomePage } from "../home/home";
import { LocationPage } from "../location/location";
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { MapmodalPage } from "../mapmodal/mapmodal";
import { Appsetting } from "../../providers/appsetting";
//import { Geolocation } from '@ionic-native/geolocation';
import { Events } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Device } from '@ionic-native/device';
import { FCM } from '@ionic-native/fcm';
import { Geolocation } from '@ionic-native/geolocation';
import { NominatimapPage } from '../nominatimap/nominatimap';
import { CountryPickerModule, CountryPickerService } from 'angular2-countrypicker';
import { AndroidPermissions } from '@ionic-native/android-permissions';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
    public countries: any[];
  key: boolean = false;
  date: any;
  arr;
  slat:any;
  slong:any;
  locationstatus:boolean = false;
  devicetoken:any;
  savd:any=[];
  address:any;
  public Ctype = 'password';
  public iconname1 = 'eye';
   public ptype = 'password';
  public iconname = 'eye';
  number: boolean=false;
  public data: any = {};
  public lat: number;
  public showCpass:boolean = false;
   public showpass:boolean = false;
  public long: number;
  public validateEqual: string
// permissions = cordova.plugins.permissions;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public geolocation: Geolocation,
    public appsetting: Appsetting,
    private fcm: FCM,
    private androidPermissions: AndroidPermissions,
    public nativeGeocoder: NativeGeocoder,
    public http: Http,
    private device: Device,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    private countryPickerService: CountryPickerService,
    public events : Events
  ) {
  this.countryPickerService.getCountries().subscribe(countries => {
  this.countries = countries
  console.log(countries);
  });
//  alert('updatehogai');
 fcm.getToken().then(token=>{
      this.devicetoken = token;
      })
      fcm.onNotification().subscribe(data=>{
   if(data.wasTapped){
     console.log("Received in background");
   } else {
     console.log("Received in foreground");
   };
 })
// this.GetLocation();
// this.cities()
 
  

  }
//  cities(){
//     let headers = new Headers();
//    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
////    let options = new RequestOptions({ headers: headers });
//       this.http.get('http://rafao.us-west-2.elasticbeanstalk.com/api/allcity').map(res => res.json()).subscribe(response => {
//           console.log(response.data);
//           this.arr = response.data;
//           console.log(this.arr)
//          
//       });
//  }

  lupap(){
      
      console.log(this.data.city);

      this.address = this.data.address;
      console.log(this.address);
       if(this.address==''){
            this.AlertMsg3('Please fill the address');
//          this.openmapmodal();
      }
      if(this.address==undefined){
            this.AlertMsg3('Please fill the address');
//          this.openmapmodal();
      } else{
      var matches = this.address.match(/\d+/g);
if (matches != null) {
//    console.log('number');
    this.number = true;
    
}else{
    this.number = false;
}

if(this.number ==true){
   console.log('yes it is having number');
   this.AlertMsg2('Empty response on Nominatim<br>Search via Google maps<br>');
   
}else{

      console.log('false');
let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
let options = new RequestOptions({ headers: headers})
if(this.address){
    this.address = this.address.replace(/" "/g, '%20');
    console.log(this.address)
var adr = this.address
console.log(adr);
this.http.post('http://nominatim.openstreetmap.org/search/'+adr+'?format=json&addressdetails=1&limit=1&polygon_svg=1',options).map(res => res.json()).subscribe(response => {
    console.log(response[0]);
    if(response[0] != undefined){
    if(response[0].place_id != ''){
        
        console.log('working');
         localStorage.setItem('NominatimDetail',JSON.stringify(response[0]));
//        this.navCtrl.push(NominatimapPage);
         let modal = this.modalCtrl.create(NominatimapPage);
    modal.onDidDismiss(data => { 
      this.AlertMsg4('Your Location has been saved')
  });
   modal.present();
   
   if(response[0].address.road){
        this.data.address=response[0].place_id+','+response[0].address.road+','+response[0].address.city+','+ response[0].address.postcode+','+response[0].address.state+','+response[0].address.country+','+response[0].address.country_code
        }
        else if(response[0].address.city){
        this.data.address=response[0].place_id+','+response[0].address.city+','+ response[0].address.postcode+','+response[0].address.state+','+response[0].address.country+','+response[0].address.country_code
        }
         else if(response[0].address.state){
            this.data.address=response[0].place_id+','+response[0].address.state+','+response[0].address.country+','+response[0].address.country_code
        }
        else if(response[0].address.state_district){
            this.data.address=response[0].place_id+','+response[0].address.state+','+response[0].address.state_district+','+response[0].address.country+','+response[0].address.country_code
        }
       else if(response[0].address.country){
            this.data.address=response[0].place_id+','+response[0].address.country+','+response[0].address.country_code
        }
     this.lat = response[0].lat
    this.long = response[0].lon
      console.log(this.lat,this.long)  
    }}
    else{
        console.log('neelanshi');
         this.AlertMsg2('Empty response on Nominatim<br>Search via Google maps<br>');
       
    }
//    else
//        {
//       this.AlertMsg1('Empty response on Nominatim<br>Search via Google maps<br>');
//        this.openmapmodal();
//    }
    
});


}
}

      
  }
  }
    showPassword() {    
   console.log('showpassword');   
    this.showpass = !this.showpass;   
     if(this.showpass){    
       this.ptype = 'text';  
           this.iconname = 'eye-off';  
             } else {    
               this.ptype = 'password';   
                  this.iconname = 'eye';    }  }
                  
  showCPassword() {    
   console.log('showCpassword');   
    this.showCpass = !this.showCpass;   
     if(this.showCpass){    
       this.Ctype = 'text';  
           this.iconname1 = 'eye-off';  
             } else {    
               this.Ctype = 'password';   
                  this.iconname1 = 'eye';    }  }
  Registration(register) {
    console.log('registration');
    console.log(register.value);
    console.log(register.value.address);
//    alert(JSON.stringify(register.value));
    console.log(this.lat, this.long);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
    if (register.value.password.indexOf(' ') >= 0) {
      let toast = this.toastCtrl.create({
        message: 'Space not allowed in password',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
    } else {
      if (register.value.phone) {
        register.value.phone = register.value.phone.replace(/-/g, "");
        var postdata = {
          first_name: register.value.firstname,
          last_name: register.value.lastname,
          birth_day: register.value.dob,
          gender: register.value.gender,
          phone: register.value.phone,
          emailid: register.value.email,
          password: register.value.password,
          address:   this.data.address,
          lat: this.lat,
          long: this.long,
          role: 'user',
          deviceid:this.devicetoken
        }
        console.log(postdata);
        
        if(this.lat != null){
        var Serialized = this.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
         spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
    dismissOnPageChange:true
        });
        Loading.present().then(() => {
          this.http.post(this.appsetting.myGlobalVar + 'chefregistration', Serialized, options).map(res => res.json()).subscribe(response => {
            console.log(response);
            Loading.dismiss();
            if (response.status == true) {
//              this.AlertMsg('CONGRATULATIONS<br>You have been selected to provide your services in RAFAHO.<br>Press continue to complete the registration');
              this.ToastMsg('You have succesfully registered');
              
                localStorage.setItem('UserDetail',JSON.stringify(response.data));
             var userdetail = JSON.parse(localStorage.getItem('UserDetail'));
                 var postdata2 = {
            user_id: userdetail._id,
             saved_address: userdetail.address
       }
       
          console.log(postdata2)
           var Serialized = this.serializeObj(postdata2);
            this.http.post(this.appsetting.myGlobalVar + 'user/add_saved_address', Serialized, options).map(res => res.json()).subscribe(response2 => {
                console.log(response2);
                if(response2.status == true){
                 localStorage.setItem('UserDetail',JSON.stringify(response2.data[0]));
                 }
            })    
                 this.appsetting.svd.push(response.data.address);
                    localStorage.setItem('Svedaddress',JSON.stringify(this.appsetting.svd));
                    this.events.publish('hk');
                  this.navCtrl.push(TabsPage);
            } else{
                 this.AlertMsg1(response.message);
            }
          },(err)=>{
                this.ToastMsg('Something went Wrong');
                Loading.dismissAll();
            })
        })
      }else{
           this.AlertMsg('Please add address');
      }}
    }

  }

  /*************function for get user corrent location (latitude and longitude) and get address from lat long ************/
  GetLocation(){
    
        var Loading = this.loadingCtrl.create({
           spinner: 'bubbles',
            cssClass: 'loader',
            content: "Loading",
    dismissOnPageChange:true
        });
         Loading.present().then(() => {
    this.geolocation.getCurrentPosition().then((resp) => {
         
      // resp.coords.latitude
      //
      // resp.coords.longitude
      console.log('latitude:'+resp.coords.latitude+'longitude:'+resp.coords.longitude);
      this.locationstatus = true;
      // this.lat = resp.coords.latitude;
      // this.long = resp.coords.longitud
//      let timerId = setInterval(() =>  Loading.dismiss(), 5000);
// setTimeout(() => { clearInterval(timerId);  let toast = this.toastCtrl.create({
//        message: 'Something Went Wrong',
//        duration: 3000,
//        position: 'top'
//      });
//      toast.present(); }, 7000);
  Loading.dismiss();
//      this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
//      .then((result: NativeGeocoderReverseResult) => {
//        // alert(JSON.stringify(result));
//          if (result.subThoroughfare){
//        this.data.address=result.subThoroughfare+','+result.thoroughfare+','+ result.subLocality+','+result.locality+','+result.postalCode+','+result.countryName;
//            } else if (result.thoroughfare){
//                 this.data.address=result.thoroughfare+','+ result.subLocality+','+result.locality+','+result.postalCode+','+result.countryName;
//            }
//            else {
//                 this.data.address= result.subLocality+','+result.locality+','+result.postalCode+','+result.countryName;
//            }
//        //  alert(this.data.result +'Neelanshi');
//      }).catch((error: any) => console.log(error));
     }).catch((error) => {
       console.log('Error getting location', error);
       this.ToastMsg('Please enable your location');
       Loading.dismissAll();
     });
     });
  }

  serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    console.log('Neelanshi');
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
  ToastMsg(msg){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
    ToastMsg1(msg){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 5000,
      position: 'middle'
    });
    toast.present();

    
  }
 AlertMsg1(msg){
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
   AlertMsg3(msg){
    let alert = this.alertCtrl.create({
      title: 'RAFAHO',
      message: msg,
      buttons: [
        {
          text: 'OK',
          role: 'submit',
          handler: () => {
            console.log('ok clicked');
//            this.openmapmodal();
            // this.navCtrl.push(ProcessingformPage);
          }
        }
      ]
    });
    alert.present();
  }
   AlertMsg2(msg){
    let alert = this.alertCtrl.create({
      title: 'RAFAHO',
      message: msg,
      buttons: [
        {
          text: 'OK',
          role: 'submit',
          handler: () => {
            console.log('ok clicked');
            this.openmapmodal();
            // this.navCtrl.push(ProcessingformPage);
          }
        }
      ]
    });
    alert.present();
  }
     AlertMsg4(msg){
    let alert = this.alertCtrl.create({
      title: 'RAFAHO',
      message: msg,
      buttons: [
        {
          text: 'OK',
          role: 'submit',
          handler: () => {
            console.log('ok clicked');
//            this.openmapmodal();
            // this.navCtrl.push(ProcessingformPage);
          }
        }
      ]
    });
    alert.present();
  }
  AlertMsg(msg){
    let alert = this.alertCtrl.create({
      title: 'RAFAHO',
      message: msg,
      buttons: [
        
        {
          text: 'OK',
          role: 'CANCEL',
          handler: () => {
            console.log('OK clicked');
            this.openmapmodal();
//            this.navCtrl.push(LocationPage);
          }
        }
      ]
    });
    alert.present();
  }

  tabbtnPage() {
    this.navCtrl.push(TabsPage);
    // this.navCtrl.push(SignupPage);
  }
  phonevalidation(phn) {
    console.log(phn.length);
    if (phn.length == 3) {
      this.data.phone = this.data.phone + '-';
    } else if (phn.length == 7) {
      this.data.phone = this.data.phone + '-';
    }

  }
  
  openmapmodal() {
      if( this.locationstatus == true){ let modal = this.modalCtrl.create(NominatimapPage);
    modal.onDidDismiss(data => { 
    this.data.address=data.address;
    console.log(this.data.address)
    console.log(data.lati)
    console.log(data.longi)
    this.lat = data.lati
    this.long = data.longi
    this.AlertMsg4('Your Location:'+this.data.address+' '+' is  saved')
  });
    modal.present();}
    else{
          this.ToastMsg1('Please enable your Location');
    }
  
     
     
  
    
  }
  ngOnInit() {
    this.date = moment(new Date()).format('YYYY-MM-DD');
    console.log(this.date);
    this.GetLocation();

  }
  


  handleKeyboardEvent(event: KeyboardEvent, pass, cpass) {
    console.log(event.key);
    console.log(event);
    console.log(pass);
    console.log(cpass);
    console.log(this.key);
    if (pass == cpass) {
      console.log(this.key);
      return this.key = true;

    } else {
      console.log(this.key);
      return this.key = false;
    }

  }

  login() {
    this.navCtrl.push(SigninPage);
  }
}
