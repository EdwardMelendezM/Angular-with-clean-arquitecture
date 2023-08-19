import { UseCase } from "src/base/use-case";
import { UserModel } from "../models/user.model";
import { Observable } from "rxjs";
import { UserRespository } from "../repositories/user.repository";

export class UserLoginUseCase implements UseCase<{
  username:string,
  password:string
}, UserModel>{

  constructor( private userRepository: UserRespository ){}

  execute(
    params:{
      username:string,
      password:string
    },
  ):Observable<UserModel>  {
    return this.userRepository.login(params)
  }
  
}