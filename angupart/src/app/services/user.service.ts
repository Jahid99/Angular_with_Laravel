import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {

  //local LARAVEL server
    server = 'http://localhost:8000/';

  headers: Headers = new Headers;
  options : any;

  constructor(private _http:Http) {

    this.headers.append('enctype', 'multipart/form-data');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-Requested-With', 'XMLHttpRequest');
    this.options = new RequestOptions({ headers: this.headers });

   }

   addUser(info){
     var data = JSON.stringify(info);

     return this._http.post(this.server+"adduser",data,this.options).map(
       res => res.json()
     );
   }

   showAllUsers(){
    return this._http.get(this.server+"getallusers")
    .map(res=>res.json());
  }

  showUser(id){
     return this._http.get(this.server+"select_user/"+id).map(
       res => res.json()
     );
   }

  deleteUser(id){
  return this._http.get(this.server+"delete_user/"+id).map(
    res => res.json()
  );
}

editUser(info){

    var data = JSON.stringify(info);

     return this._http.post(this.server+"edituser",data,this.options).map(
       res => res.json()
     )
   }

}
