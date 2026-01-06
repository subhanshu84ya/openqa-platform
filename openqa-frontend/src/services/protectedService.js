import API from "./api";

export const getProtectedData = () => {
  return API.get("/auth/test");
};
