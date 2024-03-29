import * as React from "react";
import { useFonts } from "expo-font";
import ProfileRoutes from "./routes/profileRoutes";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./store";
import AuthRoutes from "./routes/AuthRoutes";
import { useSelector } from "react-redux";

const RootNavigation = () => {
  const Tokens = useSelector((state) => state.auth.logInToken);
  console.log(Tokens);
  return (
    <NavigationContainer>
      {Tokens === null ? <AuthRoutes /> : <ProfileRoutes />}
    </NavigationContainer>
  );
};

export default function App() {
  const [loaded] = useFonts({
    anton: require("./assets/fonts/Anton-Regular.ttf"),
    boorsok: require("./assets/fonts/boorsok.ttf"),
    glacialindi: require("./assets/fonts/GlacialIndifference-Regular.otf"),
    glacialindibold: require("./assets/fonts/GlacialIndifference-Bold.otf"),
    angelina: require("./assets/fonts/angelina.regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
