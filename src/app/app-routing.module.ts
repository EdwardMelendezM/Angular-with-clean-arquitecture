import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TodoComponent } from './pages/todo/todo.component';

const routes: Routes = [
  {
    path:'home', component: HomeComponent
  },
  {
    path:'todo', component: TodoComponent
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
