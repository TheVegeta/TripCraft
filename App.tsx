import { StatusBar } from "expo-status-bar";
import AppProvider from "./src/provider/AppProvider";
import AppRoutes from "./src/routes/AppRoutes";
import { fastMemo } from "./src/utils";

const App = () => {
  return (
    <>
      <StatusBar style="dark" />

      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </>
  );
};

export default fastMemo(App);
