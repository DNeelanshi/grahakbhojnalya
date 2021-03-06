import { Component, ViewChild  } from '@angular/core';
import { Platform, NavController,Nav, ToastController,AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Appsetting } from '../providers/appsetting';
import {Http, Headers, RequestOptions} from '@angular/http';
import { TabsPage } from '../pages/tabs/tabs';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { ChatPage } from '../pages/chat/chat';
import { ProfilePage } from '../pages/profile/profile';
import { RafahoPage } from '../pages/rafaho/rafaho';
import { FilterPage } from '../pages/filter/filter';
import { SelectdishPage } from '../pages/selectdish/selectdish';
import { MapmodalPage } from '../pages/mapmodal/mapmodal';
import { NominatimapPage } from '../pages/nominatimap/nominatimap';
import { LocationPage } from '../pages/location/location';
import { AndroidPermissions } from '@ionic-native/android-permissions';
//import { Keyboard } from '@ionic-native/keyboard';
 
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(NavController) nav: NavController
 alert:any;
  public rootPage:any = '';

  constructor( statusBar: StatusBar,splashScreen: SplashScreen,
   
   public http:Http,

  private platform: Platform, private toastCtrl:ToastController, 
  private androidPermissions: AndroidPermissions,private alertCtrl: AlertController,
  public appsetting: Appsetting)
        {
           
             alert('Welcome to Rafaho');
   platform.ready().then(() => {

//           
// platform.registerBackButtonAction(()=>{
////     if (this.navCtrl.canGoBack()){
////                  this.navCtrl.pop();
////                }else{
// this.myHandlerFunction()
// });
         
    
       statusBar.overlaysWebView(true);
      statusBar.hide();
      splashScreen.hide();
    });
//
//      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.GEOLOCATION).then(
//  result =>{ console.log('Has permission?',result.hasPermission)
//      if(result.hasPermission == true){}else{
//          this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.GEOLOCATION, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
//         
//        let toast = this.toastCtrl.create({
//            message: 'Turn on your location',
//            duration: 3000,
//            position: 'middle'
//        });
//        toast.present();
//    
//      }
//  },
//  err => {this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.GEOLOCATION)}
//);
    
     if(localStorage.getItem('UserDetail')){
          this.rootPage = TabsPage;
     } else{
         this.rootPage = SigninPage;
     }
  }

  
   myHandlerFunction(){
  this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                  this.alert =null;
                }
              },
              {
                text: 'Back',
                handler: () => {
//                  this.platform.exitApp();
                    alert('hello')
                    console.log(this.nav);
                    this.nav.pop(this.rootPage);
//                    this.nav.config.plt.backButton.observers.pop()
                }
              }
            ]
          });
          this.alert.present(); 
     }
//     get navCtrl(): NavController {
//    return this.app.getRootNav();
//  }
}
