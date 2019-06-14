import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListServService } from '../list-serv.service';
import { User } from '../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  
})
export class EditUserComponent implements OnInit {
  editUser:User;
  usertoEdit:boolean;
  id:any;
  constructor(private _route:ActivatedRoute,private _serv:ListServService,private fb:FormBuilder,private _router:Router) { }
  editUserDetails:FormGroup
  ngOnInit() {
    this.editUserDetails = this.fb.group({
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

   

    console.log(this._route.snapshot.paramMap.get("id"))
    this.id = this._route.snapshot.paramMap.get("id");
    this._serv.getUserbyId(this.id).subscribe(response=>{
      this.editUser = response;
      if(this.editUser!=undefined)
      this.usertoEdit=true;
      console.log("edit user name is :"+this.editUser.name)
    })
  }
  saveUser(){
    console.log("modified user name :"+this.editUserDetails.get('name').touched)
    console.log("id value is :"+this.id)
    console.log("edit userdetails :"+this.editUserDetails.touched)
    this.mapvalues();
    this._serv.updateUser(this.id,this.editUser).subscribe(response=>{
      console.log("response is :"+response)
      this._router.navigateByUrl("list-user")
    })
  }
  mapvalues(){
    if(this.editUserDetails.get('password').touched)
    this.editUser.password = this.editUserDetails.get('password').value;
   
    if(this.editUserDetails.get('name').touched)
    this.editUser.name = this.editUserDetails.get('name').value;

    if(this.editUserDetails.get('email').touched)
    this.editUser.email = this.editUserDetails.get('email').value;

    if(this.editUserDetails.get('role').touched)
    this.editUser.role = this.editUserDetails.get('role').value;

     if(this.editUserDetails.get(['address','city']).touched)
    this.editUser.address.city = this.editUserDetails.get('address').value.city;

    if(this.editUserDetails.get(['address','zipCode']).touched)
    this.editUser.address.zipCode = this.editUserDetails.get('address').value.zipCode; 
    
  }

}
