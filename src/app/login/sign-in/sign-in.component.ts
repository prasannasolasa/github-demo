import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { AuthService } from '../../auth.service';
import { Jsondata } from '../../jsondata';
import { User } from 'src/app/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  /* email:String;
  password:string  */
  submitted: boolean;
  loginForm: FormGroup;
  invalidLogin: boolean;
  jsonData: any;
  name: string
  user: User
  guestStatus: boolean
  constructor(private fb: FormBuilder, private _route: Router, private _auth: AuthService) {
    /*  this.email="admin@gmail.com";
     this.password="admin123" */

  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  getOutput(event){
    console.log("output event"+event)
  }
  validate() {
    // console.log("validation works"+this.email+","+this.password)
    this.submitted = true;

    if (this.loginForm.invalid)
      return;
    /* if(this.loginForm.controls.email.value === 'admin@gmail.com' && 
    this.loginForm.controls.password.value === 'admin123'){
      this._route.navigateByUrl("list-user")
    }else
      this.invalidLogin=true */
    let email = this.loginForm.controls.email.value
    let password = this.loginForm.controls.password.value
    this._auth.validateUser(email, password).subscribe(response => {
      this.user = response[0];
      if (this.user != undefined) {
        console.log("role is :"+this.user.role)
        if (this.user.role == "super"){
          console.log("super use")
          this._route.navigateByUrl("list-user")
        }
        else{
          console.log("else condition")
          this.guestStatus = true;
        }
      } else{
        console.log("invalid login ")
        var array = ["a","b"];
        console.log(array.sort());
        this.invalidLogin = true;
      }
    })
  }
}
