import { Component } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  contact : Contact={
    name:'' , 
    telephone :number|null
  }

}
