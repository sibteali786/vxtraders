import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TopResults } from "../topResults";

type ProfileHeaderProps = {
  isFirstComponentOnPage?: boolean;
};

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ isFirstComponentOnPage }) => {
  return (
    <div className="flex justify-between items-center py-3 px-default">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src="/avatar.png" alt="John Smith" />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-white">John Smith</p>
          <p className="text-sm text-muted-foreground">@johns</p>
        </div>
      </div>
      {isFirstComponentOnPage && <TopResults label="Top" value="1%" />}
    </div>
  );
};
