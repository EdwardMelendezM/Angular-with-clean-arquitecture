import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/dbz.interface';

@Component({
  selector: 'app-dbz-form',
  templateUrl: './dbz-form.component.html',
  styleUrls: ['./dbz-form.component.css']
})
export class DbzFormComponent {
  @Input() nuevo:Personaje = {
    nombre:"",
    poder:0,
  }

  @Output() agregar = new EventEmitter()

  agregarNuevo(){
    this.agregar.emit()
  }
}
