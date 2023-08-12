import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HijoComponent } from './hijo/hijo.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HijoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    HijoComponent
  ]
})
export class ComponentsModule { }
