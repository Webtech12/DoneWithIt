import React from "react";
import { Image, View, StyleSheet } from "react-native";

import Apptext from "../components/Apptext";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

const ListingDetailsScreen = ({ title, price }) => {
  return (
    <View>
      <Image style={styles.image} source={require("../../assets/jacket.jpg")} />
      <View style={styles.detailContainer}>
        <Apptext style={styles.title}>{title}</Apptext>
        <Apptext style={styles.price}>{price}</Apptext>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../../assets/couch.jpg")}
            title="a"
            subTitle="vdfd"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
