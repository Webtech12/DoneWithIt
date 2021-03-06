import React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "react-native-expo-image-cache";

import Apptext from "../components/Apptext";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";

const ListingDetailsScreen = ({ route }) => {
  let { title, subTitle, url } = route.params;

  return (
    <View>
      <Image style={styles.image} uri={url} />
      <View style={styles.detailsContainer}>
        <Apptext style={styles.title}>{title}</Apptext>
        <Apptext style={styles.price}>{subTitle}</Apptext>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../../assets/couch.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
