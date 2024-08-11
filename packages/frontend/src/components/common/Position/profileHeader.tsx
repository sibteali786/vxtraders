import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ProfileHeader() {
  return (
    <div className="flex justify-between items-center py-3 px-default">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" alt="John Smith" />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-white">John Smith</p>
          <p className="text-sm text-muted-foreground">@johns</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-purple-500 text-sm font-semibold">#45</p>
        <p className="text-xs text-muted-foreground">Rank</p>
      </div>
    </div>
  );
}
