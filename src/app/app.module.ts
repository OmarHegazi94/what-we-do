import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
// import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AppComponent } from './app.component';



  // Initialize Firebase
  export const firebaseConfig = {
    apiKey: 'AIzaSyD-2Evt-L1eV5zAxtXvsz0CaBTh9C0NYs4',
    authDomain: 'what-we-do-1be54.firebaseapp.com',
    databaseURL: 'https://what-we-do-1be54.firebaseio.com',
    projectId: 'what-we-do-1be54',
    storageBucket: '',
    messagingSenderId: '609482384184'
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireDatabaseModule
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
