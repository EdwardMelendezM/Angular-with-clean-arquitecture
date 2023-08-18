import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { TodoComponent } from './todo/todo.component';
import { UsersComponent } from './users/users.component';
import { DbzComponent } from './dbz/dbz.component';
import { FormsModule } from '@angular/forms';
import { DbzListComponent } from './dbz/components/dbz-list/dbz-list.component';
import { DbzFormComponent } from './dbz/components/dbz-form/dbz-form.component';
import { DbzServices } from './dbz/services/dbz.service';
import { GitAppComponent } from './git-app/pages/git-app.component';
import { SearchBoxComponent } from './git-app/components/search-box/search-box.component';
import { CardListComponent } from './git-app/components/card-list/card-list.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';




@NgModule({
  declarations: [
    HomeComponent,
    TodoComponent,
    UsersComponent,
    DbzComponent,
    DbzListComponent,
    DbzFormComponent,
    GitAppComponent,
    SearchBoxComponent,
    CardListComponent,
    SidebarComponent

  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule
  ],
  providers: [
    DbzServices
  ]
})
export class PagesModule { }
