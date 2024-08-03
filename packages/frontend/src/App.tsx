import './App.css'
import './globals.css'
// import { ComingSoon } from "./components/coming-soon"
import { ThemeProvider } from "@/components/theme-provider"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { useState } from 'react';
import { trpc } from './trpc';
import { Leaderboard } from './components/leaderboard';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Leaderboard2 } from './components/leaderboard2';
import { HorizontalMenu } from './components/horizontal-menu';

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
              <Route path="/" element={<Leaderboard />} />
              <Route path="/leaderboard2" element={<Leaderboard2 />} />
            </Routes>
            <HorizontalMenu />
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </trpc.Provider>
  )
}

export default App
