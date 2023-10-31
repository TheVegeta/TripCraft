import { HStack } from "@gluestack-ui/themed";
import React from "react";
import withLayout from "../provider/withLayout";
import { fastMemo } from "../utils";

const Trip = () => {
  return <HStack margin={"$8"}></HStack>;
};

export default withLayout(fastMemo(Trip));
