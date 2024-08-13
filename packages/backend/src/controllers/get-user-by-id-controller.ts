import { GetUserByIdInput, GetUserByIdOutput } from "@vxtraders/shared";
import { topTradersController } from "./top-traders-controller";
export const getUserByIdController = async (opts: {
  input: GetUserByIdInput;
}): Promise<GetUserByIdOutput> => {
  console.log("getUserByIdSchema called with input", opts.input);
  const traders = await topTradersController({ input: { count: 5 } });
  if (opts.input.id) {
    return {
      user: traders.traders.find((trader) => trader.id === opts.input.id),
    };
  } else {
    return {};
  }
};
