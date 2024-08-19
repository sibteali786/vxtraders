import { TopPositionsInput, TopPositionsOutput } from "@vxtraders/shared";

export const topPositionsController = async (opts: {
  input: TopPositionsInput;
}): Promise<TopPositionsOutput> => {
  console.info("Top positions controller called with input", opts.input);
  return {
    positions: [
      {
        id: "1",
        userId: "1",
        asset: { name: "Bitcion", ticker: "BTC", image: "" },
        leverage: 10,
        tradeMode: "LONG",
        entryPrice: 50000,
        exitPrice: 60000,
        roi: 140,
        pnL: 12,
      },
      {
        id: "2",
        userId: "2",
        asset: { name: "Ethereum", ticker: "ETH", image: "" },
        leverage: 20,
        tradeMode: "SHORT",
        entryPrice: 3000,
        exitPrice: 2000,
        roi: 70,
        pnL: -10,
      },
      {
        id: "3",
        userId: "3",
        asset: { name: "Litecoin", ticker: "LTC", image: "" },
        leverage: 5,
        tradeMode: "LONG",
        entryPrice: 200,
        exitPrice: 300,
        roi: 50,
        pnL: 23,
      },
      {
        id: "4",
        userId: "4",
        asset: { name: "Ripple", ticker: "XRP", image: "" },
        leverage: 10,
        tradeMode: "SHORT",
        entryPrice: 1,
        exitPrice: 0.5,
        roi: 50,
        pnL: 45,
      },
      {
        id: "5",
        userId: "5",
        asset: { name: "Dogecoin", ticker: "DOGE", image: "" },
        leverage: 20,
        tradeMode: "LONG",
        entryPrice: 0.1,
        exitPrice: 0.2,
        roi: 50,
        pnL: 67,
      },
    ],
  };
};
