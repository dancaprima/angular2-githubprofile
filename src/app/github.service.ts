import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GithubService {
  private username:string;
  constructor(private _http:Http) {
    console.log('Service is ready')
    this.username = 'dancaprima'
   }
   getUser(){
      return this._http.get('https://api.github.com/users/' + this.username)
     .map(res => res.json())
   }
 
}
