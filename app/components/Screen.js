import React from "react";
import {
  SafeAreaView,
  Platform,
  StyleSheet,
  StatusBar,
  View,
} from "react-native";

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={Platform.OS === "ios" ? style : null}>{children}</View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});

export default Screen;
