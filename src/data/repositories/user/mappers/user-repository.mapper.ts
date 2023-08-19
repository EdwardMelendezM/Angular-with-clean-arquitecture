import { Mapper } from "src/base/mapper";
import { UserEntity } from "../entities/user-entitys";
import { UserModel } from "src/domain/models/user.model";


export class UserImplementationRepositoryMapper extends Mapper<UserEntity,UserModel>{

  override mapFrom(params: UserEntity): UserModel {
    return{
      id: params.id,
      fullName:params.name,
      username:params.userName,
      phoneNum:params.phoneNumber,
      profilePicture:params.userPicture,
      activationStatus:params.activationStatus
    }
  }

  override mapTo(params: UserModel): UserEntity {
    return{
      id:params.id,
      name:params.fullName,
      userName:params.username,
      phoneNumber:params.phoneNum,
      userPicture:params.profilePicture,
      activationStatus:params.profilePicture
    }
  }

}
