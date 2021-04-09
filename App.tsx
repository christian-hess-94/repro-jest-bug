import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Card from "./src/components/card";

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  // const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Text>OIE</Text>
      <Card></Card>
    </NavigationContainer>
  );
};

export default App;
