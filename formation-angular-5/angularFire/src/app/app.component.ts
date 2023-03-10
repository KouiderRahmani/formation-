import { Component } from '@angular/core';

import { Observable } from 'rxjs'
import { AngularFireDatabase } from 'angularfire2/database';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularFire';
  
  
  constructor(db: AngularFireDatabase) {
     db.list('/COURES').valueChanges().subscribe(items => {
      console.log(items)
    });
   
  }
}
