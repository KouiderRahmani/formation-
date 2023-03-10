import { Component } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent {
  contacts: any;
  isShowIditContacte = false;
  myContacte: any;
  constructor(private contactService: ContactService) {
  }
  ngOnInit(): void {
    this.contactService.getContact().subscribe(contacts => {
      this.contacts = contacts;
      console.log(JSON.stringify(this.contacts))
    })
  }
  updateContact(contact: Contact) {
    this.contactService.updateContact(contact)
    this.isShowIditContacte = false;
  }
  editContact(contacte: Contact) {
    this.isShowIditContacte = true;
    this.myContacte = contacte;
  }
  deleteContact(contact: Contact) {
    if(confirm("are you sure to delete this contact !!"))
    {
      this.contactService.destroyContact(contact);
    }else 
    this.isShowIditContacte = false;
  }
}
