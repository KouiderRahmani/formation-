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
  
  courses: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.courses = db.list('COURES').valueChanges();
   
  }
}
