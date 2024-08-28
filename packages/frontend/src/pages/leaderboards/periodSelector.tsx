import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PeriodState } from "@/stores/useState";

export type PeriodProps = {
  period: PeriodState["selectedPeriod"];
  setPeriod: PeriodState["setPeriod"];
};

export function PeriodSelector({ period, setPeriod }: PeriodProps) {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 250); // Adjust the timeout delay as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Select
      onValueChange={(value: PeriodState["selectedPeriod"]) => setPeriod(value)}
      value={period}
      disabled={isScrolling} // Disable select while scrolling
    >
      <SelectTrigger
        id="timeframe"
        className="w-[fit-content] gap-2 px-2 py-1.5 h-[fit-content] bg-black pointer-events-auto"
      >
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
