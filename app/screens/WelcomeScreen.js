import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import AppButton from "../components/AppButton";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={require("../../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/logo-red.png")}
        />
        <Text style={styles.slogan}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          title="register"
          onPress={() => navigation.navigate(routes.REGISTER)}
          color="secondary"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
  },
  slogan: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 120,
  },
});

export default WelcomeScreen;
