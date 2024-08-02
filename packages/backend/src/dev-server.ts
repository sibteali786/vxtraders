import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { appRouter } from './trpc';

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000, () => {
  console.info('Server is running on http://localhost:3000');
});