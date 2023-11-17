/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import Elysia from 'elysia';
import { swagger } from '@elysiajs/swagger';

const app = new Elysia();

app
  .use(
    swagger({
      path: '/v1/swagger',
      documentation: {
        info: {
          title: 'Bun.js CRUD app with Elysia.js',
          version: '1.0.0',
        },
      },
    }),
  );

app.get('/', async () => 'Hello World');

app.listen(3000, () => {
  console.log(`🦊 Elysia is running at ${app.server?.hostname}:${3000}`);
});
