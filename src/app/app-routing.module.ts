import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import {AddUserComponent} from './add-user/add-user.component'
import {SignInComponent} from './login/sign-in/sign-in.component';
import { EditUserComponent } from './edit-user/edit-user.component';
const routes: Routes = [
  {path:"",redirectTo:"sign-in",pathMatch:"full"},
  {path:"list-user",component:ListUsersComponent},
  {path:"add-user",component:AddUserComponent},
  {path:"sign-in",component:SignInComponent},
  {path:"edit-user/:id",component:EditUserComponent}
];

@NgModule({
  //Configure the routes when the module is loaded
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
