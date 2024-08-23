import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { trpc } from "@/trpc";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { TopResults } from "@/components/common/topResults";
import { Error } from "@/components/common/Error/Error";
import { Link } from "react-router-dom";
import { BaseCard } from "@/components/common/baseCard";

type ProfileHeaderProps = {
  isFirstComponentOnPage?: boolean;
  userId?: string;
};

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ isFirstComponentOnPage, userId }) => {
  const { isLoading, isError, data } = trpc.getUserById.useQuery({
    id: userId || "1",
  });
  if (isLoading) {
    return (
      <Card className="flex items-center justify-between space-x-4 p-3 mx-[16px]">
        <div className=" flex flex-row flex-1 gap-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-3 w-[80px]" />
            <Skeleton className="h-3 w-[50px]" />
          </div>
        </div>
        <div className="space-y-2 flex flex-col item-end">
          <Skeleton className="h-3 w-[50px]" />
          <Skeleton className="h-5 w-[40px]" />
        </div>
      </Card>
    );
  }
  if (isError) {
    return <Error
	title="Oops, something went wrong"
	buttonText="Refresh"
	onClick={() => window.location.reload()}
  >
	{"Seems like there was an issue. Please refresh the page to resume!"}
  </Error>;
  }
  if (!data?.user) return null;
  return (
    <Link to={`/portfolio/${userId}`}>
      <BaseCard
        className={`flex justify-between items-center py-3 px-default  ${!isFirstComponentOnPage ? "border-[1px] rounded-lg shadow-sm mx-[16px]" : "border-[0px]"}`}
      >
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={data.user.avatar} alt={data.user.displayName} />
            <AvatarFallback>{data.user.displayName.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-white">{data.user.displayName}</p>
            <p className="text-sm text-muted-foreground">{data.user.username}</p>
          </div>
        </div>
        <TopResults label="TOP" value="1%" />
      </BaseCard>
    </Link>
  );
};
