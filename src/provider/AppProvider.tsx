import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { NavigationContainer } from "@react-navigation/native";
import React, { FC, ReactNode } from "react";
import { fastMemo } from "../utils";

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>{children}</NavigationContainer>
    </GluestackUIProvider>
  );
};

export default fastMemo(AppProvider);
