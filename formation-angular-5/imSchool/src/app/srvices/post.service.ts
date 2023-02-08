import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { AppError } from '../common/app-error';

import {Observable, throwError} from 'rxjs';



import { catchError } from 'rxjs/operators';
import { NotFoundError } from '../common/NotFoundError';
import { BadInput } from '../common/bad-input';



@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  private url2 = 'https://jsonp4laceholder.typicode.com/posts';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post: any) {

    return this.http.post(this.url, post).pipe(
      catchError((error: Response) => {
        if (error.status === 400) {
          return throwError(() => new BadInput(error));
        }
        return throwError(() => new AppError(error));
      })
    );
  }
  

  update(post: any) {
    return this.http.put(this.url + '/' + post.id, post)
  }



 deletePost(id: number) {
  return this.http.delete(this.url + '/').pipe(
    catchError((error: Response) => {
      if (error.status === 404)
        return throwError(() => new NotFoundError(error));
      return throwError(() => new AppError(error));
    })
  );
}

}
