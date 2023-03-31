import { Link, useLocation } from 'react-router-dom';

import { pathTo } from 'common/pathes';
import { Item } from './MovieList.styled';

export const MovieList = ({ movies, isFromHome }) => {
  const location = useLocation();

  function getPath(movieId) {
    const path = isFromHome ? `${pathTo.MOVIES}/${movieId}` : `${movieId}`;
    return path;
  }
  getPath();
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <Item key={id}>
          <Link to={getPath(id)} state={{ from: location }}>
            {title}
          </Link>
        </Item>
      ))}
    </ul>
  );
};
