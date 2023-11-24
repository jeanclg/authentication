/* eslint-disable default-case */
/* eslint-disable no-shadow */
import Elysia from 'elysia';
import { swagger } from '@elysiajs/swagger';
import routes from './routes';
import AppError from '../../shared/error/AppError';

const app = new Elysia();

app
  .use(
    swagger({
      exclude: ['/docs', '/docs/json', '/'],
      path: '/docs',
      documentation: {
        info: {
          title: 'Bun.js CRUD app with Elysia.js',
          version: '1.0.0',
        },
      },
    }),
  );

app.get('/', () => ({ connected: true }));

app.group('/v1', app => app
  .use(routes))
  .error({
    message: AppError,
  })
  .onError(({ code, error }) => {
    switch (code) {
      case 'message':
        return error;
    }
  });

app.listen(3000, () => {
  console.log(`🦊 Server is running at ${app.server?.hostname}:${3000}`);
});
