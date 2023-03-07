import { Component } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent {
  contacts : any ;
constructor(private  contactService :ContactService)
{

}
ngOnInit(): void {
    this.contactService.getContact().subscribe(contacts =>{
      this.contacts = contacts;
      console.log( JSON.stringify(this.contacts))
    })
}


}
