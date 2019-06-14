import { Injectable } from '@angular/core';
import { User } from './user';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ListServService {
  user:User[];
  constructor(private _http:HttpClient) {
   }
   getUsers(){
     /* console.log(this.user) */
     //return this.user;
     return this._http.get<User[]>("http://localhost:3000/users")
   }
   addUser(user:User){
    return this._http.post("http://localhost:3000/users",user)
   }
   getUserbyId(id:any){
      return this._http.get<User>("http://localhost:3000/users/"+id);
   }
   deleteUser(id:number){
      return this._http.delete("http://localhost:3000/users/"+id)
   }
   updateUser(id:any,user:User){
     return this._http.put("http://localhost:3000/users/"+id,user);
     /* console.log("user details inside updateUser is :"+user.name)
     return this._http.patch("http://localhost:3001/users/"+id,JSON.stringify({isRead:true})) */
   }
}
