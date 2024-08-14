import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { PositionSummary } from "@vxtraders/shared";
import { Card } from "../ui/card";
import { formatCurrency } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Badge } from "./badge";

export function PositionPreview(props: { position: PositionSummary }) {
  return (
    <Link to="/position">
      <Card className="flex justify-between items-center py-3 rounded-lg space-x-4 px-2 mobile-medium:px-6">
        <div className="flex items-center rounded-lg space-x-4">
          <Avatar className="w-10 h-10 mobile-medium:w-9 mobile-medium:h-9">
            <AvatarImage src="/avatar.png" alt="User Avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex flex-col space-y-1">
            <div className="flex items-center gap-1">
              <span className="text-white font-medium text-sm mobile-medium:text-base">
                {props.position.asset.name}
              </span>
              <BitcoinIcon className="w-4 h-4 mobile-medium:w-5 mobile-medium:h-5 text-yellow-500" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-muted-foreground text-xs mobile-medium:text-sm">
                {props.position.leverage}x
              </span>
              <Badge>{props.position.tradeMode}</Badge>
            </div>
          </div>
        </div>
        <div className="ml-auto text-right">
          <div className="text-white text-[10px] mobile-small:text-[11px] mobile-medium:text-sm">
            {formatCurrency(props.position.entryPrice)} → {formatCurrency(props.position.exitPrice)}
          </div>
          <p
            className={`text-xs mobile-medium:text-sm ${props.position.roi >= 0 ? "text-green-500" : "text-red-500"}`}
          >
            {props.position.roi >= 0 ? `+${props.position.roi}` : props.position.roi}%
          </p>
        </div>
      </Card>
    </Link>
  );
}

export function BitcoinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
    </svg>
  );
}
