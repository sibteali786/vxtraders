import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();
export const router = t.router;
export const publicProcedure = t.procedure;

export const appRouter = router({
  leaderboard: publicProcedure
    .query(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return [
        { rank: 1, displayName: 'Alice Smith', username: '@alice', roi: 50 },
        { rank: 2, displayName: 'Bob Johnson', username: '@bob', roi: 40 },
        { rank: 3, displayName: 'Charlie Brown', username: '@charlie', roi: 30 },
        { rank: 4, displayName: 'David Lee', username: '@david', roi: 20 },
        { rank: 5, displayName: 'Eve Williams', username: '@eve2', roi: 10 },
      ];
    }),
  createUser: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input }) => {
      console.log('Creating user', input);
      return { id: 3, name: input.name };
    }),
});

export type AppRouter = typeof appRouter;
