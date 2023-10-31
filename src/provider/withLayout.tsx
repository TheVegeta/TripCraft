import { ScrollView } from "@gluestack-ui/themed";
import React, { FC } from "react";
import { StatusBar } from "react-native";

const withLayout = (Component: FC) => (props: any) => {
  return (
    <ScrollView
      flex={1}
      paddingTop={StatusBar.currentHeight}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      mb="$20"
    >
      <Component {...props} />
    </ScrollView>
  );
};

export default withLayout;
