import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthClientService } from 'src/app/services/auth-client.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLogidIn: boolean = false;
  userLoggedIn: any;
  constructor(
    private authClientService: AuthClientService,
    private flashMessage: FlashMessagesService,
    private route: Router) {

  }

  ngOnInit(): void {

    this.authClientService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLogidIn = true;
        this.userLoggedIn = auth.email;
       
      } else {
        this.isLogidIn = false;
      }
    })
  }

  onLogout() {
    this.authClientService.logOut();
   return  this.route.navigate(['/login']);
  }
}
