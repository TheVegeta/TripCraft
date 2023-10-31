import { Ionicons } from "@expo/vector-icons";
import { Button, ButtonIcon, HStack, Image } from "@gluestack-ui/themed";
import React from "react";
import { StyleSheet } from "react-native";
import Timeline from "react-native-timeline-flatlist";
import withLayout from "../provider/withLayout";
import { fastMemo } from "../utils";

const data = [
  {
    time: "12:30",
    title: "Maldives",
    description: "Save the Turtles",
  },
  {
    time: "14:30",
    title: "Golden beach",
    description: "Event 2 Description",
  },
  {
    time: "17:30",
    title: "Coconut grove",
    description: "BBQ party by the sea",
  },
  {
    time: "21:30",
    title: "Maldives Islands",
    description: "Sea blowing",
  },
];

const TripPlan = () => {
  return (
    <>
      <HStack position="relative">
        <Image
          w="$full"
          h="$40"
          opacity={0.8}
          source={require("../assets/Kyoto-full.jpg")}
        />
        <Button position="absolute" borderRadius="$full" mt="$6" ml="$6">
          <ButtonIcon
            color="$white"
            fontWeight="$bold"
            as={Ionicons}
            // @ts-ignore
            name="arrow-back"
          />
        </Button>
      </HStack>

      <HStack m={"$8"}>
        <Timeline data={data} style={styles.list} />
      </HStack>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 65,
    backgroundColor: "white",
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});

export default withLayout(fastMemo(TripPlan));
