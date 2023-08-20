import { NgModule } from "@angular/core";
import { UserRespository } from "src/domain/repositories/user.repository";
import { GetUserProfileUseCase } from "src/domain/usercases/get-user-profile.usecase";
import { UserLoginUseCase } from "src/domain/usercases/user-login.usercase";
import { UserRegisterUseCase } from "src/domain/usercases/user-register.usecase";
import { UserImplementationRepository } from "./repositories/user/user-implementation.repository";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

const userLoginUseCaseFactory = (userRepo:UserRespository)=> new UserLoginUseCase(userRepo)
export const userLoginUseCaseProvider = {
  provide:UserLoginUseCase,
  useFactory: userLoginUseCaseFactory,
  deps: [UserRespository]
}


const userRegisterUseFactory = (userRepo: UserRespository)=> new UserRegisterUseCase(userRepo)
export const userRegisterUseCaseProvider={
  provide: UserRegisterUseCase,
  useFactory: userRegisterUseFactory,
  deps: [UserRespository]
}


const getUserProfileUseCaseFactory = (userRepo: UserRespository)=> new GetUserProfileUseCase(userRepo)
export const getUserProfileUseCaseProvide={
  provide: GetUserProfileUseCase,
  useFactory: getUserProfileUseCaseFactory,
  deps: [UserRespository]
}

@NgModule({
  providers: [
    userLoginUseCaseProvider,
    userRegisterUseCaseProvider,
    getUserProfileUseCaseProvide,
    {
      provide: UserRespository,
      useClass: UserImplementationRepository
    }
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
})

export class DataModule{}