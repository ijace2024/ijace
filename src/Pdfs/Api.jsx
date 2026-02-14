import axios from "axios";

const Api = axios.create({
  baseURL: "https://api.ijmsabc.org/api/ijmsabc", // ✅ Ensure it matches the Spring Boot backend
  headers: {
    "Content-Type": "application/json",
  },
});

export default Api;