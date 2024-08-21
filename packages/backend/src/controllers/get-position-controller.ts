import { GetPositionByIdInput, GetPositionByIdOutput } from "@vxtraders/shared";
import { topPositionsController } from "./top-positions-controller";
export const getPositionByIdController = async (opts: {
  input: GetPositionByIdInput;
}): Promise<GetPositionByIdOutput> => {
  console.log("getUserByIdSchema called with input", opts.input);
  const { positions } = await topPositionsController({ input: { count: 5 } });
  if (opts.input.id) {
    return {
      position: positions.find((position) => position.id === opts.input.id),
    };
  } else {
    return {
      position: undefined,
    };
  }
};
