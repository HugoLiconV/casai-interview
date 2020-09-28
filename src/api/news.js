import axios from "axios";
import config from "../config";

export async function fetchTopHeadlines(_,country = "us") {
  const response = await axios.get(`${config.apiUrl}/top-headlines?country=${country}`, {
    headers: {
      Authorization: `Bearer ${config.newsApiKey}`
    }
  });
  return response.data;
}