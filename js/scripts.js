
const numberOfFilms = +prompt('How much films have you already watched?', '')
const lastSeenFilm = prompt('One of the latest seen films?', '')
const lastFilmRating = +prompt('How would you feedback it?', '')
const lastSeenFilm1 = prompt('One of the latest seen films?', '')
const lastFilmRating1 = +prompt('How would you feedback it?', '')

const personalMovieDB ={
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}
personalMovieDB.movies[lastSeenFilm] = lastFilmRating
personalMovieDB.movies[lastSeenFilm1] = lastFilmRating1
console.log(personalMovieDB)
