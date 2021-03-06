import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import colors from "../config/colors";

const ActivityIndicator = ({ visible = false, color = colors.grey }) => {
  if (!visible) return null;

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
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
    height: "100%",
  },
});

export default ActivityIndicator;
