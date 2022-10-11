import { Movie } from "./movie";

export function sortYear(movies: Movie[]): Movie[] {
  return movies.sort((a, b) =>
    a.year > b.year ? 1 : b.year > a.year ? -1 : 0
  );
  //1988 > 1984?
}

export function sortTitle(movies: Movie[]): Movie[] {
  const results = movies
    .map((a) => [a.title.replace(/^The\s+/, ""), a])
    .sort((a, b) => a.title.localeCompare(b.title));

  return results;
}

export function inGenre(movies: Movie[], genre: string): Movie[] {}
