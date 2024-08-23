import { useUserSignInStore } from "@/stores/useState";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
  const [isUserSigned] = useUserSignInStore((state) => [state.isUserSigned]);

  if (!isUserSigned) {
    // Redirect to the leaderboards if not authenticated
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
