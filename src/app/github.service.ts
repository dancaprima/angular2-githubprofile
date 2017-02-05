import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GithubService {
  private username:string;
  private clientId = '65609ec7f158ac948c6a';
  private clientSecret = '83cef0de308d0dac87b7483a4156ff1d316ac7b7'

  constructor(private _http:Http) {
    console.log('Service is ready')
    this.username = 'angular'
   }
   getUser(){
      return this._http.get('https://api.github.com/users/' + this.username+'?client_id='+this.clientId+'&client_secret='+this.clientSecret)
     .map(res => res.json())
   }
   
   getRepo(){
     return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.clientId+'&client_secret='+this.clientSecret)
     .map( res => res.json());
  }
  updateUser(username){
    return this.username = username;
  }
}
