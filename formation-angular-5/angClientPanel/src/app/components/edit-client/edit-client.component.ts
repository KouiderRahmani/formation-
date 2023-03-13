import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent {
  id:string='';
  client:any;
  showBalance:boolean=false;
constructor (private clientService : ClientService,private router:Router, private route:ActivatedRoute ,private flashMessage:FlashMessagesService){
}
ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.clientService.getClientDetails(this.id).subscribe(client=>{
  this.client=client;
  console.log("***"+JSON.stringify(this.client));
 })
  
}
  updateClient(){
    this.client.id=this.id;
    this.clientService.updateClient(this.client);
    this.flashMessage.show('Client update',{cssClass:'alert-success',timeout:4000});
    this.router.navigate(['/']);
    //return this.router.navigate(['/']);
  }
}


