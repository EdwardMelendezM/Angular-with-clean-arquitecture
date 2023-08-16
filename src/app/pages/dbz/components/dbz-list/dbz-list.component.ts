import { Component, Input } from '@angular/core';
import { Personaje } from '../../dbz.component';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrls: ['./dbz-list.component.css']
})
export class DbzListComponent {

  @Input() personajes: Personaje[] = []

  
}
