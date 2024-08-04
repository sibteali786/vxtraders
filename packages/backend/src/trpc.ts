import { initTRPC } from "@trpc/server";
import {
  leaderboardsInputSchema,
  leaderboardsOutputSchema,
  searchAssetsInputSchema,
  searchAssetsOutputSchema,
} from "@vxtraders/shared";
import { leaderboardsController } from "./controllers/leaderboards-controller";
import { searchAssetController } from "./controllers/search-asset-controller";

const t = initTRPC.create();
export const router = t.router;
export const publicProcedure = t.procedure;

export const appRouter = router({
  leaderboards: publicProcedure
    .input(leaderboardsInputSchema)
    .output(leaderboardsOutputSchema)
    .query(leaderboardsController),

  searchAssets: publicProcedure
    .input(searchAssetsInputSchema)
    .output(searchAssetsOutputSchema)
    .query(searchAssetController),
});

export type AppRouter = typeof appRouter;
