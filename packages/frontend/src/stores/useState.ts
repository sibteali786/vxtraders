import { create } from "zustand";

export type PeriodState = {
  selectedPeriod: "24h" | "7d" | "30d" | "90d";
  setPeriod: (selectedPeriod: PeriodState["selectedPeriod"]) => void;
};

export const usePeriodStore = create<PeriodState>((set) => ({
  selectedPeriod: "90d",
  setPeriod: (selectedPeriod) => set(() => ({ selectedPeriod: selectedPeriod })),
}));
