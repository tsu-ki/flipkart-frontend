const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Pressable, TouchableOpacity } from 'react-native';

import { useFonts } from "expo-font";
import Intro from "./screens/Intro";
import ItemDetails from "./screens/ItemDetails";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import ItemsDark from "./screens/ItemsDark";
import Items from "./screens/Items";
import IntroDark from "./screens/IntroDark";
import ItemDetailsDark from "./screens/ItemDetailsDark";
import SplashDark from "./screens/SplashDark";
import CartDark from "./screens/CartDark";
import HomeDark from "./screens/HomeDark";
import LoginDark from "./screens/LoginDark";
import Login from "./screens/Login";
import Splash from "./screens/Splash";
import GroceryDetails from './screens/GroceryDetails';

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "DMSans-Medium": require("./assets/fonts/DMSans-Medium.ttf"),
    "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Intro"
              component={Intro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ItemDetails"
              component={ItemDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroceryDetails"
              component={GroceryDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cart"
              component={Cart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ItemsDark"
              component={ItemsDark}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Items"
              component={Items}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IntroDark"
              component={IntroDark}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ItemDetailsDark"
              component={ItemDetailsDark}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashDark"
              component={SplashDark}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CartDark"
              component={CartDark}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeDark"
              component={HomeDark}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginDark"
              component={LoginDark}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
