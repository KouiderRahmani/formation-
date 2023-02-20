import { Component } from '@angular/core';

@Component({
  selector: 'app-base-angular-and-typescripte',
  templateUrl: './base-angular-and-typescripte.component.html',
  styleUrls: ['./base-angular-and-typescripte.component.css']
})
export class BaseAngularAndTypescripteComponent {
  title = 'imSchool';
  body = "Federico Trillo-Figueroa Martínez-Conde est un homme d'État espagnol né le 23 mai 1952 à Carthagène (province de Murcie). Il est membre du Parti populaire (PP)" +

    "Fils d’un cadre du franquisme et membre de l’Opus Dei, il est diplômé en droit de l’université de Salamanque et docteur de l’université complutense de Madrid. "
    + "Il devient juriste militaire en 1974, puis auditeur au Conseil d’État cinq ans plus tard." +

    "Il adhère en 1982 à l’Alliance populaire (AP), dont il devient un haut responsable dans le domaine juridique. En 1989, il est nommé secrétaire'";

  coures = ['anglais', 'mathmatique', 'français'];
  isSelected = true;
  vieuCourse = "math";
  couresObject= [
    { id: 1, title: 'anglais' },
    { id: 2, title: 'mathmatique' },
    { id: 3, title: 'français' },
    { id: 4, title: 'aphysique' },
    { id: 5, title: 'informatique' }
  ];
  loudCourses() {
    this.couresObject = [
      { id: 1, title: 'anglais' },
      { id: 2, title: 'mathmatique' },
      { id: 3, title: 'français' },
      { id: 4, title: 'aphysique' },
      { id: 5, title: 'informatique' }
    ];
  }
  addCourse() {
    this.couresObject.push({ id: 1, title: 'elecronique' })
  }
  trackCourse(index: number, cour: any) {
    return cour ? cour.id : undefined;
  }
  remouve(cours: any) {
    let index =  this.couresObject.indexOf(cours);
    this.couresObject.splice(index,1);
   
  }

  edit(cours: any) {

   cours.title="arabe";

  }
  myFavorite(){
    this.isSelected=!this.isSelected;
  }
}
