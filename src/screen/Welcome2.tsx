import React from "react";
import StarterPage from "../component/StarterPage";
import withLayout from "../provider/withLayout";
import { useAppStore } from "../store";
import { fastMemo } from "../utils";

const Welcome2 = () => {
  const { toggleAuth } = useAppStore();

  const handleRedirect = () => {
    toggleAuth();
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
