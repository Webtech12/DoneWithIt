import { create } from "apisauce";

// define the api
const api = create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default api;
