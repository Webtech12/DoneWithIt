import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppErrorMessages,
  AppForm,
  AppFormField,
  AppSubmitButton,
} from "../components/forms";
import auth from "../api/auth";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
  const registerApi = useApi(auth.register);
  const loginApi = useApi(auth.login);

  const { handleLogin } = useAuth();
  const [registerFailed, setRegisterFailed] = useState();

  const handleSubmit = async ({ email, password, name }) => {
    const result = await registerApi.request(email, password, name);
    if (!result.ok) {
      if (result.data) setRegisterFailed(result.data.error);
      else {
        setRegisterFailed("An unexpected error occurred");
      }
      return;
    }

    const { data } = await loginApi.request(email, password);
    handleLogin(data);
  };

  return (
    <Screen style={styles.container}>
      <ActivityIndicator
        visible={registerApi.loading || loginApi.loading}
        color={colors.white}
      />
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppErrorMessages error={registerFailed} visible={registerFailed} />
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
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
        <AppSubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
