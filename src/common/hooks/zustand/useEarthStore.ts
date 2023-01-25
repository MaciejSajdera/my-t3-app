import { create } from "zustand";

export interface GlobalStore {
  isThemeToggleChecked: boolean;
  setIsThemeToggleChecked: () => void;
}

export const useGlobalStore = create<GlobalStore>((set) => ({
  isThemeToggleChecked: false,
  setIsThemeToggleChecked: () =>
    set((state) => ({ isThemeToggleChecked: !state.isThemeToggleChecked })),
}));

export default useGlobalStore;
