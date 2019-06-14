import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Jsondata} from './jsondata'
import {map,retry} from 'rxjs/operators'
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { 
    //  this._http.get<User>("https://jsonplaceholder.typicode.com/posts")
  }
  getJsonData(){
    return this._http.get("http://localhost:4567/Reservation/reservations/1")/* .
    pipe(map(e=>e),
    retry(5)) */
  }
  validateUser(email:String,password:String){
    console.log("http://localhost:3000/users?email="+email+"&password="+password);
      return this._http.get<User>("http://localhost:3000/users?email="+email+"&password="+password)
  }



}
