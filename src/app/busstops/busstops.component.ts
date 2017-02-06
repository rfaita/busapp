import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'busstops',
  templateUrl: './busstops.component.html',
  styleUrls: ['./busstops.component.css']
})
export class BusStopsComponent {
  items: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.items = af.database.list('/busStopsOnlyName');
  }


}
