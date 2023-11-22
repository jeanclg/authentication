import prisma from '../../../prisma';
import { User } from '../model/User';
import { IUserRepository } from './IUserRepository,';

export default class UserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { email } });
  }

  async create({ email, password }: User): Promise<User> {
    return prisma.user.create({ data: { email, password, name: '' } });
  }
}
