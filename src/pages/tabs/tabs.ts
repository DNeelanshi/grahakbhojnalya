import { Component } from '@angular/core';

import { ChatPage } from '../chat/chat';
import { FavoritesPage } from '../favorites/favorites';
import { RafahoPage } from '../rafaho/rafaho';
import { Appsetting } from "../../providers/appsetting";
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
//import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { CartPage } from '../cart/cart';
//import { FittingroomPage } from '../fittingroom/fittingroom';
//import { MyfavoritesPage } from '../myfavorites/myfavorites';
//import { HomePage } from '../home/home';
import { Events } from 'ionic-angular';
import { AfterViewInit, OnInit, ViewChild } from '@angular/core';
import {Tabs} from 'ionic-angular/navigation/nav-interfaces';
//import { SearchPage } from '../search/search';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
@ViewChild('myTabs') tabRef: Tabs;
  tab1Root = HomePage;
  tab2Root = FavoritesPage;
  tab3Root = RafahoPage;
  tab4Root = ChatPage;
  tab5Root = ProfilePage;
count: any;
  Tab: any;
  constructor(public events: Events,
    public navCtrl: NavController,
    public viewCtrl: ViewController,
     public appsetting: Appsetting,
    public navParams: NavParams) {
      console.log(this.tab1Root);
      
  
//         if(this.tab1Root == HomePage){
//             this.appsetting.home1 = 1;
//         }
  }

//    tabIndex(event) {
//     console.log('calling----'+event);
//
//    var domevent = event.srcElement.parentNode.id || event.path[1].id;
//    console.log(domevent)
//    var split = domevent.split('-');
//    var target = split[2];
//    console.log(target)
//    if (target == '1') {
//      this.events.publish('index', '1');     
//    } else if (target == '2') {
//      this.events.publish('index', '2'); 
//    } else if(target == '3'){
//         this.events.publish('index', '3');
//    }
//     else if(target == '4'){
//         this.events.publish('index', '4');
//    }else{
//        this.events.publish('index','0');
//    }
//  }
tabIndex(event){
    console.log(event);
         console.log('calling----'+event.srcElement);

    var domevent = event.srcElement.parentNode.id || event.path[1].id;
    console.log(domevent)
    var split = domevent.split('-');
    var target = split[2];
    console.log(target)
    if (target == '1') {
      this.events.publish('index', '1');     
    } else if (target == '2') {
      this.events.publish('index', '2'); 
    } else if(target == '3'){
         this.events.publish('index', '3');
    }
     else if(target == '4'){
         this.events.publish('index', '4');
    }else{
        this.events.publish('index','0');
    }
}
}
