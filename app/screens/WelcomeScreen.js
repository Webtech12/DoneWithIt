import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/background.jpg")}
    >
      <Image
        style={styles.logo}
        source={require("../../assets/logo-red.png")}
      />
      <Text style={styles.slogan}>Sell what you don't need</Text>
      <View style={styles.loginButton}></View>
      <View style={styles.signUpButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: "10%",
    backgroundColor: "red",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 70,
  },
  slogan: {
    position: "absolute",
    top: 175,
  },
  signUpButton: {
    width: "100%",
    height: "10%",
    backgroundColor: "yellow",
  },
});

export default WelcomeScreen;
