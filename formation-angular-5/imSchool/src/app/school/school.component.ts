import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  school = {

    schoolname :'ecole de oued rhiou',
   adresse :{
          rue : 'cité 80 lgm',
         ville: 'ee'

   }  ,
   nbTelph : "02144455788",
   ability : "12" ,
   date_of_open:new Date (2022,11,21)

};
  constructor() { }
  ngOnInit() {
    console.log("component has been initialized!")
  }
}
