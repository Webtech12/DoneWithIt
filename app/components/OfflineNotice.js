import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

import colors from "../config/colors";
import AppText from "./Apptext";

const OfflineNotice = () => {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    position: "absolute",
    justifyContent: "center",
    width: "100%",
    top: Constants.statusBarHeight,
    zIndex: 1,
    elevation: 1,
  },
  text: {
    color: colors.white,
    left: "25%",
  },
});

export default OfflineNotice;
