import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import React from "react";
import Welcome from "../screen/Welcome";
import Welcome1 from "../screen/Welcome1";
import Welcome2 from "../screen/Welcome2";
import { animationDuration } from "../utils";

export type AppRoutesParamList = {
  welcome: undefined;
  welcome1: undefined;
  welcome2: undefined;
};

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: "slide_from_right",
  animationDuration: animationDuration,
};

const Stack = createNativeStackNavigator<AppRoutesParamList>();

const AppRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="welcome" screenOptions={screenOptions}>
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="welcome1" component={Welcome1} />
      <Stack.Screen name="welcome2" component={Welcome2} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
