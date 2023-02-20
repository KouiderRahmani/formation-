import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { AppError } from '../common/app-error';

import {throwError} from 'rxjs';

import { Inject} from '@angular/core';

import { catchError ,map} from 'rxjs/operators';
import { NotFoundError } from '../common/NotFoundError';
import { BadInput } from '../common/bad-input';



@Injectable({
  providedIn: 'root'
})
export class DataService {
    constructor(@Inject(String) private url: string, private http: HttpClient) 
    { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  getAll() {
    return this.http.get(this.url).pipe(
        map(Response => {
            console.log(this.url)
             return  Response
            }),
        catchError(this.handelError));
   
  }

  create(resource: any) {
    return this.http.post(this.url, resource).pipe(
        map(Response => {
            Response
            }),
        catchError(this.handelError));
  }
  

  update(resource: any) {
    return this.http.put(this.url + '/' + resource.id, resource).pipe(
    map(Response => {
        Response
        }),
    catchError(this.handelError));
  }



 delete(id: number) { // arevoir avec vrais serveur
  return this.http.delete(this.url + '/'+id).pipe(

    map(Response => {
        Response
        }),
    catchError(this.handelError));
}

private handelError(error : Response) {
      if (error.status === 404) {
           return throwError(() => new NotFoundError(error));
      }
      if (error.status === 400) {
          return throwError(() => new BadInput(error));
      }
      return throwError(() => new AppError(error));
    }
}


