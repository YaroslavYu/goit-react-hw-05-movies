import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';

import { getMovieDetails } from 'components/common/API';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoadind, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovie() {
      try {
        setIsLoading(true);
        setError(null);
        const fethedMovie = await getMovieDetails(movieId);
        console.log(fethedMovie);

        setMovie(fethedMovie);
      } catch (err) {
        const errText = err.response.data.status_message;
        setError(errText);
        // console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, [movieId]);

  //   const { title, overview, vote_average, genres, poster_path } = movie;
  console.log(error, isLoadind);

  return (
    <>
      <Link>Go back</Link>
      {movie && <MovieInfo movie={movie} />}
      <div>
        <p>Addictionsl information</p>
        <ul>
          <li>
            <Link>Cast</Link>
          </li>
          <li>
            <Link>Reviews</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
