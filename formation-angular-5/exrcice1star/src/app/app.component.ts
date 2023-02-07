import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exrcice1star';
  post ={
       arrctil:"text 1 " ,
       isFavorite: true
  }
  myFavorite(args:String []){
    console.log("app AppComponent " ,args);
  }

}
