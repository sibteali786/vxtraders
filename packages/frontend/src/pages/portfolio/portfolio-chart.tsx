import { ChartContainer } from "@/components/ui/chart";
import { XAxis, AreaChart, Area } from "recharts";

export function PortfolioChart() {
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
  );
}
