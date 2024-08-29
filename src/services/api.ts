import { SearchResultApi } from "./../Types/types";
import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

const access_Key = "ScfplWxLcrPS66HToZiMkPYZLwv5n-aJr6U4al7WQZQ";

export const fetchImage = async (
  query: string,
  page: number = 1,
  perPage: number = 10
): Promise<SearchResultApi> => {
  try {
    const response = await axios.get<SearchResultApi>("search/photos", {
      params: {
        query,
        page,
        per_page: perPage,
        client_id: access_Key,
      },
    });
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
