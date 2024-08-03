import { ChartContainer } from "./ui/chart"
import { LineChart, CartesianGrid, XAxis, Line } from "recharts"

export function PortfolioChart() {
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
  }
  const chartData = [
    { month: "January", desktop: 15 },
    { month: "February", desktop: 30 },
    { month: "March", desktop: 20 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 60 },
    { month: "June", desktop: 100 },
  ]
  return (
    <ChartContainer config={chartConfig}>
    <LineChart accessibilityLayer data={chartData} margin={{ left: 12, right: 12 }}>
      <CartesianGrid vertical={false} />
      <XAxis
        dataKey="month"
        tickLine={false}
        axisLine={false}
        tickMargin={8}
        tickFormatter={(value) => value.slice(0, 3)}
      />
      <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
    </LineChart>
  </ChartContainer>
  )
}