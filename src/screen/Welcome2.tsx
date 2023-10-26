// import { Image } from "@gluestack-ui/themed";
// import { Image } from "@gluestack-ui/themed";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import StarterPage from "../component/StarterPage";
import withLayout from "../provider/withLayout";
import { AppRoutesParamList } from "../routes/AppRoutes";
import { fastMemo } from "../utils";

const Welcome2 = () => {
  const { navigate } = useNavigation<NavigationProp<AppRoutesParamList>>();

  const handleRedirect = () => {
    // navigate("welcome1");
  };

  return (
    <StarterPage
      source={require("../assets/beach.png")}
      title="High-end leisure projects to choose from"
      subHeading="The world's first-class modern leisure and entertainment method"
      btnHandler={handleRedirect}
    />
  );
};

export default withLayout(fastMemo(Welcome2));
