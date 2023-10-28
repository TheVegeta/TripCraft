import React from "react";
import { Text, View } from "react-native";
import withLayout from "../provider/withLayout";
import { fastMemo } from "../utils";

const Trip = () => {
  return (
    <View>
      <Text>Trip</Text>
    </View>
  );
};

export default withLayout(fastMemo(Trip));
