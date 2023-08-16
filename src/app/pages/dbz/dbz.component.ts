import { Component } from '@angular/core';

interface Personaje{
  nombre:string
  poder:number
}

@Component({
  selector: 'app-dbz',
  templateUrl: './dbz.component.html',
  styleUrls: ['./dbz.component.css']
})
export class DbzComponent {

  personajes : Personaje[]=[
    {
      nombre:"Goku",
      poder:4000
    },
    {
      nombre: "Krilin",
      poder: 1000
    },
  ]

  nuevo: Personaje ={
    nombre:"Thucks",
    poder:14000
  }

  agregar(){
    if (this.nuevo.nombre.trim().length < 3) return
    this.personajes.push(this.nuevo)
    this.nuevo = {
      nombre: "",
      poder: 0
    }
  }

}
