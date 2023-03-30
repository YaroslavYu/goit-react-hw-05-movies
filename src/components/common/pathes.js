export const pathTo = {
  HOME: '/',
  MOVIES: 'movies',
  MOVIE_ID: 'movies/:movieId',
  MOVIE_ID_CAST: 'cast',
  MOVIE_ID_REVIEWS: 'reviews',
};

// r = / header
//   r=index trending home
//   r = movies search
//     r= /:id
//       r = /cast
// r = revies

//  MOVIE_ID: 'movies/:movieId',
//   MOVIE_ID_CAST: 'movies/:movieId/cast',
//   MOVIE_ID_REVIEWS: 'movies/:movieId/reviews',
