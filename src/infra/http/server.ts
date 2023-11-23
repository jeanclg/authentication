import Elysia from 'elysia';
import { swagger } from '@elysiajs/swagger';
import routes from './routes';

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

app.get('/', () => {
  return {connected: true}
})

app.group('/v1', app => app
  .use(routes))
  .onError(({ code, error }) => {
    return new Response(error.toString())
})

app.listen(3000, () => {
  console.log(`🦊 Server is running at ${app.server?.hostname}:${3000}`);
});
