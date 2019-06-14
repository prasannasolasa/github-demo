import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ListServService} from '../list-serv.service'
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUser:FormGroup
  addUserValidation:boolean
  constructor(private fb:FormBuilder,private _serv:ListServService,private _route:Router) { }
 /*  id:12,
  name:"EAD",
  password:"password",
  email:"prasannasolasa598@gmail.com",
  role:"guest",
  address:{
  city:"bangalore",
  zipCode:"560100"
  }, 
  phone:"9611"*/
  ngOnInit() {
    this.addUser = this.fb.group({
      id:['',[Validators.required]],
      name:['',[Validators.required,Validators.minLength(2)]],
      password:['',Validators.required],
      email:['',Validators.required],
      role:['',Validators.required],
      address:this.fb.group({
        city:['',Validators.required],
        zipCode:['',Validators.required]
      })
      
    })
  }
  validateUser(){
    console.log("validation")
    this.addUserValidation=true
    if(this.addUser.invalid)
    return;
    else{
      console.log("adding user"+this.addUser.value)
      this._serv.addUser(this.addUser.value).subscribe(response=>{
        console.log("response"+response)
        this._route.navigateByUrl("list-user")
      })
    }
  }

}
