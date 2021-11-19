import axios from "axios";

const BASE_URL = "https://api.rawg.io/api/";
const key = "5e59f9523b404f11a5dd5cc736f182db";

export const getGames = async () => {
  return axios({
    method: "GET",
    url: `${BASE_URL}games?key=${key}&?page=1&?page_size=20`,
    headers: {
      "content-type": "application/json",
    },
  });
};
