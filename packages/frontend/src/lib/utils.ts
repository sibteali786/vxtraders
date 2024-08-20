import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number | string | undefined) {
  if (!value) return "$0";
  if (value === 0) return "$0";
  if (typeof value === "string") value = Number(value);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: value < 1000 ? 2 : 0,
    maximumFractionDigits: value < 1000 ? 2 : 0,
  });
  return formatter.format(value);
}
