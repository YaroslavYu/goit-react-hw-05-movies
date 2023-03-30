import axios from 'axios';

// const AUTH_KEY = 'e7dc56c25ee332beb552e37e9144086f';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'e7dc56c25ee332beb552e37e9144086f',
};
// axios.defaults.headers.common['Authorization'] = AUTH_KEY;

export async function getTrendingMovies() {
  const response = await axios.get('/trending/movie/day');
  //   console.log(data.data);

  return response.data.results;
}

export async function getSearchMovie(movieName) {
  const response = await axios.get(`/search/movie`, {
    params: { query: movieName },
  });
  //   console.log('query', data);
  return response.data.results;
}

export async function getMovieDetails(movieId) {
  const response = await axios.get(`/movie/${movieId}`);
  return response.data;
}

export async function getMovieCredits(movieId) {
  const data = await axios.get(`/movie/${movieId}/credits`);
  return data;
}

export function getMovieReviews(movieId) {
  const data = axios.get(`/movie/${movieId}/reviews`);
  return data;
}

// https://api.themoviedb.org/3/movie/550?api_key=e7dc56c25ee332beb552e37e9144086f
