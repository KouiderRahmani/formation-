
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  contactMethods=[{id :1,name:"email"},{id :2,name:"phone"},{id :3,name:"sms"}];
  log(value:any){
    console.log(value)
  }

  onSubmit(f: NgForm) {
    console.log(f);  // { first: '', last: '' }
    console.log(f.valid);  // false

    console.log(f.value);  
  }
}
