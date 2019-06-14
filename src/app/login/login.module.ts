import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DisplayUserComponent } from '../display-user/display-user.component';

@NgModule({
  declarations: [SignInComponent,DisplayUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[SignInComponent,DisplayUserComponent]
})
export class LoginModule { }
