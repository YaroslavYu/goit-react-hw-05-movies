import { getTrendingMovies } from 'components/common/API';
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { pathTo } from 'components/common/pathes';
// import { getSearchMovie } from 'components/common/API';
import { MovieList } from 'components/MovieList/MovieList';

export const Home = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [isLoadind, setIsLoading] = useState(false);

  //     console.log(getTrendingMovies());

  useEffect(() => {
    async function trendingMovies() {
      try {
        setIsLoading(true);
        setError(null);
        const fethedMovies = await getTrendingMovies();
        setMovies(fethedMovies);
      } catch (err) {
        const errText = err.response.data.status_message;
        setError(errText);
        // console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    trendingMovies();

    // getSearchMovie('batman');
  }, []);

  return (
    <section>
      <h2>Trending today</h2>
      {isLoadind && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {movies && <MovieList movies={movies} isFromHome={true} />}
    </section>
  );
};
