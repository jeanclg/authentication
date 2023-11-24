/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
import { IUserRepository } from '../@repositories/IUserRepository,';
import { User } from '../infra/prisma/models/User';
import { UseCase } from '../shared/UseCase';
import AppError from '../shared/error/AppError';

export interface ICreateUserDTO {
  name?: string;
  email:string
  password: string
}

export default class CreateUserService implements UseCase<ICreateUserDTO, User> {
  constructor(
    private userRepository: IUserRepository,
  ) {}

  async execute({ email, password }: ICreateUserDTO): Promise<User> {
    const user = await this.userRepository.findByEmail(email);

    if (user) {
      throw new AppError('email_already_exist');
    }

    return this.userRepository.create({ email, password });
  }
}
