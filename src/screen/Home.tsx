import { Ionicons } from "@expo/vector-icons";
import {
  Avatar,
  AvatarImage,
  Box,
  Button,
  ButtonIcon,
  Divider,
  HStack,
  Heading,
  Image,
  Input,
  InputField,
  InputIcon,
  Pressable,
  ScrollView,
  Text,
  VStack,
  View,
} from "@gluestack-ui/themed";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { ImageSourcePropType } from "react-native";
import withLayout from "../provider/withLayout";
import { AppRoutesParamList } from "../routes/AppRoutes";
import { fastMemo } from "../utils";

const CardBlock: FC<{
  source: ImageSourcePropType;
  heading: string;
  description: string;
}> = fastMemo(({ source, heading, description }) => {
  return (
    <Box
      bg="$white"
      maxWidth="$64"
      borderColor="$borderLight200"
      borderRadius="$lg"
      borderWidth="$1"
      my="$4"
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
      <Box>
        <Image
          h={150}
          w="$64"
          // source={require("../assets/bandra-worli-sea.jpg")}
          source={source}
        />
      </Box>
      <VStack px="$6" pt="$4" pb="$6">
        <Heading size="sm">{heading}</Heading>
        <Text fontSize="$sm" lineHeight="$xs">
          {description}
        </Text>
      </VStack>
    </Box>
  );
});

const RenderCard: FC<{
  source: ImageSourcePropType;
  title: string;
  description: string;
  price: string;
}> = fastMemo(({ source, title, description, price }) => {
  const { navigate } = useNavigation<NavigationProp<AppRoutesParamList>>();

  const handleNavigate = () => {
    navigate("tripdetails");
  };

  return (
    <Pressable onPressIn={handleNavigate}>
      <HStack flex={1}>
        <VStack flex={1}>
          <HStack
            bg="$white"
            flex={1}
            borderColor="$borderLight200"
            borderRadius="$lg"
            borderWidth="$1"
            mt="$4"
            overflow="hidden"
            sx={{
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
        </VStack>
      </HStack>
    </Pressable>
  );
});

const Home = () => {
  return (
    <>
      <HStack justifyContent="space-between" alignItems="center" margin={"$8"}>
        <VStack>
          <Text fontSize="$lg" color="$warmGray500" mb="$1">
            Good morning
          </Text>
          <Text fontWeight="$bold" fontSize="$2xl" color="$warmGray900">
            Hello, Haru Nonaka
          </Text>
        </VStack>
        <VStack>
          <Avatar bgColor="$amber600" size="md" borderRadius="$full">
            <AvatarImage source={require("../assets/haru_nonaka.jpg")} />
          </Avatar>
        </VStack>
      </HStack>

      <HStack mx={"$8"} justifyContent="space-between">
        <Box w={"80%"}>
          <Input
            variant="outline"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            alignItems="center"
            borderRadius="$full"
          >
            <InputIcon
              as={Ionicons}
              // @ts-ignore
              name="search"
              ml={"$3"}
            />
            <InputField placeholder="Search..." />
          </Input>
        </Box>
        <VStack>
          <Button borderRadius="$full">
            <ButtonIcon
              as={Ionicons}
              // @ts-ignore
              name="filter"
            />
          </Button>
        </VStack>
      </HStack>

      <VStack mx={"$8"} mt={"$8"}>
        <HStack>
          <Heading>Popular locations</Heading>
        </HStack>
        <HStack
          as={ScrollView}
          // @ts-ignore
          horizontal={true}
          // @ts-ignore
          showsVerticalScrollIndicator={false}
          // @ts-ignore
          showsHorizontalScrollIndicator={false}
        >
          <CardBlock
            source={require("../assets/bandra-worli-sea.jpg")}
            heading="Bandra-Worli Sea Link"
            description="It has taken around 10 years to get constructed, now stands tall symbolizing the strength of the city and the country."
          />
          <CardBlock
            source={require("../assets/marine-drive.jpg")}
            heading="Marine Drive"
            description="A sweeping, seemingly endless seafront, that curves around Mumbai edging the Arabian Sea."
          />
        </HStack>
      </VStack>

      <VStack mx={"$8"}>
        <HStack>
          <Heading>Guides</Heading>
        </HStack>

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

      <View mb="$20"></View>
    </>
  );
};

export default withLayout(fastMemo(Home));
