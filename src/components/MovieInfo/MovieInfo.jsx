export const MovieInfo = ({ movie }) => {
  const { title, overview, vote_average, genres, poster_path } = movie;
  console.log('movie', movie);
  // console.log();
  const genresString = genres.map(({ name }) => name).join(', ');
  const poster = `https://image.tmdb.org/t/p/original/${poster_path}`;
  const userScore = `${Math.round(vote_average * 10)}%`;

  return (
    <div>
      <img src={poster} alt={title} width={'300px'} />
      <div>
        <h2>{title}</h2>
        <p>User score: {userScore}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genresString} </p>
      </div>
    </div>
  );
};
