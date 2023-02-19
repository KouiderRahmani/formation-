import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Inject} from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/notFoundError';

export class DataService{
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      constructor(@Inject(String) private url :string ,private httpClient :HttpClient)
      {}
    
 getAll()
 {
    return this.httpClient.get(this.url).pipe(
            map(Response =>{
                return Response
              }),
            catchError(this.handelError)
    );
 
}
private handelError(error : Response)
{
    if(error.status === 404){
          return throwError(()=>new NotFoundError(error));

    }
    if (error.status === 400)
    {
        return throwError(()=> new BadInput(error)) ;
    }
    return throwError(()=> new AppError(error));
}

}