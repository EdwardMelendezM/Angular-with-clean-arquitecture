import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Input() nombreHijo:string = "sin nombre" 
  @Output() cambioNombreHijo = new EventEmitter<string>()

  changeName(){
    this.nombreHijo="Cambie Romero"
    this.cambioNombreHijo.emit(this.nombreHijo);
  }
}
