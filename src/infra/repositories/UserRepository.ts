import prisma from "../../client/prisma";
import { IUserRepository } from "../../@repositories/IUserRepository,";
import { User } from "../prisma/models/User";


export default class UserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { email } });
  }

  async create({ email, password }: User): Promise<User> {
    return prisma.user.create({ data: { email, password, name: '' } });
  }
}
