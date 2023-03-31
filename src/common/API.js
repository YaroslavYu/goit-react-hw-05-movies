import axios from 'axios';
import NoImg from './no_data.jpg';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'e7dc56c25ee332beb552e37e9144086f',
};

export async function getTrendingMovies() {
  const response = await axios.get('/trending/movie/day');
  return response.data.results;
}

export async function getSearchMovie(movieName) {
  const response = await axios.get(`/search/movie`, {
    params: { query: movieName },
  });
  return response.data.results;
}

export async function getMovieDetails(movieId) {
  const response = await axios.get(`/movie/${movieId}`);
  return response.data;
}

export async function getMovieCredits(movieId) {
  const response = await axios.get(`/movie/${movieId}/credits`);
  return response.data.cast;
}

export async function getMovieReviews(movieId) {
  const response = await axios.get(`/movie/${movieId}/reviews`);
  return response.data.results;
}

export function getRightImg(partOfPath) {
  return partOfPath
    ? `https://image.tmdb.org/t/p/original${partOfPath}`
    : NoImg;
}
