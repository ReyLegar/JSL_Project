'use strict'

let numberOfFilms; 

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
} //enter ONLY nums

//start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        let filmName = prompt('Один из последних просмотренных фильмов?', '');
        let filmMark = prompt('На сколько оцените его?', '');
    
        if(filmName == '' || filmMark == '' || filmName.length > 50){
            i -= 1;
            continue;
        }
    
        personalMovieDB.movies[filmName] = filmMark;
    
    }
}

//rememberMyFilms();

function detectPersonalLevel(){
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
}

//detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

//showMyDB(personalMovieDB.privat);

function writeYourGengers(){
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
    }
}

writeYourGengers();

console.log(personalMovieDB);
