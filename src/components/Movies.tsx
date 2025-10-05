import MovieCard from "./MovieCard";

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

interface MoviesProps {
  movies: Movie[];
}

export default function Movies({ movies }: MoviesProps) {
  return (
    <div className="GridContainer">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          imdbID={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          poster={movie.Poster}
        />
      ))}
    </div>
  );
}
