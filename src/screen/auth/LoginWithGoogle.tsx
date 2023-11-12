import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import queryString from "query-string";
import React from "react";
import { Platform } from "react-native";
import { URL } from "react-native-url-polyfill";
import "react-native-url-polyfill/auto";
import { WebView, WebViewNavigation } from "react-native-webview";
import { z } from "zod";
import { useAuthMobileUserMutation } from "../../generated/graphql";
import withLayout from "../../provider/withLayout";
import { AppRoutesParamList } from "../../routes/AppRoutes";
import { useAppStore } from "../../store";
import { windowHeight, windowWidth } from "../../utils";

const authParser = z.object({
  authJwt: z.string(),
  success: z.string(),
});

const LoginWithGoogle = () => {
  const { params } = useRoute<RouteProp<AppRoutesParamList>>();
  const { navigate } = useNavigation<NavigationProp<AppRoutesParamList>>();

  const { setAuth } = useAppStore();

  const [auth] = useAuthMobileUserMutation();

  const onNavigationStateChange = async (e: WebViewNavigation) => {
    const { search } = new URL(e.url);

    try {
      const response = JSON.parse(JSON.stringify(queryString.parse(search)));

      const { authJwt, success } = authParser.parse(response);

      if (success === "true") {
        const authResponse = await auth({
          variables: { options: { jwt: authJwt } },
        });

        console.log(authResponse.data?.authMobileUser);

        if (authResponse.data?.authMobileUser.success === true) {
          setAuth({
            _id: authResponse.data.authMobileUser.user?._id || "",
            email: authResponse.data.authMobileUser.user?.email || "",
            jwt: authResponse.data.authMobileUser.jwt || "",
            name: authResponse.data.authMobileUser.user?.name || "",
            picture: authResponse.data.authMobileUser.user?.picture || "",
          });

          navigate("bottomTab");
        } else {
        }

        authResponse.data?.authMobileUser.user?.picture;
      }

      if (success === "false") {
        console.log("FALSE");
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <WebView
      incognito={true}
      userAgent={
        Platform.OS === "android"
          ? "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.6045.66 Mobile Safari/537.36"
          : "Mozilla/5.0 (iPhone; CPU iPhone OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/119.0.6045.109 Mobile/15E148 Safari/604.1"
      }
      style={{ height: windowHeight, width: windowWidth }}
      source={{ uri: params?.authUrl || "" }}
      onNavigationStateChange={onNavigationStateChange}
    />
  );
};

export default withLayout(LoginWithGoogle);
