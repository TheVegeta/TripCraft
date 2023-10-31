import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import React from "react";
import TripDetails from "../screen/TripDetails";
import TripPlan from "../screen/TripPlan";
import Welcome from "../screen/Welcome";
import Welcome1 from "../screen/Welcome1";
import Welcome2 from "../screen/Welcome2";
import { useAppStore } from "../store";
import { animationDuration } from "../utils";
import { AppBottomTab } from "./AppBottomTab";

export type AppRoutesParamList = {
  welcome: undefined;
  welcome1: undefined;
  welcome2: undefined;
  bottomTab: undefined;
  tripdetails: undefined;
  tripdeplan: undefined;
};

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: "slide_from_right",
  animationDuration: animationDuration,
};

const Stack = createNativeStackNavigator<AppRoutesParamList>();

const AppRoutes = () => {
  const { isAuth } = useAppStore();

  return (
    <Stack.Navigator initialRouteName="welcome" screenOptions={screenOptions}>
      {isAuth === true ? (
        <>
          <Stack.Screen name="bottomTab" component={AppBottomTab} />
          <Stack.Screen name="tripdetails" component={TripDetails} />
          <Stack.Screen name="tripdeplan" component={TripPlan} />
        </>
      ) : (
        <>
          <Stack.Screen name="welcome" component={Welcome} />
          <Stack.Screen name="welcome1" component={Welcome1} />
          <Stack.Screen name="welcome2" component={Welcome2} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppRoutes;
