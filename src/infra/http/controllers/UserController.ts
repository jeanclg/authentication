import { MakeCreateUser } from '../../../factories/MakeCreateUser';
import { ICreateUserDTO } from '../../../services/CreateUserService';

export default class UserController {
  public async create(body: ICreateUserDTO): Promise<any> {
    const createUserService = MakeCreateUser();

    return createUserService.execute(body);
  }
}
