import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8 h-full">
      <div className="max-w-md text-center ">
        <img
          className="mx-auto text-muted-foreground mb-2"
          src="/NotFound.png"
        />
        <h1 className="text-xl font-bold tracking-tight text-foreground sm:text-4xl ">
          Page Not Found
        </h1>
        <p className="mt-2 text-muted-foreground text-sm">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-4">
          <Button asChild>
            <Link to="/">View Leaderboards</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
