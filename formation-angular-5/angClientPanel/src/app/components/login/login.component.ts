import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthClientService } from 'src/app/services/auth-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = "";
  constructor(
    private authClientService: AuthClientService,
    private flashMessage: FlashMessagesService,
    private route: Router
  ) {

  }
  ngOnInit(): void {

    this.authClientService.getAuth().subscribe(auth => {
        if (auth) {
          this.route.navigate(['/']);
        }
    })

  }



  onLogin() {
    this.authClientService.login(this.email, this.password)
      .then(auth => {
        if (auth) {
          this.flashMessage.show('you are logged successufully', {
            cssClass: "alert-success", timeout: 5000
          })
          this.route.navigate(['/'])
        }
      })
      .catch(error => {
        this.flashMessage.show(error, {
          cssClass: "alert-danger", timeout: 10000
        })
      });
  }
  onloginWithGoogle() {
    this.authClientService.loginWithGoogle()
      .then(auth => {
        if (auth) {
          this.flashMessage.show('you are logged successufully', {
            cssClass: "alert-success", timeout: 5000
          })
          this.route.navigate(['/'])
        }
      })
      .catch(error => {
        this.flashMessage.show(error, {
          cssClass: "alert-danger", timeout: 10000
        })
      });

  }
}
