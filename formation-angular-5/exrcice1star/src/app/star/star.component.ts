import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
  @Input('is-Favorite') isFavorite = true;
  @Output('click') change = new EventEmitter();

  myFavorite() {
    this.isFavorite = !this.isFavorite ;
    console.log("app StarComponent ")
    this.change.emit({ nom:"RAHMANI",prenom:"Kouider",age:"43 ans "});
    
  }

}
