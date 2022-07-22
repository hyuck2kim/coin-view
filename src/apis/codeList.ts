import axiosInstance from "./index";

export const getAllCode = () =>
  axiosInstance.get("/market/all");
