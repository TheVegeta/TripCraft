import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IAppState {
  isAuth: boolean;
  user: {
    _id: string;
    email: string;
    name: string;
    picture: string;
    jwt: string;
  };
  setAuth: (arg0: {
    _id: string;
    email: string;
    name: string;
    picture: string;
    jwt: string;
  }) => void;
  removeAuth: () => void;
}

const useAppStore = create<IAppState>()(
  persist(
    (set) => ({
      isAuth: false,
      user: {
        _id: "",
        email: "",
        jwt: "",
        name: "",
        picture: "",
      },
      setAuth: (arg0) => set((state) => ({ isAuth: true, user: arg0 })),
      removeAuth: () =>
        set((state) => ({
          isAuth: false,
          user: { _id: "", email: "", jwt: "", name: "", picture: "" },
        })),
    }),
    {
      name: "TripCraft",
      storage: createJSONStorage(() => AsyncStorage),
      version: 0.1,
    }
  )
);

export { useAppStore };
