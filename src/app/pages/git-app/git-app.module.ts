import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    SearchBoxComponent,
    CardListComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    GitAppModule
  ]
})
export class GitAppModule { }
