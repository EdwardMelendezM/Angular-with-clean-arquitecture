import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TodoComponent } from './pages/todo/todo.component';
import { UsersComponent } from './pages/users/users.component';
import { DbzComponent } from './pages/dbz/dbz.component';

const routes: Routes = [
  {
    path:'home', component: HomeComponent
  },
  {
    path:'todo', component: TodoComponent
  },
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'dbz', component: DbzComponent
  },
  {
    path:"**", pathMatch:'full' ,redirectTo:'todo'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
