import client from "./client";

const register = (pushToken) => {
  client.post("/expoPushTokens", { expoToken: pushToken });
};

export default {
  register,
};
