import React from "react";
import { Text, View } from "react-native";
import withLayout from "../provider/withLayout";
import { fastMemo } from "../utils";

const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default withLayout(fastMemo(Profile));
