import { Component } from '@angular/core';
import { DbzServices } from '../../services/dbz.service';


@Component({
  selector: 'app-dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrls: ['./dbz-list.component.css']
})
export class DbzListComponent {

  get personajes(){
    return this.dbzService.personajes
  }
  constructor(private dbzService:DbzServices){}


  
}
