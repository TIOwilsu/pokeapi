import axios from "axios";
import { api } from "@/variables";

const http = axios.create({
  baseURL: api.baseURL,
  headers: {
    "Content-Type": "aplication/json",
    "Access-Control-Allow-Origin": "*"
  }
});

export default http;
