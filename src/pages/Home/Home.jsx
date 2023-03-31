import { useState, useEffect } from 'react';

import { getTrendingMovies } from 'common/API';

import { MovieList } from 'components/MovieList/MovieList';
import { StyledTitle, Message } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [isLoadind, setIsLoading] = useState(false);

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
      } finally {
        setIsLoading(false);
      }
    }
    trendingMovies();
  }, []);

  return (
    <section>
      <StyledTitle>Trending today</StyledTitle>
      {isLoadind && <Message>Loading...</Message>}
      {error && <Message>{error}</Message>}
      {movies && <MovieList movies={movies} isFromHome={true} />}
    </section>
  );
};

export default Home;
