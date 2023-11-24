/* eslint-disable no-unused-vars */
import { User } from '../infra/prisma/models/User';

export interface IUserRepository {
  findByEmail(email: string): Promise<User | null>
  create(dto: User): Promise<User>
}
