import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorCommon } from '../common/validatorCommon';


@Component({
  selector: 'sigup-form',
  templateUrl: './sigup-form.component.html',
  styleUrls: ['./sigup-form.component.css']
})
export class SigupFormComponent {

  submit(f:any)
  {

  }
  form=new FormGroup({
      username : new FormControl('',
          [
             Validators.required , 
             Validators.minLength(3),
             ValidatorCommon.cannotContainNumber
          ]),
      password: new FormControl('',Validators.required)
  });

   get username(){
    return this.form.controls['username'];
   }
   get password(){
    return this.form.controls['password'];
   }
}
