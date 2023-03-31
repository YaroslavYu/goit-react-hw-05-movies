import { Outlet, Link, useLocation, useParams } from 'react-router-dom';

import { useState, useEffect, useRef, Suspense } from 'react';

import { getMovieDetails } from 'common/API';
import { pathTo } from 'common/pathes';

import { MovieBaseInfo } from 'components/MovieBaseInfo/MovieBaseInfo';
import {
  Message,
  NavLinkContainer,
  NavLinkTitle,
  NavLinkList,
  NavLinkListItem,
  StyledNavLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoadind, setIsLoading] = useState(false);
  const { movieId } = useParams();

  const refPreviousAddress = useRef(useLocation());
  const toBack = refPreviousAddress.current.state?.from || pathTo.HOME;

  useEffect(() => {
    async function fetchMovie() {
      try {
        setIsLoading(true);
        setError(null);
        const fethedMovie = await getMovieDetails(movieId);

        setMovie(fethedMovie);
      } catch (err) {
        const errText = err.response.data.status_message;
        setError(errText);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, [movieId]);

  return (
    <>
      <Link to={toBack}>Go back</Link>
      {movie && <MovieBaseInfo movie={movie} />}
      {error && <Message>{error}</Message>}
      {isLoadind && <Message>Loading...</Message>}
      <NavLinkContainer>
        <NavLinkTitle>Addictional information</NavLinkTitle>
        <NavLinkList>
          <NavLinkListItem>
            <StyledNavLink to={pathTo.MOVIE_ID_CAST}>Cast</StyledNavLink>
          </NavLinkListItem>
          <NavLinkListItem>
            <StyledNavLink to={pathTo.MOVIE_ID_REVIEWS}>Reviews</StyledNavLink>
          </NavLinkListItem>
        </NavLinkList>
      </NavLinkContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
