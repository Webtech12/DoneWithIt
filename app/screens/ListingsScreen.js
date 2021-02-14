import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

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

const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.title.toString()}
        renderItem={({ item }) => <Card {...item} />}
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
