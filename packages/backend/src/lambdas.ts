import { awsLambdaRequestHandler } from "@trpc/server/adapters/aws-lambda";
import { appRouter } from "./trpc";
import middy from "@middy/core";
import cors from "@middy/http-cors";

export const trpcHandlerLambda = middy(awsLambdaRequestHandler({ router: appRouter })).use(cors());
