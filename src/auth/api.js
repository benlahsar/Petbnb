import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    Accept: "application/jsonn",
    "Content-Type": "application/json",
  },
  withCredentials: true,
  withXSRFToken: true,
  // xsrfCookieName: "XSRF-TOKEN",
  // xsrfHeaderName: "X-XSRF-TOKEN",
});

export const getCSRFToken = async () => {
  await api.get("/sanctum/csrf-cookie");
};

export default api;
