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

// For getting top trading positions
export const positionSummarySchema = z.object({
  asset: assetSchema,
  leverage: z.number(),
  tradeMode: tradeModeSchema,
  entryPrice: z.number(),
  exitPrice: z.number(),
  roi: z.number(),
  pnL: z.number(),
  userId: z.string(),
  id: z.string(),
});
// For getting top traders
export const traderSummarySchema = z.object({
  id: z.string(),
  avatar: z.string(),
  displayName: z.string(),
  username: z.string(),
  roi: z.number(),
  positions: z.array(positionSummarySchema),
});
export type TraderSummary = z.infer<typeof traderSummarySchema>;

export const getUserByIdInputSchema = z.object({
  id: z.string(),
});

export type GetUserByIdInput = z.infer<typeof getUserByIdInputSchema>;

export const getUserByIdOutputSchema = z.object({
  user: traderSummarySchema.optional(),
});

export type GetUserByIdOutput = z.infer<typeof getUserByIdOutputSchema>;

export const topTradersInputSchema = z.object({
  count: z.number().optional(),
  timeframe: timeframe.optional(),
});
export type TopTradersInput = z.infer<typeof topTradersInputSchema>;

export const topTradersOutputSchema = z.object({
  traders: z.array(traderSummarySchema),
});
export type TopTradersOutput = z.infer<typeof topTradersOutputSchema>;

export type PositionSummary = z.infer<typeof positionSummarySchema>;

export const ChannelCardSchema = z.object({
  avatar: z.string(),
  name: z.string(),
  handle: z.string(),
});

export type Channel = z.infer<typeof ChannelCardSchema>;

export const channelInputSchema = z.object({
  count: z.number().optional(),
  user: z.string().optional(),
});

export const channelOutputSchema = z.object({
  channels: z.array(ChannelCardSchema),
});

export type ChannelInput = z.infer<typeof channelInputSchema>;
export type ChannelOutput = z.infer<typeof channelOutputSchema>;

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

export const getPositionByIdInputSchema = z.object({
  id: z.string(),
});
export type GetPositionByIdInput = z.infer<typeof getPositionByIdInputSchema>;

export const getPositionByIdOutputSchema = z.object({
  position: positionSummarySchema.optional(),
});
export type GetPositionByIdOutput = z.infer<typeof getPositionByIdOutputSchema>;
