import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DbzServices } from '../../services/dbz.service';
import { Personaje } from '../../interfaces/dbz.interface';

@Component({
  selector: 'app-dbz-form',
  templateUrl: './dbz-form.component.html',
  styleUrls: ['./dbz-form.component.css']
})
export class DbzFormComponent {

  nuevo:Personaje = {
    nombre:"Maestro Roshi",
    poder:111000
  }

  agregarNuevo(){
    this.dbzService.agregarPersonaje(this.nuevo)
    this.nuevo={
      nombre:"",
      poder:0
    }
  }

  constructor( private dbzService:DbzServices){}

}
