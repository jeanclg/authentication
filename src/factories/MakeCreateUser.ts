import UserRepository from '../infra/repositories/UserRepository';
import CreateUserService from '../services/CreateUserService';

export function MakeCreateUser() {
  const userRepository = new UserRepository();
  const createUserService = new CreateUserService(userRepository);

  return createUserService;
}
