export const checkUserAvailability = async (opts: {
  input: { userName: string };
}): Promise<boolean> => {
  console.log("getUserByIdSchema called with input", opts.input);
  const { userName } = opts.input;
  if (userName === "mark110") {
    return true;
  } else {
    return false;
  }
};
