import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();
export const router = t.router;
export const publicProcedure = t.procedure;

export const appRouter = router({
  userList: publicProcedure
    .query(async () => {
      return [{ id: 1, name: 'Alice' }, { id: 2, name: 'John' }];
    }),
  createUser: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input }) => {
      console.log('Creating user', input);
      return { id: 3, name: input.name };
    }),
});

export type AppRouter = typeof appRouter;