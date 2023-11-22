import { MakeCreateUser } from './MakeCreateUser';
import { ICreateUserDTO } from './CreateUserService';

export default class UserController {
  public async create(body: ICreateUserDTO): Promise<any> {
    const createUserService = MakeCreateUser();

    return createUserService.execute(body);
  }
}
