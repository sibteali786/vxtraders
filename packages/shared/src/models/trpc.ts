/* eslint @typescript-eslint/no-unused-vars: off */
import { z } from "zod";

export const timeframe = z.enum(["24h", "7d", "30d", "90d"]);
export type Timeframe = z.infer<typeof timeframe>;

export const assetSchema = z.object({
  name: z.string(),
  ticker: z.string(),
  image: z.string(),
});
export type Asset = z.infer<typeof assetSchema>;

export const tradeModeSchema = z.enum(["LONG", "SHORT"]);
export type TradeMode = z.infer<typeof tradeModeSchema>;

// For getting top traders
export const traderSummarySchema = z.object({
  avatar: z.string(),
  displayName: z.string(),
  username: z.string(),
  roi: z.number(),
});
export type TraderSummary = z.infer<typeof traderSummarySchema>;

export const topTradersInputSchema = z.object({
  count: z.number().optional(),
  timeframe: timeframe.optional(),
});
export type TopTradersInput = z.infer<typeof topTradersInputSchema>;

export const topTradersOutputSchema = z.object({
  traders: z.array(traderSummarySchema),
});
export type TopTradersOutput = z.infer<typeof topTradersOutputSchema>;

// For getting top trading positions
export const positionSummarySchema = z.object({
  asset: assetSchema,
  leverage: z.number(),
  tradeMode: tradeModeSchema,
  entryPrice: z.number(),
  exitPrice: z.number(),
  roi: z.number(),
});
export type PositionSummary = z.infer<typeof positionSummarySchema>;

export const topPositionsInputSchema = z.object({
  count: z.number().optional(),
  timeframe: timeframe.optional(),
});
export type TopPositionsInput = z.infer<typeof topPositionsInputSchema>;

export const topPositionsOutputSchema = z.object({
  positions: z.array(positionSummarySchema),
});
export type TopPositionsOutput = z.infer<typeof topPositionsOutputSchema>;

// For searching asset to trade
export const searchAssetsInputSchema = z.object({
  keyword: z.string().optional(),
});
export type SearchAssetsInput = z.infer<typeof searchAssetsInputSchema>;

export const searchAssetSchema = assetSchema.extend({
  price: z.number(),
  change: z.number(),
});
export type SearchAsset = z.infer<typeof searchAssetSchema>;

export const searchAssetsOutputSchema = z.object({
  assets: z.array(searchAssetSchema),
});
export type SearchAssetsOutput = z.infer<typeof searchAssetsOutputSchema>;
