
const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt('How much films have you watched?', '')
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
      console.log('error')
      personalMovieDB.count = +prompt('How much films have you watched?', '')
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i +=1){
      const a = prompt('One of the latest films seen?').trim()
      const b = prompt('Give your feedback')
      if (a !=null && b != null && a !== '' && b !== '' && a.length < 50){
        personalMovieDB.movies[a] = b
        console.log('done')
      } else {
        console.log('error')
        i-=1
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log('Low level')}
    else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
      console.log('Medium level')
    } else if (personalMovieDB.count >= 30){
      console.log('High level')
    } else console.log('Error')
  },
  showMyDB: function (hidden){
    if (!hidden){
      console.log(personalMovieDB)
    }
  },
  writeYourGenres: function (){
    let i = 0
    for (i; i <=2; i +=1){
      personalMovieDB.genres[i] = prompt(`Your favourite genre ${i + 1}`)
      if (personalMovieDB.genres[i] === null ||  personalMovieDB.genres[i] === ''){
        i -=1;
      }
    }
    personalMovieDB.genres.forEach((value, index) => {
      console.log(`Favourite genre #${index + 1} is ${value}`)
    })
  },
  toggleVisibleDB: function () {
    personalMovieDB.privat = !personalMovieDB.privat
    personalMovieDB.showMyDB(personalMovieDB.privat)
  },
}

console.log(personalMovieDB)
