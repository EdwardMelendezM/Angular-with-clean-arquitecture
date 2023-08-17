import { Component, Input } from '@angular/core';
import { Personaje } from '../../interfaces/dbz.interface';


@Component({
  selector: 'app-dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrls: ['./dbz-list.component.css']
})
export class DbzListComponent {

  @Input() personajes: Personaje[] = []

  
}
