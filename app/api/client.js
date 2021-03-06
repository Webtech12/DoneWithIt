import { create } from "apisauce";

import cache from "../utils/cache";

// define the api
const api = create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const get = api.get;
api.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default api;
