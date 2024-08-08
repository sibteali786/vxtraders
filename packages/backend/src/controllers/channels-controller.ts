import { ChannelInput, ChannelOutput } from "@vxtraders/shared";

export const channelsController = async (opts: { input: ChannelInput }): Promise<ChannelOutput> => {
  console.info("Channels controller called with input", opts.input);
  // somehow get channel by user name / id ( both can be used as index for faster searches)
  const user = opts.input.user;
  // if any user is provided in input, return some channels
  if (user) {
    return {
      channels: [
        { avatar: "/avatar.png", name: "Trader Pro", handle: "@trdp" },
        { avatar: "/avatar.png", name: "Crypto", handle: "@crypto" },
        { avatar: "/avatar.png", name: "Stocks", handle: "@stocks" },
        { avatar: "/avatar.png", name: "Forex", handle: "@forex" },
      ],
    };
  } else {
    return {
      channels: [],
    };
  }
};
