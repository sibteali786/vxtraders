import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { trpc } from "@/trpc";
import { PreviewSkeleton } from "./preview-skeleton";

export function Leaderboard() {
  const userQuery = trpc.leaderboard.useQuery();

  if (userQuery.isLoading) {
    return (
      <div className="w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-semibold">Leaderboard</div>
        </div>
        <div className="grid gap-2">
          {Array.from({length: 5}).map((_, index) => (
            <PreviewSkeleton key={index} />
          ))}
        </div>
      </div>
    )
  }
  
  return (
    <div className="w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">Leaderboard</div>
        <a href="#" className="text-sm font-medium text-muted-foreground">
          View All
        </a>
      </div>
      <div className="grid gap-2">
        {
          userQuery.data?.map((user) => (
            <div className="flex items-center gap-4 p-4 rounded-lg bg-background" key={user.username}>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-medium">
                  { user.rank }
                </div>
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-1 flex flex-col items-start">
                <div className="font-medium">{ user.displayName }</div>
                <div className="text-sm text-muted-foreground">{ user.username }</div>
              </div>
              <div className="font-medium">+{ user.roi }%</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
