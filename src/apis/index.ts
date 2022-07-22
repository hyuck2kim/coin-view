import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.upbit.com/v1/",
  params: { isDetails: "false" },
  headers: { Accept: "application/json" },
});

export default axiosInstance;
