import './App.css'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { useState } from 'react';
import { trpc } from './trpc';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HorizontalMenu } from './components/horizontal-menu';
import { Help } from './components/pages/help/help';
import { Settings } from './components/pages/settings/settings';
import { Portfolio } from './components/pages/portfolio/portfolio';
import { PageNotFound } from './components/pages/page-not-found';
import { Leaderboards } from './components/pages/leaderboards/leaderboards';
import { SelectAsset } from './components/pages/trade/select-asset';

const baseUrl = import.meta.env.MODE === 'development' ? 'http://localhost:3000' : 'https://tjfj3q2sck.execute-api.us-east-1.amazonaws.com/prod/';

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: baseUrl,
          // async headers() {
          //   return {
          //     authorization: "Bearer 123",
          //   };
          // },
        }),
      ],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Router>
            <Routes>
              <Route path="/" element={<Leaderboards />} />
              <Route path="/select-asset" element={<SelectAsset />} />
              <Route path="/help" element={<Help />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <HorizontalMenu />
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </trpc.Provider>
  )
}

export default App
