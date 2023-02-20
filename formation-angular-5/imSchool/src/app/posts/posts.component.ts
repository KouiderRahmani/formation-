import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/NotFoundError';
import { PostService } from '../srvices/post.service';


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
   

  constructor( private  postService : PostService ) {
   
  }

  ngOnInit()
  {
    this.getPosts();
  }

getPosts(){
  this.postService.getAll()
  .subscribe(response =>
    this.posts = response,
   error =>{
        alert("erreur inattendu");
        console.log(error);
  });
   
//console.log(this.posts)
}
  createPost() {

    this.postService.create (this.post)
      .subscribe(newPost => {
        this.post = newPost;
        this.posts.unshift(this.post);
        this.intitPost();
      },(error :AppError) =>{
        if(error instanceof BadInput ) {
          alert('merci de vérifier vous ');
        }else { 
        alert("ereur inattendu ") ; 
        console.log(error);
        }});
  }

  editPost(post: any) {
    this.post = post;
    this.status = false;
  }
  update() {
    this.postService.update (this.post)
     .subscribe( ()=> {
      this.intitPost();
     },
     error =>{
      alert("erreur inattendu");
      console.log(error);
    });
    this.status = true;
    
  }


 deletePost(post:any)
 {
  this.postService.delete(post.id)
  .subscribe(() => {

          let index =this.posts.indexOf(post);        
          this.posts.splice(index,1);
          
  },(error :AppError) =>{
      if(error instanceof NotFoundError ) {
        alert('ce poste est deja suprimé ');
      }else { 
      alert("ereur inattendue ") ; 
      console.log(error);
    }});

/*
 a revoir sur le site de angular
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


