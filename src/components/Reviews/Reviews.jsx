import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'common/API';
import { List, Item, Message } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
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
        const fethedMovieReviews = await getMovieReviews(movieId);
        if (fethedMovieReviews.length) {
          setReviews(fethedMovieReviews);
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
      {isEmpty && <Message>Don't have reviews</Message>}
      {!isEmpty && reviews && (
        <List>
          {reviews.map(({ author, content, id }) => (
            <Item key={id}>
              <p>
                Author: <b>{author}</b>
              </p>
              <p>{content}</p>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};

export default Reviews;
