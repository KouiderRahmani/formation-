import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-details-client',
  templateUrl: './details-client.component.html',
  styleUrls: ['./details-client.component.css']
})
export class DetailsClientComponent {
  id:string='';
  client:any;
  showBalance:boolean=false;
constructor (private clientService : ClientService,private route:ActivatedRoute,private flashMessage:FlashMessagesService ,private router:Router){
}
ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.clientService.getClientDetails(this.id).subscribe(client=>{
  this.client=client;
  console.log("***"+JSON.stringify(this.client));
 })
  
}
onSubmitForm(){
  this.client.id=this.id;
  this.clientService.updateClient(this.client);
  this.flashMessage.show('balance update',{cssClass:'alert-warning',timeout:4000});
  this.showBalance=!this.showBalance;
}
deleteClient(id:string) {

  if(confirm("are you sure to delete this client !!"))
  {
    this.clientService.destroyClient(id);
    this.router.navigate(['/']);
    this.flashMessage.show('Client deleted',{cssClass:'alert-danger',timeout:4000});
  }
}

}
