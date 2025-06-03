import axios from 'axios';
import { Movie } from '../types/movie';

const API_URL = 'https://api.themoviedb.org/3/search/movie';
const VITE_TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;


interface FetchMoviesResponse {
  results: Movie[];
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const config = {
    params: {
      query,
      language: 'en-US',
    },
    headers: {
      Authorization: `Bearer ${VITE_TMDB_TOKEN}`,
    },
  };

  const { data } = await axios.get<FetchMoviesResponse>(API_URL, config);
  // console.log(data.results);
  return data.results;
  
  
};