import { Component } from '@angular/core';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<any>;
  name: any;
  msgVal = '';

  constructor(public afdb: AngularFirestore, private auth: AngularFireAuth) {
    this.items = afdb.collection('/messages').valueChanges();

    this.afdb.auth.subscribe(auth => {
      if (auth) {
        this.name = auth;
      }
    });
  }
}
