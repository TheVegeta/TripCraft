import { Ionicons } from "@expo/vector-icons";
import {
  Box,
  HStack,
  Icon,
  Pressable,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Guide from "../screen/Guide";
import Home from "../screen/Home";
import Profile from "../screen/Profile";
import Trip from "../screen/Trip";
import { fastMemo } from "../utils";

export type BottomTabParamList = {
  Home: undefined;
  Trip: undefined;
  Guide: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

const BottomTabList: FC<{
  iconName: string;
  name: string;
  index: number;
  currActive: number;
  setCurrActive: Dispatch<SetStateAction<number>>;
  navigation: BottomTabBarProps["navigation"];
  state: BottomTabBarProps["state"];
}> = fastMemo(
  ({ iconName, name, state, index, navigation, currActive, setCurrActive }) => {
    const [isActive, setIsActive] = useState(false);

    const handlePress = () => {
      navigation.navigate(state.routeNames[index]);
      setIsActive(index === state.index);
      setCurrActive(index);
    };

    useEffect(() => {
      setIsActive(index === currActive);
    }, [index, currActive]);

    return (
      <Pressable onPressIn={handlePress} flex={1}>
        <VStack alignItems="center" flex={1}>
          <Icon
            as={Ionicons}
            // @ts-ignore
            name={iconName}
            color={isActive ? "$primary500" : undefined}
          />
          <Text size="xs" color={isActive ? "$textLight900" : undefined}>
            {name}
          </Text>
        </VStack>
      </Pressable>
    );
  }
);

const RenderTab: FC<BottomTabBarProps> = fastMemo((props) => {
  const [currActive, setCurrActive] = useState(0);

  return (
    <Box
      bg="#FFF"
      bottom={0}
      position="absolute"
      width={"100%"}
      key={currActive}
      padding="$2"
    >
      <HStack
        alignContent="center"
        justifyContent="space-between"
        w="100%"
        py="$3"
        px="$6"
      >
        <BottomTabList
          index={0}
          currActive={currActive}
          iconName="home"
          name="Home"
          setCurrActive={setCurrActive}
          navigation={props.navigation}
          state={props.state}
        />
        <BottomTabList
          index={1}
          currActive={currActive}
          iconName="train"
          name="Trip"
          setCurrActive={setCurrActive}
          navigation={props.navigation}
          state={props.state}
        />
        <BottomTabList
          index={2}
          currActive={currActive}
          iconName="compass"
          name="Guide"
          setCurrActive={setCurrActive}
          navigation={props.navigation}
          state={props.state}
        />
        <BottomTabList
          index={3}
          currActive={currActive}
          iconName="person"
          name="Profile"
          setCurrActive={setCurrActive}
          navigation={props.navigation}
          state={props.state}
        />
      </HStack>
    </Box>
  );
});

export const AppBottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBar={(props) => <RenderTab {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Trip" component={Trip} />
      <Tab.Screen name="Guide" component={Guide} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
