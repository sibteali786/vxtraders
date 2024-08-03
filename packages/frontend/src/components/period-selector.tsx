import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export function PeriodSelector() {
  return (
    <Select>
      <SelectTrigger id="timeframe" className="w-24">
        <SelectValue placeholder="All" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="All">All</SelectItem>
        <SelectItem value="30d">30d</SelectItem>
        <SelectItem value="60d">60d</SelectItem>
        <SelectItem value="90d">90d</SelectItem>
      </SelectContent>
    </Select>
  );
}
