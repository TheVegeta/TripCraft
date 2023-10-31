import { Ionicons } from "@expo/vector-icons";
import {
  Avatar,
  AvatarImage,
  Box,
  Button,
  ButtonIcon,
  HStack,
  Heading,
  Image,
  Input,
  InputField,
  InputIcon,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import React, { FC } from "react";
import { ImageSourcePropType } from "react-native";
import withLayout from "../provider/withLayout";
import { fastMemo } from "../utils";

const CardBlock: FC<{
  source: ImageSourcePropType;
  heading: string;
  description: string;
}> = ({ source, heading, description }) => {
  return (
    <Box
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
};

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
    </>
  );
};

export default withLayout(fastMemo(Home));
