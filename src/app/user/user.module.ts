import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { UserEditComponent } from './user-edit/user-edit.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    UserEditComponent, 
    UserViewComponent, 
    UsersListComponent, 
    UserAddComponent,
  ],

  imports: [
    CommonModule,
    UserRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
   
   
  ]
})
export class UserModule { }
