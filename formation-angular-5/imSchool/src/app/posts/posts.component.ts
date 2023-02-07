import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
@Injectable()
export class PostsComponent implements OnInit {
  status: boolean = true;
  posts: any;
  post: any =
    {
      userId: 0,
      id: 0,
      title: "",
      body:""
    }
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

  constructor(private http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(Response => {
        this.posts = Response;
        console.log(JSON.stringify(Response));

      });
  }

  ngOnInit()
  {
    
  }

  createPost() {

    this.http.post('https://jsonplaceholder.typicode.com/posts', this.post)
      .subscribe(Response => {
        this.post = Response;

        this.posts.unshift(this.post);
        this.intitPost();
      });
  }

  editPost(post: any) {
    this.post = post;
    this.status = false;
  }
  update() {
    this.http.put('https://jsonplaceholder.typicode.com/posts/'+this.post.id, this.post)
     .subscribe(Response => {
      this.intitPost();
     });
    this.status = true;
  }


 deletePost(post:any)
 {
  this.http.delete('https://jsonplaceholder.typicode.com/posts/'+post.id ,this.httpOptions)
  .subscribe(Response => {

          let index =this.posts.indexOf(post);        
          this.posts.splice(index,1);
  });

/*
       this.http.delete('https://jsonplaceholder.typicode.com/posts/'+post.id ,this.httpOptions).pipe(
    tap(_ => this.log(`deleted hero id=${post.id}`));
  );*/
 }
  intitPost()
  {
   this.post = {
      userId: 0,
      id: 0,
      title: "",
      body: ""
    }

  }
  /** Log a HeroService message with the MessageService */
  /*private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }*/

}


