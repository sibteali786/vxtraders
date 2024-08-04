import { z } from "zod";

const emptySchema = z.object({});
// type Empty = z.infer<typeof emptySchema>;

export const leaderboardsInputSchema = emptySchema;
export type LeaderboardsInput = z.infer<typeof leaderboardsInputSchema>;

export const traderSummarySchema = z.object({
  rank: z.number(),
  displayName: z.string(),
  username: z.string(),
  roi: z.number(),
});
export type TraderSummary = z.infer<typeof traderSummarySchema>;

export const positionSummarySchema = z.object({
  asset: z.string(),
  leverage: z.string(),
  mode: z.string(),
  entry: z.number(),
  exit: z.number(),
  roi: z.number(),
});
export type PositionSummary = z.infer<typeof positionSummarySchema>;

export const leaderboardsOutputSchema = z.object({
  traders: z.array(traderSummarySchema),
  positions: z.array(positionSummarySchema),
});
export type LeaderboardsOutput = z.infer<typeof leaderboardsOutputSchema>;

export const searchAssetsInputSchema = z.object({
  keyword: z.string(),
});
export type SearchAssetsInput = z.infer<typeof searchAssetsInputSchema>;

export const searchAsset = z.object({
  name: z.string(),
  symbol: z.string(),
  price: z.number(),
  change: z.number(),
});
export type SearchAsset = z.infer<typeof searchAsset>;

export const searchAssetsOutputSchema = z.array(searchAsset);
export type SearchAssetsOutput = z.infer<typeof searchAssetsOutputSchema>;