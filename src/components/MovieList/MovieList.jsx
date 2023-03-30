import { Link } from 'react-router-dom';
import { pathTo } from 'components/common/pathes';

export const MovieList = ({ movies, isFromHome }) => {
  function getPath(movieId) {
    const path = isFromHome ? `${pathTo.MOVIES}/${movieId}` : `${movieId}`;
    // console.log(path);
    return path;
  }
  getPath();
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={getPath(id)}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};
