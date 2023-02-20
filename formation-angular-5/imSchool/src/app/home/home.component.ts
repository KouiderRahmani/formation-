import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private route : Router)
  {

  }
  ajouter (){
    // on ava aller ver la page avec passage des parmatres followers/:id/:username
    this.route.navigate(['followers',12,'idBrahim dev '],{
      queryParams:{page:12,type:'admin'}

    })

}
}
