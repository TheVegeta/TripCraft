import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const AppLoading = () => {
  useEffect(() => {
    return () => {
      SplashScreen.hideAsync();
    };
  }, []);

  return <></>;
};

export default AppLoading;
