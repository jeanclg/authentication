import { IUserRepository } from "../@repositories/IUserRepository,";
import { User } from "../infra/prisma/models/User";
import { UseCase } from "../shared/UseCase";


export interface ICreateUserDTO {
  name?: string;
  email:string
  password: string
}

export default class CreateUserService implements UseCase<ICreateUserDTO, User> {
  constructor(
    private userRepository: IUserRepository,
  ) {}

  execute({ email, password }: ICreateUserDTO): Promise<User> {
    return this.userRepository.create({ email, password });
  }
}
