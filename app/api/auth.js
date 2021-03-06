import client from "./client";

const endpoint = "/auth";
const endpointUsers = "/users";

const login = (email, password) => client.post(endpoint, { email, password });
const register = (email, password, name) =>
  client.post(endpointUsers, { email, password, name });

export default {
  login,
  register,
};
