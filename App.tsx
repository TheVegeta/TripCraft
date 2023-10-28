import { StatusBar } from "expo-status-bar";
import { Suspense, lazy } from "react";
import AppLoading from "./src/component/AppLoading";
import { fastMemo } from "./src/utils";

const AppProvider = lazy(() => import("./src/provider/AppProvider"));
const AppRoutes = lazy(() => import("./src/routes/AppRoutes"));

const App = () => {
  return (
    <>
      <StatusBar style="dark" />
      <Suspense fallback={<AppLoading />}>
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </Suspense>
    </>
  );
};

export default fastMemo(App);
