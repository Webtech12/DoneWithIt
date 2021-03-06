import React, { useState, useContext } from "react";
import { Image, StyleSheet } from "react-native";
import * as yup from "yup";

import Screen from "../components/Screen";
import {
  AppErrorMessages,
  AppForm,
  AppFormField,
  AppSubmitButton,
} from "../components/forms";
import auth from "../api/auth";
import useAuth from "../auth/useAuth";

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const { handleLogin } = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await auth.login(email, password);
    if (!result.ok) return setLoginFailed(true);

    setLoginFailed(false);
    handleLogin(result.data);
  };

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/logo-red.png")}
      />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppErrorMessages error="Invalid credentials" visible={loginFailed} />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <AppSubmitButton title="login" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
