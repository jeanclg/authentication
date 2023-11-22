/* eslint-disable no-unused-vars */
import { User } from '../model/User';

export interface IUserRepository {
  findByEmail(email: string): Promise<User | null>
  create(dto: User): Promise<User>
}
