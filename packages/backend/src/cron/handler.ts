import { User } from "@vxtraders/shared";

export const cronHandler = async (event: any, context: any) => {
  console.log("Received event:", JSON.stringify(event, null, 2));
  console.log("Received context:", JSON.stringify(context, null, 2));

  const user = new User("John");
  console.log(user);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: user.greet() }),
  };
};
