
import { Attribute, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
   id ?:number ;
   username ? : String;
   type?:String;
   page ? :String;
   
  contactMethods=[{id :1,name:"email"},{id :2,name:"phone"},{id :3,name:"sms"}];
  log(value:any){
    console.log(value)
  }

  onSubmit(f: NgForm) {
    console.log(f);  // { first: '', last: '' }
    console.log(f.valid);  // false

    console.log(f.value);  
  }
  constructor(private route : ActivatedRoute )
  { 
  }
  ngOnInit() {

    this.id       = +(this.route.snapshot.paramMap.get('id')as String);
    this.username = this.route.snapshot.paramMap.get('username')as String;
    this.page     =this.route.snapshot.queryParamMap.get('page')as String;
    this.type     =this.route.snapshot.queryParamMap.get('type')as String;
  }
}
