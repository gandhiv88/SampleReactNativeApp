import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./components/LoginScreen";
import HomePage from "./components/HomePage";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Login" component = {LoginScreen} />
        <Stack.Screen name = "Home" component = {HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;