import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';

import { pathTo } from '../common/pathes';

import { Header } from './Header/Header';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path={pathTo.HOME} element={<Header />}>
          <Route index element={<Home />} />
          <Route path={pathTo.MOVIES} element={<Movies />} />
          <Route path={pathTo.MOVIE_ID} element={<MovieDetails />}>
            <Route path={pathTo.MOVIE_ID_CAST} element={<Cast />} />
            <Route path={pathTo.MOVIE_ID_REVIEWS} element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to={pathTo.HOME} />} />
        </Route>
      </Routes>
    </div>
  );
};
