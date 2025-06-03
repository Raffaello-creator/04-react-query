import axios from "axios";
import { Movie } from "../types/movie";

export interface MoviesResponse {
  page: number;
  total_pages: number;
  results: Movie[];
}

const API_URL = "https://api.themoviedb.org/3/search/movie";
const VITE_TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (
  query: string,
  page: number = 1
): Promise<MoviesResponse> => {
  const config = {
    params: {
      query,
      page,
      language: "en-US",
    },
    headers: {
      Authorization: `Bearer ${VITE_TMDB_TOKEN}`,
    },
  };

  const { data } = await axios.get<MoviesResponse>(API_URL, config);
  return data;
};
