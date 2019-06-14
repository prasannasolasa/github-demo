import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './list-users/list-users.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { SortingPipe } from './sorting.pipe';
import {LoginModule} from './login/login.module'
import {HttpClientModule} from '@angular/common/http';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DisplayUserComponent } from './display-user/display-user.component'
@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    AddUserComponent,
    SortingPipe,
    EditUserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [SortingPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
