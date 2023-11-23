import { t } from 'elysia';

export const createUserSchema = {
  body: t.Object({
    email: t.String(),
    password: t.String(),
    name: t.String(),
  }),
};
