import {
  AddIcon,
  Box,
  Divider,
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
import React, { FC } from "react";
import Home from "../screen/Home";

const Tab = createBottomTabNavigator();

const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

const RenderTab: FC<BottomTabBarProps> = () => {
  return (
    <Box bottom={0} position="absolute" width={"100%"}>
      <Divider my="$1" />
      <HStack
        alignContent="center"
        justifyContent="space-between"
        w="100%"
        py="$3"
        px="$6"
      >
        <Pressable>
          <VStack alignItems="center">
            <Icon as={AddIcon} />
            <Text size="xs">Home</Text>
          </VStack>
        </Pressable>
      </HStack>
    </Box>
  );
};

export const AppBottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBar={(props) => <RenderTab {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};
