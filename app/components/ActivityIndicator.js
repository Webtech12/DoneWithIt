import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import colors from "../config/colors";

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../assets/animations/loader.json")}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    height: "100%",
  },
});

export default ActivityIndicator;
