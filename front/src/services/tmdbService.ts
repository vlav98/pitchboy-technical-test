import axios from "axios";
import config from "../config";

const tmdbService = axios.create({
  baseURL: config.apiUrl,
  params: {
    api_key: config.apiKey,
  },
});

export default tmdbService;
