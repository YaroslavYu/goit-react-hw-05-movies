import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { MovieList } from 'components/MovieList/MovieList';
import { useEffect } from 'react';
import { getSearchMovie } from 'components/common/API';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const [isLoadind, setIsLoading] = useState(false);

  useEffect(() => {
    const currentQuery = searchParams.get('query');

    async function searchMovie(searchValue) {
      try {
        setIsLoading(true);
        const fethedMovies = await getSearchMovie(searchValue);
        setMovies(fethedMovies);
      } catch (err) {
        const errText = err.response.data.status_message;
        setError(errText);
      } finally {
        setIsLoading(false);
      }
    }

    if (currentQuery) {
      searchMovie(currentQuery);
    }
    if (query) {
      console.log(query);
      searchMovie(query);
    }
  }, [query, searchParams]);

  const onSubmit = e => {
    e.preventDefault();
    const value = e.target.search.value;
    console.log(value);

    setSearchParams({ query: value });
    setQuery(value);
    setInputValue('');
    setError(null);

    // submitForm(e.target.value)
  };

  const onChange = e => {
    const value = e.target.value;
    setInputValue(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input name="search" value={inputValue} onChange={onChange} />
      <button type="submit">Search</button>
      {error && <div>{error}</div>}
      {isLoadind && <div>Loading...</div>}
      {movies && <MovieList movies={movies} isFromHome={false} />}
    </form>
  );
};
