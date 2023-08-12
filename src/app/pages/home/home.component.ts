import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  nombre:string = "Pedroo";

  constructor(private dataService:DataService){}

  cambiarNombre(){
    this.nombre="Cambiando a Juan"
    this.dataService.nombreUsuario=this.nombre
  }
  hijoCambioNombre(nuevoNombre:string){
    this.dataService.nombreUsuario=nuevoNombre
    this.nombre=nuevoNombre
  }
}
