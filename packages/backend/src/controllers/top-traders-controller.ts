import { TopTradersInput, TopTradersOutput } from "@vxtraders/shared";

export const topTradersController = async (opts: {
  input: TopTradersInput;
}): Promise<TopTradersOutput> => {
  console.info("Top traders controller called with input", opts.input);
  return {
    traders: [
      { avatar: "", displayName: "Alice Smith", username: "@alice", roi: 50 },
      { avatar: "", displayName: "Bob Johnson", username: "@bob", roi: 40 },
      { avatar: "", displayName: "Charlie Brown", username: "@charlie", roi: 30 },
      { avatar: "", displayName: "David Lee", username: "@david", roi: 20 },
      { avatar: "", displayName: "Eve Williams", username: "@eve2", roi: 10 },
    ],
  };
};
