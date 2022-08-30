import axios from "axios";
import { interceptors } from "./interceptors";

const createdAxios = axios.create({
  baseURL: "https://hive-test2.azurewebsites.net/",
});

const api = interceptors(createdAxios);

export default api;
