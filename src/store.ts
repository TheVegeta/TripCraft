import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IAppState {
  isAuth: boolean;
  toggleAuth: () => void;
}

const useAppStore = create<IAppState>()(
  persist(
    (set) => ({
      isAuth: false,
      toggleAuth: () => set((state) => ({ isAuth: !state.isAuth })),
    }),
    {
      name: "TripCraft",
      storage: createJSONStorage(() => AsyncStorage),
      version: 0.1,
    }
  )
);

export { useAppStore };
