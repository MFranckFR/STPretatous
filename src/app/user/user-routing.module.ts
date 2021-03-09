import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  { path: 'users-list', component: UsersListComponent},
  { path: 'user-edit/:id', component: UserEditComponent},
  { path: 'user-view/:id', component: UserViewComponent},
  { path: 'user-add', component: UserAddComponent},
  // { path: '', pathMatch: 'full', redirectTo: 'users-list' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
