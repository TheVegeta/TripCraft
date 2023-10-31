import {
  Box,
  Divider,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import React, { FC } from "react";
import { ImageSourcePropType } from "react-native";
import withLayout from "../provider/withLayout";
import { fastMemo } from "../utils";

const RenderCard: FC<{
  source: ImageSourcePropType;
  title: string;
  description: string;
  price: string;
}> = fastMemo(({ source, title, description, price }) => {
  return (
    <HStack
      bg="$white"
      w="100%"
      borderColor="$borderLight200"
      borderRadius="$lg"
      borderWidth="$1"
      mt="$4"
      overflow="hidden"
      sx={{
        "@base": {
          mr: "$3",
        },
        _dark: {
          bg: "$backgroundDark900",
          borderColor: "$borderDark800",
        },
      }}
    >
      <Box w="40%">
        <Image h={150} w="100%" source={source} />
      </Box>
      <VStack w="60%" px="$6" pt="$4" pb="$6">
        <Heading w="100%" size="sm">
          {title}
        </Heading>
        <Text size="sm" flexWrap="wrap" flex={1}>
          {description}
        </Text>
        <Divider my="$2" />
        <Text size="sm">₹ {price}</Text>
      </VStack>
    </HStack>
  );
});

const Trip = () => {
  return (
    <>
      <HStack m={"$8"}>
        <VStack>
          <Text fontWeight="$bold" fontSize="$2xl">
            Trip
          </Text>
        </VStack>
      </HStack>

      <VStack mx={"$8"}>
        <RenderCard
          title="Kyoto"
          description="Kyoto is a mesmerizing city that seamlessly..."
          source={require("../assets/Kyoto.jpg")}
          price="125000"
        />

        <RenderCard
          title="Mumbai"
          description="Mumbai, the bustling city that never sleeps."
          source={require("../assets/marine-drive.jpg")}
          price="6580"
        />
      </VStack>
    </>
  );
};

export default withLayout(fastMemo(Trip));
