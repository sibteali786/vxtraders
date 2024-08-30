import { TooltipInfo } from "@/components/common/infoTooltip";
import { formatCurrency } from "@/utils/utils";

export type LabelValueRowProps = {
  label: string;
  value: string | number;
  tooltipContent: string;
};

export const LabelValueRow: React.FC<LabelValueRowProps> = ({ label, value, tooltipContent }) => {
  let displayValue = value;
  if (typeof value === "number") {
    if (value === 0) {
      displayValue = value;
    } else {
      displayValue = formatCurrency(value);
    }
  }
  return (
    <div className="flex justify-between">
      <div className="font-medium flex items-center gap-1">
        {label} <TooltipInfo content={tooltipContent} />{" "}
      </div>
      <p className="text-sm">{displayValue}</p>
    </div>
  );
};
