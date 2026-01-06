import axios from "axios";

const API_URL = "http://openqa-backend.onrender.com/api/auth";

export const login = (username, password) => {
  return axios.post(`${API_URL}/login`, { username, password });
};
