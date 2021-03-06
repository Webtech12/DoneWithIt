import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppText from "../components/Apptext";
import AppButton from "../components/AppButton";

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
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <>
          <AppText>Couldn't retrieve the listings</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data}
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
