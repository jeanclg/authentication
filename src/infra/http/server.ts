/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import Elysia from 'elysia';
import { swagger } from '@elysiajs/swagger';
import routes from '../routes/index';

const app = new Elysia();

app
  .use(
    swagger({
      exclude: ['/docs', '/docs/json'],
      path: '/docs',
      documentation: {
        info: {
          title: 'Bun.js CRUD app with Elysia.js',
          version: '1.0.0',
        },
      },
    }),
  );

app.group('/v1', app => app
  .use(routes));

app.listen(3000, () => {
  console.log(`🦊 Elysia is running at ${app.server?.hostname}:${3000}`);
});
