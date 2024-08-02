import './App.css'
import './globals.css'
// import { ComingSoon } from "./components/coming-soon"
import { ThemeProvider } from "@/components/theme-provider"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { useState } from 'react';
import { trpc } from './trpc';
import { Leaderboard } from './components/leaderboard';

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000',
          async headers() {
            return {
              authorization: "Bearer 123",
            };
          },
        }),
      ],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          {/* <ComingSoon /> */}
          <Leaderboard />
        </ThemeProvider>
      </QueryClientProvider>
    </trpc.Provider>
  )
}

export default App
