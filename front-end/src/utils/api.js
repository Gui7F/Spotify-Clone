import axios from "axios";
import "dotenv/config"

const {API_PREFIX} = process.env
const URL = API_PREFIX === "development" ?  "http://localhost:3001/api" : "/api";

export const getArtists = async () => {
  const response = await axios.get(`${URL}/artists`);

  console.log('Get request to "artists"');

  if (response.status === 200) {
    return response.data;
  }
};

export const getSongs = async () => {
  const response = await axios.get(`${URL}/songs`);

  console.log('Get request to "songs"');

  if (response.status === 200) {
    return response.data;
  }
};
