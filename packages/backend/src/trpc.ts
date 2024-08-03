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
  leaderboards: publicProcedure
    .query(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return {
        traders: [
          { rank: 1, displayName: 'Alice Smith', username: '@alice', roi: 50 },
          { rank: 2, displayName: 'Bob Johnson', username: '@bob', roi: 40 },
          { rank: 3, displayName: 'Charlie Brown', username: '@charlie', roi: 30 },
          { rank: 4, displayName: 'David Lee', username: '@david', roi: 20 },
          { rank: 5, displayName: 'Eve Williams', username: '@eve2', roi: 10 },
        ],
        positions: [
          { asset: "Bitcion", leverage: '10x', mode: 'LONG', entry: 50000, exit: 60000, roi: 140 },
          { asset: "Ethereum", leverage: '20x', mode: 'SHORT', entry: 3000, exit: 2000, roi: 70 },
          { asset: "Litecoin", leverage: '5x', mode: 'LONG', entry: 200, exit: 300, roi: 50 },
          { asset: "Ripple", leverage: '10x', mode: 'SHORT', entry: 1, exit: 0.5, roi: 50 },
          { asset: "Dogecoin", leverage: '20x', mode: 'LONG', entry: 0.1, exit: 0.2, roi: 50},
        ],
      };
    }),
    searchAssets: publicProcedure
      .query(async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return [
          { name: "Bitcoin", symbol: "BTC", price: 50000, change: 5 },
          { name: "Ethereum", symbol: "ETH", price: 3000, change: 10 },
          { name: "Litecoin", symbol: "LTC", price: 200, change: 20 },
          { name: "Ripple", symbol: "XRP", price: 1, change: 50 },
          { name: "Dogecoin", symbol: "DOGE", price: 0.1, change: 100 },
          { name: "Cardano", symbol: "ADA", price: 1.5, change: 30 },
          { name: "Polkadot", symbol: "DOT", price: 20, change: 40 },
          { name: "Uniswap", symbol: "UNI", price: 30, change: 60 },
          { name: "Chainlink", symbol: "LINK", price: 30, change: 60 },
          { name: "Stellar", symbol: "XLM", price: 0.5, change: 70 },
          { name: "VeChain", symbol: "VET", price: 0.1, change: 80 },
          { name: "Tron", symbol: "TRX", price: 0.1, change: 90 },
          { name: "EOS", symbol: "EOS", price: 5, change: 10 },
          { name: "Tezos", symbol: "XTZ", price: 5, change: 20 },
          { name: "Aave", symbol: "AAVE", price: 300, change: 30 },
          { name: "Compound", symbol: "COMP", price: 300, change: 40 },
          { name: "Synthetix", symbol: "SNX", price: 20, change: 50 },
          { name: "Yearn Finance", symbol: "YFI", price: 30000, change: 60 },
          { name: "SushiSwap", symbol: "SUSHI", price: 20, change: 70 },
          { name: "Balancer", symbol: "BAL", price: 20, change: 80 },
          { name: "Curve DAO Token", symbol: "CRV", price: 5, change: 90 },
          { name: "Ren", symbol: "REN", price: 0.5, change: 10 },
          { name: "UMA", symbol: "UMA", price: 10, change: 20 },
          { name: "Ocean Protocol", symbol: "OCEAN", price: 0.5, change: 30 },
          { name: "Band Protocol", symbol: "BAND", price: 10, change: 40 },
          { name: "Orchid", symbol: "OXT", price: 0.5, change: 50 },
          { name: "Celo", symbol: "CELO", price: 5, change: 60 },
          { name: "Numeraire", symbol: "NMR", price: 50, change: 70 },
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
