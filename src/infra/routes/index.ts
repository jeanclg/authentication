import Elysia from 'elysia';
import UserController from '../../core/user/service/UserController';
import { createUserSchema } from './schema/userSchema';

const route = new Elysia();
const usercontroller = new UserController();

route.group('/user', { detail: { tags: ['User'] } }, app => app
  .post(
    '/',
    async ({ body }) => usercontroller.create(body),
    createUserSchema,
  ));

export default route;
