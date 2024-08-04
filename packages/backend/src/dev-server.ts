import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { appRouter } from "./trpc";
import cors from "cors";

const server = createHTTPServer({
  router: appRouter,
  middleware: cors({ origin: "*" }),
});

server.listen(3000, () => {
  console.info("Server is running on http://localhost:3000");
});
