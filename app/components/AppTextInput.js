import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyle from "../config/defaultStyle";

const AppTextInput = ({ icon, ...OtherProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          size={25}
          color={defaultStyle.colors.medium}
        />
      )}
      <TextInput style={defaultStyle.text} {...OtherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyle.colors.grey,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
