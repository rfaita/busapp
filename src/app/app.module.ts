import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { LinesComponent } from './lines/lines.component';
import { BusStopsComponent } from './busstops/busstops.component';
import { MDL } from './mdl.directive';
import { routing } from './app.routes';


export const firebaseConfig = {
  apiKey: "AIzaSyDSxkZocD1-Ctm1cqaunpdpnVYnATk3doM",
  authDomain: "busappararas0.firebaseapp.com",
  databaseURL: "https://busappararas0.firebaseio.com",
  storageBucket: "busappararas0.appspot.com",
  messagingSenderId: "370231549509"
};

@NgModule({
  declarations: [
    AppComponent,
    LinesComponent,
    BusStopsComponent,
    MDL        
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
