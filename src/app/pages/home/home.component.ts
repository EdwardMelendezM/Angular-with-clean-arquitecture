import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  nombre:string = "Pedroo";

  cambiarNombre(){
    this.nombre="Cambiando a Juan"
  }
}
