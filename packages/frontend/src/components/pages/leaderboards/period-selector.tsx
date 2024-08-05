import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PeriodState, usePeriodStore } from "@/stores/useState";

export function PeriodSelector() {
  const setPeriod = usePeriodStore((state: PeriodState) => state.setPeriod);
  return (
    <Select onValueChange={(value: PeriodState["selectedPeriod"]) => setPeriod(value)}>
      <SelectTrigger id="timeframe" className="w-24">
        <SelectValue placeholder="24h" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="24h">24h</SelectItem>
        <SelectItem value="7d">7d</SelectItem>
        <SelectItem value="30d">30d</SelectItem>
        <SelectItem value="90d">90d</SelectItem>
      </SelectContent>
    </Select>
  );
}
