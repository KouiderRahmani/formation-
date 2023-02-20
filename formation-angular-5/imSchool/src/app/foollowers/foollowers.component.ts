import { Component } from '@angular/core';

import { FllowerService } from 'src/app/srvices/fllower.service';
@Component({
  selector: 'app-foollowers',
  templateUrl: './foollowers.component.html',
  styleUrls: ['./foollowers.component.css']
})
export class FoollowersComponent {
  followerrs:any;
  constructor(private fllowerService :FllowerService)
  {
 
  }
 
  ngOnInit(): void {
     
      this.getFllowrs();
  }
 
  getFllowrs(){
 
   this.fllowerService.getAll()
   .subscribe (response =>
               this.followerrs = response
              ,error=>{
              console.error(error);
     });
     
  }
 }
 