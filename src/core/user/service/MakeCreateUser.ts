import CreateUserService from './CreateUserService';
import UserRepository from './UserRepository';

export function MakeCreateUser() {
  const userRepository = new UserRepository();
  const createUserService = new CreateUserService(userRepository);

  return createUserService;
}
