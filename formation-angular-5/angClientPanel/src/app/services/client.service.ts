import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientsCollection: AngularFirestoreCollection<Client>;
  clientDoc: any;
  //clients: Observable <Client[]>
  constructor(private afs: AngularFirestore) {
    this.clientsCollection = this.afs.collection('/clients');
    //this.clients =this.clientsCollection.valueChanges();
  }
  getClients(user:string | undefined): Observable<Client[]> { //pour recuperer les id avec 
    return this.afs.collection('clients',ref=>ref.where('user','==',user)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Client;
        const id = a.payload.doc.id;
        return { id, ...data };
      })));
  }
  newClient(client: Client) {
    this.clientsCollection.add(client);
  }
  getClientDetails(id: string): Observable<Client  | null | undefined> {
     return this.clientsCollection.doc(id).valueChanges();
  }
  updateClient(client:Client){
    this.clientDoc= this.clientsCollection.doc(client.id);
    this.clientDoc.update(client);
  }

  destroyClient(id:string){
    this.clientDoc = this.clientsCollection.doc<Client>(id);
    this.clientDoc.delete();
  }
}
