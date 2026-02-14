import axios from "axios";

const Api = axios.create({
  baseURL: "https://api.ijmsabc.org/api/ijmsabc/pdfs",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export default Api;

