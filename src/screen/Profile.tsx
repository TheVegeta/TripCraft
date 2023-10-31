import { Ionicons } from "@expo/vector-icons";
import {
  Avatar,
  AvatarImage,
  Divider,
  HStack,
  Icon,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import React from "react";
import withLayout from "../provider/withLayout";
import { fastMemo } from "../utils";

const Profile = () => {
  return (
    <>
      <HStack m={"$8"}>
        <VStack>
          <Text fontWeight="$bold" fontSize="$2xl">
            Profile
          </Text>
        </VStack>
      </HStack>

      <HStack
        justifyContent="space-between"
        alignItems="center"
        mx={"$8"}
        mb="$4"
      >
        <VStack mr="$5">
          <Avatar bgColor="$amber600" size="md" borderRadius="$full">
            <AvatarImage source={require("../assets/haru_nonaka.jpg")} />
          </Avatar>
        </VStack>
        <VStack flex={1}>
          <HStack justifyContent="space-between" alignItems="center">
            <VStack>
              <Text fontSize="$lg" mb="$0.5">
                Haru Nonaka
              </Text>
              <Text fontSize="$sm" mb="$0.5">
                Show profile
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </HStack>

      <Divider />

      <HStack alignItems="center" mx={"$8"} mt="$4">
        <Icon
          // @ts-ignore
          name="apps"
          as={Ionicons}
          mr="$3"
        />
        <Text>Personal Info</Text>
      </HStack>
      <HStack alignItems="center" mx={"$8"} my="$4">
        <Icon
          // @ts-ignore
          name="cog"
          as={Ionicons}
          mr="$3"
        />
        <Text>Account</Text>
      </HStack>

      <Divider />

      <HStack alignItems="center" mx={"$8"} mt="$4">
        <Icon
          // @ts-ignore
          name="information-circle"
          as={Ionicons}
          mr="$3"
        />
        <Text>Get Help</Text>
      </HStack>
      <HStack alignItems="center" mx={"$8"} my="$4">
        <Icon
          // @ts-ignore
          name="headset"
          as={Ionicons}
          mr="$3"
        />
        <Text>Contact Support</Text>
      </HStack>

      <Divider />

      <HStack alignItems="center" mx={"$8"} mt="$4">
        <Icon
          // @ts-ignore
          name="log-out"
          as={Ionicons}
          mr="$3"
        />
        <Text>Logout</Text>
      </HStack>
    </>
  );
};

export default withLayout(fastMemo(Profile));
