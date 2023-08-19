import { Observable } from "rxjs";
import { UserModel } from "../models/user.model";


/**
 * @info
 * Defino esta clase para ser implementada por clases concretas en las capas externas
 */
export abstract class UserRespository{
  abstract login(params:{
    username:string,
    password:string
  }): Observable<UserModel>

  abstract register(params:{
    username:string,
    password:string,
    name:string
  }) : Observable<UserModel>

  abstract getUserProfile(): Observable<UserModel>
}