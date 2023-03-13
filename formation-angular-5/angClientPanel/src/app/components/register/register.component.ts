import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthClientService } from 'src/app/services/auth-client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email:string='';
  password:string='';
constructor(
            private authClient:AuthClientService, 
            private route:Router,
            private flashMessage: FlashMessagesService){

}

  onRegister(){
    this.authClient.register(this.email,this.password)
    .then(register=>{
 
        this.flashMessage.show('congratulation you are logeged ',
        {cssClass:'alert-success' , timeout:5000})
        this.route.navigate(['/'])    
    })

     
  }
}
