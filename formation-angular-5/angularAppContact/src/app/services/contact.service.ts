import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

   contactsConnction :AngularFirestoreCollection<Contact> ; 
   contacts :Observable<Contact[]>
   constructor( private afs : AngularFirestore) { 

   this.contactsConnction = this.afs.collection('/contacts');
   this.contacts =this.contactsConnction.valueChanges();

  }
 getContact(){
  return this.contacts;
 }

}

