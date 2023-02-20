import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class FllowerService extends DataService {

  constructor( httpClient : HttpClient) {
    super('https://api.github.com/users/IDBRAHIMDEV/followers',httpClient);
   }
}
