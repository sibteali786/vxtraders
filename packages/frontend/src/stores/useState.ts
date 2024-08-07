import { create } from "zustand";

export type PeriodState = {
  selectedPeriod: "24h" | "7d" | "30d" | "90d";
  setPeriod: (selectedPeriod: PeriodState["selectedPeriod"]) => void;
};

export const useTopTradersPeriodStore = create<PeriodState>((set) => ({
  selectedPeriod: "24h",
  setPeriod: (selectedPeriod) => set(() => ({ selectedPeriod })),
}));

export const useTopPositionsPeriodStore = create<PeriodState>((set) => ({
  selectedPeriod: "24h",
  setPeriod: (selectedPeriod) => set(() => ({ selectedPeriod })),
}));

// Globals

type GlobalState = {
  maxListCount: number;
};

export const useGlobalValues = create<GlobalState>(() => ({
  maxListCount: 50,
}));
