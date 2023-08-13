import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms'; // Agrega esta importación



@NgModule({
  declarations: [
    HomeComponent,
    TodoComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
