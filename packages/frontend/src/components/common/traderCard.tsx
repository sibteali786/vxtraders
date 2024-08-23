import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { TraderSummary } from "@vxtraders/shared";
import { Link } from "react-router-dom";
import { BaseCard } from "./baseCard";

export function TraderPreview(props: { trader: TraderSummary }) {
  return (
    <Link to={`/portfolio/${props.trader.id}`}>
      <BaseCard variant="default" size="medium">
        <Avatar className="mr-4 w-10 h-10 mobile-medium:w-9 mobile-medium:h-9">
          <AvatarImage src="/avatar.png" alt="Maxine Shu" />
          <AvatarFallback>MS</AvatarFallback>
        </Avatar>
        <div className="flex-1 flex flex-col">
          <p className="font-semibold text-sm mobile-medium:text-base leading-[14px]">
            {props.trader.displayName}
          </p>
          <p className="text-muted-foreground text-xs mobile-medium:text-sm leading-[14px]">
            {props.trader.username}
          </p>
        </div>
        <div className="flex items-center">
          <p
            className={`font-semibold mr-2 text-sm mobile-medium:text-base ${props.trader.roi >= 0 ? "text-success" : "text-destructive"}`}
          >
            {props.trader.roi}%
          </p>
        </div>
      </BaseCard>
    </Link>
  );
}
