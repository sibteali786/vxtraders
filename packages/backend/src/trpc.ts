import { publicProcedure } from "./trpc";
import { initTRPC } from "@trpc/server";
import {
  channelInputSchema,
  channelOutputSchema,
  getPositionByIdInputSchema,
  getPositionByIdOutputSchema,
  getUserByIdInputSchema,
  getUserByIdOutputSchema,
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
import { getUserByIdController } from "./controllers/get-user-by-id-controller";
import { getPositionByIdController } from "./controllers/get-position-controller";
import { z } from "zod";
import { checkUserAvailability } from "./controllers/check-user-availability";

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

  getUserById: publicProcedure
    .input(getUserByIdInputSchema)
    .output(getUserByIdOutputSchema)
    .query(getUserByIdController),
  getPositionById: publicProcedure
    .input(getPositionByIdInputSchema)
    .output(getPositionByIdOutputSchema)
    .query(getPositionByIdController),
  userNameAvailablity: publicProcedure
    .input(
      z.object({
        userName: z.string(),
      }),
    )
    .output(z.boolean())
    .query(checkUserAvailability),
});

export type AppRouter = typeof appRouter;
