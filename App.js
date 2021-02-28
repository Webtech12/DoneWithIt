import React from "react";
import { Button, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./app/components/Screen";
import AuthNavigation from "./app/navigation/AuthNavigation";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="CLick"
      onPress={() => navigation.navigate("TweetsDetail", { title: "ansn" })}
    />
  );
};

const Tweets = () => {
  return (
    <Screen>
      <Text>Tweets</Text>
      <Link />
    </Screen>
  );
};

const TweetsDetail = () => {
  return (
    <Screen>
      <Text>TweetsDetail</Text>
    </Screen>
  );
};
const Account = () => {
  return (
    <Screen>
      <Text>Account</Text>
    </Screen>
  );
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      name="TweetsDetail"
      component={TweetsDetail}
      options={({ route }) => ({ title: route.params.title })}
    />
  </Stack.Navigator>
);
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="Tweets"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
