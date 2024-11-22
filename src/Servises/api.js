// services/api.js

import axios from "axios";

const BASE_URL = "http://gateway.marvel.com/v1/public/characters";
const API_KEY = "06ead66137452ef75685fcdc895a6c0b";
const HASH = "2774d42849c52a2ec23f9b2298e41e7a";
const TS = "1";

 
export const getCharactersByName = async (name) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        nameStartsWith: name,
        ts: TS,
        apikey: API_KEY,
        hash: HASH,
      },
    });
    return response.data.data.results;
  } catch (error) {
    console.error("Error fetching Marvel characters:", error);
    throw error;
  }
};

 
export const getCharacterById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`, {
      params: {
        ts: TS,
        apikey: API_KEY,
        hash: HASH,
      },
    });
    return response.data.data.results[0];  
  } catch (error) {
    console.error("Error fetching Marvel character details:", error);
    throw error;
  }
};
