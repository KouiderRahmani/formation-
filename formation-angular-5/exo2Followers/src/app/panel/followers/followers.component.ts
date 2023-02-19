import { Component } from '@angular/core';
import { FllowerService } from 'src/app/srvices/fllower.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent {
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
