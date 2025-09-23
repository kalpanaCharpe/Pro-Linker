const { default: axios } = require("axios");

export const BASE_URL =  "https://pro-linker.onrender.com";

  export const clientServer = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});