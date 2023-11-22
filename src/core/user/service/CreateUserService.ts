/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
import { UseCase } from '../../shared/UseCase';
import { User } from '../model/User';
import { IUserRepository } from './IUserRepository,';

export interface ICreateUserDTO {
  name?: string;
  email:string
  password: string
}

export default class CreateUserService implements UseCase<ICreateUserDTO, User> {
  constructor(
    private readonly userRepository: IUserRepository,
  ) {}

  execute({ email, password }: ICreateUserDTO): Promise<User> {
    return this.userRepository.create({ email, password });
  }
}
