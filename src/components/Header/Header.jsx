import { Outlet, NavLink } from 'react-router-dom';
import { pathTo } from 'components/common/pathes';
// import {
//   getTrendingMovies,
//   getMovieDetails,
//   getMovieCredits,
// } from 'components/common/API';

export const Header = () => {
  // getTrendingMovies();
  // getMovieDetails(76);
  // getMovieCredits(76);
  return (
    <>
      <header>
        <nav>
          <NavLink to={pathTo.HOME}>home</NavLink>
          <NavLink to={pathTo.MOVIES}>movies</NavLink>
        </nav>
      </header>
      <section>
        <Outlet />
      </section>
    </>
  );
};
