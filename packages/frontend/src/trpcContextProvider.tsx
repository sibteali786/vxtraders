import { useState } from "react";
import { httpLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRouter } from "@vxtraders/backend/src/trpc";
import { baseUrl } from "./App";

export const api = createTRPCReact<AppRouter>();

export const TRPCReactProvider = (props: { children: React.ReactNode }) => {
  // these default options allow to see error state without any delay, remove defaultOptions to get normal flow
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false, // Disable retries for failed queries
            staleTime: 0, // Ensure fresh data is fetched each time
          },
        },
      }),
  );
  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        httpLink({
          url: baseUrl,
          headers() {
            return {
              "content-type": "application/json",
            };
          },
        }),
      ],
    }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <api.Provider client={trpcClient} queryClient={queryClient}>
        {props.children}
      </api.Provider>
    </QueryClientProvider>
  );
};
