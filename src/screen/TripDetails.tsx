import { Ionicons } from "@expo/vector-icons";
import {
  Button,
  ButtonIcon,
  ButtonText,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import withLayout from "../provider/withLayout";
import { AppRoutesParamList } from "../routes/AppRoutes";
import { fastMemo } from "../utils";

const TripDetails = () => {
  const { navigate, goBack } =
    useNavigation<NavigationProp<AppRoutesParamList>>();

  const handleNavigate = () => {
    navigate("tripdeplan");
  };

  return (
    <>
      <HStack position="relative">
        <Image
          w="$full"
          h="$64"
          opacity={0.8}
          source={require("../assets/Kyoto-full.jpg")}
        />
        <Button
          onPressIn={goBack}
          position="absolute"
          borderRadius="$full"
          mt="$6"
          ml="$6"
        >
          <ButtonIcon
            color="$white"
            fontWeight="$bold"
            as={Ionicons}
            // @ts-ignore
            name="arrow-back"
          />
        </Button>
      </HStack>

      <HStack m={"$8"}>
        <VStack>
          <Text fontWeight="$bold" fontSize="$2xl">
            About Kyoto
          </Text>

          <Text fontSize="$md" mt="$1">
            Kyoto is a mesmerizing city that seamlessly blends ancient
            traditions with modernity. This enchanting destination offers a
            glimpse into Japan's rich history and culture. From the serene
            temples, like Kinkaku-ji and Fushimi Inari Shrine, to the
            picturesque Arashiyama Bamboo Grove, every corner of Kyoto is a
            visual treat. The delicate flavors of traditional kaiseki cuisine
            and the vibrant energy of Gion's geisha district create a memorable
            culinary experience.
          </Text>
        </VStack>
      </HStack>
      <HStack mx={"$8"}>
        <VStack>
          <Text fontWeight="$bold" fontSize="$2xl">
            Pricing
          </Text>
        </VStack>
      </HStack>
      <HStack mx="$10" mt="$4" mb="$0" alignItems="center">
        <VStack alignItems="center">
          <Icon
            // @ts-ignore
            name="airplane"
            as={Ionicons}
            mr="$3"
            size="xl"
          />
        </VStack>
        <VStack>
          <Text>Flights</Text>
          <Text> ₹ 25890</Text>
        </VStack>
      </HStack>
      <HStack mx="$10" mt="$4" mb="$0" alignItems="center">
        <VStack alignItems="center">
          <Icon
            // @ts-ignore
            name="home"
            as={Ionicons}
            mr="$3"
            size="xl"
          />
        </VStack>
        <VStack>
          <Text>Hotel</Text>
          <Text> ₹ 4800</Text>
        </VStack>
      </HStack>
      <HStack mx="$10" mt="$4" mb="$0" alignItems="center">
        <VStack alignItems="center">
          <Icon
            // @ts-ignore
            name="fast-food"
            as={Ionicons}
            mr="$3"
            size="xl"
          />
        </VStack>
        <VStack>
          <Text>Food</Text>
          <Text> ₹ 980</Text>
        </VStack>
      </HStack>
      <Button onPressIn={handleNavigate} mx="$8" mt="$4" borderRadius="$full">
        <ButtonText>Plan trip</ButtonText>
      </Button>
    </>
  );
};

export default withLayout(fastMemo(TripDetails));
