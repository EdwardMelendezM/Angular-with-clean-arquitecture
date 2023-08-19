import { UseCase } from "src/base/use-case";
import { UserModel } from "../models/user.model";
import { UserRespository } from "../repositories/user.repository";
import { Observable } from "rxjs";

export class GetUserProfileUseCase implements UseCase<void, UserModel>{
  constructor( private userRepository:UserRespository ){}

  execute(): Observable<UserModel> {
    return this.userRepository.getUserProfile()
  }
}