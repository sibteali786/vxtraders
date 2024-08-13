import { TopTradersInput, TopTradersOutput } from "@vxtraders/shared";

export const topTradersController = async (opts: {
  input: TopTradersInput;
}): Promise<TopTradersOutput> => {
  console.info("Top traders controller called with input", opts.input);
  return {
    traders: [
      { id: "1", avatar: "/avatar.png", displayName: "Alice Smith", username: "@alice", roi: 50 },
      { id: "2", avatar: "/avatar.png", displayName: "Bob Johnson", username: "@bob", roi: 40 },
      {
        id: "3",
        avatar: "/avatar.png",
        displayName: "Charlie Brown",
        username: "@charlie",
        roi: 30,
      },
      { id: "4", avatar: "/avatar.png", displayName: "Diana White", username: "@diana", roi: 20 },
      { id: "5", avatar: "/avatar.png", displayName: "Eve Black", username: "@eve", roi: 10 },
    ],
  };
};
