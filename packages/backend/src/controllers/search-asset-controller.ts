import { SearchAssetsInput, SearchAssetsOutput } from "@vxtraders/shared";

export const searchAssetController = async (opts: {
  input: SearchAssetsInput;
}): Promise<SearchAssetsOutput> => {
  console.info("searchAssetController", opts.input);
  const { keyword } = opts.input;
  // Convert the keyword to lowercase for case-insensitive matching
  const assets = [
    { name: "Bitcoin", ticker: "BTC", image: "", price: 50000, change: -5 },
    { name: "Ethereum", ticker: "ETH", image: "", price: 3000, change: 10 },
    { name: "Litecoin", ticker: "LTC", image: "", price: 200, change: -20 },
    { name: "Ripple", ticker: "XRP", image: "", price: 1, change: 50 },
    { name: "Dogecoin", ticker: "DOGE", image: "", price: 0.1, change: 100 },
    { name: "Cardano", ticker: "ADA", image: "", price: 1.5, change: -30 },
    { name: "Polkadot", ticker: "DOT", image: "", price: 20, change: -40 },
    { name: "Uniswap", ticker: "UNI", image: "", price: 30, change: 60 },
    { name: "Chainlink", ticker: "LINK", image: "", price: 30, change: 60 },
    { name: "Stellar", ticker: "XLM", image: "", price: 0.5, change: 70 },
    { name: "VeChain", ticker: "VET", image: "", price: 0.1, change: 80 },
    { name: "Tron", ticker: "TRX", image: "", price: 0.1, change: 90 },
    { name: "EOS", ticker: "EOS", image: "", price: 5, change: -10 },
    { name: "Tezos", ticker: "XTZ", image: "", price: 5, change: 20 },
    { name: "Aave", ticker: "AAVE", image: "", price: 300, change: 30 },
    { name: "Compound", ticker: "COMP", image: "", price: 300, change: -40 },
    { name: "Synthetix", ticker: "SNX", image: "", price: 20, change: 50 },
    { name: "Yearn Finance", ticker: "YFI", image: "", price: 30000, change: 60 },
    { name: "SushiSwap", ticker: "SUSHI", image: "", price: 20, change: 70 },
    { name: "Balancer", ticker: "BAL", image: "", price: 20, change: 80 },
    { name: "Curve DAO Token", ticker: "CRV", image: "", price: 5, change: -90 },
    { name: "Ren", ticker: "REN", image: "", price: 0.5, change: 10 },
    { name: "UMA", ticker: "UMA", image: "", price: 10, change: 20 },
    { name: "Ocean Protocol", ticker: "OCEAN", image: "", price: 0.5, change: 30 },
    { name: "Band Protocol", ticker: "BAND", image: "", price: 10, change: 40 },
    { name: "Orchid", ticker: "OXT", image: "", price: 0.5, change: 50 },
    { name: "Celo", ticker: "CELO", image: "", price: 5, change: 60 },
    { name: "Numeraire", ticker: "NMR", image: "", price: 50, change: -70 },
    { name: "Polygon", ticker: "MATIC", image: "", price: 1000, change: 80 },
  ];
  if (keyword) {
    const lowercasedKeyword = keyword.toLowerCase();
    // Filter the assets that match the keyword
    const filteredAssets = assets.filter(
      (asset) =>
        asset.name.toLowerCase().includes(lowercasedKeyword) ||
        asset.ticker.toLowerCase().includes(lowercasedKeyword),
    );
    return { assets: filteredAssets };
  }

  return {
    assets: assets,
  };
};
