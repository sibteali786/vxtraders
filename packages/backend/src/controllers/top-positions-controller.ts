import { TopPositionsInput, TopPositionsOutput } from "@vxtraders/shared";

export const topPositionsController = async (opts: {
  input: TopPositionsInput;
}): Promise<TopPositionsOutput> => {
  console.info("Top traders controller called with input", opts.input);
  return {
    positions: [
      {
        asset: { name: "Bitcion", ticker: "BTC", image: "" },
        leverage: 10,
        tradeMode: "LONG",
        entryPrice: 50000,
        exitPrice: 60000,
        roi: 140,
      },
      {
        asset: { name: "Ethereum", ticker: "ETH", image: "" },
        leverage: 20,
        tradeMode: "SHORT",
        entryPrice: 3000,
        exitPrice: 2000,
        roi: 70,
      },
      {
        asset: { name: "Litecoin", ticker: "LTC", image: "" },
        leverage: 5,
        tradeMode: "LONG",
        entryPrice: 200,
        exitPrice: 300,
        roi: 50,
      },
      {
        asset: { name: "Ripple", ticker: "XRP", image: "" },
        leverage: 10,
        tradeMode: "SHORT",
        entryPrice: 1,
        exitPrice: 0.5,
        roi: 50,
      },
      {
        asset: { name: "Dogecoin", ticker: "DOGE", image: "" },
        leverage: 20,
        tradeMode: "LONG",
        entryPrice: 0.1,
        exitPrice: 0.2,
        roi: 50,
      },
    ],
  };
};
