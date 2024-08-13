import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "../ui/card";
import { TraderSummary } from "@vxtraders/shared";
import { Link } from "react-router-dom";

export function TraderPreview(props: { trader: TraderSummary }) {
  return (
    <Link to={`/portfolio/${props.trader.id}`}>
      <Card className=" flex items-center py-3 px-2 mobile-medium:px-4 bg-black text-white "> 
        <Avatar className="mr-4 w-10 h-10 mobile-medium:w-9 mobile-medium:h-9">
          <AvatarImage src="/avatar.png" alt="Maxine Shu" />
          <AvatarFallback>MS</AvatarFallback>
        </Avatar>
        <div className="flex-1 flex flex-col gap-1">
          <p className="font-semibold text-sm mobile-medium:text-base leading-[14px]">
            {props.trader.displayName}
          </p>
          <p className="text-muted-foreground text-xs mobile-medium:text-sm leading-[14px]">
            {props.trader.username}
          </p>
        </div>
        <div className="flex items-center">
          <p className="font-semibold text-success mr-2 text-sm mobile-medium:text-base">
            +{props.trader.roi}%
          </p>
        </div>
      </Card>
    </Link>
  );
}
