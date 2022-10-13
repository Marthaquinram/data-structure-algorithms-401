import { Movie } from "./movie";

export function sortYear(movies: Movie[]): Movie[] {
  return movies.sort((a, b) =>
    a.year > b.year ? 1 : b.year > a.year ? -1 : 0
  );
  //1988 > 1984?
}

export function sortTitle(movies: Movie[]): Movie[] {
  let regex: RegExp = /^The\s+/;
  return movies.sort((a: Movie, b: Movie): number =>
    a.title.replace(regex, "").localeCompare(b.title.replace(regex, ""))
  );
}

export function inGenre(movies: Movie[], genre: string): Movie[] {
  return movies.filter((m: Movie) => m.genres.includes(genre));
}
