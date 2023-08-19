import { Component } from '@angular/core';
import { Personaje } from './interfaces/dbz.interface';
import { DbzServices } from './services/dbz.service';



@Component({
  selector: 'app-dbz',
  templateUrl: './dbz.component.html',
  styleUrls: ['./dbz.component.css']
})
export class DbzComponent {
  constructor( private dbzService:DbzServices){}

}
