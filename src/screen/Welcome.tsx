// import { Image } from "@gluestack-ui/themed";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import StarterPage from "../component/StarterPage";
import withLayout from "../provider/withLayout";
import { AppRoutesParamList } from "../routes/AppRoutes";
import { fastMemo } from "../utils";

const Welcome = () => {
  const { navigate } = useNavigation<NavigationProp<AppRoutesParamList>>();

  const handleRedirect = () => {
    navigate("welcome1");
  };

  return (
    <StarterPage
      source={require("../assets/girl-traveling.png")}
      title="Make your own private travel plan"
      subHeading="Formulate your strategy to receive wonderful gift packs"
      btnHandler={handleRedirect}
    />
  );
};

export default withLayout(fastMemo(Welcome));
