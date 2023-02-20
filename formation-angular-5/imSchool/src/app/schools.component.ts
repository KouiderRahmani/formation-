import { Component } from "@angular/core";
import { SchoolsService } from "./srvices/schools.service";

@Component({
    selector:'schools', // utliser ce nom pour l appler dans les  autres compenets app
    templateUrl:'./schools.component.html'
})

export  class SchoolsComponent{
    name: string = '';
    title1 ="la liste   ";
    title2 ="de mes écoles   ";
    schools ;
    image ="https://upload.wikimedia.org/wikipedia/commons/5/55/ORAN_%2C_VILLE_D%27ALGERIE.jpg";
    titleImage="Image de la ville d'oran ";
    isActive=true;
   
    email2="rahmani.@hotmail.fr";

    
    constructor( schoolsService :SchoolsService){
        this.schools = schoolsService.getSchools();
    }
    getTitle(){
       return this.title2;
    }
    onClick(event: Event){
      event.stopPropagation(); // pour ne pas clicked sur tout div 
     console.log('button clicked',event);
     console.log('button clicked',event.isTrusted);

     this.isActive ? this.isActive=false:this.isActive=true;

     console.log('isActive',this.isActive);
    }

    onKeyUp (email :string)
    {

        console.log('input entrer '); 
        console.log(email); 
    }
}