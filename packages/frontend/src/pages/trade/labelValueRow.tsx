import { formatCurrency } from "@/lib/utils";

export type LabelValueRowProps = {
  label: string;
  value: string | number;
};

export const LabelValueRow: React.FC<LabelValueRowProps> = ({ label, value }) => {
  return (
    <div className="flex justify-between">
      <span className="font-medium">{label} </span>
      {typeof value === "number" && value === 0 ? (
        <p className="text-sm">{value}</p>
      ) : (
        <p className="text-sm">{formatCurrency(value)}</p>
      )}
    </div>
  );
};
