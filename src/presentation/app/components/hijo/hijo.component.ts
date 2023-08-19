import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../../app/services/data.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Input() nombreHijo:string = "sin nombre" 
  @Output() cambioNombreHijo = new EventEmitter<string>()

  constructor(private dataService:DataService){}

  changeName(){
    this.nombreHijo="Cambie Romero"
    this.cambioNombreHijo.emit(this.nombreHijo);
    this.dataService.nombreUsuario=this.nombreHijo
  }
}
