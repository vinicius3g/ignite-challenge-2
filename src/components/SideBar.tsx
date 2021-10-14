import { Button } from "./Button";

interface MovieGenre {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface MovieGenreProps {
  genres: MovieGenre[];
  selectedGenreId: number;
  handleClickButton: (genreId: number) => void;
}

export function SideBar({
  genres,
  selectedGenreId,
  handleClickButton,
}: MovieGenreProps) {
  return (
    <>
      <nav className="sidebar">
        <span>
          Watch<p>Me</p>
        </span>

        <div className="buttons-container">
          {genres.map((genre) => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
    </>
  );
}
