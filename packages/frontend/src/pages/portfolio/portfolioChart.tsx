import { ChartSkeleton } from "@/components/common/chartSkeleton";
import { Error } from "@/components/common/error/Error";
import { ChartContainer } from "@/components/ui/chart";
import { XAxis, AreaChart, Area } from "recharts";

type ChartProps = {
  isLoading: boolean;
  isError: boolean;
};

export const PortfolioChart = ({ isLoading, isError }: ChartProps) => {
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
  };

  const chartData = [
    { month: "January", desktop: 15 },
    { month: "February", desktop: 30 },
    { month: "March", desktop: 20 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 60 },
    { month: "June", desktop: 100 },
  ];

  return (
    <div>
      {isLoading ? (
        <ChartSkeleton />
      ) : (
        <div className="relative">
          <div className={`${isError && "blur-lg"}`}>
            <ChartContainer config={chartConfig}>
              <AreaChart
                data={chartData}
                margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
                style={{ filter: "drop-shadow(0px 0px 4px hsl(120, 100%, 50%))" }} // Adds glow effect
              >
                <defs>
                  <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#008000" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="#008000" stopOpacity={0.01} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="desktop"
                  stroke="hsl(120, 100%, 50%)"
                  fillOpacity={1}
                  fill="url(#fillDesktop)"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 5, stroke: "#fff", strokeWidth: 2 }}
                />
                <XAxis
                  dataKey="month" // Change to 'month' to match your data structure
                  tick={false}
                  tickLine={false}
                  axisLine={false}
                />
              </AreaChart>
            </ChartContainer>
            <p className="w-full text-center text-xs text-muted-foreground/80 -mt-5 font-mono tracking-widest">
              +50% ROI in 2 days
            </p>
          </div>
          {isError && (
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <Error
                title="Oops, something went wrong"
                buttonText="Refresh"
                onClick={() => window.location.reload()}
              >
                {"Seems like there was an issue. Please refresh the page to see content!"}
              </Error>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
