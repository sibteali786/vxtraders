import { formatCurrency } from "@/lib/utils";

export type LabelValueRowProps = {
  label: string;
  value: string | number;
};

export const LabelValueRow: React.FC<LabelValueRowProps> = ({ label, value }) => {
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
      <span className="font-medium">{label} </span>
      <p className="text-sm">{displayValue}</p>
    </div>
  );
};
