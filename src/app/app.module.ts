import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ErrorHandler } from '@angular/core'
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import * as firebase from 'firebase';


firebase.initializeApp({
  apiKey: "AIzaSyB8jb_i3RAISlnNEABPEq1GSprWYSPXygE",
  authDomain: "caler-verification.firebaseapp.com",
  databaseURL: "https://caler-verification.firebaseio.com",
  projectId: "caler-verification",
  storageBucket: "caler-verification.appspot.com",
  messagingSenderId: "830051712767",
  appId: "1:830051712767:web:4b5dee8389a3cfc0"
});

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    ErrorHandler,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
