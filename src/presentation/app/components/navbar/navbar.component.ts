import { Component } from '@angular/core';
import { DataService } from '../../../app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public dataService:DataService){}
}
