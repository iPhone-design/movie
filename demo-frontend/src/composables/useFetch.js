import axios from "axios";

const axiosInstance = axios.create({
  // TODO 서버 URL
  baseURL: "http://localhost:8080",
});

export async function useFetch(url, method, payload, headers = {}) {
  try {
    const options = {
      url,
      method,
      headers,
    };

    if (method === "get" && payload) options.params = payload;
    if (method !== "get" && payload) options.data = payload;

    return await axiosInstance(options);
  } catch (e) {
    throw new Error(e);
  }
}
