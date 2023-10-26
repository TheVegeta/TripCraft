import AppProvider from "./src/provider/AppProvider";
import AppRoutes from "./src/routes/AppRoutes";
import { fastMemo } from "./src/utils";

const App = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

export default fastMemo(App);
