'use strict'

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const firstFilmName = prompt('Один из последних просмотренных фильмов?', ''),
firstFilmMark = prompt('На сколько оцените его?', ''),
secondFilmName = prompt('Одни из последних просмотренных фильмов?', ''),
secondFilmMark = prompt('На сколько оцените его?', '');

personalMovieDB.movies[firstFilmName] = firstFilmMark;
personalMovieDB.movies[secondFilmName] = secondFilmMark;

console.log(personalMovieDB);





