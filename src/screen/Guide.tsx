import React from "react";
import { Text, View } from "react-native";
import withLayout from "../provider/withLayout";
import { fastMemo } from "../utils";

const Guide = () => {
  return (
    <View>
      <Text>Guide</Text>
    </View>
  );
};

export default withLayout(fastMemo(Guide));
