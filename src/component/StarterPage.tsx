// import { Image } from "@gluestack-ui/themed";
import {
  Button,
  ButtonIcon,
  ChevronRightIcon,
  Image,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import React, { FC } from "react";
import { ImageSourcePropType } from "react-native";
import { fastMemo, windowHeight, windowWidth } from "../utils";

const Welcome: FC<{
  source: ImageSourcePropType;
  title: string;
  subHeading: string;
  btnHandler: VoidFunction;
}> = ({ source, title, subHeading, btnHandler }) => {
  return (
    <VStack
      h={windowHeight}
      w={windowWidth}
      flex={1}
      alignItems="center"
      justifyContent="center"
      mt="$10"
    >
      <Image size="2xl" source={source} alt={title} />
      <Text
        color="$warmGray900"
        mt="$5"
        w="80%"
        textAlign="center"
        size="xl"
        bold
      >
        {title}
      </Text>
      <Text color="$warmGray400" w="80%" textAlign="center" size="lg">
        {subHeading}
      </Text>
      <Button onPressIn={btnHandler} borderRadius="$full" size="xl" mt="$3">
        <ButtonIcon as={ChevronRightIcon} />
      </Button>
    </VStack>
  );
};

export default fastMemo(Welcome);
