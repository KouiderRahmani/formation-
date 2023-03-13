import { Component } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  statusContact: boolean = false
  contact: Contact = {
    name: '',
    telephone: undefined
  }
  constructor(private contactService: ContactService) { }
  addNewContact() {
    this.contactService.createContact(this.contact);
    this.initContacte();
    this.statusContact = !this.statusContact;
  }

  initContacte() {
    this.contact = {
      name: '',
      telephone: undefined
    }
  }
}
