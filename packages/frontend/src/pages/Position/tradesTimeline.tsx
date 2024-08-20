import { PreviewSkeleton } from "@/components/common/previewSkeleton";
import { Card } from "@/components/ui/card";

const tradesHistory = [
  {
    type: "Opened",
    date: "7 days ago",
    amount: "$56,234",
    leverage: "10x",
  },
  {
    type: "Closed",
    date: "3 days ago",
    amount: "$23,252",
    percentage: -10,
  },
  {
    type: "Closed",
    date: "June 02, 2024",
    amount: "$23,252",
    percentage: +50,
  },
  {
    type: "Closed",
    date: "June 02, 2024",
    amount: "$23,252",
    percentage: +50,
  },
];

type TimelineProps = {
  isLoading: boolean;
  classes?: string;
};

export function TradesTimeline({ isLoading, classes }: TimelineProps) {
  return (
    <div className={`${classes} relative pr-default`}>
      {/* Timeline line */}
      <div className="absolute left-5 top-[40px] bottom-[35px] w-0.5 bg-muted opacity-50" />

      <div className="space-y-6 pl-12">
        {tradesHistory.map((trade, index) => (
          <div key={index} className="relative flex items-center">
            {/* Circle Indicator */}
            <div
              className="absolute left-[-33px] w-3 h-3 rounded-full bg-[#4f4f4f]"
              style={{ top: "45%" }}
            />

            {isLoading ? (
              <PreviewSkeleton haveAvatar={false} classes="w-full" />
            ) : (
              <Card className="px-2 mobile-medium:px-3 py-3 rounded-lg flex-1 bg-black">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-[1px]">
                    <p className="text-sm mobile-medium:text-base font-semibold">{trade.type}</p>
                    <p className="text-xs mobile-medium:text-sm text-gray-400">{trade.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm mobile-medium:text-base font-semibold">{trade.amount}</p>
                    {trade.leverage ? (
                      <p className="text-xs mobile-medium:text-sm text-gray-400">
                        {trade.leverage}
                      </p>
                    ) : (
                      <p
                        className={`text-xs mobile-medium:text-sm ${
                          trade?.percentage && trade.percentage > 0
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {trade.percentage}%
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
