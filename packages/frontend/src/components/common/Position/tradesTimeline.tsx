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

export function TradesTimeline() {
  return (
    <div className="relative pr-default">
      {/* Timeline line */}
      <div className="absolute left-5 top-[50px] bottom-[30px] w-0.5 bg-muted opacity-50" />

      <div className="space-y-6 pl-12">
        {/* First event */}
        {tradesHistory
          ? tradesHistory.map((trade, index) => (
              <div className="relative" key={index}>
                {/* Circle Indicator */}
                <div className="absolute left-[-33px] top-[40px] w-3 h-3 rounded-full bg-[#4f4f4f]" />

                <Card className="px-4 py-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-[1px]">
                      <p className="text-base font-semibold">{trade.type}</p>
                      <p className="text-sm text-gray-400">{trade.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-base font-semibold">{trade.amount}</p>
                      {trade.leverage ? (
                        <p className="text-sm text-gray-400">{trade.leverage}</p>
                      ) : (
                        <p
                          className={`text-sm ${trade?.percentage && trade.percentage > 0 ? `text-green-500` : "text-red-500"}`}
                        >
                          {trade.percentage}%
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
