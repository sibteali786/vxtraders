import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function PageNotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <img
          className="mx-auto h-[270px] w-[237px] text-muted-foreground"
          src="/404 not found.png"
        />
        <h1 className="mt-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-muted-foreground">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Button asChild>
            <Link to="/">View Leaderboards</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
