import React from "react";
import { Text, View } from "react-native";
import withLayout from "../provider/withLayout";
import { fastMemo } from "../utils";

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default withLayout(fastMemo(Home));
