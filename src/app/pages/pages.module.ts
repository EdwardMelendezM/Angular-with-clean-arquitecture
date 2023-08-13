import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { TodoComponent } from './todo/todo.component';
import { UsersComponent } from './users/users.component';




@NgModule({
  declarations: [
    HomeComponent,
    TodoComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
