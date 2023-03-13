import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactsCollection: AngularFirestoreCollection<Contact>;
  contacts: Observable<Contact[]>
  contactDoc: any;

  constructor(private afs: AngularFirestore) {

    this.contactsCollection = this.afs.collection('/contacts');
    //this.contacts =this.contactsConnction.valueChanges();
    this.contacts = this.contactsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      })))

  }
  getContact() {
    return this.contacts;
  }
  createContact(contact: Contact) {
    this.contactsCollection.add(contact);
  }
  updateContact(contact: Contact) {
    this.contactDoc = this.contactsCollection.doc<Contact>(contact.id);
    this.contactDoc.update(contact);
  }

   destroyContact(contact: Contact) {
    this.contactDoc = this.contactsCollection.doc<Contact>(contact.id);
    this.contactDoc.delete();
  }
}

