import axios from "axios";

const appUrl = "http://localhost:8080";

const axiosInstance = axios.create({
  baseURL: appUrl,
});

export { axiosInstance };
