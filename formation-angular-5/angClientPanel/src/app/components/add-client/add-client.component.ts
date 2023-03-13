import { Component } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthClientService } from 'src/app/services/auth-client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {
  client: Client = {

    firstName: "",
    lastName: "",
    email: undefined,
    phone: undefined,
    balance: undefined,
    user:''
  }
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(
                private clientService :ClientService ,
                private authClientService:AuthClientService, 
                private route:Router,
                private flashMessages :FlashMessagesService){

  }
  ngOnInit(): void {
    this.authClientService.getAuth().subscribe(auth => {
      this.client.user=auth?.uid;
  })
    
  }
  onSubmit() {
    this.clientService.newClient(this.client);
    this.flashMessages.show('Client added successfully',{cssClass:'alert-primary',timeout:5000});
    return this.route.navigate(['/']);
  }
}
