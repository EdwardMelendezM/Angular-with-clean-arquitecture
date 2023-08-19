import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  nombre:string = "Soy Juan";
  haCambiado:boolean= false

  constructor(private dataService:DataService){}

  cambiarNombreToJuan(){
    this.nombre="Soy Pedro"
    this.dataService.nombreUsuario=this.nombre
    this.haCambiado = !this.haCambiado
  }
  cambiarNombreToPedro(){
    this.nombre = "Soy Juan"
    this.haCambiado = !this.haCambiado

  }
  hijoCambioNombre(nuevoNombre:string){
    this.dataService.nombreUsuario=nuevoNombre
    this.nombre=nuevoNombre

  }
}
