import { getRightImg } from 'common/API';
import { StyledContainer } from './MovieBaseInfo.styled';

export const MovieBaseInfo = ({ movie }) => {
  const { title, overview, vote_average, genres, poster_path, release_date } =
    movie;
  const genresString = genres.length
    ? genres.map(({ name }) => name).join(', ')
    : 'Sorry, we dont have info about genres';

  const userScore = `${Math.round(vote_average * 10)}%`;
  const overviesString = overview ? overview : "Don't have overview";
  const releaseYear = release_date ? `(${Number.parseInt(release_date)})` : '';

  return (
    <StyledContainer>
      <img src={getRightImg(poster_path)} alt={title} width={'300px'} />
      <div>
        <h2>
          {title} {releaseYear}
        </h2>
        <p>User score: {userScore}</p>
        <h3>Overview</h3>
        <p>{overviesString}</p>
        <h3>Genres</h3>
        <p>{genresString} </p>
      </div>
    </StyledContainer>
  );
};
