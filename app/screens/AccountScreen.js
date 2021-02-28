import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Icon from "../components/Icon";
import ListItem from "../components/lists/ListItem";
import ListItemSeperator from "../components/lists/ListItemSeperator";
import Screen from "../components/Screen";
import colors from "../config/colors";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

const AccountScreen = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="title"
          subTitle="subtitle"
          image={require("../../assets/couch.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListItemSeperator}
        />
      </View>
      <ListItem
        title="Logout"
        IconComponent={<Icon name="logout" backgroundColor="#000" />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.grey,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
