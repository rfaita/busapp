import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Teste do app de bus';
  items: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.items = af.database.list('/lines/0/states');
  }

}
