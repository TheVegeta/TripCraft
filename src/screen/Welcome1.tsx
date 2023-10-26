// import { Image } from "@gluestack-ui/themed";
// import { Image } from "@gluestack-ui/themed";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import StarterPage from "../component/StarterPage";
import withLayout from "../provider/withLayout";
import { AppRoutesParamList } from "../routes/AppRoutes";
import { fastMemo } from "../utils";

const Welcome1 = () => {
  const { navigate } = useNavigation<NavigationProp<AppRoutesParamList>>();

  const handleRedirect = () => {
    navigate("welcome2");
  };

  return (
    <StarterPage
      source={require("../assets/girl-chilling.png")}
      title="Customize your High-end travel"
      subHeading="Countless high-end entertainment facilities"
      btnHandler={handleRedirect}
    />
  );
};

export default withLayout(fastMemo(Welcome1));
