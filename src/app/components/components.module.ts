import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HijoComponent } from './hijo/hijo.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TableComponent } from './table/table.component';
import { TableInputComponent } from './table-input/table-input.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HijoComponent,
    TodoComponent,
    TodoListComponent,
    TableComponent,
    TableInputComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    HijoComponent,
    TodoComponent,
    TodoListComponent,
    TableComponent,
    TableInputComponent,

  ]
})
export class ComponentsModule { }
