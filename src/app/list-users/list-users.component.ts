import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { ListServService } from '../list-serv.service';
import {Router} from '@angular/router';
import {SortingPipe} from '../sorting.pipe';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { userInfo } from 'os';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users:User[];
  imgUrl:String;
  desertimgUrl:String;
  singleUser:User;
  constructor(private _serv:ListServService,private _router:Router,private _pipe:SortingPipe) { 
    this.imgUrl="../../assets/Tulips.jpg";
    this.desertimgUrl="../../assets/Desert.jpg";
    //this.users = _serv.getUsers();
     /*console.log(this.users)
    console.log(this._pipe.transform(this.users,'id')); */
  }

  ngOnInit() {
    this._serv.getUsers().subscribe(response=>{
      console.log("getting data from json server")
      this.users = response;
    })
  }
  addUser(){
    console.log("addUser");
    this._router.navigateByUrl("add-user");
  }
  order = "id";

  deleteUser(user:User){
    console.log("id value is :"+user.id)
    this._serv.deleteUser(user.id).subscribe(response=>{
      console.log("user data is :"+response);
     this.users = this.users.filter(u=>u!==user)
      
    })
  }
  editUser(user:User){
    console.log("edit works")
    this._router.navigate(['edit-user',user.id])
  }
}
