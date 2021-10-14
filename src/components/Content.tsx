import { MovieCard } from "./MovieCard";

interface Ratings  {
  Source: string;
  Value: string;
}
interface Movies {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Ratings[]
    Runtime: string;
}

interface MovieGenre {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MovieProps {
  movie: Movies[]
  movieGenre: MovieGenre
}

export function Content({movie, movieGenre}: MovieProps) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {movieGenre.title}</span>
        </span>
      </header>
      <main>
        <div className="movies-list">
          {movie.map((movies) => (
            <MovieCard
              key={movies.imdbID}
              title={movies.Title}
              poster={movies.Poster}
              runtime={movies.Runtime}
              rating={movies.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
