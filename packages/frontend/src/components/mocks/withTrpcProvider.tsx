import React, { PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client"; // Adjust this import to match the path to your TRPC instance
import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "@vxtraders/backend";

const baseUrl =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000"
    : "https://your-production-url.com"; // Adjust this to match your production URL

const trpc = createTRPCReact<AppRouter>();

export const StoryBookTrpcProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: baseUrl,
        }),
      ],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};
