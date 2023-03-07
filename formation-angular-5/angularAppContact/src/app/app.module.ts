import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NavbarComponent } from './componenents/navbar/navbar.component';
import { ListContactsComponent } from './componenents/list-contacts/list-contacts.component';
import { AddContactComponent } from './componenents/add-contact/add-contact.component';
import { environment } from 'src/environments/environment';
import { ContactService } from './services/contact.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListContactsComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
    
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
