import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Listing" component={ListingsScreen} />
      <Stack.Screen name="ListingDetail" component={ListingDetailsScreen} />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
