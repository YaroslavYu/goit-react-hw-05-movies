import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits, getRightImg } from 'common/API';
import { List, Message } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);

  const [isLoadind, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        setIsLoading(true);
        setError(null);
        setIsEmpty(false);

        const fethedMovieCast = await getMovieCredits(movieId);

        if (fethedMovieCast.length) {
          setCast(fethedMovieCast);
        } else setIsEmpty(true);
      } catch (err) {
        const errText = err.response.data.status_message;
        setError(errText);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieCast();
  }, [movieId]);

  return (
    <>
      {error && <Message>{error}</Message>}
      {isLoadind && <Message>Loading...</Message>}
      {isEmpty && <Message>No cast info</Message>}
      {!isEmpty && cast && (
        <List>
          {cast.map(({ name, profile_path, id }) => (
            <li key={id}>
              <img src={getRightImg(profile_path)} alt={name} width="150px" />
              <p>{name}</p>
            </li>
          ))}
        </List>
      )}
    </>
  );
};

export default Cast;
