import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Geolocation } from '@ionic-native/geolocation';
import { FormBuilder,FormGroup} from '@angular/forms';


import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RetloginPage } from '../pages/retlogin/retlogin';
import { PloginPage } from '../pages/plogin/plogin';
import { TabhPage} from '../pages/tabh/tabh';
import { YourItemsPage} from '../pages/your-items/your-items';
import { EditHistoryPage} from '../pages/edit-history/edit-history';
import { NativeGeocoder } from '@ionic-native/native-geocoder';


import { GoogleMaps } from '@ionic-native/google-maps';
import { HttpClientModule } from '@angular/common/http';
import {HomePage} from '../pages/home/home';






import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MapsPage } from '../pages/maps/maps';

import { AgmCoreModule } from '@agm/core';
import { GeocoderProvider } from '../providers/geocoder/geocoder';



 var firebaseAuth = {
    apiKey: "AIzaSyBXx54N7DAKc6v9RE52P4Qcf0ckpkzf1yU",
    authDomain: "digimartt-16936.firebaseapp.com",
    databaseURL: "https://digimartt-16936.firebaseio.com",
    projectId: "digimartt-16936",
    storageBucket: "",
    messagingSenderId: "803787880510"
  };

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    RegisterPage,
    RetloginPage,
    PloginPage,
    TabhPage,
    MapsPage,
    HomePage,
    YourItemsPage,
    EditHistoryPage
    
   
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyDeMjFd459tC-fSBnQ4fLhxHnLxd7b1I5E'
    })
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    RegisterPage,
    RetloginPage,
    PloginPage,
    TabhPage,
    MapsPage,
    HomePage,
    YourItemsPage,
    EditHistoryPage
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    NativeGeocoder,
    GeocoderProvider,
  
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
    
  ]
})
export class AppModule {}
