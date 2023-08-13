import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HijoComponent } from './hijo/hijo.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HijoComponent,
    TodoComponent,
    TodoListComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    HijoComponent,
    TodoComponent,
    TodoListComponent
  ]
})
export class ComponentsModule { }
