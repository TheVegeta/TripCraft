import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { NavigationContainer } from "@react-navigation/native";
import React, { FC, ReactNode } from "react";
import { useAppStore } from "../store";
import { fastMemo } from "../utils";
import { API_URL } from "../utils/constant";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {
      if (message === "AUTH_ERROR") {
      } else {
      }
    });
  }

  if (networkError) {
  }
});

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const {
    user: { jwt },
  } = useAppStore();

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([errorLink, new HttpLink({ uri: API_URL + "/graphql" })]),
    headers: {
      authorization: jwt || "",
    },
    defaultOptions: {
      query: { fetchPolicy: "no-cache" },
      mutate: { fetchPolicy: "no-cache" },
      watchQuery: { fetchPolicy: "no-cache" },
    },
    ssrMode: true,
  });

  return (
    <ApolloProvider client={client}>
      <GluestackUIProvider config={config}>
        <NavigationContainer>{children}</NavigationContainer>
      </GluestackUIProvider>
    </ApolloProvider>
  );
};

export default fastMemo(AppProvider);
