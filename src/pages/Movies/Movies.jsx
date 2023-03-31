import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { MovieList } from 'components/MovieList/MovieList';
import { getSearchMovie } from 'common/API';

import { StyledInput, Message, StyledButton } from './Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [isLoadind, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentQuery = searchParams.get('query');

    async function searchMovie(searchValue) {
      try {
        setIsLoading(true);
        setIsEmpty(false);
        setError(null);

        const fethedMovies = await getSearchMovie(searchValue);
        if (fethedMovies.length) {
          setMovies(fethedMovies);
        } else setIsEmpty(true);
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
      searchMovie(query);
    }
  }, [query, searchParams]);

  const onSubmit = e => {
    e.preventDefault();
    const value = e.target.search.value;

    setSearchParams({ query: value });
    setQuery(value);
    setInputValue('');
    setError(null);
  };

  const onChange = e => {
    const value = e.target.value;
    setInputValue(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <StyledInput name="search" value={inputValue} onChange={onChange} />
      <StyledButton type="submit">Search</StyledButton>
      {error && <Message>{error}</Message>}
      {isEmpty && <Message>found nothing</Message>}

      {isLoadind && <Message>Loading...</Message>}
      {!isEmpty && movies && <MovieList movies={movies} isFromHome={false} />}
    </form>
  );
};

export default Movies;
