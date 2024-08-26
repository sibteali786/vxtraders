import "./App.css";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useEffect, useState } from "react";
import { trpc } from "./trpc";

import { BrowserRouter as Router, Route, Routes, useLocation, matchPath } from "react-router-dom";
import { HorizontalMenu } from "./components/horizontalMenu";
import { Help } from "./pages/help/help";
import { Settings } from "./pages/settings/settings";
import { Portfolio } from "./pages/portfolio/portfolio";
import { PageNotFound } from "./pages/pageNotFound";
import { Leaderboards } from "./pages/leaderboards/leaderboards";
import { SelectAsset } from "./pages/trade/selectAsset";
import { EditProfile } from "./pages/settings/editProfile/editProfile";
import PrivacyPolicy from "./pages/settings/privacyPolicy/privacyPolicy";
import ChannelIntegration from "./pages/settings/channels/channelIntegration";
import { TradersList } from "./components/common/leaderboards/tradersList";
import { MAX_LIST_COUNT } from "./stores/constants";
import { PositionsList } from "./components/common/leaderboards/positionList";
import { Position } from "./pages/position/Position";
import { PlaceVirtualOrder } from "./pages/trade/placeOrder";
import { Register } from "./pages/register/register";
import { useUserSignInStore } from "./stores/useState";
import { ProtectedRoute } from "./utils/protectedRoutes";
import { LoaderCircle } from "lucide-react"; // Import your spinner icon

export const baseUrl =
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
  useEffect(() => {
    // Scroll to top when the route changes
    window.scrollTo(0, 0);
  }, [location]);

  const subScreenPaths = [
    "/top-traders",
    "/top-positions",
    "/settings/edit-profile",
    "/settings/privacy-policy",
    "/settings/integration",
    "/position/:id",
    "/select-asset/:ticker",
    "/register",
  ];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  const hideNavBar = subScreenPaths.some((path) => matchPath(path, location.pathname));
  const [isUserSigned] = useUserSignInStore((state) => [state.isUserSigned]);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!isUserSigned && user) {
      useUserSignInStore.getState().setUserSigned(true);
    }
    if (!user) {
      useUserSignInStore.getState().setUserSigned(false);
    }
  }, [isUserSigned]);

  return (
    <div className="w-full py-4 max-w-[600px] flex flex-col justify-start h-full rounded-[8px] max-allowed-width:border max-allowed-width:border-border">
      {loading ? (
        <div className=" flex flex-col justify-center items-center h-full">
          <LoaderCircle size={48} className="animate-spin text-gray-600 my-auto" />
        </div>
      ) : (
        <>
          <TransitionGroup className="h-full flex flex-col">
            <CSSTransition key={location.key} timeout={300} classNames="fade">
              <Routes location={location}>
                <Route path="/register" element={<Register />} />
                <Route path="/">
                  <Route index element={<Leaderboards />} />
                  <Route
                    path="/top-traders"
                    element={<TradersList isTopLevelComponent={true} maxCount={MAX_LIST_COUNT} />}
                  />
                  <Route
                    path="/top-positions"
                    element={<PositionsList isTopLevelComponent={true} maxCount={MAX_LIST_COUNT} />}
                  />
                </Route>
                <Route path="/help" element={<Help />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="select-asset">
                    <Route index element={<SelectAsset />} />
                    <Route path=":assetName" element={<PlaceVirtualOrder />} />
                  </Route>
                  <Route path="/position/:id" element={<Position />} />
                  <Route path="settings">
                    <Route index element={<Settings />} />
                    <Route path="edit-profile" element={<EditProfile />} />
                    <Route path="privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="integration" element={<ChannelIntegration />} />
                  </Route>
                  <Route path="/portfolio/:id" element={<Portfolio />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
          {!hideNavBar && <HorizontalMenu isUserRegistered={isUserSigned} />}
        </>
      )}
    </div>
  );
}

export default App;
