import axios from "axios";

const DeadStockAdmin = axios.create({
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Add an interceptor to dynamically switch base URL
DeadStockAdmin.interceptors.request.use(
  (config) => {
    const { hostname } = window.location; // Destructured here

    if (hostname === "localhost") {
      config.baseURL = "http://localhost:8002/mcvtcapi"; // Local server
    }  else {
      config.baseURL = "https://beta.mcvtc.blackmoon.com.np/mcvtcapi"; // directed to api
    }

    return config;
  },
  (error) => {
    console.error("Request interceptor error:", error); // Log the error
    return Promise.reject(error);
  }
);

export default DeadStockAdmin;
