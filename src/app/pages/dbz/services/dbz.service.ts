import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzServices{

  private _personajes: Personaje[] = [
    {
      nombre: "Goku",
      poder: 4000
    },
    {
      nombre: "Krilin",
      poder: 1000
    },
  ]

  get personajes():Personaje[] {
    return [...this._personajes]
  }

  agregarPersonaje(personaje:Personaje){
    this._personajes.push(personaje)
  }

}