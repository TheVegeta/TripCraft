import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { fastMemo } from "../utils";

SplashScreen.preventAutoHideAsync();

const AppLoading = () => {
  useEffect(() => {
    return () => {
      SplashScreen.hideAsync();
    };
  }, []);

  return <></>;
};

export default fastMemo(AppLoading);
