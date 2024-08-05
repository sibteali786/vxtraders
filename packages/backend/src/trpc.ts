import { initTRPC } from "@trpc/server";
import {
  searchAssetsInputSchema,
  searchAssetsOutputSchema,
  topPositionsInputSchema,
  topPositionsOutputSchema,
  topTradersInputSchema,
  topTradersOutputSchema,
} from "@vxtraders/shared";
import { searchAssetController } from "./controllers/search-asset-controller";
import { topTradersController } from "./controllers/top-traders-controller";
import { topPositionsController } from "./controllers/top-positions-controller";

const t = initTRPC.create();
export const router = t.router;
export const publicProcedure = t.procedure;

export const appRouter = router({
  topTraders: publicProcedure
    .input(topTradersInputSchema)
    .output(topTradersOutputSchema)
    .query(topTradersController),

  topPositions: publicProcedure
    .input(topPositionsInputSchema)
    .output(topPositionsOutputSchema)
    .query(topPositionsController),

  searchAssets: publicProcedure
    .input(searchAssetsInputSchema)
    .output(searchAssetsOutputSchema)
    .query(searchAssetController),
});

export type AppRouter = typeof appRouter;
