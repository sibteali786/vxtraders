import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card } from "./ui/card"
import { ArrowUpIcon } from "lucide-react";
import { TraderSummary } from "@vxtraders/shared";

export function TraderPreview(props: { trader: TraderSummary }) {
  return (
    <Card className="flex items-center p-3">
      <Avatar className="mr-4">
        <AvatarImage src="/placeholder-user.jpg" alt="Maxine Shu" />
        <AvatarFallback>MS</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <p className="font-semibold">{props.trader.displayName}</p>
        <p className="text-sm text-muted-foreground">{props.trader.username}</p>
      </div>
      <div className="flex items-center">
        <p className="font-semibold mr-2">+{props.trader.roi}%</p>
        <ArrowUpIcon className="text-green-500 w-4 h-4" />
      </div>
    </Card>
  );
}
