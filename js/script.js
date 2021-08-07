'use strict'

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for(let i = 0; i < 2; i++){
    let filmName = prompt('Один из последних просмотренных фильмов?', '');
    let filmMark = prompt('На сколько оцените его?', '');

    if(filmName == '' || filmMark == '' || filmName.length > 50){
        i -= 1;
        continue;
    }

    personalMovieDB.movies[filmName] = filmMark;

}

if(personalMovieDB.count < 10){
    alert('Вы посмотрели довольно мало фильмов');
}
else if(personalMovieDB > 10 && personalMovieDB < 30){
    alert('Вы классический зритель');
}
else if(personalMovieDB.count > 30){
    alert('Вы киноман!');
}
else {
    alert('Произошла ошибка!');
}

console.log(personalMovieDB);
