import { create } from "zustand";

export interface GlobalStore {
  isThemeToggleChecked: boolean;
  setIsThemeToggleChecked: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: () => void;
  navBarHeight: number;
  setNavBarHeight: (height: number) => void;
}

export const useGlobalStore = create<GlobalStore>((set) => ({
  isThemeToggleChecked: false,
  setIsThemeToggleChecked: () =>
    set((state) => ({ isThemeToggleChecked: !state.isThemeToggleChecked })),
  isMenuOpen: false,
  setIsMenuOpen: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  navBarHeight: 80,
  setNavBarHeight: (height: number) => set({ navBarHeight: height }),

}));

export default useGlobalStore;
