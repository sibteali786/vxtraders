import "./App.css";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useState } from "react";
import { trpc } from "./trpc";

import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { HorizontalMenu } from "./components/horizontal-menu";
import { Help } from "./pages/help/help";
import { Settings } from "./pages/settings/settings";
import { Portfolio } from "./pages/portfolio/portfolio";
import { PageNotFound } from "./pages/page-not-found";
import { Leaderboards } from "./pages/leaderboards/leaderboards";
import { SelectAsset } from "./pages/trade/select-asset";
import { TopTraders } from "./pages/leaderboards/topTraders/topTraders";
import { TopPositions } from "./pages/leaderboards/topPositions/topPositions";

const baseUrl =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000"
    : "https://tjfj3q2sck.execute-api.us-east-1.amazonaws.com/prod/";

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
            <MainRouting />
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

function MainRouting() {
  const location = useLocation();
  const subScreenPaths = ["/topTraders", "/topPositions"];
  const hideNavBar = subScreenPaths.includes(location.pathname);
  return (
    <div className="w-full max-w-[600px] flex flex-col justify-center px-[16px]">
      <Routes>
        <Route path="/" element={<Leaderboards />} />
        <Route path="/topTraders" element={<TopTraders />} />
        <Route path="/topPositions" element={<TopPositions />} />
        <Route path="/select-asset" element={<SelectAsset />} />
        <Route path="/help" element={<Help />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {!hideNavBar && <HorizontalMenu />}
    </div>
  );
}

export default App;
