import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "../ui/card";
import { TraderSummary } from "@vxtraders/shared";

export function TraderPreview(props: { trader: TraderSummary }) {
  return (
    <Card className="flex items-center px-6	py-3">
      <Avatar className="mr-4">
        <AvatarImage src="/avatar.png" alt="Maxine Shu" />
        <AvatarFallback>MS</AvatarFallback>
      </Avatar>
      <div className="flex-1 flex flex-col gap-1">
        <p className="font-semibold text-base leading-[14px]">{props.trader.displayName}</p>
        <p className="text-sm text-muted-foreground leading-[14px]">{props.trader.username}</p>
      </div>
      <div className="flex items-center">
        <p className="font-semibold text-base text-success mr-2">+{props.trader.roi}%</p>
      </div>
    </Card>
  );
}
