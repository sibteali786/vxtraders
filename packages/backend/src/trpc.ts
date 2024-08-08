import { initTRPC } from "@trpc/server";
import {
  channelInputSchema,
  channelOutputSchema,
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
import { channelsController } from "./controllers/channels-controller";

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

  getChannelsForUser: publicProcedure
    .input(channelInputSchema)
    .output(channelOutputSchema)
    .query(channelsController),
});

export type AppRouter = typeof appRouter;
