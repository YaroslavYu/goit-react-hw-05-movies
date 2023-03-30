import { Route, Routes } from 'react-router-dom';

import { pathTo } from './common/pathes';

import { Header } from './Header/Header';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path={pathTo.HOME} element={<Header />}>
          <Route index element={<Home />} />
          <Route path={pathTo.MOVIES} element={<Movies />} />

          <Route path={pathTo.MOVIE_ID} element={<MovieDetails />}>
            <Route
              path={pathTo.MOVIE_ID_CAST}
              element={<div>movie id cast</div>}
            />
            <Route
              path={pathTo.MOVIE_ID_REVIEWS}
              element={<div>movie id rewievs</div>}
            />
          </Route>
          <Route path="*" element={<div>not found</div>} />
        </Route>
      </Routes>
    </div>
  );
};

// https://api.themoviedb.org/3/movie/550?api_key=e7dc56c25ee332beb552e37e9144086f
// e7dc56c25ee332beb552e37e9144086f

// style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
