import { LeaderboardsOutput } from "@vxtraders/shared";

export const leaderboardsController = async (): Promise<LeaderboardsOutput> => {
  return {
    traders: [
      { rank: 1, displayName: "Alice Smith", username: "@alice", roi: 50 },
      { rank: 2, displayName: "Bob Johnson", username: "@bob", roi: 40 },
      { rank: 3, displayName: "Charlie Brown", username: "@charlie", roi: 30 },
      { rank: 4, displayName: "David Lee", username: "@david", roi: 20 },
      { rank: 5, displayName: "Eve Williams", username: "@eve2", roi: 10 },
    ],
    positions: [
      { asset: "Bitcion", leverage: "10x", mode: "LONG", entry: 50000, exit: 60000, roi: 140 },
      { asset: "Ethereum", leverage: "20x", mode: "SHORT", entry: 3000, exit: 2000, roi: 70 },
      { asset: "Litecoin", leverage: "5x", mode: "LONG", entry: 200, exit: 300, roi: 50 },
      { asset: "Ripple", leverage: "10x", mode: "SHORT", entry: 1, exit: 0.5, roi: 50 },
      { asset: "Dogecoin", leverage: "20x", mode: "LONG", entry: 0.1, exit: 0.2, roi: 50 },
    ],
  };
};
