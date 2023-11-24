import Elysia from 'elysia';
import UserController from '../controllers/UserController';
import { createUserSchema } from './schemas/userSchema';

const route = new Elysia();
const usercontroller = new UserController();

route.group('/user', { detail: { tags: ['User'] } }, app => app
  .post(
    '/',
    async ({ body }) => usercontroller.create(body),
    createUserSchema,
  ));

export default route;
