import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";

const listings = [
  {
    title: "jacket",
    subTitle: "$100",
    image: require("../../assets/jacket.jpg"),
  },
  {
    title: "couch",
    subTitle: "$20",
    image: require("../../assets/couch.jpg"),
  },
];

const ListingsScreen = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.title.toString()}
        renderItem={({ item }) => (
          <Card
            {...item}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.grey,
  },
});

export default ListingsScreen;
