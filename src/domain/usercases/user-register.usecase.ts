import { UseCase } from "src/base/use-case";
import { UserModel } from "../models/user.model";
import { UserRespository } from "../repositories/user.repository";
import { Observable } from "rxjs";

export class UserRegisterUseCase implements UseCase<
{
  username:string
  password:string
  fullName:string
},UserModel>{
  constructor( private userRepository:UserRespository ){}

  execute(
    params: { username: string; password: string; fullName: string }
    ): Observable<UserModel> {
      return this.userRepository.register(params)
  }

}