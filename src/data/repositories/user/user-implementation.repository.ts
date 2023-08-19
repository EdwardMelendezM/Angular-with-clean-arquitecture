import { Injectable } from "@angular/core";
import { UserRespository } from "src/domain/repositories/user.repository";

import { HttpClient } from "@angular/common/http"
import { UserImplementationRepositoryMapper } from "./mappers/user-repository.mapper";
import { Observable, map } from "rxjs";
import { UserModel } from "src/domain/models/user.model";
import { UserEntity } from "./entities/user-entitys";


@Injectable({
  providedIn:"root"
})

export class UserImplementationRepository extends UserRespository{

  userMapper = new UserImplementationRepositoryMapper();

  constructor( private http:HttpClient ){
    super()
  }

  override login(params: { username: string; password: string; }): Observable<UserModel> {
    return this.http
      .post<UserEntity>("https://example.com/login",{params})
      .pipe(map(this.userMapper.mapFrom))
  }

  override register(params: { username: string; password: string; fullName: string; }): Observable<UserModel> {
    return this.http
      .post<UserEntity>("https://example.com/regiter",{params})
      .pipe(map(this.userMapper.mapFrom))
  }

  override getUserProfile(): Observable<UserModel> {
    return this.http
      .get<UserEntity>("https://example.com/user")
      .pipe(map(this.userMapper.mapFrom))
  }


}